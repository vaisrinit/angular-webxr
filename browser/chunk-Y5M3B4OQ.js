var qx=Object.defineProperty,Xx=Object.defineProperties;var Yx=Object.getOwnPropertyDescriptors;var Up=Object.getOwnPropertySymbols;var Zx=Object.prototype.hasOwnProperty,Jx=Object.prototype.propertyIsEnumerable;var kp=(n,e,t)=>e in n?qx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,de=(n,e)=>{for(var t in e||={})Zx.call(e,t)&&kp(n,t,e[t]);if(Up)for(var t of Up(e))Jx.call(e,t)&&kp(n,t,e[t]);return n},bt=(n,e)=>Xx(n,Yx(e));var so=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var Bp=null;var Ql=1,Vp=Symbol("SIGNAL");function on(n){let e=Bp;return Bp=n,e}var zp={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Kx(n){if(!(nu(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Ql)){if(!n.producerMustRecompute(n)&&!eu(n)){n.dirty=!1,n.lastCleanEpoch=Ql;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Ql}}function Hp(n){return n&&(n.nextProducerIndex=0),on(n)}function Gp(n,e){if(on(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(nu(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)tu(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function eu(n){_a(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Kx(t),i!==t.version))return!0}return!1}function Wp(n){if(_a(n),nu(n))for(let e=0;e<n.producerNode.length;e++)tu(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function tu(n,e){if(Qx(n),_a(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)tu(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];_a(r),r.producerIndexOfThis[i]=e}}function nu(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function _a(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function Qx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function eM(){throw new Error}var tM=eM;function jp(n){tM=n}function Ne(n){return typeof n=="function"}function Vr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var xa=Vr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function oo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ct=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ne(i))try{i()}catch(s){e=s instanceof xa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{$p(s)}catch(o){e=e??[],o instanceof xa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new xa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)$p(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&oo(t,e)}remove(e){let{_finalizers:t}=this;t&&oo(t,e),e instanceof n&&e._removeParent(this)}};Ct.EMPTY=(()=>{let n=new Ct;return n.closed=!0,n})();var iu=Ct.EMPTY;function Ma(n){return n instanceof Ct||n&&"closed"in n&&Ne(n.remove)&&Ne(n.add)&&Ne(n.unsubscribe)}function $p(n){Ne(n)?n():n.unsubscribe()}var An={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var zr={setTimeout(n,e,...t){let{delegate:i}=zr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=zr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Sa(n){zr.setTimeout(()=>{let{onUnhandledError:e}=An;if(e)e(n);else throw n})}function ao(){}var qp=ru("C",void 0,void 0);function Xp(n){return ru("E",void 0,n)}function Yp(n){return ru("N",n,void 0)}function ru(n,e,t){return{kind:n,value:e,error:t}}var sr=null;function Hr(n){if(An.useDeprecatedSynchronousErrorHandling){let e=!sr;if(e&&(sr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=sr;if(sr=null,t)throw i}}else n()}function Zp(n){An.useDeprecatedSynchronousErrorHandling&&sr&&(sr.errorThrown=!0,sr.error=n)}var or=class extends Ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ma(e)&&e.add(this)):this.destination=rM}static create(e,t,i){return new Gr(e,t,i)}next(e){this.isStopped?ou(Yp(e),this):this._next(e)}error(e){this.isStopped?ou(Xp(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?ou(qp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},nM=Function.prototype.bind;function su(n,e){return nM.call(n,e)}var au=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){wa(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){wa(i)}else wa(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){wa(t)}}},Gr=class extends or{constructor(e,t,i){super();let r;if(Ne(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&An.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&su(e.next,s),error:e.error&&su(e.error,s),complete:e.complete&&su(e.complete,s)}):r=e}this.destination=new au(r)}};function wa(n){An.useDeprecatedSynchronousErrorHandling?Zp(n):Sa(n)}function iM(n){throw n}function ou(n,e){let{onStoppedNotification:t}=An;t&&zr.setTimeout(()=>t(n,e))}var rM={closed:!0,next:ao,error:iM,complete:ao};var Wr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function an(n){return n}function cu(...n){return lu(n)}function lu(n){return n.length===0?an:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var at=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=oM(t)?t:new Gr(t,i,r);return Hr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Jp(i),new i((r,s)=>{let o=new Gr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Wr](){return this}pipe(...t){return lu(t)(this)}toPromise(t){return t=Jp(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Jp(n){var e;return(e=n??An.Promise)!==null&&e!==void 0?e:Promise}function sM(n){return n&&Ne(n.next)&&Ne(n.error)&&Ne(n.complete)}function oM(n){return n&&n instanceof or||sM(n)&&Ma(n)}function uu(n){return Ne(n?.lift)}function Ke(n){return e=>{if(uu(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qe(n,e,t,i,r){return new du(n,e,t,i,r)}var du=class extends or{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function jr(){return Ke((n,e)=>{let t=null;n._refCount++;let i=Qe(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var $r=class extends at{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,uu(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ct;let t=this.getSubject();e.add(this.source.subscribe(Qe(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ct.EMPTY)}return e}refCount(){return jr()(this)}};var Kp=Vr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Qt=(()=>{class n extends at{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ba(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Kp}next(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?iu:(this.currentObservers=null,s.push(t),new Ct(()=>{this.currentObservers=null,oo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new at;return t.source=this,t}}return n.create=(e,t)=>new ba(e,t),n})(),ba=class extends Qt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:iu}};var kt=class extends Qt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var vn=new at(n=>n.complete());function Qp(n){return n&&Ne(n.schedule)}function em(n){return n[n.length-1]}function tm(n){return Ne(em(n))?n.pop():void 0}function Ci(n){return Qp(em(n))?n.pop():void 0}function im(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function nm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ar(n){return this instanceof ar?(this.v=n,this):new ar(n)}function rm(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,_){s.push([h,m,g,_])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof ar?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function sm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof nm=="function"?nm(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ea=n=>n&&typeof n.length=="number"&&typeof n!="function";function Ta(n){return Ne(n?.then)}function Ca(n){return Ne(n[Wr])}function Aa(n){return Symbol.asyncIterator&&Ne(n?.[Symbol.asyncIterator])}function Da(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function aM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ia=aM();function Ra(n){return Ne(n?.[Ia])}function Pa(n){return rm(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ar(t.read());if(r)return yield ar(void 0);yield yield ar(i)}}finally{t.releaseLock()}})}function Na(n){return Ne(n?.getReader)}function Pt(n){if(n instanceof at)return n;if(n!=null){if(Ca(n))return cM(n);if(Ea(n))return lM(n);if(Ta(n))return uM(n);if(Aa(n))return om(n);if(Ra(n))return dM(n);if(Na(n))return hM(n)}throw Da(n)}function cM(n){return new at(e=>{let t=n[Wr]();if(Ne(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lM(n){return new at(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function uM(n){return new at(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Sa)})}function dM(n){return new at(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function om(n){return new at(e=>{fM(n,e).catch(t=>e.error(t))})}function hM(n){return om(Pa(n))}function fM(n,e){var t,i,r,s;return im(this,void 0,void 0,function*(){try{for(t=sm(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function en(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function La(n,e=0){return Ke((t,i)=>{t.subscribe(Qe(i,r=>en(i,n,()=>i.next(r),e),()=>en(i,n,()=>i.complete(),e),r=>en(i,n,()=>i.error(r),e)))})}function Oa(n,e=0){return Ke((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function am(n,e){return Pt(n).pipe(Oa(e),La(e))}function cm(n,e){return Pt(n).pipe(Oa(e),La(e))}function lm(n,e){return new at(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function um(n,e){return new at(t=>{let i;return en(t,e,()=>{i=n[Ia](),en(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ne(i?.return)&&i.return()})}function Fa(n,e){if(!n)throw new Error("Iterable cannot be null");return new at(t=>{en(t,e,()=>{let i=n[Symbol.asyncIterator]();en(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function dm(n,e){return Fa(Pa(n),e)}function hm(n,e){if(n!=null){if(Ca(n))return am(n,e);if(Ea(n))return lm(n,e);if(Ta(n))return cm(n,e);if(Aa(n))return Fa(n,e);if(Ra(n))return um(n,e);if(Na(n))return dm(n,e)}throw Da(n)}function St(n,e){return e?hm(n,e):Pt(n)}function Ce(...n){let e=Ci(n);return St(n,e)}function qr(n,e){let t=Ne(n)?n:()=>n,i=r=>r.error(t());return new at(e?r=>e.schedule(i,0,r):i)}function hu(n){return!!n&&(n instanceof at||Ne(n.lift)&&Ne(n.subscribe))}var ri=Vr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function et(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:pM}=Array;function mM(n,e){return pM(e)?n(...e):n(e)}function fm(n){return et(e=>mM(n,e))}var{isArray:gM}=Array,{getPrototypeOf:vM,prototype:yM,keys:_M}=Object;function pm(n){if(n.length===1){let e=n[0];if(gM(e))return{args:e,keys:null};if(xM(e)){let t=_M(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function xM(n){return n&&typeof n=="object"&&vM(n)===yM}function mm(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function co(...n){let e=Ci(n),t=tm(n),{args:i,keys:r}=pm(n);if(i.length===0)return St([],e);let s=new at(MM(i,e,r?o=>mm(r,o):an));return t?s.pipe(fm(t)):s}function MM(n,e,t=an){return i=>{gm(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)gm(e,()=>{let l=St(n[c],e),u=!1;l.subscribe(Qe(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function gm(n,e,t){n?en(t,n,e):e()}function vm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=_=>l<i?g(_):c.push(_),g=_=>{s&&e.next(_),l++;let p=!1;Pt(t(_,u++)).subscribe(Qe(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?en(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(Qe(e,m,()=>{d=!0,h()})),()=>{a?.()}}function Et(n,e,t=1/0){return Ne(e)?Et((i,r)=>et((s,o)=>e(i,s,r,o))(Pt(n(i,r))),t):(typeof e=="number"&&(t=e),Ke((i,r)=>vm(i,r,n,t)))}function Xr(n=1/0){return Et(an,n)}function ym(){return Xr(1)}function Yr(...n){return ym()(St(n,Ci(n)))}function Ua(n){return new at(e=>{Pt(n()).subscribe(e)})}function yn(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Ai(n){return Ke((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Qe(t,void 0,void 0,o=>{s=Pt(n(o,Ai(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function _m(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Qe(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function cr(n,e){return Ne(e)?Et(n,e,1):Et(n,1)}function Di(n){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function si(n){return n<=0?()=>vn:Ke((e,t)=>{let i=0;e.subscribe(Qe(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function fu(n){return et(()=>n)}function ka(n=SM){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function SM(){return new ri}function lo(n){return Ke((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Gn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?yn((r,s)=>n(r,s,i)):an,si(1),t?Di(e):ka(()=>new ri))}function Zr(n){return n<=0?()=>vn:Ke((e,t)=>{let i=[];e.subscribe(Qe(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function pu(n,e){let t=arguments.length>=2;return i=>i.pipe(n?yn((r,s)=>n(r,s,i)):an,Zr(1),t?Di(e):ka(()=>new ri))}function mu(n,e){return Ke(_m(n,e,arguments.length>=2,!0))}function gu(...n){let e=Ci(n);return Ke((t,i)=>{(e?Yr(n,t,e):Yr(n,t)).subscribe(i)})}function _n(n,e){return Ke((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Qe(i,c=>{r?.unsubscribe();let l=0,u=s++;Pt(n(c,u)).subscribe(r=Qe(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function vu(n){return Ke((e,t)=>{Pt(n).subscribe(Qe(t,()=>t.complete(),ao)),!t.closed&&e.subscribe(t)})}function Nt(n,e,t){let i=Ne(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ke((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Qe(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):an}var ig="https://g.co/ng/security#xss",ye=class extends Error{constructor(e,t){super(fd(e,t)),this.code=e}};function fd(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Cu=class extends Qt{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=yu(s),r&&(r=yu(r)),o&&(o=yu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ct&&e.add(a),a}};function yu(n){return e=>{setTimeout(n,void 0,e)}}var Gt=Cu;var je=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(je||{});function cn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(cn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function xm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var rg=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(rg||{}),qn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(qn||{});function bo(n){return{toString:n}.toString()}var Yt=globalThis;var fo={},Wn=[];function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}var wM=ut({\u0275cmp:ut}),bM=ut({\u0275dir:ut}),EM=ut({\u0275pipe:ut}),TM=ut({\u0275mod:ut}),Xa=ut({\u0275fac:ut}),uo=ut({__NG_ELEMENT_ID__:ut}),Mm=ut({__NG_ENV_ID__:ut}),Rn=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Rn||{});function sg(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Au(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];CM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function og(n){return n===3||n===4||n===6}function CM(n){return n.charCodeAt(0)===64}function pd(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Sm(n,t,r,null,e[++i]):Sm(n,t,r,null,null))}}return n}function Sm(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var ag="ng-template";function AM(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&sg(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function cg(n){return n.type===4&&n.value!==ag}function DM(n,e,t){let i=n.type===4&&!t?ag:n.value;return e===i}function IM(n,e,t){let i=4,r=n.attrs||[],s=NM(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Dn(i)&&!Dn(c))return!1;if(o&&Dn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!DM(n,c,t)||c===""&&e.length===1){if(Dn(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!AM(n.attrs,l,t)){if(Dn(i))return!1;o=!0}continue}let u=i&8?"class":c,d=RM(u,r,cg(n),t);if(d===-1){if(Dn(i))return!1;o=!0;continue}if(l!==""){let h;d>s?h="":h=r[d+1].toLowerCase();let m=i&8?h:null;if(m&&sg(m,l,0)!==-1||i&2&&l!==h){if(Dn(i))return!1;o=!0}}}}return Dn(i)||o}function Dn(n){return(n&1)===0}function RM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return LM(e,n)}function PM(n,e,t=!1){for(let i=0;i<e.length;i++)if(IM(n,e[i],t))return!0;return!1}function NM(n){for(let e=0;e<n.length;e++){let t=n[e];if(og(t))return e}return n.length}function LM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function wm(n,e){return n?":not("+e.trim()+")":e}function OM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Dn(o)&&(e+=wm(s,r),r=""),i=o,s=s||!Dn(i);t++}return r!==""&&(e+=wm(s,r)),e}function FM(n){return n.map(OM).join(",")}function UM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Dn(r))break;r=s}i++}return{attrs:e,classes:t}}function lg(n){return bo(()=>{let e=pg(n),t=bt(de({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===rg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||qn.Emulated,styles:n.styles||Wn,_:null,schemas:n.schemas||null,tView:null,id:""});mg(t);let i=n.dependencies;return t.directiveDefs=Em(i,!1),t.pipeDefs=Em(i,!0),t.id=VM(t),t})}function kM(n){return Pi(n)||ug(n)}function BM(n){return n!==null}function gr(n){return bo(()=>({type:n.type,bootstrap:n.bootstrap||Wn,declarations:n.declarations||Wn,imports:n.imports||Wn,exports:n.exports||Wn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function bm(n,e){if(n==null)return fo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Rn.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Rn.None?[i,a]:i,e[s]=o):t[s]=i}return t}function dc(n){return bo(()=>{let e=pg(n);return mg(e),e})}function Pi(n){return n[wM]||null}function ug(n){return n[bM]||null}function dg(n){return n[EM]||null}function hg(n){let e=Pi(n)||ug(n)||dg(n);return e!==null?e.standalone:!1}function fg(n,e){let t=n[TM]||null;if(!t&&e===!0)throw new Error(`Type ${cn(n)} does not have '\u0275mod' property.`);return t}function pg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||fo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Wn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:bm(n.inputs,e),outputs:bm(n.outputs),debugInfo:null}}function mg(n){n.features?.forEach(e=>e(n))}function Em(n,e){if(!n)return null;let t=e?dg:kM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(BM)}function VM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var ui=0,$e=1,De=2,Bt=3,In=4,Pn=5,Ya=6,po=7,oi=8,is=9,ai=10,un=11,mo=12,Tm=13,Eo=14,Xn=15,To=16,Jr=17,ci=18,hc=19,gg=20,Ri=21,_u=22,dr=23,hr=25,vg=1;var fr=7,Za=8,rs=9,ln=10,md=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(md||{});function lr(n){return Array.isArray(n)&&typeof n[vg]=="object"}function di(n){return Array.isArray(n)&&n[vg]===!0}function yg(n){return(n.flags&4)!==0}function gd(n){return n.componentOffset>-1}function _g(n){return(n.flags&1)===1}function Co(n){return!!n.template}function zM(n){return(n[De]&512)!==0}var HM="svg",GM="math",WM=!1;function jM(){return WM}function li(n){for(;Array.isArray(n);)n=n[ui];return n}function Nn(n,e){return li(e[n.index])}function xg(n,e){return n.data[e]}function vr(n,e){let t=e[n];return lr(t)?t:t[ui]}function $M(n){return(n[De]&4)===4}function vd(n){return(n[De]&128)===128}function qM(n){return di(n[Bt])}function Cm(n,e){return e==null?null:n[e]}function Mg(n){n[Jr]=0}function XM(n){n[De]&1024||(n[De]|=1024,vd(n)&&go(n))}function yd(n){return!!(n[De]&9216||n[dr]?.dirty)}function Du(n){yd(n)?go(n):n[De]&64&&(jM()?(n[De]|=1024,go(n)):n[ai].changeDetectionScheduler?.notify())}function go(n){n[ai].changeDetectionScheduler?.notify();let e=vo(n);for(;e!==null&&!(e[De]&8192||(e[De]|=8192,!vd(e)));)e=vo(e)}function Sg(n,e){if((n[De]&256)===256)throw new ye(911,!1);n[Ri]===null&&(n[Ri]=[]),n[Ri].push(e)}function YM(n,e){if(n[Ri]===null)return;let t=n[Ri].indexOf(e);t!==-1&&n[Ri].splice(t,1)}function vo(n){let e=n[Bt];return di(e)?e[Bt]:e}var nt={lFrame:Dg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function ZM(){return nt.lFrame.elementDepthCount}function JM(){nt.lFrame.elementDepthCount++}function KM(){nt.lFrame.elementDepthCount--}function wg(){return nt.bindingsEnabled}function QM(){return nt.skipHydrationRootTNode!==null}function eS(n){return nt.skipHydrationRootTNode===n}function tS(){nt.skipHydrationRootTNode=null}function At(){return nt.lFrame.lView}function yr(){return nt.lFrame.tView}function Sn(){let n=bg();for(;n!==null&&n.type===64;)n=n.parent;return n}function bg(){return nt.lFrame.currentTNode}function nS(){let n=nt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function fc(n,e){let t=nt.lFrame;t.currentTNode=n,t.isParent=e}function Eg(){return nt.lFrame.isParent}function iS(){nt.lFrame.isParent=!1}function rS(n){return nt.lFrame.bindingIndex=n}function sS(){return nt.lFrame.bindingIndex++}function oS(){return nt.lFrame.inI18n}function aS(n,e){let t=nt.lFrame;t.bindingIndex=t.bindingRootIndex=n,Iu(e)}function cS(){return nt.lFrame.currentDirectiveIndex}function Iu(n){nt.lFrame.currentDirectiveIndex=n}function Tg(){return nt.lFrame.currentQueryIndex}function _d(n){nt.lFrame.currentQueryIndex=n}function lS(n){let e=n[$e];return e.type===2?e.declTNode:e.type===1?n[Pn]:null}function Cg(n,e,t){if(t&je.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&je.Host);)if(r=lS(s),r===null||(s=s[Eo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=nt.lFrame=Ag();return i.currentTNode=e,i.lView=n,!0}function xd(n){let e=Ag(),t=n[$e];nt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Ag(){let n=nt.lFrame,e=n===null?null:n.child;return e===null?Dg(n):e}function Dg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Ig(){let n=nt.lFrame;return nt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Rg=Ig;function Md(){let n=Ig();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function uS(){return nt.lFrame.selectedIndex}function pr(n){nt.lFrame.selectedIndex=n}function dS(){let n=nt.lFrame;return xg(n.tView,n.selectedIndex)}function hS(){return nt.lFrame.currentNamespace}var Pg=!0;function Ng(){return Pg}function Lg(n){Pg=n}function fS(){return us(Sn(),At())}function us(n,e){return new Li(Nn(n,e))}var Li=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=fS;let n=e;return n})();function pS(n){return n instanceof Li?n.nativeElement:n}function mS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function gS(n){return n.flat(Number.POSITIVE_INFINITY)}function Sd(n,e){n.forEach(t=>Array.isArray(t)?Sd(t,e):e(t))}function Og(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ja(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function vS(){return this._results[Symbol.iterator]()}var Ru=class n{get changes(){return this._changes??=new Gt}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._onDirty=void 0,this._results=[],this._changesDetected=!1,this._changes=void 0,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=vS)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=gS(e);(this._changesDetected=!mS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}};function Fg(n){return(n.flags&128)===128}var Pu;function Ug(n){Pu=n}function yS(){if(Pu!==void 0)return Pu;if(typeof document<"u")return document;throw new ye(210,!1)}function Se(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function _r(n){return{providers:n.providers||[],imports:n.imports||[]}}function pc(n){return Am(n,Bg)||Am(n,Vg)}function kg(n){return pc(n)!==null}function Am(n,e){return n.hasOwnProperty(e)?n[e]:null}function _S(n){let e=n&&(n[Bg]||n[Vg]);return e||null}function Dm(n){return n&&(n.hasOwnProperty(Im)||n.hasOwnProperty(xS))?n[Im]:null}var Bg=ut({\u0275prov:ut}),Im=ut({\u0275inj:ut}),Vg=ut({ngInjectableDef:ut}),xS=ut({ngInjectorDef:ut}),Le=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Se({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}},mc=new Le("",{providedIn:"root",factory:()=>MS}),MS="ng",wd=new Le(""),Oi=new Le("",{providedIn:"platform",factory:()=>"unknown"});var bd=new Le("",{providedIn:"root",factory:()=>yS().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var SS=ut({__forward_ref__:ut});function zg(n){return n.__forward_ref__=zg,n.toString=function(){return cn(this())},n}function Mn(n){return Hg(n)?n():n}function Hg(n){return typeof n=="function"&&n.hasOwnProperty(SS)&&n.__forward_ref__===zg}function Gg(n){return n&&!!n.\u0275providers}function Ed(n){return typeof n=="string"?n:n==null?"":String(n)}function wS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Ed(n)}function bS(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new ye(-200,n)}function Td(n,e){throw new ye(-201,!1)}var Nu;function Wg(){return Nu}function xn(n){let e=Nu;return Nu=n,e}function jg(n,e,t){let i=pc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&je.Optional)return null;if(e!==void 0)return e;Td(n,"Injector")}var ES={},yo=ES,Lu="__NG_DI_FLAG__",Ka="ngTempTokenPath",TS="ngTokenPath",CS=/\n/gm,AS="\u0275",Rm="__source",ts;function DS(){return ts}function Ii(n){let e=ts;return ts=n,e}function IS(n,e=je.Default){if(ts===void 0)throw new ye(-203,!1);return ts===null?jg(n,void 0,e):ts.get(n,e&je.Optional?null:void 0,e)}function Ee(n,e=je.Default){return(Wg()||IS)(Mn(n),e)}function oe(n,e=je.Default){return Ee(n,gc(e))}function gc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Ou(n){let e=[];for(let t=0;t<n.length;t++){let i=Mn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ye(900,!1);let r,s=je.Default;for(let o=0;o<i.length;o++){let a=i[o],c=RS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ee(r,s))}else e.push(Ee(i))}return e}function $g(n,e){return n[Lu]=e,n.prototype[Lu]=e,n}function RS(n){return n[Lu]}function PS(n,e,t,i){let r=n[Ka];throw e[Rm]&&r.unshift(e[Rm]),n.message=NS(`
`+n.message,r,t,i),n[TS]=r,n[Ka]=null,n}function NS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==AS?n.slice(2):n;let r=cn(e);if(Array.isArray(e))r=e.map(cn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):cn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(CS,`
  `)}`}var LS="h",OS="b";var FS=()=>null;function Cd(n,e,t=!1){return FS(n,e,t)}var Ba="__parameters__";function US(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function qg(n,e,t){return bo(()=>{let i=US(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Ba)?c[Ba]:Object.defineProperty(c,Ba,{value:[]})[Ba];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var Ad=$g(qg("Optional"),8);var Xg=$g(qg("SkipSelf"),4);function ss(n,e){let t=n.hasOwnProperty(Xa);return t?n[Xa]:null}var os=new Le(""),Yg=new Le("",-1),Zg=new Le(""),Qa=class{get(e,t=yo){if(t===yo){let i=new Error(`NullInjectorError: No provider for ${cn(e)}!`);throw i.name="NullInjectorError",i}return t}};function kS(...n){return{\u0275providers:Jg(!0,n),\u0275fromNgModule:!0}}function Jg(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Sd(e,o=>{let a=o;Fu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Kg(r,s),t}function Kg(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Dd(r,s=>{e(s,i)})}}function Fu(n,e,t,i){if(n=Mn(n),!n)return!1;let r=null,s=Dm(n),o=!s&&Pi(n);if(!s&&!o){let c=n.ngModule;if(s=Dm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Fu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Sd(s.imports,u=>{Fu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Kg(l,e)}if(!a){let l=ss(r)||(()=>new r);e({provide:r,useFactory:l,deps:Wn},r),e({provide:Zg,useValue:r,multi:!0},r),e({provide:os,useValue:()=>Ee(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Dd(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Dd(n,e){for(let t of n)Gg(t)&&(t=t.\u0275providers),Array.isArray(t)?Dd(t,e):e(t)}var BS=ut({provide:String,useValue:ut});function Qg(n){return n!==null&&typeof n=="object"&&BS in n}function VS(n){return!!(n&&n.useExisting)}function zS(n){return!!(n&&n.useFactory)}function Uu(n){return typeof n=="function"}var vc=new Le(""),Ha={},HS={},xu;function Id(){return xu===void 0&&(xu=new Qa),xu}var dn=class{},_o=class extends dn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Bu(e,o=>this.processProvider(o)),this.records.set(Yg,Kr(void 0,this)),r.has("environment")&&this.records.set(dn,Kr(void 0,this));let s=this.records.get(vc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Zg,Wn,je.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ii(this),i=xn(void 0),r;try{return e()}finally{Ii(t),xn(i)}}get(e,t=yo,i=je.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Mm))return e[Mm](this);i=gc(i);let r,s=Ii(this),o=xn(void 0);try{if(!(i&je.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=XS(e)&&pc(e);l&&this.injectableDefInScope(l)?c=Kr(ku(e),Ha):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&je.Self?Id():this.parent;return t=i&je.Optional&&t===yo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ka]=a[Ka]||[]).unshift(cn(e)),s)throw a;return PS(a,e,"R3InjectorError",this.source)}else throw a}finally{xn(o),Ii(s)}}resolveInjectorInitializers(){let e=Ii(this),t=xn(void 0),i;try{let r=this.get(os,Wn,je.Self);for(let s of r)s()}finally{Ii(e),xn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(cn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ye(205,!1)}processProvider(e){e=Mn(e);let t=Uu(e)?e:Mn(e&&e.provide),i=WS(e);if(!Uu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Kr(void 0,Ha,!0),r.factory=()=>Ou(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){return t.value===Ha&&(t.value=HS,t.value=t.factory()),typeof t.value=="object"&&t.value&&qS(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Mn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ku(n){let e=pc(n),t=e!==null?e.factory:ss(n);if(t!==null)return t;if(n instanceof Le)throw new ye(204,!1);if(n instanceof Function)return GS(n);throw new ye(204,!1)}function GS(n){if(n.length>0)throw new ye(204,!1);let t=_S(n);return t!==null?()=>t.factory(n):()=>new n}function WS(n){if(Qg(n))return Kr(void 0,n.useValue);{let e=jS(n);return Kr(e,Ha)}}function jS(n,e,t){let i;if(Uu(n)){let r=Mn(n);return ss(r)||ku(r)}else if(Qg(n))i=()=>Mn(n.useValue);else if(zS(n))i=()=>n.useFactory(...Ou(n.deps||[]));else if(VS(n))i=()=>Ee(Mn(n.useExisting));else{let r=Mn(n&&(n.useClass||n.provide));if($S(n))i=()=>new r(...Ou(n.deps));else return ss(r)||ku(r)}return i}function Kr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function $S(n){return!!n.deps}function qS(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function XS(n){return typeof n=="function"||typeof n=="object"&&n instanceof Le}function Bu(n,e){for(let t of n)Array.isArray(t)?Bu(t,e):t&&Gg(t)?Bu(t.\u0275providers,e):e(t)}function Fi(n,e){n instanceof _o&&n.assertNotDestroyed();let t,i=Ii(n),r=xn(void 0);try{return e()}finally{Ii(i),xn(r)}}function YS(n){if(!Wg()&&!DS())throw new ye(-203,!1)}function ZS(n){let e=Yt.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function JS(n){return typeof n=="function"}var Vu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ev(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function Ao(){return tv}function tv(n){return n.type.prototype.ngOnChanges&&(n.setInput=QS),KS}Ao.ngInherit=!0;function KS(){let n=iv(this),e=n?.current;if(e){let t=n.previous;if(t===fo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function QS(n,e,t,i,r){let s=this.declaredInputs[i],o=iv(n)||ew(n,{previous:fo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Vu(l&&l.currentValue,t,c===fo),ev(n,e,r,t)}var nv="__ngSimpleChanges__";function iv(n){return n[nv]||null}function ew(n,e){return n[nv]=e}var Pm=null;var jn=function(n,e,t){Pm?.(n,e,t)};function tw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=tv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function rv(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ga(n,e,t){sv(n,e,3,t)}function Wa(n,e,t,i){(n[De]&3)===t&&sv(n,e,t,i)}function Mu(n,e){let t=n[De];(t&3)===e&&(t&=16383,t+=1,n[De]=t)}function sv(n,e,t,i){let r=i!==void 0?n[Jr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Jr]+=65536),(a<s||s==-1)&&(nw(n,t,e,c),n[Jr]=(n[Jr]&4294901760)+c+2),c++}function Nm(n,e){jn(4,n,e);let t=on(null);try{e.call(n)}finally{on(t),jn(5,n,e)}}function nw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[De]>>14<n[Jr]>>16&&(n[De]&3)===e&&(n[De]+=16384,Nm(a,s)):Nm(a,s)}var ns=-1,xo=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function iw(n){return n instanceof xo}function rw(n){return(n.flags&8)!==0}function sw(n){return(n.flags&16)!==0}function ov(n){return n!==ns}function ec(n){return n&32767}function ow(n){return n>>16}function tc(n,e){let t=ow(n),i=e;for(;t>0;)i=i[Eo],t--;return i}var zu=!0;function Lm(n){let e=zu;return zu=n,e}var aw=256,av=aw-1,cv=5,cw=0,$n={};function lw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(uo)&&(i=t[uo]),i==null&&(i=t[uo]=cw++);let r=i&av,s=1<<r;e.data[n+(r>>cv)]|=s}function lv(n,e){let t=uv(n,e);if(t!==-1)return t;let i=e[$e];i.firstCreatePass&&(n.injectorIndex=e.length,Su(i.data,n),Su(e,null),Su(i.blueprint,null));let r=Rd(n,e),s=n.injectorIndex;if(ov(r)){let o=ec(r),a=tc(r,e),c=a[$e].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function Su(n,e){n.push(0,0,0,0,0,0,0,0,e)}function uv(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Rd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=mv(r),i===null)return ns;if(t++,r=r[Eo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return ns}function uw(n,e,t){lw(n,e,t)}function dw(n,e){if(e==="class")return n.classes;if(e==="style")return n.styles;let t=n.attrs;if(t){let i=t.length,r=0;for(;r<i;){let s=t[r];if(og(s))break;if(s===0)r=r+2;else if(typeof s=="number")for(r++;r<i&&typeof t[r]=="string";)r++;else{if(s===e)return t[r+1];r=r+2}}}return null}function dv(n,e,t){if(t&je.Optional||n!==void 0)return n;Td(e,"NodeInjector")}function hv(n,e,t,i){if(t&je.Optional&&i===void 0&&(i=null),!(t&(je.Self|je.Host))){let r=n[is],s=xn(void 0);try{return r?r.get(e,i,t&je.Optional):jg(e,i,t&je.Optional)}finally{xn(s)}}return dv(i,e,t)}function fv(n,e,t,i=je.Default,r){if(n!==null){if(e[De]&2048&&!(i&je.Self)){let o=mw(n,e,t,i,$n);if(o!==$n)return o}let s=pv(n,e,t,i,$n);if(s!==$n)return s}return hv(e,t,i,r)}function pv(n,e,t,i,r){let s=fw(t);if(typeof s=="function"){if(!Cg(e,n,i))return i&je.Host?dv(r,t,i):hv(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&je.Optional))Td(t);else return o}finally{Rg()}}else if(typeof s=="number"){let o=null,a=uv(n,e),c=ns,l=i&je.Host?e[Xn][Pn]:null;for((a===-1||i&je.SkipSelf)&&(c=a===-1?Rd(n,e):e[a+8],c===ns||!Fm(i,!1)?a=-1:(o=e[$e],a=ec(c),e=tc(c,e)));a!==-1;){let u=e[$e];if(Om(s,a,u.data)){let d=hw(a,e,t,o,i,l);if(d!==$n)return d}c=e[a+8],c!==ns&&Fm(i,e[$e].data[a+8]===l)&&Om(s,a,e)?(o=u,a=ec(c),e=tc(c,e)):a=-1}}return r}function hw(n,e,t,i,r,s){let o=e[$e],a=o.data[n+8],c=i==null?gd(a)&&zu:i!=o&&(a.type&3)!==0,l=r&je.Host&&s===a,u=ja(a,o,t,c,l);return u!==null?as(e,o,u,a):$n}function ja(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&Co(m)&&m.type===t)return c}return null}function as(n,e,t,i){let r=n[t],s=e.data;if(iw(r)){let o=r;o.resolving&&bS(wS(s[t]));let a=Lm(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?xn(o.injectImpl):null,u=Cg(n,i,je.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&tw(t,s[t],e)}finally{l!==null&&xn(l),Lm(a),o.resolving=!1,Rg()}}return r}function fw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(uo)?n[uo]:void 0;return typeof e=="number"?e>=0?e&av:pw:e}function Om(n,e,t){let i=1<<n;return!!(t[e+(n>>cv)]&i)}function Fm(n,e){return!(n&je.Self)&&!(n&je.Host&&e)}var ur=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return fv(this._tNode,this._lView,e,gc(i),t)}};function pw(){return new ur(Sn(),At())}function Pd(n){return bo(()=>{let e=n.prototype.constructor,t=e[Xa]||Hu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Xa]||Hu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Hu(n){return Hg(n)?()=>{let e=Hu(Mn(n));return e&&e()}:ss(n)}function mw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[De]&2048&&!(o[De]&512);){let a=pv(s,o,t,i|je.Self,$n);if(a!==$n)return a;let c=s.parent;if(!c){let l=o[gg];if(l){let u=l.get(t,$n,i);if(u!==$n)return u}c=mv(o),o=o[Eo]}s=c}return r}function mv(n){let e=n[$e],t=e.type;return t===2?e.declTNode:t===1?n[Pn]:null}function Nd(n){return dw(Sn(),n)}function Um(n,e=null,t=null,i){let r=gv(n,e,t,i);return r.resolveInjectorInitializers(),r}function gv(n,e=null,t=null,i,r=new Set){let s=[t||Wn,kS(n)];return i=i||(typeof n=="object"?void 0:cn(n)),new _o(s,e||Id(),i||null,r)}var Zn=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Um({name:""},r,i,"");{let s=i.name??"";return Um({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=yo,e.NULL=new Qa,e.\u0275prov=Se({token:e,providedIn:"any",factory:()=>Ee(Yg)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})(),gw="ngOriginalError";function wu(n){return n[gw]}var Yn=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&wu(e);for(;t&&wu(t);)t=wu(t);return t||null}},vv=new Le("",{providedIn:"root",factory:()=>oe(Yn).handleError.bind(void 0)});var yv=!1,vw=new Le("",{providedIn:"root",factory:()=>yv});var Va;function yw(){if(Va===void 0&&(Va=null,Yt.trustedTypes))try{Va=Yt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Va}function km(n){return yw()?.createScriptURL(n)||n}var nc=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ig})`}};function yc(n){return n instanceof nc?n.changingThisBreaksApplicationSecurity:n}function Ld(n,e){let t=_w(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${ig})`)}return t===e}function _w(n){return n instanceof nc&&n.getTypeName()||null}var xw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function _v(n){return n=String(n),n.match(xw)?n:"unsafe:"+n}var _c=function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n}(_c||{});function Mw(n){let e=Mv();return e?e.sanitize(_c.URL,n)||"":Ld(n,"URL")?yc(n):_v(Ed(n))}function Sw(n){let e=Mv();if(e)return km(e.sanitize(_c.RESOURCE_URL,n)||"");if(Ld(n,"ResourceURL"))return km(yc(n));throw new ye(904,!1)}function ww(n,e){return e==="src"&&(n==="embed"||n==="frame"||n==="iframe"||n==="media"||n==="script")||e==="href"&&(n==="base"||n==="link")?Sw:Mw}function xv(n,e,t){return ww(e,t)(n)}function Mv(){let n=At();return n&&n[ai].sanitizer}var Sv=new Map,bw=0;function Ew(){return bw++}function Tw(n){Sv.set(n[hc],n)}function Cw(n){Sv.delete(n[hc])}var Bm="__ngContext__";function cs(n,e){lr(e)?(n[Bm]=e[hc],Tw(e)):n[Bm]=e}function wv(n){return n instanceof Function?n():n}function Aw(n){return(n??oe(Zn)).get(Oi)==="browser"}var xr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(xr||{}),Dw;function Od(n,e){return Dw(n,e)}function Qr(n,e,t,i,r){if(i!=null){let s,o=!1;di(i)?s=i:lr(i)&&(o=!0,i=i[ui]);let a=li(i);n===0&&t!==null?r==null?Av(e,t,a):ic(e,t,a,r||null,!0):n===1&&t!==null?ic(e,t,a,r||null,!0):n===2?jw(e,a,o):n===3&&e.destroyNode(a),s!=null&&qw(e,n,s,t,r)}}function Iw(n,e){return n.createText(e)}function bv(n,e,t){return n.createElement(e,t)}function Rw(n,e){Ev(n,e),e[ui]=null,e[Pn]=null}function Pw(n,e,t,i,r,s){i[ui]=r,i[Pn]=e,xc(n,i,t,1,r,s)}function Ev(n,e){xc(n,e,e[un],2,null,null)}function Nw(n){let e=n[mo];if(!e)return bu(n[$e],n);for(;e;){let t=null;if(lr(e))t=e[mo];else{let i=e[ln];i&&(t=i)}if(!t){for(;e&&!e[In]&&e!==n;)lr(e)&&bu(e[$e],e),e=e[Bt];e===null&&(e=n),lr(e)&&bu(e[$e],e),t=e&&e[In]}e=t}}function Lw(n,e,t,i){let r=ln+i,s=t.length;i>0&&(t[r-1][In]=e),i<s-ln?(e[In]=t[r],Og(t,ln+i,e)):(t.push(e),e[In]=null),e[Bt]=t;let o=e[To];o!==null&&t!==o&&Ow(o,e);let a=e[ci];a!==null&&a.insertView(n),Du(e),e[De]|=128}function Ow(n,e){let t=n[rs],r=e[Bt][Bt][Xn];e[Xn]!==r&&(n[De]|=md.HasTransplantedViews),t===null?n[rs]=[e]:t.push(e)}function Tv(n,e){let t=n[rs],i=t.indexOf(e);t.splice(i,1)}function Gu(n,e){if(n.length<=ln)return;let t=ln+e,i=n[t];if(i){let r=i[To];r!==null&&r!==n&&Tv(r,i),e>0&&(n[t-1][In]=i[In]);let s=Ja(n,ln+e);Rw(i[$e],i);let o=s[ci];o!==null&&o.detachView(s[$e]),i[Bt]=null,i[In]=null,i[De]&=-129}return i}function Cv(n,e){if(!(e[De]&256)){let t=e[un];t.destroyNode&&xc(n,e,t,3,null,null),Nw(e)}}function bu(n,e){if(!(e[De]&256)){e[De]&=-129,e[De]|=256,e[dr]&&Wp(e[dr]),Uw(n,e),Fw(n,e),e[$e].type===1&&e[un].destroy();let t=e[To];if(t!==null&&di(e[Bt])){t!==e[Bt]&&Tv(t,e);let i=e[ci];i!==null&&i.detachView(n)}Cw(e)}}function Fw(n,e){let t=n.cleanup,i=e[po];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[po]=null);let r=e[Ri];if(r!==null){e[Ri]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function Uw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof xo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];jn(4,a,c);try{c.call(a)}finally{jn(5,a,c)}}else{jn(4,r,s);try{s.call(r)}finally{jn(5,r,s)}}}}}function kw(n,e,t){return Bw(n,e.parent,t)}function Bw(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[ui];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===qn.None||s===qn.Emulated)return null}return Nn(i,t)}}function ic(n,e,t,i,r){n.insertBefore(e,t,i,r)}function Av(n,e,t){n.appendChild(e,t)}function Vm(n,e,t,i,r){i!==null?ic(n,e,t,i,r):Av(n,e,t)}function Vw(n,e,t,i){n.removeChild(e,t,i)}function Fd(n,e){return n.parentNode(e)}function zw(n,e){return n.nextSibling(e)}function Hw(n,e,t){return Ww(n,e,t)}function Gw(n,e,t){return n.type&40?Nn(n,t):null}var Ww=Gw,zm;function Dv(n,e,t,i){let r=kw(n,i,e),s=e[un],o=i.parent||e[Pn],a=Hw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Vm(s,r,t[c],a,!1);else Vm(s,r,t,a,!1);zm!==void 0&&zm(s,i,e,t,r)}function $a(n,e){if(e!==null){let t=e.type;if(t&3)return Nn(e,n);if(t&4)return Wu(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return $a(n,i);{let r=n[e.index];return di(r)?Wu(-1,r):li(r)}}else{if(t&32)return Od(e,n)()||li(n[e.index]);{let i=Iv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=vo(n[Xn]);return $a(r,i)}else return $a(n,e.next)}}}return null}function Iv(n,e){if(e!==null){let i=n[Xn][Pn],r=e.projection;return i.projection[r]}return null}function Wu(n,e){let t=ln+n+1;if(t<e.length){let i=e[t],r=i[$e].firstChild;if(r!==null)return $a(i,r)}return e[fr]}function jw(n,e,t){let i=Fd(n,e);i&&Vw(n,i,e,t)}function Ud(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&cs(li(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Ud(n,e,t.child,i,r,s,!1),Qr(e,n,r,a,s);else if(c&32){let l=Od(t,i),u;for(;u=l();)Qr(e,n,r,u,s);Qr(e,n,r,a,s)}else c&16?$w(n,e,i,t,r,s):Qr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function xc(n,e,t,i,r,s){Ud(t,i,n.firstChild,e,r,s,!1)}function $w(n,e,t,i,r,s){let o=t[Xn],c=o[Pn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Qr(e,n,r,u,s)}else{let l=c,u=o[Bt];Fg(i)&&(l.flags|=128),Ud(n,e,l,u,r,s,!0)}}function qw(n,e,t,i,r){let s=t[fr],o=li(t);s!==o&&Qr(e,n,i,s,r);for(let a=ln;a<t.length;a++){let c=t[a];xc(c[$e],c,n,e,i,s)}}function Xw(n,e,t){n.setAttribute(e,"style",t)}function Rv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Pv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Au(n,e,i),r!==null&&Rv(n,e,r),s!==null&&Xw(n,e,s)}var Nv={};function Yw(n,e,t,i){if(!i)if((e[De]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ga(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Wa(e,s,0,t)}pr(t)}function Ui(n,e=je.Default){let t=At();if(t===null)return Ee(n,e);let i=Sn();return fv(i,t,Mn(n),e)}function Lv(){let n="invalid";throw new Error(n)}function Ov(n,e,t,i,r,s){let o=on(null);try{let a=null;r&Rn.SignalBased&&(a=e[i][Vp]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Rn.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):ev(e,a,i,s)}finally{on(o)}}function Zw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)pr(~r);else{let s=r,o=t[++i],a=t[++i];aS(o,s);let c=e[s];a(2,c)}}}finally{pr(-1)}}function Mc(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ui]=r,d[De]=i|4|128|8|64,(l!==null||n&&n[De]&2048)&&(d[De]|=2048),Mg(d),d[Bt]=d[Eo]=n,d[oi]=t,d[ai]=o||n&&n[ai],d[un]=a||n&&n[un],d[is]=c||n&&n[is]||null,d[Pn]=s,d[hc]=Ew(),d[Ya]=u,d[gg]=l,d[Xn]=e.type==2?n[Xn]:d,d}function kd(n,e,t,i,r){let s=n.data[e];if(s===null)s=Jw(n,e,t,i,r),oS()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=nS();s.injectorIndex=o===null?-1:o.injectorIndex}return fc(s,!0),s}function Jw(n,e,t,i,r){let s=bg(),o=Eg(),a=o?s:s&&s.parent,c=n.data[e]=sb(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function Fv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Uv(n,e,t,i,r){let s=uS(),o=i&2;try{pr(-1),o&&e.length>hr&&Yw(n,e,hr,!1),jn(o?2:0,r),t(i,r)}finally{pr(s),jn(o?3:1,r)}}function kv(n,e,t){if(yg(e)){let i=on(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{on(i)}}}function Kw(n,e,t){wg()&&(ub(n,e,t,Nn(t,e)),(t.flags&64)===64&&Hv(n,e,t))}function Qw(n,e,t=Nn){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function Bv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Vv(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Vv(n,e,t,i,r,s,o,a,c,l,u){let d=hr+i,h=d+r,m=eb(d,h),g=typeof l=="function"?l():l;return m[$e]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function eb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Nv);return t}function tb(n,e,t,i){let s=i.get(vw,yv)||t===qn.ShadowDom,o=n.selectRootElement(e,s);return nb(o),o}function nb(n){ib(n)}var ib=()=>null;function rb(n,e,t,i){let r=Wv(e);r.push(t),n.firstCreatePass&&jv(n).push(i,r.length-1)}function sb(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return QM()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Hm(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Rn.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Gm(i,t,l,a,c):Gm(i,t,l,a)}return i}function Gm(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function ob(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Hm(0,d.inputs,u,c,m),l=Hm(1,d.outputs,u,l,g);let _=c!==null&&o!==null&&!cg(e)?Mb(c,u,o):null;a.push(_)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function ab(n,e,t,i){if(wg()){let r=i===null?null:{"":-1},s=hb(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&zv(n,e,t,o,r,a),r&&fb(t,i,r)}t.mergedAttrs=pd(t.mergedAttrs,t.attrs)}function zv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)uw(lv(t,e),n,i[l].type);mb(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=Fv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=pd(t.mergedAttrs,u.hostAttrs),gb(n,t,e,c,u),pb(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}ob(n,t,s)}function cb(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;lb(o)!=a&&o.push(a),o.push(t,i,s)}}function lb(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function ub(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;gd(t)&&vb(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||lv(t,e),cs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=as(e,n,a,t);if(cs(l,e),o!==null&&xb(e,a-r,l,c,t,o),Co(c)){let u=vr(t.index,e);u[oi]=as(e,n,a,t)}}}function Hv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=cS();try{pr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Iu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&db(c,l)}}finally{pr(-1),Iu(o)}}function db(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function hb(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(PM(e,o.selectors,!1))if(i||(i=[]),Co(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;ju(n,e,c)}else i.unshift(o),ju(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function ju(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function fb(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new ye(-301,!1);i.push(e[r],s)}}}function pb(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Co(e)&&(t[""]=n)}}function mb(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function gb(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ss(r.type,!0)),o=new xo(s,Co(r),Ui);n.blueprint[i]=o,t[i]=o,cb(n,e,i,Fv(n,t,r.hostVars,Nv),r)}function vb(n,e,t){let i=Nn(e,n),r=Bv(t),s=n[ai].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Bd(n,Mc(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function yb(n,e,t,i,r,s){let o=Nn(n,e);_b(e[un],o,s,n.value,t,i,r)}function _b(n,e,t,i,r,s,o){if(s==null)n.removeAttribute(e,r,t);else{let a=o==null?Ed(s):o(s,i||"",r);n.setAttribute(e,r,a,t)}}function xb(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];Ov(i,t,c,l,u,d)}}function Mb(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Sb(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Gv(n,e){let t=n.contentQueries;if(t!==null){let i=on(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];_d(s),a.contentQueries(2,e[o],o)}}}finally{on(i)}}}function Bd(n,e){return n[mo]?n[Tm][In]=e:n[mo]=e,n[Tm]=e,e}function $u(n,e,t){_d(0);let i=on(null);try{e(n,t)}finally{on(i)}}function Wv(n){return n[po]||(n[po]=[])}function jv(n){return n.cleanup||(n.cleanup=[])}function $v(n,e){let t=n[is],i=t?t.get(Yn,null):null;i&&i.handleError(e)}function qv(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];Ov(u,l,i,a,c,r)}}function wb(n,e){let t=vr(e,n),i=t[$e];bb(i,t);let r=t[ui];r!==null&&t[Ya]===null&&(t[Ya]=Cd(r,t[is])),Vd(i,t,t[oi])}function bb(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Vd(n,e,t){xd(e);try{let i=n.viewQuery;i!==null&&$u(1,i,t);let r=n.template;r!==null&&Uv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ci]?.finishViewCreation(n),n.staticContentQueries&&Gv(n,e),n.staticViewQueries&&$u(2,n.viewQuery,t);let s=n.components;s!==null&&Eb(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[De]&=-5,Md()}}function Eb(n,e){for(let t=0;t<e.length;t++)wb(n,e[t])}function Tb(n,e,t,i){let r=e.tView,o=n[De]&4096?4096:16,a=Mc(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),c=n[e.index];a[To]=c;let l=n[ci];return l!==null&&(a[ci]=l.createEmbeddedView(r)),Vd(r,a,t),a}function Wm(n,e){return!e||e.firstChild===null||Fg(n)}function Cb(n,e,t,i=!0){let r=e[$e];if(Lw(r,e,n,t),i){let o=Wu(t,n),a=e[un],c=Fd(a,n[fr]);c!==null&&Pw(r,n[Pn],a,e,c,o)}let s=e[Ya];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function rc(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(li(s)),di(s)&&Ab(s,i);let o=t.type;if(o&8)rc(n,e,t.child,i);else if(o&32){let a=Od(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=Iv(e,t);if(Array.isArray(a))i.push(...a);else{let c=vo(e[Xn]);rc(c[$e],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Ab(n,e){for(let t=ln;t<n.length;t++){let i=n[t],r=i[$e].firstChild;r!==null&&rc(i[$e],i,r,e)}n[fr]!==n[ui]&&e.push(n[fr])}var Xv=[];function Db(n){return n[dr]??Ib(n)}function Ib(n){let e=Xv.pop()??Object.create(Pb);return e.lView=n,e}function Rb(n){n.lView[dr]!==n&&(n.lView=null,Xv.push(n))}var Pb=bt(de({},zp),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{go(n.lView)},consumerOnSignalRead(){this.lView[dr]=this}});function Yv(n){return Jv(n[mo])}function Zv(n){return Jv(n[In])}function Jv(n){for(;n!==null&&!di(n);)n=n[In];return n}var Kv=100;function Qv(n,e=!0,t=0){let i=n[ai],r=i.rendererFactory,s=!1;s||r.begin?.();try{Nb(n,t)}catch(o){throw e&&$v(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function Nb(n,e){qu(n,e);let t=0;for(;yd(n);){if(t===Kv)throw new ye(103,!1);t++,qu(n,1)}}function Lb(n,e,t,i){let r=e[De];if((r&256)===256)return;let s=!1;!s&&e[ai].inlineEffectRunner?.flush(),xd(e);let o=null,a=null;!s&&Ob(n)&&(a=Db(e),o=Hp(a));try{Mg(e),rS(n.bindingStartIndex),t!==null&&Uv(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&Ga(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Wa(e,d,0,null),Mu(e,0)}if(Fb(e),ey(e,0),n.contentQueries!==null&&Gv(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&Ga(e,d)}else{let d=n.contentHooks;d!==null&&Wa(e,d,1),Mu(e,1)}Zw(n,e);let l=n.components;l!==null&&ny(e,l,0);let u=n.viewQuery;if(u!==null&&$u(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&Ga(e,d)}else{let d=n.viewHooks;d!==null&&Wa(e,d,2),Mu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[_u]){for(let d of e[_u])d();e[_u]=null}s||(e[De]&=-73)}catch(c){throw go(e),c}finally{a!==null&&(Gp(a,o),Rb(a)),Md()}}function Ob(n){return n.type!==2}function ey(n,e){for(let t=Yv(n);t!==null;t=Zv(t))for(let i=ln;i<t.length;i++){let r=t[i];ty(r,e)}}function Fb(n){for(let e=Yv(n);e!==null;e=Zv(e)){if(!(e[De]&md.HasTransplantedViews))continue;let t=e[rs];for(let i=0;i<t.length;i++){let r=t[i],s=r[Bt];XM(r)}}}function Ub(n,e,t){let i=vr(e,n);ty(i,t)}function ty(n,e){vd(n)&&qu(n,e)}function qu(n,e){let i=n[$e],r=n[De],s=n[dr],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&eu(s)),s&&(s.dirty=!1),n[De]&=-9217,o)Lb(i,n,i.template,n[oi]);else if(r&8192){ey(n,1);let a=i.components;a!==null&&ny(n,a,1)}}function ny(n,e,t){for(let i=0;i<e.length;i++)Ub(n,e[i],t)}function zd(n){for(n[ai].changeDetectionScheduler?.notify();n;){n[De]|=64;let e=vo(n);if(zM(n)&&!e)return n;n=e}return null}var mr=class{get rootNodes(){let e=this._lView,t=e[$e];return rc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[oi]}set context(e){this._lView[oi]=e}get destroyed(){return(this._lView[De]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Bt];if(di(e)){let t=e[Za],i=t?t.indexOf(this):-1;i>-1&&(Gu(e,i),Ja(t,i))}this._attachedToViewContainer=!1}Cv(this._lView[$e],this._lView)}onDestroy(e){Sg(this._lView,e)}markForCheck(){zd(this._cdRefInjectingView||this._lView)}detach(){this._lView[De]&=-129}reattach(){Du(this._lView),this._lView[De]|=128}detectChanges(){this._lView[De]|=1024,Qv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ye(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Ev(this._lView[$e],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ye(902,!1);this._appRef=e,Du(this._lView)}},Mo=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Vb;let n=e;return n})(),kb=Mo,Bb=class extends kb{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=Tb(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new mr(r)}};function Vb(){return Hd(Sn(),At())}function Hd(n,e){return n.type&4?new Bb(e,n,us(n,e)):null}var zk=new RegExp(`^(\\d+)*(${OS}|${LS})*(.*)`);var zb=()=>null;function jm(n,e){return zb(n,e)}var Xu=class{},Yu=class{},sc=class{};function Hb(n){let e=Error(`No component factory found for ${cn(n)}.`);return e[Gb]=n,e}var Gb="ngComponent";var Zu=class{resolveComponentFactory(e){throw Hb(e)}},Sc=(()=>{let e=class e{};e.NULL=new Zu;let n=e;return n})(),So=class{},wc=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>Wb();let n=e;return n})();function Wb(){let n=At(),e=Sn(),t=vr(e.index,n);return(lr(t)?t:n)[un]}var jb=(()=>{let e=class e{};e.\u0275prov=Se({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),Eu={};var Do=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=$b;let n=e;return n})();function $b(n){return qb(Sn(),At(),(n&16)===16)}function qb(n,e,t){if(gd(n)&&!t){let i=vr(n.index,e);return new mr(i,i)}else if(n.type&47){let i=e[Xn];return new mr(i,e)}return null}var iy=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Xb,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),Ju=class extends iy{constructor(e){super(),this._lView=e}onDestroy(e){return Sg(this._lView,e),()=>YM(this._lView,e)}};function Xb(){return new Ju(At())}var $m=new Set;function Gd(n){$m.has(n)||($m.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function qm(...n){}function Yb(){let n=typeof Yt.requestAnimationFrame=="function",e=Yt[n?"requestAnimationFrame":"setTimeout"],t=Yt[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var ft=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Gt(!1),this.onMicrotaskEmpty=new Gt(!1),this.onStable=new Gt(!1),this.onError=new Gt(!1),typeof Zone>"u")throw new ye(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=Yb().nativeRequestAnimationFrame,Kb(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ye(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ye(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Zb,qm,qm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Zb={};function Wd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Jb(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Yt,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,Ku(n),n.isCheckStableRunning=!0,Wd(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),Ku(n))}function Kb(n){let e=()=>{Jb(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(Qb(a))return t.invokeTask(r,s,o,a);try{return Xm(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Ym(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Xm(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Ym(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Ku(n),Wd(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Ku(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Xm(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Ym(n){n._nesting--,Wd(n)}var Qu=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Gt,this.onMicrotaskEmpty=new Gt,this.onStable=new Gt,this.onError=new Gt}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Qb(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function eE(n="zone.js",e){return n==="noop"?new Qu:n==="zone.js"?new ft(e):n}var es=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(es||{}),tE={destroy(){}};function jd(n,e){!e&&YS(jd);let t=e?.injector??oe(Zn);if(!Aw(t))return tE;Gd("NgAfterNextRender");let i=t.get($d),r=i.handler??=new td,s=e?.phase??es.MixedReadWrite,o=()=>{r.unregister(c),a()},a=t.get(iy).onDestroy(o),c=new ed(t,s,()=>{o(),n()});return r.register(c),{destroy:o}}var ed=class{constructor(e,t,i){this.phase=t,this.callbackFn=i,this.zone=e.get(ft),this.errorHandler=e.get(Yn,null,{optional:!0})}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},td=class{constructor(){this.executingCallbacks=!1,this.buckets={[es.EarlyRead]:new Set,[es.Write]:new Set,[es.MixedReadWrite]:new Set,[es.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){this.executingCallbacks=!0;for(let e of Object.values(this.buckets))for(let t of e)t.invoke();this.executingCallbacks=!1;for(let e of this.deferredCallbacks)this.buckets[e.phase].add(e);this.deferredCallbacks.clear()}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},$d=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r();this.handler?.execute()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Se({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function nd(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=xm(r,a);else if(s==2){let c=a,l=e[++o];i=xm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var oc=class extends Sc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Pi(e);return new ls(t,this.ngModule)}};function Zm(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function nE(n){let e=n.toLowerCase();return e==="svg"?HM:e==="math"?GM:null}var id=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=gc(i);let r=this.injector.get(e,Eu,i);return r!==Eu||t===Eu?r:this.parentInjector.get(e,t,i)}},ls=class extends sc{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Zm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Zm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=FM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof dn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new id(e,s):e,a=o.get(So,null);if(a===null)throw new ye(407,!1);let c=o.get(jb,null),l=o.get($d,null),u=o.get(Xu,null),d={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l,changeDetectionScheduler:u},h=a.createRenderer(null,this.componentDef),m=this.componentDef.selectors[0][0]||"div",g=i?tb(h,i,this.componentDef.encapsulation,o):bv(h,m,nE(m)),_=512;this.componentDef.signals?_|=4096:this.componentDef.onPush||(_|=16);let p=null;g!==null&&(p=Cd(g,o,!0));let f=Vv(0,null,null,1,0,null,null,null,null,null,null),S=Mc(null,f,null,_,null,null,d,h,o,null,p);xd(S);let x,w;try{let D=this.componentDef,C,A=null;D.findHostDirectiveDefs?(C=[],A=new Map,D.findHostDirectiveDefs(D,C,A),C.push(D)):C=[D];let B=iE(S,g),X=rE(B,g,D,C,S,d,h);w=xg(f,hr),g&&aE(h,D,g,i),t!==void 0&&cE(w,this.ngContentSelectors,t),x=oE(X,D,C,A,S,[lE]),Vd(f,S,null)}finally{Md()}return new rd(this.componentType,x,us(w,S),S,w)}},rd=class extends Yu{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new mr(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;qv(s[$e],s,r,e,t),this.previousInputValues.set(e,t);let o=vr(this._tNode.index,s);zd(o)}}get injector(){return new ur(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function iE(n,e){let t=n[$e],i=hr;return n[i]=e,kd(t,i,2,"#host",null)}function rE(n,e,t,i,r,s,o){let a=r[$e];sE(i,n,e,o);let c=null;e!==null&&(c=Cd(e,r[is]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Mc(r,Bv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&ju(a,n,i.length-1),Bd(r,d),r[n.index]=d}function sE(n,e,t,i){for(let r of n)e.mergedAttrs=pd(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(nd(e,e.mergedAttrs,!0),t!==null&&Pv(i,t,e))}function oE(n,e,t,i,r,s){let o=Sn(),a=r[$e],c=Nn(o,r);zv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=as(r,a,d,o);cs(h,r)}Hv(a,r,o),c&&cs(c,r);let l=as(r,a,o.directiveStart+o.componentOffset,o);if(n[oi]=r[oi]=l,s!==null)for(let u of s)u(l,e);return kv(a,o,r),l}function aE(n,e,t,i){if(i)Au(n,t,["ng-version","17.2.2"]);else{let{attrs:r,classes:s}=UM(e.selectors[0]);r&&Au(n,t,r),s&&s.length>0&&Rv(n,t,s.join(" "))}}function cE(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function lE(){let n=Sn();rv(At()[$e],n)}var ds=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=uE;let n=e;return n})();function uE(){let n=Sn();return sy(n,At())}var dE=ds,ry=class extends dE{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return us(this._hostTNode,this._hostLView)}get injector(){return new ur(this._hostTNode,this._hostLView)}get parentInjector(){let e=Rd(this._hostTNode,this._hostLView);if(ov(e)){let t=tc(e,this._hostLView),i=ec(e),r=t[$e].data[i+8];return new ur(r,t)}else return new ur(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Jm(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-ln}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=jm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Wm(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!JS(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ls(Pi(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let _=(o?l:this.parentInjector).get(dn,null);_&&(s=_)}let u=Pi(c.componentType??{}),d=jm(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,Wm(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(qM(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Bt],l=new ry(c,c[Pn],c[Bt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Cb(o,r,s,i),e.attachToViewContainerRef(),Og(Tu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Jm(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Gu(this._lContainer,t);i&&(Ja(Tu(this._lContainer),t),Cv(i[$e],i))}detach(e){let t=this._adjustIndex(e,-1),i=Gu(this._lContainer,t);return i&&Ja(Tu(this._lContainer),t)!=null?new mr(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Jm(n){return n[Za]}function Tu(n){return n[Za]||(n[Za]=[])}function sy(n,e){let t,i=e[n.index];return di(i)?t=i:(t=Sb(i,e,null,n),e[n.index]=t,Bd(e,t)),fE(t,e,n,i),new ry(t,n,e)}function hE(n,e){let t=n[un],i=t.createComment(""),r=Nn(e,n),s=Fd(t,r);return ic(t,s,i,zw(t,r),!1),i}var fE=pE;function pE(n,e,t,i){if(n[fr])return;let r;t.type&8?r=li(i):r=hE(e,t),n[fr]=r}var sd=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},od=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)qd(e,t).matches!==null&&this.queries[t].setDirty()}},ad=class{constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=SE(e):this.predicate=e}},cd=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},ld=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,mE(t,s)),this.matchTNodeWithReadOption(e,t,ja(t,e,s,!1,!1))}else i===Mo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ja(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Li||r===ds||r===Mo&&t.type&4)this.addMatch(t.index,-2);else{let s=ja(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function mE(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function gE(n,e){return n.type&11?us(n,e):n.type&4?Hd(n,e):null}function vE(n,e,t,i){return t===-1?gE(e,n):t===-2?yE(n,e,i):as(n,n[$e],t,e)}function yE(n,e,t){if(t===Li)return us(e,n);if(t===Mo)return Hd(e,n);if(t===ds)return sy(e,n)}function oy(n,e,t,i){let r=e[ci].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(vE(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function ud(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=oy(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=ln;d<u.length;d++){let h=u[d];h[To]===h[Bt]&&ud(h[$e],h,l,i)}if(u[rs]!==null){let d=u[rs];for(let h=0;h<d.length;h++){let m=d[h];ud(m[$e],m,l,i)}}}}}return i}function _E(n,e){return n[ci].queries[e].queryList}function xE(n,e,t){let i=new Ru((t&4)===4);return rb(n,e,i,i.destroy),(e[ci]??=new od).queries.push(new sd(i))-1}function ME(n,e,t){let i=yr();return i.firstCreatePass&&(wE(i,new ad(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),xE(i,At(),e)}function SE(n){return n.split(",").map(e=>e.trim())}function wE(n,e,t){n.queries===null&&(n.queries=new cd),n.queries.track(new ld(e,t))}function qd(n,e){return n.queries.getByIndex(e)}function bE(n,e){let t=n[$e],i=qd(t,e);return i.crossesNgTemplate?ud(t,n,e,[]):oy(t,n,i,e)}function EE(n){let e=[],t=new Map;function i(r){let s=t.get(r);if(!s){let o=n(r);t.set(r,s=o.then(DE))}return s}return ac.forEach((r,s)=>{let o=[];r.templateUrl&&o.push(i(r.templateUrl).then(l=>{r.template=l}));let a=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=a,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let l=r.styles.length,u=r.styleUrls;r.styleUrls.forEach((d,h)=>{a.push(""),o.push(i(d).then(m=>{a[l+h]=m,u.splice(u.indexOf(d),1),u.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&o.push(i(r.styleUrl).then(l=>{a.push(l),r.styleUrl=void 0}));let c=Promise.all(o).then(()=>IE(s));e.push(c)}),CE(),Promise.all(e).then(()=>{})}var ac=new Map,TE=new Set;function CE(){let n=ac;return ac=new Map,n}function AE(){return ac.size===0}function DE(n){return typeof n=="string"?n:n.text()}function IE(n){TE.delete(n)}function Xd(n){let e=n.inputConfig,t={};for(let i in e)if(e.hasOwnProperty(i)){let r=e[i];Array.isArray(r)&&r[3]&&(t[i]=r[3])}n.inputTransforms=t}var Ni=class{},wo=class{};var cc=class extends Ni{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new oc(this);let r=fg(e);this._bootstrapComponents=wv(r.bootstrap),this._r3Injector=gv(e,t,[{provide:Ni,useValue:this},{provide:Sc,useValue:this.componentFactoryResolver},...i],cn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},lc=class extends wo{constructor(e){super(),this.moduleType=e}create(e){return new cc(this.moduleType,e,[])}};function RE(n,e,t){return new cc(n,e,t)}var dd=class extends Ni{constructor(e){super(),this.componentFactoryResolver=new oc(this),this.instance=null;let t=new _o([...e.providers,{provide:Ni,useValue:this},{provide:Sc,useValue:this.componentFactoryResolver}],e.parent||Id(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function bc(n,e,t=null){return new dd({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Ec=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new kt(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function PE(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Yd(n,e,t,i){let r=At(),s=sS();if(PE(r,s,e)){let o=yr(),a=dS();yb(a,r,n,e,t,i)}return Yd}function Km(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";qv(n,t,s[o],o,i)}function NE(n,e,t,i,r,s){let o=e.consts,a=Cm(o,r),c=kd(e,n,2,i,a);return ab(e,t,c,Cm(o,s)),c.attrs!==null&&nd(c,c.attrs,!1),c.mergedAttrs!==null&&nd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function ay(n,e,t,i){let r=At(),s=yr(),o=hr+n,a=r[un],c=s.firstCreatePass?NE(o,s,r,e,t,i):s.data[o],l=LE(s,r,c,a,e,n);r[o]=l;let u=_g(c);return fc(c,!0),Pv(a,l,c),(c.flags&32)!==32&&Ng()&&Dv(s,r,l,c),ZM()===0&&cs(l,r),JM(),u&&(Kw(s,r,c),kv(s,c,r)),i!==null&&Qw(r,c),ay}function cy(){let n=Sn();Eg()?iS():(n=n.parent,fc(n,!1));let e=n;eS(e)&&tS(),KM();let t=yr();return t.firstCreatePass&&(rv(t,n),yg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&rw(e)&&Km(t,e,At(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&sw(e)&&Km(t,e,At(),e.stylesWithoutHost,!1),cy}function Zd(n,e,t,i){return ay(n,e,t,i),cy(),Zd}var LE=(n,e,t,i,r,s)=>(Lg(!0),bv(i,r,hS()));var uc="en-US";var OE=uc;function FE(n){typeof n=="string"&&(OE=n.toLowerCase().replace(/_/g,"-"))}function Jd(n,e,t,i){let r=At(),s=yr(),o=Sn();return kE(s,r,r[un],o,n,e,i),Jd}function UE(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[po],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function kE(n,e,t,i,r,s,o){let a=_g(i),l=n.firstCreatePass&&jv(n),u=e[oi],d=Wv(e),h=!0;if(i.type&3||o){let _=Nn(i,e),p=o?o(_):_,f=d.length,S=o?w=>o(li(w[i.index])):i.index,x=null;if(!o&&a&&(x=UE(n,e,r,i.index)),x!==null){let w=x.__ngLastListenerFn__||x;w.__ngNextListenerFn__=s,x.__ngLastListenerFn__=s,h=!1}else{s=eg(i,e,u,s,!1);let w=t.listen(p,r,s);d.push(s,w),l&&l.push(r,S,f,f+1)}}else s=eg(i,e,u,s,!1);let m=i.outputs,g;if(h&&m!==null&&(g=m[r])){let _=g.length;if(_)for(let p=0;p<_;p+=2){let f=g[p],S=g[p+1],D=e[f][S].subscribe(s),C=d.length;if(d.push(s,D),l){let A=typeof D=="function"?C+1:-(C+1);l.push(r,i.index,C,A)}}}}function Qm(n,e,t,i){try{return jn(6,e,t),t(i)!==!1}catch(r){return $v(n,r),!1}finally{jn(7,e,t)}}function eg(n,e,t,i,r){return function s(o){if(o===Function)return i;let a=n.componentOffset>-1?vr(n.index,e):e;zd(a);let c=Qm(e,t,i,o),l=s.__ngNextListenerFn__;for(;l;)c=Qm(e,t,l,o)&&c,l=l.__ngNextListenerFn__;return r&&c===!1&&o.preventDefault(),c}}function Gk(n,e,t){ME(n,e,t)}function BE(n){let e=At(),t=yr(),i=Tg();_d(i+1);let r=qd(t,i);if(n.dirty&&$M(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=bE(e,i);n.reset(s,pS),n.notifyOnChanges()}return!0}return!1}function VE(){return _E(At(),Tg())}function Wk(n,e=""){let t=At(),i=yr(),r=n+hr,s=i.firstCreatePass?kd(i,r,1,e,null):i.data[r],o=zE(i,t,s,e,n);t[r]=o,Ng()&&Dv(i,t,o,s),fc(s,!1)}var zE=(n,e,t,i,r)=>(Lg(!0),Iw(e[un],i));var HE=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=Jg(!1,i.type),s=r.length>0?bc([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Se({token:e,providedIn:"environment",factory:()=>new e(Ee(dn))});let n=e;return n})();function ly(n){Gd("NgStandalone"),n.getStandaloneInjector=e=>e.get(HE).getOrCreateStandaloneInjector(n)}var za=null;function GE(n){za!==null&&(n.defaultEncapsulation!==za.defaultEncapsulation||n.preserveWhitespaces!==za.preserveWhitespaces)||(za=n)}var Tc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var Kd=new Le(""),Io=new Le(""),Cc=(()=>{let e=class e{constructor(i,r,s){this._ngZone=i,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._callbacks=[],this.taskTrackingZone=null,Qd||(WE(s),s.addToWindow(r)),this._watchAngularEvents(),i.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ft.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&this._pendingCount===0&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb()}});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>r.updateCb&&r.updateCb(i)?(clearTimeout(r.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,r,s){let o=-1;r&&r>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),i()},r)),this._callbacks.push({doneCb:i,timeoutId:o,updateCb:s})}whenStable(i,r,s){if(s&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,r,s),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,r,s){return[]}};e.\u0275fac=function(r){return new(r||e)(Ee(ft),Ee(Ac),Ee(Io))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),Ac=(()=>{let e=class e{constructor(){this._applications=new Map}registerApplication(i,r){this._applications.set(i,r)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,r=!0){return Qd?.findTestabilityInTree(this,i,r)??null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function WE(n){Qd=n}var Qd;function Ro(n){return!!n&&typeof n.then=="function"}function uy(n){return!!n&&typeof n.subscribe=="function"}var Dc=new Le(""),dy=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=oe(Dc,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Ro(o))i.push(o);else if(uy(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),eh=new Le("");function jE(){jp(()=>{throw new ye(600,!1)})}function $E(n){return n.isBoundToModule}function qE(n,e,t){try{let i=t();return Ro(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}function hy(n,e){return Array.isArray(e)?e.reduce(hy,n):de(de({},n),e)}var hs=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=oe(vv),this.afterRenderEffectManager=oe($d),this.componentTypes=[],this.components=[],this.isStable=oe(Ec).hasPendingTasks.pipe(et(i=>!i)),this._injector=oe(dn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof sc;if(!this._injector.get(dy).done){let m=!s&&hg(i),g=!1;throw new ye(405,g)}let a;s?a=i:a=this._injector.get(Sc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=$E(a)?void 0:this._injector.get(Ni),l=r||a.selector,u=a.create(Zn.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Kd,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),qa(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new ye(101,!1);try{this._runningTick=!0,this.detectChangesInAttachedViews()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}detectChangesInAttachedViews(){let i=0;do{if(i===Kv)throw new ye(103,!1);let r=i===0;for(let{_lView:s,notifyErrorHandler:o}of this._views)!r&&!tg(s)||this.detectChangesInView(s,o,r);this.afterRenderEffectManager.execute(),i++}while(this._views.some(({_lView:r})=>tg(r)))}detectChangesInView(i,r,s){let o;s?(o=0,i[De]|=1024):i[De]&64?o=0:o=1,Qv(i,r,o)}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;qa(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(eh,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>qa(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new ye(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function qa(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function tg(n){return yd(n)}var hd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Ic=(()=>{let e=class e{compileModuleSync(i){return new lc(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=fg(i),o=wv(s.declarations).reduce((a,c)=>{let l=Pi(c);return l&&a.push(new ls(l)),a},[]);return new hd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),XE=new Le("");function YE(n,e,t){let i=new lc(t);return Promise.resolve(i)}function ng(n){for(let e=n.length-1;e>=0;e--)if(n[e]!==void 0)return n[e]}var ZE=(()=>{let e=class e{constructor(){this.zone=oe(ft),this.applicationRef=oe(hs)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function JE(n){return[{provide:ft,useFactory:n},{provide:os,multi:!0,useFactory:()=>{let e=oe(ZE,{optional:!0});return()=>e.initialize()}},{provide:os,multi:!0,useFactory:()=>{let e=oe(eT);return()=>{e.initialize()}}},{provide:vv,useFactory:KE}]}function KE(){let n=oe(ft),e=oe(Yn);return t=>n.runOutsideAngular(()=>e.handleError(t))}function QE(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var eT=(()=>{let e=class e{constructor(){this.subscription=new Ct,this.initialized=!1,this.zone=oe(ft),this.pendingTasks=oe(Ec)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{ft.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{ft.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function tT(){return typeof $localize<"u"&&$localize.locale||uc}var th=new Le("",{providedIn:"root",factory:()=>oe(th,je.Optional|je.SkipSelf)||tT()});var fy=new Le(""),py=(()=>{let e=class e{constructor(i){this._injector=i,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(i,r){let s=eE(r?.ngZone,QE({eventCoalescing:r?.ngZoneEventCoalescing,runCoalescing:r?.ngZoneRunCoalescing}));return s.run(()=>{let o=RE(i.moduleType,this.injector,JE(()=>s)),a=o.injector.get(Yn,null);return s.runOutsideAngular(()=>{let c=s.onError.subscribe({next:l=>{a.handleError(l)}});o.onDestroy(()=>{qa(this._modules,o),c.unsubscribe()})}),qE(a,s,()=>{let c=o.injector.get(dy);return c.runInitializers(),c.donePromise.then(()=>{let l=o.injector.get(th,uc);return FE(l||uc),this._moduleDoBootstrap(o),o})})})}bootstrapModule(i,r=[]){let s=hy({},r);return YE(this.injector,s,i).then(o=>this.bootstrapModuleFactory(o,s))}_moduleDoBootstrap(i){let r=i.injector.get(hs);if(i._bootstrapComponents.length>0)i._bootstrapComponents.forEach(s=>r.bootstrap(s));else if(i.instance.ngDoBootstrap)i.instance.ngDoBootstrap(r);else throw new ye(-403,!1);this._modules.push(i)}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new ye(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());let i=this._injector.get(fy,null);i&&(i.forEach(r=>r()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}};e.\u0275fac=function(r){return new(r||e)(Ee(Zn))},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})(),ho=null,my=new Le("");function nT(n){if(ho&&!ho.get(my,!1))throw new ye(400,!1);jE(),ho=n;let e=n.get(py);return sT(n),e}function nh(n,e,t=[]){let i=`Platform: ${e}`,r=new Le(i);return(s=[])=>{let o=gy();if(!o||o.injector.get(my,!1)){let a=[...t,...s,{provide:r,useValue:!0}];n?n(a):nT(iT(a,i))}return rT(r)}}function iT(n=[],e){return Zn.create({name:e,providers:[{provide:vc,useValue:"platform"},{provide:fy,useValue:new Set([()=>ho=null])},...n]})}function rT(n){let e=gy();if(!e)throw new ye(401,!1);return e}function gy(){return ho?.get(py)??null}function sT(n){n.get(wd,null)?.forEach(t=>t())}var vy=nh(null,"core",[]),yy=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(r){return new(r||e)(Ee(hs))},e.\u0275mod=gr({type:e}),e.\u0275inj=_r({});let n=e;return n})();function Po(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function _y(n){let e=Pi(n);if(!e)return null;let t=new ls(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var wy=null;function Mr(){return wy}function by(n){wy??=n}var Rc=class{};var tn=new Le(""),oh=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(oT),providedIn:"platform"});let n=e;return n})(),Ey=new Le(""),oT=(()=>{let e=class e extends oh{constructor(){super(),this._doc=oe(tn),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Mr().getBaseHref(this._doc)}onPopState(i){let r=Mr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=Mr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function ah(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function xy(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function hi(n){return n&&n[0]!=="?"?"?"+n:n}var fi=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(ch),providedIn:"root"});let n=e;return n})(),Ty=new Le(""),ch=(()=>{let e=class e extends fi{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??oe(tn).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return ah(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+hi(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+hi(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+hi(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ee(oh),Ee(Ty,8))},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Cy=(()=>{let e=class e extends fi{constructor(i,r){super(),this._platformLocation=i,this._baseHref="",this._removeListenerFns=[],r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}path(i=!1){let r=this._platformLocation.hash??"#";return r.length>0?r.substring(1):r}prepareExternalUrl(i){let r=ah(this._baseHref,i);return r.length>0?"#"+r:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+hi(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+hi(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(Ee(oh),Ee(Ty,8))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),fs=(()=>{let e=class e{constructor(i){this._subject=new Gt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=lT(xy(My(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+hi(r))}normalize(i){return e.stripTrailingSlash(cT(this._basePath,My(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+hi(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+hi(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=hi,e.joinWithSlash=ah,e.stripTrailingSlash=xy,e.\u0275fac=function(r){return new(r||e)(Ee(fi))},e.\u0275prov=Se({token:e,factory:()=>aT(),providedIn:"root"});let n=e;return n})();function aT(){return new fs(Ee(fi))}function cT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function My(n){return n.replace(/\/index.html$/,"")}function lT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Ay(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Dy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=gr({type:e}),e.\u0275inj=_r({});let n=e;return n})(),lh="browser",uT="server";function dT(n){return n===lh}function uh(n){return n===uT}var Iy=(()=>{let e=class e{};e.\u0275prov=Se({token:e,providedIn:"root",factory:()=>dT(oe(Oi))?new rh(oe(tn),window):new sh});let n=e;return n})(),rh=class{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=hT(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function hT(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var sh=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Pc=class{};var fh=class extends Rc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},ph=class n extends fh{static makeCurrent(){by(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=mT();return t==null?null:gT(t)}resetBaseElement(){No=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Ay(document.cookie,e)}},No=null;function mT(){return No=No||document.querySelector("base"),No?No.getAttribute("href"):null}function gT(n){return new URL(n,document.baseURI).pathname}var mh=class{addToWindow(e){Yt.getAngularTestability=(i,r=!0)=>{let s=e.findTestabilityInTree(i,r);if(s==null)throw new ye(5103,!1);return s},Yt.getAllAngularTestabilities=()=>e.getAllTestabilities(),Yt.getAllAngularRootElements=()=>e.getAllRootElements();let t=i=>{let r=Yt.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&i()};r.forEach(a=>{a.whenStable(o)})};Yt.frameworkStabilizers||(Yt.frameworkStabilizers=[]),Yt.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,i){if(t==null)return null;let r=e.getTestability(t);return r??(i?Mr().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},vT=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),gh=new Le(""),Ly=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new ye(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(Ee(gh),Ee(ft))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),Nc=class{constructor(e){this._doc=e}},dh="ng-app-id",Oy=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=uh(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${dh}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(dh),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(dh,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(Ee(tn),Ee(mc),Ee(bd,8),Ee(Oi))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),hh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},yh=/%COMP%/g,Fy="%COMP%",yT=`_nghost-${Fy}`,_T=`_ngcontent-${Fy}`,xT=!0,MT=new Le("",{providedIn:"root",factory:()=>xT});function ST(n){return _T.replace(yh,n)}function wT(n){return yT.replace(yh,n)}function Uy(n,e){return e.map(t=>t.replace(yh,n))}var Ry=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=uh(c),this.defaultRenderer=new Lo(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===qn.ShadowDom&&(r=bt(de({},r),{encapsulation:qn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Lc?s.applyToHost(i):s instanceof Oo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case qn.Emulated:o=new Lc(l,u,r,this.appId,d,a,c,h);break;case qn.ShadowDom:return new vh(l,u,i,r,a,c,this.nonce,h);default:o=new Oo(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(Ee(Ly),Ee(Oy),Ee(mc),Ee(MT),Ee(tn),Ee(Oi),Ee(ft),Ee(bd))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),Lo=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(hh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Py(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Py(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ye(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=hh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=hh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(xr.DashCase|xr.Important)?e.style.setProperty(t,i,r&xr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&xr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Mr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Py(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var vh=class extends Lo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Uy(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Oo=class extends Lo{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Uy(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Lc=class extends Oo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=ST(l),this.hostAttr=wT(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},bT=(()=>{let e=class e extends Nc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(Ee(tn))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})(),Ny=["alt","control","meta","shift"],ET={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},TT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},CT=(()=>{let e=class e extends Nc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Mr().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Ny.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=ET[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Ny.forEach(a=>{if(a!==s){let c=TT[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(Ee(tn))},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})();function AT(){ph.makeCurrent()}function DT(){return new Yn}function IT(){return Ug(document),document}var RT=[{provide:Oi,useValue:lh},{provide:wd,useValue:AT,multi:!0},{provide:tn,useFactory:IT,deps:[]}],F3=nh(vy,"browser",RT),PT=new Le(""),NT=[{provide:Io,useClass:mh,deps:[]},{provide:Kd,useClass:Cc,deps:[ft,Ac,Io]},{provide:Cc,useClass:Cc,deps:[ft,Ac,Io]}],LT=[{provide:vc,useValue:"root"},{provide:Yn,useFactory:DT,deps:[]},{provide:gh,useClass:bT,multi:!0,deps:[tn,ft,Oi]},{provide:gh,useClass:CT,multi:!0,deps:[tn]},Ry,Oy,Ly,{provide:So,useExisting:Ry},{provide:Pc,useClass:vT,deps:[]},[]],U3=(()=>{let e=class e{constructor(i){}static withServerTransition(i){return{ngModule:e,providers:[{provide:mc,useValue:i.appId}]}}};e.\u0275fac=function(r){return new(r||e)(Ee(PT,12))},e.\u0275mod=gr({type:e}),e.\u0275inj=_r({providers:[...LT,...NT],imports:[Dy,yy]});let n=e;return n})();var ky=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(Ee(tn))},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ke="primary",Zo=Symbol("RouteTitle"),wh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ys(n){return new wh(n)}function FT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function UT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Jn(n[t],e[t]))return!1;return!0}function Jn(n,e){let t=n?bh(n):void 0,i=e?bh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!qy(n[r],e[r]))return!1;return!0}function bh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function qy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function Xy(n){return n.length>0?n[n.length-1]:null}function Hi(n){return hu(n)?n:Ro(n)?St(Promise.resolve(n)):Ce(n)}var kT={exact:Zy,subset:Jy},Yy={exact:BT,subset:VT,ignored:()=>!0};function By(n,e,t){return kT[t.paths](n.root,e.root,t.matrixParams)&&Yy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function BT(n,e){return Jn(n,e)}function Zy(n,e,t){if(!wr(n.segments,e.segments)||!Uc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!Zy(n.children[i],e.children[i],t))return!1;return!0}function VT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>qy(n[t],e[t]))}function Jy(n,e,t){return Ky(n,e,e.segments,t)}function Ky(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!wr(r,t)||e.hasChildren()||!Uc(r,t,i))}else if(n.segments.length===t.length){if(!wr(n.segments,t)||!Uc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Jy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!wr(n.segments,r)||!Uc(n.segments,r,i)||!n.children[ke]?!1:Ky(n.children[ke],e,s,i)}}function Uc(n,e,t){return e.every((i,r)=>Yy[t](n[r].parameters,i.parameters))}var ki=class{constructor(e=new it([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){return GT.serialize(this)}},it=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return kc(this)}},Sr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ys(this.parameters),this._parameterMap}toString(){return e_(this)}};function zT(n,e){return wr(n,e)&&n.every((t,i)=>Jn(t.parameters,e[i].parameters))}function wr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function HT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===ke&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==ke&&(t=t.concat(e(r,i)))}),t}var Jo=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>new Ho,providedIn:"root"});let n=e;return n})(),Ho=class{parse(e){let t=new Th(e);return new ki(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Fo(e.root,!0)}`,i=$T(e.queryParams),r=typeof e.fragment=="string"?`#${WT(e.fragment)}`:"";return`${t}${i}${r}`}},GT=new Ho;function kc(n){return n.segments.map(e=>e_(e)).join("/")}function Fo(n,e){if(!n.hasChildren())return kc(n);if(e){let t=n.children[ke]?Fo(n.children[ke],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==ke&&i.push(`${r}:${Fo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=HT(n,(i,r)=>r===ke?[Fo(n.children[ke],!1)]:[`${r}:${Fo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[ke]!=null?`${kc(n)}/${t[0]}`:`${kc(n)}/(${t.join("//")})`}}function Qy(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Oc(n){return Qy(n).replace(/%3B/gi,";")}function WT(n){return encodeURI(n)}function Eh(n){return Qy(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Bc(n){return decodeURIComponent(n)}function Vy(n){return Bc(n.replace(/\+/g,"%20"))}function e_(n){return`${Eh(n.path)}${jT(n.parameters)}`}function jT(n){return Object.entries(n).map(([e,t])=>`;${Eh(e)}=${Eh(t)}`).join("")}function $T(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Oc(t)}=${Oc(r)}`).join("&"):`${Oc(t)}=${Oc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var qT=/^[^\/()?;#]+/;function _h(n){let e=n.match(qT);return e?e[0]:""}var XT=/^[^\/()?;=#]+/;function YT(n){let e=n.match(XT);return e?e[0]:""}var ZT=/^[^=?&#]+/;function JT(n){let e=n.match(ZT);return e?e[0]:""}var KT=/^[^&#]+/;function QT(n){let e=n.match(KT);return e?e[0]:""}var Th=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new it([],{}):new it([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[ke]=new it(e,t)),i}parseSegment(){let e=_h(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ye(4009,!1);return this.capture(e),new Sr(Bc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=YT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=_h(this.remaining);r&&(i=r,this.capture(i))}e[Bc(t)]=Bc(i)}parseQueryParam(e){let t=JT(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=QT(this.remaining);o&&(i=o,this.capture(i))}let r=Vy(t),s=Vy(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=_h(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ye(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=ke);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[ke]:new it([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ye(4011,!1)}};function t_(n){return n.segments.length>0?new it([],{[ke]:n}):n}function n_(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=n_(r);if(i===ke&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new it(n.segments,e);return eC(t)}function eC(n){if(n.numberOfChildren===1&&n.children[ke]){let e=n.children[ke];return new it(n.segments.concat(e.segments),e.children)}return n}function _s(n){return n instanceof ki}function tC(n,e,t=null,i=null){let r=i_(n);return r_(r,e,t,i)}function i_(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new it(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=t_(i);return e??r}function r_(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return xh(r,r,r,t,i);let s=nC(e);if(s.toRoot())return xh(r,r,new it([],{}),t,i);let o=iC(s,r,n),a=o.processChildren?Bo(o.segmentGroup,o.index,s.commands):o_(o.segmentGroup,o.index,s.commands);return xh(r,o.segmentGroup,a,t,i)}function Vc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Go(n){return typeof n=="object"&&n!=null&&n.outlets}function xh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=s_(n,e,t);let a=t_(n_(o));return new ki(a,s,r)}function s_(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=s_(s,e,t)}),new it(n.segments,i)}var zc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Vc(i[0]))throw new ye(4003,!1);let r=i.find(Go);if(r&&r!==Xy(i))throw new ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function nC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new zc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new zc(t,e,i)}var gs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function iC(n,e,t){if(n.isAbsolute)return new gs(e,!0,0);if(!t)return new gs(e,!1,NaN);if(t.parent===null)return new gs(t,!0,0);let i=Vc(n.commands[0])?0:1,r=t.segments.length-1+i;return rC(t,r,n.numberOfDoubleDots)}function rC(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new ye(4005,!1);r=i.segments.length}return new gs(i,!1,r-s)}function sC(n){return Go(n[0])?n[0].outlets:{[ke]:n}}function o_(n,e,t){if(n??=new it([],{}),n.segments.length===0&&n.hasChildren())return Bo(n,e,t);let i=oC(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new it(n.segments.slice(0,i.pathIndex),{});return s.children[ke]=new it(n.segments.slice(i.pathIndex),n.children),Bo(s,0,r)}else return i.match&&r.length===0?new it(n.segments,{}):i.match&&!n.hasChildren()?Ch(n,e,t):i.match?Bo(n,0,r):Ch(n,e,t)}function Bo(n,e,t){if(t.length===0)return new it(n.segments,{});{let i=sC(t),r={};if(Object.keys(i).some(s=>s!==ke)&&n.children[ke]&&n.numberOfChildren===1&&n.children[ke].segments.length===0){let s=Bo(n.children[ke],e,t);return new it(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=o_(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new it(n.segments,r)}}function oC(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Go(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Hy(c,l,o))return s;i+=2}else{if(!Hy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ch(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Go(s)){let c=aC(s.outlets);return new it(i,c)}if(r===0&&Vc(t[0])){let c=n.segments[e];i.push(new Sr(c.path,zy(t[0]))),r++;continue}let o=Go(s)?s.outlets[ke]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Vc(a)?(i.push(new Sr(o,zy(a))),r+=2):(i.push(new Sr(o,{})),r++)}return new it(i,{})}function aC(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Ch(new it([],{}),0,i))}),e}function zy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function Hy(n,e,t){return n==t.path&&Jn(e,t.parameters)}var Vo="imperative",Lt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Lt||{}),bn=class{constructor(e,t){this.id=e,this.url=t}},xs=class extends bn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Lt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Kn=class extends bn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Lt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},wn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(wn||{}),Hc=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Hc||{}),Bi=class extends bn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Lt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Vi=class extends bn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Lt.NavigationSkipped}},Wo=class extends bn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Lt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Gc=class extends bn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Lt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ah=class extends bn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Lt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dh=class extends bn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Lt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ih=class extends bn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Lt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rh=class extends bn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Lt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ph=class{constructor(e){this.route=e,this.type=Lt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Nh=class{constructor(e){this.route=e,this.type=Lt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Lh=class{constructor(e){this.snapshot=e,this.type=Lt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oh=class{constructor(e){this.snapshot=e,this.type=Lt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fh=class{constructor(e){this.snapshot=e,this.type=Lt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Uh=class{constructor(e){this.snapshot=e,this.type=Lt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wc=class{constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i,this.type=Lt.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},jo=class{},$o=class{constructor(e){this.url=e}};var kh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Ko,this.attachRef=null}},Ko=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new kh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),jc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Bh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Bh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Vh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Vh(e,this._root).map(t=>t.value)}};function Bh(n,e){if(n===e.value)return e;for(let t of e.children){let i=Bh(n,t);if(i)return i}return null}function Vh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Vh(n,t);if(i.length)return i.unshift(e),i}return[]}var hn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function ms(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var $c=class extends jc{constructor(e,t){super(e),this.snapshot=t,Zh(this,e)}toString(){return this.snapshot.toString()}};function a_(n){let e=cC(n),t=new kt([new Sr("",{})]),i=new kt({}),r=new kt({}),s=new kt({}),o=new kt(""),a=new br(t,i,s,o,r,ke,n,e.root);return a.snapshot=e.root,new $c(new hn(a,[]),e)}function cC(n){let e={},t={},i={},r="",s=new qo([],e,i,r,t,ke,n,null,{});return new qc("",new hn(s,[]))}var br=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(et(l=>l[Zo]))??Ce(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(et(e=>ys(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(et(e=>ys(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Yh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:de(de({},e.params),n.params),data:de(de({},e.data),n.data),resolve:de(de(de(de({},n.data),e.data),r?.data),n._resolvedData)}:i={params:de({},n.params),data:de({},n.data),resolve:de(de({},n.data),n._resolvedData??{})},r&&l_(r)&&(i.resolve[Zo]=r.title),i}var qo=class{get title(){return this.data?.[Zo]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ys(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},qc=class extends jc{constructor(e,t){super(t),this.url=e,Zh(this,t)}toString(){return c_(this._root)}};function Zh(n,e){e.value._routerState=n,e.children.forEach(t=>Zh(n,t))}function c_(n){let e=n.children.length>0?` { ${n.children.map(c_).join(", ")} } `:"";return`${n.value}${e}`}function Mh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Jn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Jn(e.params,t.params)||n.paramsSubject.next(t.params),UT(e.url,t.url)||n.urlSubject.next(t.url),Jn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function zh(n,e){let t=Jn(n.params,e.params)&&zT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||zh(n.parent,e.parent))}function l_(n){return typeof n.title=="string"||n.title===null}var lC=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=ke,this.activateEvents=new Gt,this.deactivateEvents=new Gt,this.attachEvents=new Gt,this.detachEvents=new Gt,this.parentContexts=oe(Ko),this.location=oe(ds),this.changeDetector=oe(Do),this.environmentInjector=oe(dn),this.inputBinder=oe(Kc,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ye(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new ye(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Hh(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=dc({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Ao]});let n=e;return n})(),Hh=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===br?this.route:e===Ko?this.childContexts:this.parent.get(e,t)}},Kc=new Le(""),Gy=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(i){this.unsubscribeFromRouteData(i),this.subscribeToRouteData(i)}unsubscribeFromRouteData(i){this.outletDataSubscriptions.get(i)?.unsubscribe(),this.outletDataSubscriptions.delete(i)}subscribeToRouteData(i){let{activatedRoute:r}=i,s=co([r.queryParams,r.params,r.data]).pipe(_n(([o,a,c],l)=>(c=de(de(de({},o),a),c),l===0?Ce(c):Promise.resolve(c)))).subscribe(o=>{if(!i.isActivated||!i.activatedComponentRef||i.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(i);return}let a=_y(r.component);if(!a){this.unsubscribeFromRouteData(i);return}for(let{templateName:c}of a.inputs)i.activatedComponentRef.setInput(c,o[c])});this.outletDataSubscriptions.set(i,s)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})();function uC(n,e,t){let i=Xo(n,e._root,t?t._root:void 0);return new $c(i,e)}function Xo(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=dC(n,e,t);return new hn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Xo(n,a)),o}}let i=hC(e.value),r=e.children.map(s=>Xo(n,s));return new hn(i,r)}}function dC(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Xo(n,i,r);return Xo(n,i)})}function hC(n){return new br(new kt(n.url),new kt(n.params),new kt(n.queryParams),new kt(n.fragment),new kt(n.data),n.outlet,n.component,n)}var u_="ngNavigationCancelingError";function d_(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=_s(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=h_(!1,wn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function h_(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[u_]=!0,t.cancellationCode=e,t}function fC(n){return f_(n)&&_s(n.url)}function f_(n){return!!n&&n[u_]}var pC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=lg({type:e,selectors:[["ng-component"]],standalone:!0,features:[ly],decls:1,vars:0,template:function(r,s){r&1&&Zd(0,"router-outlet")},dependencies:[lC],encapsulation:2});let n=e;return n})();function mC(n,e){return n.providers&&!n._injector&&(n._injector=bc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Jh(n){let e=n.children&&n.children.map(Jh),t=e?bt(de({},n),{children:e}):de({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==ke&&(t.component=pC),t}function Qn(n){return n.outlet||ke}function gC(n,e){let t=n.filter(i=>Qn(i)===e);return t.push(...n.filter(i=>Qn(i)!==e)),t}function Qo(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var vC=(n,e,t,i)=>et(r=>(new Gh(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Gh=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Mh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=ms(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=ms(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Uh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Oh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Mh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Mh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=Qo(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Xc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},vs=class{constructor(e,t){this.component=e,this.route=t}};function yC(n,e,t){let i=n._root,r=e?e._root:null;return Uo(i,r,t,[i.value])}function _C(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ss(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!kg(n)?n:e.get(n):i}function Uo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=ms(e);return n.children.forEach(o=>{xC(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>zo(a,t.getContext(o),r)),r}function xC(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=MC(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Xc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Uo(n,e,a?a.children:null,i,r):Uo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new vs(a.outlet.component,o))}else o&&zo(e,a,r),r.canActivateChecks.push(new Xc(i)),s.component?Uo(n,null,a?a.children:null,i,r):Uo(n,null,t,i,r);return r}function MC(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!wr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!wr(n.url,e.url)||!Jn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!zh(n,e)||!Jn(n.queryParams,e.queryParams);case"paramsChange":default:return!zh(n,e)}}function zo(n,e,t){let i=ms(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?zo(o,e.children.getContext(s),t):zo(o,null,t):zo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new vs(e.outlet.component,r)):t.canDeactivateChecks.push(new vs(null,r)):t.canDeactivateChecks.push(new vs(null,r))}function ea(n){return typeof n=="function"}function SC(n){return typeof n=="boolean"}function wC(n){return n&&ea(n.canLoad)}function bC(n){return n&&ea(n.canActivate)}function EC(n){return n&&ea(n.canActivateChild)}function TC(n){return n&&ea(n.canDeactivate)}function CC(n){return n&&ea(n.canMatch)}function p_(n){return n instanceof ri||n?.name==="EmptyError"}var Fc=Symbol("INITIAL_VALUE");function Ms(){return _n(n=>co(n.map(e=>e.pipe(si(1),gu(Fc)))).pipe(et(e=>{for(let t of e)if(t!==!0){if(t===Fc)return Fc;if(t===!1||t instanceof ki)return t}return!0}),yn(e=>e!==Fc),si(1)))}function AC(n,e){return Et(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ce(bt(de({},t),{guardsResult:!0})):DC(o,i,r,n).pipe(Et(a=>a&&SC(a)?IC(i,s,n,e):Ce(a)),et(a=>bt(de({},t),{guardsResult:a})))})}function DC(n,e,t,i){return St(n).pipe(Et(r=>OC(r.component,r.route,t,e,i)),Gn(r=>r!==!0,!0))}function IC(n,e,t,i){return St(e).pipe(cr(r=>Yr(PC(r.route.parent,i),RC(r.route,i),LC(n,r.path,t),NC(n,r.route,t))),Gn(r=>r!==!0,!0))}function RC(n,e){return n!==null&&e&&e(new Fh(n)),Ce(!0)}function PC(n,e){return n!==null&&e&&e(new Lh(n)),Ce(!0)}function NC(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ce(!0);let r=i.map(s=>Ua(()=>{let o=Qo(e)??t,a=Ss(s,o),c=bC(a)?a.canActivate(e,n):Fi(o,()=>a(e,n));return Hi(c).pipe(Gn())}));return Ce(r).pipe(Ms())}function LC(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>_C(o)).filter(o=>o!==null).map(o=>Ua(()=>{let a=o.guards.map(c=>{let l=Qo(o.node)??t,u=Ss(c,l),d=EC(u)?u.canActivateChild(i,n):Fi(l,()=>u(i,n));return Hi(d).pipe(Gn())});return Ce(a).pipe(Ms())}));return Ce(s).pipe(Ms())}function OC(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ce(!0);let o=s.map(a=>{let c=Qo(e)??r,l=Ss(a,c),u=TC(l)?l.canDeactivate(n,e,t,i):Fi(c,()=>l(n,e,t,i));return Hi(u).pipe(Gn())});return Ce(o).pipe(Ms())}function FC(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ce(!0);let s=r.map(o=>{let a=Ss(o,n),c=wC(a)?a.canLoad(e,t):Fi(n,()=>a(e,t));return Hi(c)});return Ce(s).pipe(Ms(),m_(i))}function m_(n){return cu(Nt(e=>{if(_s(e))throw d_(n,e)}),et(e=>e===!0))}function UC(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ce(!0);let s=r.map(o=>{let a=Ss(o,n),c=CC(a)?a.canMatch(e,t):Fi(n,()=>a(e,t));return Hi(c)});return Ce(s).pipe(Ms(),m_(i))}var Yo=class{constructor(e){this.segmentGroup=e||null}},Yc=class extends Error{constructor(e){super(),this.urlTree=e}};function ps(n){return qr(new Yo(n))}function kC(n){return qr(new ye(4e3,!1))}function BC(n){return qr(h_(!1,wn.GuardRejected))}var Wh=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ce(i);if(r.numberOfChildren>1||!r.children[ke])return kC(e.redirectTo);r=r.children[ke]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new Yc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new ki(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new it(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new ye(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},jh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function VC(n,e,t,i,r){let s=Kh(n,e,t);return s.matched?(i=mC(e,i),UC(i,e,t,r).pipe(et(o=>o===!0?s:de({},jh)))):Ce(s)}function Kh(n,e,t){if(e.path==="**")return zC(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?de({},jh):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||FT)(t,n,e);if(!r)return de({},jh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?de(de({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function zC(n){return{matched:!0,parameters:n.length>0?Xy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function Wy(n,e,t,i){return t.length>0&&WC(n,t,i)?{segmentGroup:new it(e,GC(i,new it(t,n.children))),slicedSegments:[]}:t.length===0&&jC(n,t,i)?{segmentGroup:new it(n.segments,HC(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new it(n.segments,n.children),slicedSegments:t}}function HC(n,e,t,i){let r={};for(let s of t)if(Qc(n,e,s)&&!i[Qn(s)]){let o=new it([],{});r[Qn(s)]=o}return de(de({},i),r)}function GC(n,e){let t={};t[ke]=e;for(let i of n)if(i.path===""&&Qn(i)!==ke){let r=new it([],{});t[Qn(i)]=r}return t}function WC(n,e,t){return t.some(i=>Qc(n,e,i)&&Qn(i)!==ke)}function jC(n,e,t){return t.some(i=>Qc(n,e,i))}function Qc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function $C(n,e,t,i){return Qn(n)!==i&&(i===ke||!Qc(e,t,n))?!1:Kh(e,n,t).matched}function qC(n,e,t){return e.length===0&&!n.children[t]}var $h=class{};function XC(n,e,t,i,r,s,o="emptyOnly"){return new qh(n,e,t,i,r,o,s).recognize()}var YC=31,qh=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Wh(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new ye(4002,`'${e.segmentGroup}'`)}recognize(){let e=Wy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(et(t=>{let i=new qo([],Object.freeze({}),Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,{},ke,this.rootComponentType,null,{}),r=new hn(i,t),s=new qc("",r),o=tC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,ke).pipe(Ai(i=>{if(i instanceof Yc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Yo?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Yh(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(et(s=>s instanceof hn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return St(r).pipe(cr(s=>{let o=i.children[s],a=gC(t,s);return this.processSegmentGroup(e,a,o,s)}),mu((s,o)=>(s.push(...o),s)),Di(null),pu(),Et(s=>{if(s===null)return ps(i);let o=g_(s);return ZC(o),Ce(o)}))}processSegment(e,t,i,r,s,o){return St(t).pipe(cr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Ai(c=>{if(c instanceof Yo)return Ce(null);throw c}))),Gn(a=>!!a),Ai(a=>{if(p_(a))return qC(i,r,s)?Ce(new $h):ps(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return $C(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):ps(r):ps(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Kh(t,r,s);if(!a)return ps(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>YC&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Et(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=VC(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(_n(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(_n(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new qo(u,h,Object.freeze(de({},this.urlTree.queryParams)),this.urlTree.fragment,KC(i),Qn(i),i.component??i._loadedComponent??null,i,QC(i)),{segmentGroup:g,slicedSegments:_}=Wy(t,u,d,c);if(_.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(et(f=>f===null?null:new hn(m,f)));if(c.length===0&&_.length===0)return Ce(new hn(m,[]));let p=Qn(i)===s;return this.processSegment(l,c,g,_,p?ke:s,!0).pipe(et(f=>new hn(m,f instanceof hn?[f]:[])))}))):ps(t)))}getChildConfig(e,t,i){return t.children?Ce({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ce({routes:t._loadedRoutes,injector:t._loadedInjector}):FC(e,t,i,this.urlSerializer).pipe(Et(r=>r?this.configLoader.loadChildren(e,t).pipe(Nt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):BC(t))):Ce({routes:[],injector:e})}};function ZC(n){n.sort((e,t)=>e.value.outlet===ke?-1:t.value.outlet===ke?1:e.value.outlet.localeCompare(t.value.outlet))}function JC(n){let e=n.value.routeConfig;return e&&e.path===""}function g_(n){let e=[],t=new Set;for(let i of n){if(!JC(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=g_(i.children);e.push(new hn(i.value,r))}return e.filter(i=>!t.has(i))}function KC(n){return n.data||{}}function QC(n){return n.resolve||{}}function eA(n,e,t,i,r,s){return Et(o=>XC(n,e,t,i,o.extractedUrl,r,s).pipe(et(({state:a,tree:c})=>bt(de({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function tA(n,e){return Et(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ce(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of v_(c))o.add(l);let a=0;return St(o).pipe(cr(c=>s.has(c)?nA(c,i,n,e):(c.data=Yh(c,c.parent,n).resolve,Ce(void 0))),Nt(()=>a++),Zr(1),Et(c=>a===o.size?Ce(t):vn))})}function v_(n){let e=n.children.map(t=>v_(t)).flat();return[n,...e]}function nA(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!l_(r)&&(s[Zo]=r.title),iA(s,n,e,i).pipe(et(o=>(n._resolvedData=o,n.data=Yh(n,n.parent,t).resolve,null)))}function iA(n,e,t,i){let r=bh(n);if(r.length===0)return Ce({});let s={};return St(r).pipe(Et(o=>rA(n[o],e,t,i).pipe(Gn(),Nt(a=>{s[o]=a}))),Zr(1),fu(s),Ai(o=>p_(o)?vn:qr(o)))}function rA(n,e,t,i){let r=Qo(e)??i,s=Ss(n,r),o=s.resolve?s.resolve(e,t):Fi(r,()=>s(e,t));return Hi(o)}function Sh(n){return _n(e=>{let t=n(e);return t?St(t).pipe(et(()=>e)):Ce(e)})}var y_=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===ke);return r}getResolvedTitleForRoute(i){return i.data[Zo]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(sA),providedIn:"root"});let n=e;return n})(),sA=(()=>{let e=class e extends y_{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(Ee(ky))},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ta=new Le("",{providedIn:"root",factory:()=>({})}),Zc=new Le(""),Qh=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=oe(Ic)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ce(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Hi(i.loadComponent()).pipe(et(__),Nt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),lo(()=>{this.componentLoaders.delete(i)})),s=new $r(r,()=>new Qt).pipe(jr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ce({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=oA(r,this.compiler,i,this.onLoadEndListener).pipe(lo(()=>{this.childrenLoaders.delete(r)})),a=new $r(o,()=>new Qt).pipe(jr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function oA(n,e,t,i){return Hi(n.loadChildren()).pipe(et(__),Et(r=>r instanceof wo||Array.isArray(r)?Ce(r):St(e.compileModuleAsync(r))),et(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Zc,[],{optional:!0,self:!0}).flat()),{routes:o.map(Jh),injector:s}}))}function aA(n){return n&&typeof n=="object"&&"default"in n}function __(n){return aA(n)?n.default:n}var ef=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(cA),providedIn:"root"});let n=e;return n})(),cA=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),x_=new Le(""),M_=new Le("");function lA(n,e,t){let i=n.get(M_),r=n.get(tn);return n.get(ft).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,Promise.resolve();let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),uA(n))),{onViewTransitionCreated:c}=i;return c&&Fi(n,()=>c({transition:a,from:e,to:t})),o})}function uA(n){return new Promise(e=>{jd(e,{injector:n})})}var tf=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Qt,this.transitionAbortSubject=new Qt,this.configLoader=oe(Qh),this.environmentInjector=oe(dn),this.urlSerializer=oe(Jo),this.rootContexts=oe(Ko),this.location=oe(fs),this.inputBindingEnabled=oe(Kc,{optional:!0})!==null,this.titleStrategy=oe(y_),this.options=oe(ta,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=oe(ef),this.createViewTransition=oe(x_,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ce(void 0),this.rootComponentType=null;let i=s=>this.events.next(new Ph(s)),r=s=>this.events.next(new Nh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(bt(de(de({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new kt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Vo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(yn(o=>o.id!==0),et(o=>bt(de({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),_n(o=>{this.currentTransition=o;let a=!1,c=!1;return Ce(o).pipe(Nt(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?bt(de({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),_n(l=>{let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new Vi(l.id,this.urlSerializer.serialize(l.rawUrl),h,Hc.IgnoredSameUrlNavigation)),l.resolve(null),vn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ce(l).pipe(_n(h=>{let m=this.transitions?.getValue();return this.events.next(new xs(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?vn:Promise.resolve(h)}),eA(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Nt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=bt(de({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Gc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:_,extras:p}=l,f=new xs(h,this.urlSerializer.serialize(m),g,_);this.events.next(f);let S=a_(this.rootComponentType).snapshot;return this.currentTransition=o=bt(de({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:bt(de({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Ce(o)}else{let h="";return this.events.next(new Vi(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Hc.IgnoredByUrlHandlingStrategy)),l.resolve(null),vn}}),Nt(l=>{let u=new Ah(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),et(l=>(this.currentTransition=o=bt(de({},l),{guards:yC(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),AC(this.environmentInjector,l=>this.events.next(l)),Nt(l=>{if(o.guardsResult=l.guardsResult,_s(l.guardsResult))throw d_(this.urlSerializer,l.guardsResult);let u=new Dh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),yn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",wn.GuardRejected),!1)),Sh(l=>{if(l.guards.canActivateChecks.length)return Ce(l).pipe(Nt(u=>{let d=new Ih(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),_n(u=>{let d=!1;return Ce(u).pipe(tA(this.paramsInheritanceStrategy,this.environmentInjector),Nt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",wn.NoDataFromResolver)}}))}),Nt(u=>{let d=new Rh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Sh(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(Nt(m=>{d.component=m}),et(()=>{})));for(let m of d.children)h.push(...u(m));return h};return co(u(l.targetSnapshot.root)).pipe(Di(null),si(1))}),Sh(()=>this.afterPreactivation()),_n(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?St(d).pipe(et(()=>o)):Ce(o)}),et(l=>{let u=uC(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=bt(de({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Nt(()=>{this.events.next(new jo)}),vC(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),si(1),Nt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Kn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),vu(this.transitionAbortSubject.pipe(Nt(l=>{throw l}))),lo(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",wn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ai(l=>{if(c=!0,f_(l))this.events.next(new Bi(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),fC(l)?this.events.next(new $o(l.url)):o.resolve(!1);else{this.events.next(new Wo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return vn}))}))}cancelNavigationTransition(i,r,s){let o=new Bi(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function dA(n){return n!==Vo}var hA=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(fA),providedIn:"root"});let n=e;return n})(),Xh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},fA=(()=>{let e=class e extends Xh{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Pd(e)))(s||e)}})(),e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),S_=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:()=>oe(pA),providedIn:"root"});let n=e;return n})(),pA=(()=>{let e=class e extends S_{constructor(){super(...arguments),this.location=oe(fs),this.urlSerializer=oe(Jo),this.options=oe(ta,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=oe(ef),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ki,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=a_(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof xs)this.stateMemento=this.createStateMemento();else if(i instanceof Vi)this.rawUrlTree=r.initialUrl;else if(i instanceof Gc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof jo?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Bi&&(i.code===wn.GuardRejected||i.code===wn.NoDataFromResolver)?this.restoreHistory(r):i instanceof Wo?this.restoreHistory(r,!0):i instanceof Kn&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=de(de({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=de(de({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Pd(e)))(s||e)}})(),e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ko=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(ko||{});function w_(n,e){n.events.pipe(yn(t=>t instanceof Kn||t instanceof Bi||t instanceof Wo||t instanceof Vi),et(t=>t instanceof Kn||t instanceof Vi?ko.COMPLETE:(t instanceof Bi?t.code===wn.Redirect||t.code===wn.SupersededByNewNavigation:!1)?ko.REDIRECTING:ko.FAILED),yn(t=>t!==ko.REDIRECTING),si(1)).subscribe(()=>{e()})}function mA(n){throw n}var gA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},zi=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=oe(Tc),this.stateManager=oe(S_),this.options=oe(ta,{optional:!0})||{},this.pendingTasks=oe(Ec),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=oe(tf),this.urlSerializer=oe(Jo),this.location=oe(fs),this.urlHandlingStrategy=oe(ef),this._events=new Qt,this.errorHandler=this.options.errorHandler||mA,this.navigated=!1,this.routeReuseStrategy=oe(hA),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=oe(Zc,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!oe(Kc,{optional:!0}),this.eventsSubscription=new Ct,this.isNgZoneEnabled=oe(ft)instanceof ft&&ft.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Bi&&r.code!==wn.Redirect&&r.code!==wn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Kn)this.navigated=!0;else if(r instanceof $o){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||dA(s.source)};this.scheduleNavigation(a,Vo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}_A(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=de({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Jh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=de(de({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=i_(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return r_(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=_s(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Vo,null,r)}navigate(i,r={skipLocationChange:!1}){return yA(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=de({},gA):r===!1?s=de({},vA):s=r,_s(i))return By(this.currentUrlTree,i,s);let o=this.parseUrl(i);return By(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return w_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function yA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new ye(4008,!1)}function _A(n){return!(n instanceof jo)&&!(n instanceof $o)}var nB=(()=>{let e=class e{constructor(i,r,s,o,a,c){this.router=i,this.route=r,this.tabIndexAttribute=s,this.renderer=o,this.el=a,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new Qt,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=i.events.subscribe(u=>{u instanceof Kn&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(i){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",i)}ngOnChanges(i){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(i){i!=null?(this.commands=Array.isArray(i)?i:[i],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(i,r,s,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(i!==0||r||s||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(c,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let i=this.urlTree;this.href=i!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(i)):null;let r=this.href===null?null:xv(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",r)}applyAttributeValue(i,r){let s=this.renderer,o=this.el.nativeElement;r!==null?s.setAttribute(o,i,r):s.removeAttribute(o,i)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};e.\u0275fac=function(r){return new(r||e)(Ui(zi),Ui(br),Nd("tabindex"),Ui(wc),Ui(Li),Ui(fi))},e.\u0275dir=dc({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,s){r&1&&Jd("click",function(a){return s.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Yd("target",s.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[Rn.HasDecoratorInputTransform,"preserveFragment","preserveFragment",Po],skipLocationChange:[Rn.HasDecoratorInputTransform,"skipLocationChange","skipLocationChange",Po],replaceUrl:[Rn.HasDecoratorInputTransform,"replaceUrl","replaceUrl",Po],routerLink:"routerLink"},standalone:!0,features:[Xd,Ao]});let n=e;return n})();var Jc=class{};var xA=(()=>{let e=class e{constructor(i,r,s,o,a){this.router=i,this.injector=s,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(yn(i=>i instanceof Kn),cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(i,r){let s=[];for(let o of r){o.providers&&!o._injector&&(o._injector=bc(o.providers,i,`Route: ${o.path}`));let a=o._injector??i,c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&s.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&s.push(this.processRoutes(c,o.children??o._loadedRoutes))}return St(s).pipe(Xr())}preloadConfig(i,r){return this.preloadingStrategy.preload(r,()=>{let s;r.loadChildren&&r.canLoad===void 0?s=this.loader.loadChildren(i,r):s=Ce(null);let o=s.pipe(Et(a=>a===null?Ce(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??i,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return St([o,a]).pipe(Xr())}else return o})}};e.\u0275fac=function(r){return new(r||e)(Ee(zi),Ee(Ic),Ee(dn),Ee(Jc),Ee(Qh))},e.\u0275prov=Se({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),b_=new Le(""),MA=(()=>{let e=class e{constructor(i,r,s,o,a={}){this.urlSerializer=i,this.transitions=r,this.viewportScroller=s,this.zone=o,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof xs?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=i.navigationTrigger,this.restoredId=i.restoredState?i.restoredState.navigationId:0):i instanceof Kn?(this.lastId=i.id,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.urlAfterRedirects).fragment)):i instanceof Vi&&i.code===Hc.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof Wc&&(i.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(i.position):i.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(i.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(i,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Wc(i,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(r){Lv()},e.\u0275prov=Se({token:e,factory:e.\u0275fac});let n=e;return n})();function SA(n){return n.routerState.root}function na(n,e){return{\u0275kind:n,\u0275providers:e}}function wA(){let n=oe(Zn);return e=>{let t=n.get(hs);if(e!==t.components[0])return;let i=n.get(zi),r=n.get(E_);n.get(nf)===1&&i.initialNavigation(),n.get(T_,null,je.Optional)?.setUpPreloading(),n.get(b_,null,je.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var E_=new Le("",{factory:()=>new Qt}),nf=new Le("",{providedIn:"root",factory:()=>1});function bA(){return na(2,[{provide:nf,useValue:0},{provide:Dc,multi:!0,deps:[Zn],useFactory:e=>{let t=e.get(Ey,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(zi),s=e.get(E_);w_(r,()=>{i(!0)}),e.get(tf).afterPreactivation=()=>(i(!0),s.closed?Ce(void 0):s),r.initialNavigation()}))}}])}function EA(){return na(3,[{provide:Dc,multi:!0,useFactory:()=>{let e=oe(zi);return()=>{e.setUpLocationChangeListener()}}},{provide:nf,useValue:2}])}var T_=new Le("");function TA(n){return na(0,[{provide:T_,useExisting:xA},{provide:Jc,useExisting:n}])}function CA(){return na(8,[Gy,{provide:Kc,useExisting:Gy}])}function AA(n){let e=[{provide:x_,useValue:lA},{provide:M_,useValue:de({skipNextTransition:!!n?.skipInitialTransition},n)}];return na(9,e)}var jy=new Le("ROUTER_FORROOT_GUARD"),DA=[fs,{provide:Jo,useClass:Ho},zi,Ko,{provide:br,useFactory:SA,deps:[zi]},Qh,[]],iB=(()=>{let e=class e{constructor(i){}static forRoot(i,r){return{ngModule:e,providers:[DA,[],{provide:Zc,multi:!0,useValue:i},{provide:jy,useFactory:NA,deps:[[zi,new Ad,new Xg]]},{provide:ta,useValue:r||{}},r?.useHash?RA():PA(),IA(),r?.preloadingStrategy?TA(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?LA(r):[],r?.bindToComponentInputs?CA().\u0275providers:[],r?.enableViewTransitions?AA().\u0275providers:[],OA()]}}static forChild(i){return{ngModule:e,providers:[{provide:Zc,multi:!0,useValue:i}]}}};e.\u0275fac=function(r){return new(r||e)(Ee(jy,8))},e.\u0275mod=gr({type:e}),e.\u0275inj=_r({});let n=e;return n})();function IA(){return{provide:b_,useFactory:()=>{let n=oe(Iy),e=oe(ft),t=oe(ta),i=oe(tf),r=oe(Jo);return t.scrollOffset&&n.setOffset(t.scrollOffset),new MA(r,i,n,e,t)}}}function RA(){return{provide:fi,useClass:Cy}}function PA(){return{provide:fi,useClass:ch}}function NA(n){return"guarded"}function LA(n){return[n.initialNavigation==="disabled"?EA().\u0275providers:[],n.initialNavigation==="enabledBlocking"?bA().\u0275providers:[]]}var $y=new Le("");function OA(){return[{provide:$y,useFactory:wA},{provide:eh,multi:!0,useExisting:$y}]}var Sp="161",oB={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},aB={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FA=0,C_=1,UA=2;var Sx=1,kA=2,_i=3,Qi=0,rn=1,Mi=2,Zi=0,Ws=1,A_=2,D_=3,I_=4,BA=5,Rr=100,VA=101,zA=102,R_=103,P_=104,HA=200,GA=201,WA=202,jA=203,Ff=204,Uf=205,$A=206,qA=207,XA=208,YA=209,ZA=210,JA=211,KA=212,QA=213,eD=214,tD=0,nD=1,iD=2,wl=3,rD=4,sD=5,oD=6,aD=7,wp=0,cD=1,lD=2,Ji=0,uD=1,dD=2,hD=3,fD=4,pD=5,mD=6;var N_=300,Ys=301,Zs=302,kf=303,Bf=304,$l=306,Vf=1e3,Un=1001,zf=1002,Kt=1003,L_=1004;var ia=1005;var nn=1006,rf=1007;var Nr=1008;var Ki=1009,gD=1010,vD=1011,bp=1012,wx=1013,Yi=1014,Si=1015,da=1016,bx=1017,Ex=1018,Lr=1020,yD=1021,kn=1023,_D=1024,xD=1025,Or=1026,Js=1027,MD=1028,Tx=1029,SD=1030,Cx=1031,Ax=1033,sf=33776,of=33777,af=33778,cf=33779,O_=35840,F_=35841,U_=35842,k_=35843,Dx=36196,B_=37492,V_=37496,z_=37808,H_=37809,G_=37810,W_=37811,j_=37812,$_=37813,q_=37814,X_=37815,Y_=37816,Z_=37817,J_=37818,K_=37819,Q_=37820,e0=37821,lf=36492,t0=36494,n0=36495,wD=36283,i0=36284,r0=36285,s0=36286;var bl=2300,El=2301,uf=2302,o0=2400,a0=2401,c0=2402;var Ix=3e3,Fr=3001,bD=3200,ED=3201,Ep=0,TD=1,Tn="",Vt="srgb",bi="srgb-linear",Tp="display-p3",ql="display-p3-linear",Tl="linear",mt="srgb",Cl="rec709",Al="p3";var ws=7680;var l0=519,CD=512,AD=513,DD=514,Rx=515,ID=516,RD=517,PD=518,ND=519,u0=35044;var d0="300 es",Hf=1035,wi=2e3,Dl=2001,er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],h0=1234567,js=Math.PI/180,ha=180/Math.PI;function no(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function Cp(n,e){return(n%e+e)%e}function LD(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function OD(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function FD(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function UD(n,e=1){return e-Math.abs(Cp(n,e*2)-e)}function kD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function BD(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function VD(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zD(n,e){return n+Math.random()*(e-n)}function HD(n){return n*(.5-Math.random())}function GD(n){n!==void 0&&(h0=n);let e=h0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function WD(n){return n*js}function jD(n){return n*ha}function Gf(n){return(n&n-1)===0&&n!==0}function $D(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Il(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qD(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var cB={DEG2RAD:js,RAD2DEG:ha,generateUUID:no,clamp:$t,euclideanModulo:Cp,mapLinear:LD,inverseLerp:OD,lerp:la,damp:FD,pingpong:UD,smoothstep:kD,smootherstep:BD,randInt:VD,randFloat:zD,randFloatSpread:HD,seededRandom:GD,degToRad:WD,radToDeg:jD,isPowerOfTwo:Gf,ceilPowerOfTwo:$D,floorPowerOfTwo:Il,setQuaternionFromProperEuler:qD,normalize:Zt,denormalize:Bs},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],_=r[0],p=r[3],f=r[6],S=r[1],x=r[4],w=r[7],D=r[2],C=r[5],A=r[8];return s[0]=o*_+a*S+c*D,s[3]=o*p+a*x+c*C,s[6]=o*f+a*w+c*A,s[1]=l*_+u*S+d*D,s[4]=l*p+u*x+d*C,s[7]=l*f+u*w+d*A,s[2]=h*_+m*S+g*D,s[5]=h*p+m*x+g*C,s[8]=h*f+m*w+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(df.makeScale(e,t)),this}rotate(e){return this.premultiply(df.makeRotation(-e)),this}translate(e,t){return this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},df=new qe;function Px(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XD(){let n=fa("canvas");return n.style.display="block",n}var f0={};function $s(n){n in f0||(f0[n]=!0,console.warn(n))}var p0=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),m0=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[bi]:{transfer:Tl,primaries:Cl,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:mt,primaries:Cl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ql]:{transfer:Tl,primaries:Al,toReference:n=>n.applyMatrix3(m0),fromReference:n=>n.applyMatrix3(p0)},[Tp]:{transfer:mt,primaries:Al,toReference:n=>n.convertSRGBToLinear().applyMatrix3(m0),fromReference:n=>n.applyMatrix3(p0).convertLinearToSRGB()}},YD=new Set([bi,ql]),ct={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YD.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=el[e].toReference,r=el[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return el[n].primaries},getTransfer:function(n){return n===Tn?Tl:el[n].transfer}};function qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var bs,Rl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=fa("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qs(t[i]/255)*255):t[i]=qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ZD=0,Pl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZD++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ff(r[o].image)):s.push(ff(r[o]))}else s=ff(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ff(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var JD=0,nr=(()=>{class n extends er{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Un,s=Un,o=nn,a=Nr,c=kn,l=Ki,u=n.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JD++}),this.uuid=no(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Fr?Vt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==N_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vf:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case zf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vf:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case zf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Fr:Ix}set encoding(t){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fr?Vt:Tn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=N_,n.DEFAULT_ANISOTROPY=1,n})(),gt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,w=(m+1)/2,D=(f+1)/2,C=(u+h)/4,A=(d+_)/4,B=(g+p)/4;return x>w&&x>D?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=A/i):w>D?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=B/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=B/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wf=class extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?Vt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new nr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Wf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Nl=class extends nr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jf=class extends nr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let D=Math.sqrt(x),C=Math.atan2(D,f*S);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}let w=a*S;if(c=c*p+h*w,l=l*p+m*w,u=u*p+g*w,d=d*p+_*w,p===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pf=new I,g0=new tr,Ur=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),nl.subVectors(this.max,ra),Es.subVectors(e.a,ra),Ts.subVectors(e.b,ra),Cs.subVectors(e.c,ra),Gi.subVectors(Ts,Es),Wi.subVectors(Cs,Ts),Er.subVectors(Es,Cs);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Er.z,Er.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Er.z,0,-Er.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Er.y,Er.x,0];return!mf(t,Es,Ts,Cs,nl)||(t=[1,0,0,0,1,0,0,0,1],!mf(t,Es,Ts,Cs,nl))?!1:(il.crossVectors(Gi,Wi),t=[il.x,il.y,il.z],mf(t,Es,Ts,Cs,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,tl=new Ur,Es=new I,Ts=new I,Cs=new I,Gi=new I,Wi=new I,Er=new I,ra=new I,nl=new I,il=new I,Tr=new I;function mf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);let a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),c=e.dot(Tr),l=t.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var KD=new Ur,sa=new I,gf=new I,Ks=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):KD.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(gf)),this.expandByPoint(sa.copy(e.center).sub(gf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new I,vf=new I,rl=new I,ji=new I,yf=new I,sl=new I,_f=new I,Ll=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vf.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(vf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(rl),a=ji.dot(this.direction),c=-ji.dot(rl),l=ji.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(vf).addScaledVector(rl,h),m}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,r,s){yf.subVectors(t,e),sl.subVectors(i,e),_f.crossVectors(yf,sl);let o=this.direction.dot(_f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let c=a*this.direction.dot(sl.crossVectors(ji,sl));if(c<0)return null;let l=a*this.direction.dot(yf.cross(ji));if(l<0||c+l>o)return null;let u=-a*ji.dot(_f);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,_=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QD,e,eI)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),$i.crossVectors(i,fn),$i.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),$i.crossVectors(i,fn)),$i.normalize(),ol.crossVectors(fn,$i),r[0]=$i.x,r[4]=ol.x,r[8]=fn.x,r[1]=$i.y,r[5]=ol.y,r[9]=fn.y,r[2]=$i.z,r[6]=ol.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],S=i[3],x=i[7],w=i[11],D=i[15],C=r[0],A=r[4],B=r[8],X=r[12],v=r[1],T=r[5],H=r[9],Q=r[13],R=r[2],z=r[6],k=r[10],$=r[14],G=r[3],W=r[7],j=r[11],ee=r[15];return s[0]=o*C+a*v+c*R+l*G,s[4]=o*A+a*T+c*z+l*W,s[8]=o*B+a*H+c*k+l*j,s[12]=o*X+a*Q+c*$+l*ee,s[1]=u*C+d*v+h*R+m*G,s[5]=u*A+d*T+h*z+m*W,s[9]=u*B+d*H+h*k+m*j,s[13]=u*X+d*Q+h*$+m*ee,s[2]=g*C+_*v+p*R+f*G,s[6]=g*A+_*T+p*z+f*W,s[10]=g*B+_*H+p*k+f*j,s[14]=g*X+_*Q+p*$+f*ee,s[3]=S*C+x*v+w*R+D*G,s[7]=S*A+x*T+w*z+D*W,s[11]=S*B+x*H+w*k+D*j,s[15]=S*X+x*Q+w*$+D*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+_*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],S=d*p*l-_*h*l+_*c*m-a*p*m-d*c*f+a*h*f,x=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,w=u*_*l-g*d*l+g*a*m-o*_*m-u*a*f+o*d*f,D=g*d*c-u*_*c-g*a*h+o*_*h+u*a*p-o*d*p,C=t*S+i*x+r*w+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return e[0]=S*A,e[1]=(_*h*s-d*p*s-_*r*m+i*p*m+d*r*f-i*h*f)*A,e[2]=(a*p*s-_*c*s+_*r*l-i*p*l-a*r*f+i*c*f)*A,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*A,e[4]=x*A,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*A,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*A,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*A,e[8]=w*A,e[9]=(g*d*s-u*_*s-g*i*m+t*_*m+u*i*f-t*d*f)*A,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*f+t*a*f)*A,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*A,e[12]=D*A,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*p+t*d*p)*A,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*p-t*a*p)*A,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,_=o*u,p=o*d,f=a*d,S=c*l,x=c*u,w=c*d,D=i.x,C=i.y,A=i.z;return r[0]=(1-(_+f))*D,r[1]=(m+w)*D,r[2]=(g-x)*D,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(h+f))*C,r[6]=(p+S)*C,r[7]=0,r[8]=(g+x)*A,r[9]=(p-S)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=As.set(r[0],r[1],r[2]).length(),o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);let l=1/s,u=1/o,d=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===wi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,_;if(a===wi)g=(o+s)*d,_=-2*d;else if(a===Dl)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},As=new I,On=new _t,QD=new I(0,0,0),eI=new I(1,1,1),$i=new I,ol=new I,fn=new I,v0=new _t,y0=new tr,tI=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return v0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return y0.setFromEuler(this),this.setFromQuaternion(y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ol=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nI=0,_0=new I,Ds=new tr,gi=new _t,al=new I,oa=new I,iI=new I,rI=new tr,x0=new I(1,0,0),M0=new I(0,1,0),S0=new I(0,0,1),sI={type:"added"},oI={type:"removed"},Vn=(()=>{class n extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nI++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,i=new tI,r=new tr,s=new I(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,i){return Ds.setFromAxisAngle(t,i),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(x0,t)}rotateY(t){return this.rotateOnAxis(M0,t)}rotateZ(t){return this.rotateOnAxis(S0,t)}translateOnAxis(t,i){return _0.copy(t).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(x0,t)}translateY(t){return this.translateOnAxis(M0,t)}translateZ(t){return this.translateOnAxis(S0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?al.copy(t):al.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(oa,al,this.up):gi.lookAt(al,oa,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(gi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(sI)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oI)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,iI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,rI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new I(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Fn=new I,vi=new I,xf=new I,yi=new I,Is=new I,Rs=new I,w0=new I,Mf=new I,Sf=new I,wf=new I,Vs=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fn.subVectors(r,t),vi.subVectors(i,t),xf.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(vi),c=Fn.dot(xf),l=vi.dot(vi),u=vi.dot(xf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(o,yi.y),c.addScaledVector(a,yi.z),c)}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),vi.subVectors(e,t),Fn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Fn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Is.subVectors(r,i),Rs.subVectors(s,i),Mf.subVectors(e,i);let c=Is.dot(Mf),l=Rs.dot(Mf);if(c<=0&&l<=0)return t.copy(i);Sf.subVectors(e,r);let u=Is.dot(Sf),d=Rs.dot(Sf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Is,o);wf.subVectors(e,s);let m=Is.dot(wf),g=Rs.dot(wf);if(g>=0&&m<=g)return t.copy(s);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Rs,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return w0.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(w0,a);let f=1/(p+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Is,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function bf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Cp(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=bf(o,s,e+1/3),this.g=bf(o,s,e),this.b=bf(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Nx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=hf(e.r),this.g=hf(e.g),this.b=hf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ct.fromWorkingColorSpace(jt.copy(this),e),Math.round($t(jt.r*255,0,255))*65536+Math.round($t(jt.g*255,0,255))*256+Math.round($t(jt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(jt.copy(this),t);let i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Vt){ct.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,r=jt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(cl);let i=la(qi.h,cl.h,t),r=la(qi.s,cl.s,t),s=la(qi.l,cl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Ze;Ze.NAMES=Nx;var aI=0,Ti=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aI++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Ws,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Uf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ff&&(i.blendSrc=this.blendSrc),this.blendDst!==Uf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fl=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new I,ll=new Xe,Cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=u0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u0&&(e.usage=this.usage),e}};var Ul=class extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var kl=class extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var zt=class extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var cI=0,En=new _t,Ef=new Vn,Ps=new I,pn=new Ur,aa=new Ur,Ot=new I,ti=class n extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cI++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Px(e)?kl:Ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(pn.min,aa.min),pn.expandByPoint(Ot),Ot.addVectors(pn.max,aa.max),pn.expandByPoint(Ot)):(pn.expandByPoint(aa.min),pn.expandByPoint(aa.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(e,l),Ot.add(Ps)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let v=0;v<a;v++)l[v]=new I,u[v]=new I;let d=new I,h=new I,m=new I,g=new Xe,_=new Xe,p=new Xe,f=new I,S=new I;function x(v,T,H){d.fromArray(r,v*3),h.fromArray(r,T*3),m.fromArray(r,H*3),g.fromArray(o,v*2),_.fromArray(o,T*2),p.fromArray(o,H*2),h.sub(d),m.sub(d),_.sub(g),p.sub(g);let Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Q),S.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(Q),l[v].add(f),l[T].add(f),l[H].add(f),u[v].add(S),u[T].add(S),u[H].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let v=0,T=w.length;v<T;++v){let H=w[v],Q=H.start,R=H.count;for(let z=Q,k=Q+R;z<k;z+=3)x(i[z+0],i[z+1],i[z+2])}let D=new I,C=new I,A=new I,B=new I;function X(v){A.fromArray(s,v*3),B.copy(A);let T=l[v];D.copy(T),D.sub(A.multiplyScalar(A.dot(T))).normalize(),C.crossVectors(B,T);let Q=C.dot(u[v])<0?-1:1;c[v*4]=D.x,c[v*4+1]=D.y,c[v*4+2]=D.z,c[v*4+3]=Q}for(let v=0,T=w.length;v<T;++v){let H=w[v],Q=H.start,R=H.count;for(let z=Q,k=Q+R;z<k;z+=3)X(i[z+0]),X(i[z+1]),X(i[z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new Cn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},b0=new _t,Cr=new Ll,ul=new Ks,E0=new I,Ns=new I,Ls=new I,Os=new I,Tf=new I,dl=new I,hl=new Xe,fl=new Xe,pl=new Xe,T0=new I,C0=new I,A0=new I,ml=new I,gl=new I,Bn=class extends Vn{constructor(e=new ti,t=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Tf.fromBufferAttribute(d,e),o?dl.addScaledVector(Tf,u):dl.addScaledVector(Tf.sub(t),u))}t.add(dl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(ul.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(ul,E0)===null||Cr.origin.distanceToSquared(E0)>(e.far-e.near)**2))&&(b0.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(b0),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,D=x;w<D;w+=3){let C=a.getX(w),A=a.getX(w+1),B=a.getX(w+2);r=vl(this,f,e,i,l,u,d,C,A,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let S=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);r=vl(this,o,e,i,l,u,d,S,x,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,D=x;w<D;w+=3){let C=w,A=w+1,B=w+2;r=vl(this,f,e,i,l,u,d,C,A,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let S=p,x=p+1,w=p+2;r=vl(this,o,e,i,l,u,d,S,x,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function lI(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Qi,a),c===null)return null;gl.copy(a),gl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(gl);return l<t.near||l>t.far?null:{distance:l,point:gl.clone(),object:n}}function vl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ns),n.getVertexPosition(c,Ls),n.getVertexPosition(l,Os);let u=lI(n,e,t,i,Ns,Ls,Os,ml);if(u){r&&(hl.fromBufferAttribute(r,a),fl.fromBufferAttribute(r,c),pl.fromBufferAttribute(r,l),u.uv=Vs.getInterpolation(ml,Ns,Ls,Os,hl,fl,pl,new Xe)),s&&(hl.fromBufferAttribute(s,a),fl.fromBufferAttribute(s,c),pl.fromBufferAttribute(s,l),u.uv1=Vs.getInterpolation(ml,Ns,Ls,Os,hl,fl,pl,new Xe),u.uv2=u.uv1),o&&(T0.fromBufferAttribute(o,a),C0.fromBufferAttribute(o,c),A0.fromBufferAttribute(o,l),u.normal=Vs.getInterpolation(ml,Ns,Ls,Os,T0,C0,A0,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};Vs.getNormal(Ns,Ls,Os,d.normal),u.face=d}return u}var pa=class n extends ti{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(d,2));function g(_,p,f,S,x,w,D,C,A,B,X){let v=w/A,T=D/B,H=w/2,Q=D/2,R=C/2,z=A+1,k=B+1,$=0,G=0,W=new I;for(let j=0;j<k;j++){let ee=j*T-Q;for(let re=0;re<z;re++){let Ie=re*v-H;W[_]=Ie*S,W[p]=ee*x,W[f]=R,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[f]=C>0?1:-1,u.push(W.x,W.y,W.z),d.push(re/A),d.push(1-j/B),$+=1}}for(let j=0;j<B;j++)for(let ee=0;ee<A;ee++){let re=h+ee+z*j,Ie=h+ee+z*(j+1),V=h+(ee+1)+z*(j+1),Z=h+(ee+1)+z*j;c.push(re,Ie,Z),c.push(Ie,V,Z),G+=6}a.addGroup(m,G,X),m+=G,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=Qs(n[t]);for(let r in i)e[r]=i[r]}return e}function uI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lx(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var dI={clone:Qs,merge:Jt},hI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hI,this.fragmentShader=fI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=uI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Bl=class extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new I,D0=new Xe,I0=new Xe,qt=class extends Bl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,D0,I0),t.subVectors(I0,D0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Us=1,$f=class extends Vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(Fs,Us,e,t);r.layers=this.layers,this.add(r);let s=new qt(Fs,Us,e,t);s.layers=this.layers,this.add(s);let o=new qt(Fs,Us,e,t);o.layers=this.layers,this.add(o);let a=new qt(Fs,Us,e,t);a.layers=this.layers,this.add(a);let c=new qt(Fs,Us,e,t);c.layers=this.layers,this.add(c);let l=new qt(Fs,Us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vl=class extends nr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qf=class extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fr?Vt:Tn),this.texture=new Vl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pa(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Zi});s.uniforms.tEquirect.value=t;let o=new Bn(r,s),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=nn),new $f(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Cf=new I,pI=new I,mI=new qe,xi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Cf.subVectors(i,t).cross(pI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Cf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mI.getNormalMatrix(e),r=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ar=new Ks,yl=new I,ma=class{constructor(e=new xi,t=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],_=r[10],p=r[11],f=r[12],S=r[13],x=r[14],w=r[15];if(i[0].setComponents(c-s,h-l,p-m,w-f).normalize(),i[1].setComponents(c+s,h+l,p+m,w+f).normalize(),i[2].setComponents(c+o,h+u,p+g,w+S).normalize(),i[3].setComponents(c-o,h-u,p-g,w-S).normalize(),i[4].setComponents(c-a,h-d,p-_,w-x).normalize(),t===wi)i[5].setComponents(c+a,h+d,p+_,w+x).normalize();else if(t===Dl)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ox(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gI(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){let f=g[_];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var zl=class n extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let x=0;x<l;x++){let w=x*d-s;g.push(w,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let x=S+l*f,w=S+l*(f+1),D=S+1+l*(f+1),C=S+1+l*f;m.push(x,w,C),m.push(w,D,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_I=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EI=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,CI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,II=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$I=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qI="gl_FragColor = linearToOutputTexel( gl_FragColor );",XI=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,YI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ER=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,LR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,QR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,w1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,b1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,X1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:vI,alphahash_pars_fragment:yI,alphamap_fragment:_I,alphamap_pars_fragment:xI,alphatest_fragment:MI,alphatest_pars_fragment:SI,aomap_fragment:wI,aomap_pars_fragment:bI,batching_pars_vertex:EI,batching_vertex:TI,begin_vertex:CI,beginnormal_vertex:AI,bsdfs:DI,iridescence_fragment:II,bumpmap_pars_fragment:RI,clipping_planes_fragment:PI,clipping_planes_pars_fragment:NI,clipping_planes_pars_vertex:LI,clipping_planes_vertex:OI,color_fragment:FI,color_pars_fragment:UI,color_pars_vertex:kI,color_vertex:BI,common:VI,cube_uv_reflection_fragment:zI,defaultnormal_vertex:HI,displacementmap_pars_vertex:GI,displacementmap_vertex:WI,emissivemap_fragment:jI,emissivemap_pars_fragment:$I,colorspace_fragment:qI,colorspace_pars_fragment:XI,envmap_fragment:YI,envmap_common_pars_fragment:ZI,envmap_pars_fragment:JI,envmap_pars_vertex:KI,envmap_physical_pars_fragment:uR,envmap_vertex:QI,fog_vertex:eR,fog_pars_vertex:tR,fog_fragment:nR,fog_pars_fragment:iR,gradientmap_pars_fragment:rR,lightmap_fragment:sR,lightmap_pars_fragment:oR,lights_lambert_fragment:aR,lights_lambert_pars_fragment:cR,lights_pars_begin:lR,lights_toon_fragment:dR,lights_toon_pars_fragment:hR,lights_phong_fragment:fR,lights_phong_pars_fragment:pR,lights_physical_fragment:mR,lights_physical_pars_fragment:gR,lights_fragment_begin:vR,lights_fragment_maps:yR,lights_fragment_end:_R,logdepthbuf_fragment:xR,logdepthbuf_pars_fragment:MR,logdepthbuf_pars_vertex:SR,logdepthbuf_vertex:wR,map_fragment:bR,map_pars_fragment:ER,map_particle_fragment:TR,map_particle_pars_fragment:CR,metalnessmap_fragment:AR,metalnessmap_pars_fragment:DR,morphcolor_vertex:IR,morphnormal_vertex:RR,morphtarget_pars_vertex:PR,morphtarget_vertex:NR,normal_fragment_begin:LR,normal_fragment_maps:OR,normal_pars_fragment:FR,normal_pars_vertex:UR,normal_vertex:kR,normalmap_pars_fragment:BR,clearcoat_normal_fragment_begin:VR,clearcoat_normal_fragment_maps:zR,clearcoat_pars_fragment:HR,iridescence_pars_fragment:GR,opaque_fragment:WR,packing:jR,premultiplied_alpha_fragment:$R,project_vertex:qR,dithering_fragment:XR,dithering_pars_fragment:YR,roughnessmap_fragment:ZR,roughnessmap_pars_fragment:JR,shadowmap_pars_fragment:KR,shadowmap_pars_vertex:QR,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:a1,tonemapping_fragment:c1,tonemapping_pars_fragment:l1,transmission_fragment:u1,transmission_pars_fragment:d1,uv_pars_fragment:h1,uv_pars_vertex:f1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:v1,backgroundCube_vert:y1,backgroundCube_frag:_1,cube_vert:x1,cube_frag:M1,depth_vert:S1,depth_frag:w1,distanceRGBA_vert:b1,distanceRGBA_frag:E1,equirect_vert:T1,equirect_frag:C1,linedashed_vert:A1,linedashed_frag:D1,meshbasic_vert:I1,meshbasic_frag:R1,meshlambert_vert:P1,meshlambert_frag:N1,meshmatcap_vert:L1,meshmatcap_frag:O1,meshnormal_vert:F1,meshnormal_frag:U1,meshphong_vert:k1,meshphong_frag:B1,meshphysical_vert:V1,meshphysical_frag:z1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:W1,points_frag:j1,shadow_vert:$1,shadow_frag:q1,sprite_vert:X1,sprite_frag:Y1},ie={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Jt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Jt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Jt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Jt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Jt([ie.points,ie.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Jt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Jt([ie.common,ie.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Jt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Jt([ie.sprite,ie.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Jt([ie.common,ie.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Jt([ie.lights,ie.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var _l={r:0,b:0,g:0};function Z1(n,e,t,i,r,s,o){let a=new Ze(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),S=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$l)?(u===void 0&&(u=new Bn(new pa(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Qs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,(d!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Bn(new zl(2,2),new ni({name:"BackgroundMaterial",uniforms:Qs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(_l,Lx(n)),i.buffers.color.setClear(_l.r,_l.g,_l.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function J1(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(R,z,k,$,G){let W=!1;if(o){let j=_($,k,z);l!==j&&(l=j,m(l.object)),W=f(R,$,k,G),W&&S(R,$,k,G)}else{let j=z.wireframe===!0;(l.geometry!==$.id||l.program!==k.id||l.wireframe!==j)&&(l.geometry=$.id,l.program=k.id,l.wireframe=j,W=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,B(R,z,k,$),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,z,k){let $=k.wireframe===!0,G=a[R.id];G===void 0&&(G={},a[R.id]=G);let W=G[z.id];W===void 0&&(W={},G[z.id]=W);let j=W[$];return j===void 0&&(j=p(h()),W[$]=j),j}function p(R){let z=[],k=[],$=[];for(let G=0;G<r;G++)z[G]=0,k[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:$,object:R,attributes:{},index:null}}function f(R,z,k,$){let G=l.attributes,W=z.attributes,j=0,ee=k.getAttributes();for(let re in ee)if(ee[re].location>=0){let V=G[re],Z=W[re];if(Z===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),V===void 0||V.attribute!==Z||Z&&V.data!==Z.data)return!0;j++}return l.attributesNum!==j||l.index!==$}function S(R,z,k,$){let G={},W=z.attributes,j=0,ee=k.getAttributes();for(let re in ee)if(ee[re].location>=0){let V=W[re];V===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let Z={};Z.attribute=V,V&&V.data&&(Z.data=V.data),G[re]=Z,j++}l.attributes=G,l.attributesNum=j,l.index=$}function x(){let R=l.newAttributes;for(let z=0,k=R.length;z<k;z++)R[z]=0}function w(R){D(R,0)}function D(R,z){let k=l.newAttributes,$=l.enabledAttributes,G=l.attributeDivisors;k[R]=1,$[R]===0&&(n.enableVertexAttribArray(R),$[R]=1),G[R]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,z),G[R]=z)}function C(){let R=l.newAttributes,z=l.enabledAttributes;for(let k=0,$=z.length;k<$;k++)z[k]!==R[k]&&(n.disableVertexAttribArray(k),z[k]=0)}function A(R,z,k,$,G,W,j){j===!0?n.vertexAttribIPointer(R,z,k,G,W):n.vertexAttribPointer(R,z,k,$,G,W)}function B(R,z,k,$){if(i.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let G=$.attributes,W=k.getAttributes(),j=z.defaultAttributeValues;for(let ee in W){let re=W[ee];if(re.location>=0){let Ie=G[ee];if(Ie===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Ie=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Ie=R.instanceColor)),Ie!==void 0){let V=Ie.normalized,Z=Ie.itemSize,ce=t.get(Ie);if(ce===void 0)continue;let Me=ce.buffer,we=ce.type,fe=ce.bytesPerElement,tt=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||Ie.gpuType===wx);if(Ie.isInterleavedBufferAttribute){let Fe=Ie.data,N=Fe.stride,Ft=Ie.offset;if(Fe.isInstancedInterleavedBuffer){for(let _e=0;_e<re.locationSize;_e++)D(re.location+_e,Fe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let _e=0;_e<re.locationSize;_e++)w(re.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let _e=0;_e<re.locationSize;_e++)A(re.location+_e,Z/re.locationSize,we,V,N*fe,(Ft+Z/re.locationSize*_e)*fe,tt)}else{if(Ie.isInstancedBufferAttribute){for(let Fe=0;Fe<re.locationSize;Fe++)D(re.location+Fe,Ie.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Fe=0;Fe<re.locationSize;Fe++)w(re.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Fe=0;Fe<re.locationSize;Fe++)A(re.location+Fe,Z/re.locationSize,we,V,Z*fe,Z/re.locationSize*Fe*fe,tt)}}else if(j!==void 0){let V=j[ee];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(re.location,V);break;case 3:n.vertexAttrib3fv(re.location,V);break;case 4:n.vertexAttrib4fv(re.location,V);break;default:n.vertexAttrib1fv(re.location,V)}}}}C()}function X(){H();for(let R in a){let z=a[R];for(let k in z){let $=z[k];for(let G in $)g($[G].object),delete $[G];delete z[k]}delete a[R]}}function v(R){if(a[R.id]===void 0)return;let z=a[R.id];for(let k in z){let $=z[k];for(let G in $)g($[G].object),delete $[G];delete z[k]}delete a[R.id]}function T(R){for(let z in a){let k=a[z];if(k[R.id]===void 0)continue;let $=k[R.id];for(let G in $)g($[G].object),delete $[G];delete k[R.id]}}function H(){Q(),u=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:H,resetDefaultState:Q,dispose:X,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function K1(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Q1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=o||e.has("OES_texture_float"),D=x&&w,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:C}}function eP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new xi,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,x=S*4,w=f.clippingState||null;c.value=w,w=u(g,h,x,m);for(let D=0;D!==x;++D)w[D]=t[D];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let f=m+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,w=m;x!==_;++x,w+=4)o.copy(d[x]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function tP(n){let e=new WeakMap;function t(o,a){return a===kf?o.mapping=Ys:a===Bf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===kf||a===Bf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new qf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Hl=class extends Bl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=4,R0=[.125,.215,.35,.446,.526,.582],Pr=20,Af=new Hl,P0=new Ze,Df=null,If=0,Rf=0,Ir=(1+Math.sqrt(5))/2,ks=1/Ir,N0=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ir,ks),new I(0,Ir,-ks),new I(ks,0,Ir),new I(-ks,0,Ir),new I(Ir,ks,0),new I(-Ir,ks,0)],Gl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,If,Rf),e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:da,format:kn,colorSpace:bi,depthBuffer:!1},r=L0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nP(s)),this._blurMaterial=iP(s,e,t)}return r}_compileMaterial(e){let t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,i,r){let a=new qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(P0),u.toneMapping=Ji,u.autoClear=!1;let m=new Fl({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Bn(new pa,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(P0),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;xl(r,S*x,f>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ys||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;xl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Af)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=N0[(r-1)%N0.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Bn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Pr;p>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pr}`);let f=[],S=0;for(let A=0;A<Pr;++A){let B=A/_,X=Math.exp(-B*B/2);f.push(X),A===0?S+=X:A<p&&(S+=2*X)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;let w=this._sizeLods[r],D=3*w*(r>x-zs?r-x+zs:0),C=4*(this._cubeSize-w);xl(t,D,C,3*w,2*w),c.setRenderTarget(t),c.render(d,Af)}};function nP(n){let e=[],t=[],i=[],r=n,s=n-zs+1+R0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-zs?c=R0[o-n+zs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),x=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let C=0;C<m;C++){let A=C%3*2/3-1,B=C>2?0:-1,X=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];S.set(X,_*g*C),x.set(h,p*g*C);let v=[C,C,C,C,C,C];w.set(v,f*g*C)}let D=new ti;D.setAttribute("position",new Cn(S,_)),D.setAttribute("uv",new Cn(x,p)),D.setAttribute("faceIndex",new Cn(w,f)),e.push(D),r>zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function L0(n,e,t){let i=new Ei(n,e,t);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function iP(n,e,t){let i=new Float32Array(Pr),r=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function O0(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function F0(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===kf||c===Bf,u=c===Ys||c===Zs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Gl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Gl(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function sP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oP(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let S=m.array;_=m.version;for(let x=0,w=S.length;x<w;x+=3){let D=S[x+0],C=S[x+1],A=S[x+2];h.push(D,C,C,A,A,D)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,w=S.length/3-1;x<w;x+=3){let D=x+0,C=x+1,A=x+2;h.push(D,C,C,A,A,D)}}else return;let p=new(Px(h)?kl:Ul)(h,1);p.version=_;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function aP(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,_),t.update(g,s,_)}function h(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function cP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lP(n,e){return n[0]-e[0]}function uP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dP(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==_){let z=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();let x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],B=u.morphAttributes.color||[],X=0;x===!0&&(X=1),w===!0&&(X=2),D===!0&&(X=3);let v=u.attributes.position.count*X,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let H=new Float32Array(v*T*4*_),Q=new Nl(H,v,T,_);Q.type=Si,Q.needsUpdate=!0;let R=X*4;for(let k=0;k<_;k++){let $=C[k],G=A[k],W=B[k],j=v*T*4*k;for(let ee=0;ee<$.count;ee++){let re=ee*R;x===!0&&(o.fromBufferAttribute($,ee),H[j+re+0]=o.x,H[j+re+1]=o.y,H[j+re+2]=o.z,H[j+re+3]=0),w===!0&&(o.fromBufferAttribute(G,ee),H[j+re+4]=o.x,H[j+re+5]=o.y,H[j+re+6]=o.z,H[j+re+7]=0),D===!0&&(o.fromBufferAttribute(W,ee),H[j+re+8]=o.x,H[j+re+9]=o.y,H[j+re+10]=o.z,H[j+re+11]=W.itemSize===4?o.w:1)}}p={count:_,texture:Q,size:new Xe(v,T)},s.set(u,p),u.addEventListener("dispose",z)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,_=i[u.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];i[u.id]=_}for(let w=0;w<g;w++){let D=_[w];D[0]=w,D[1]=h[w]}_.sort(uP);for(let w=0;w<8;w++)w<g&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(lP);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let w=0;w<8;w++){let D=a[w],C=D[0],A=D[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),f&&u.getAttribute("morphNormal"+w)!==f[C]&&u.setAttribute("morphNormal"+w,f[C]),r[w]=A,S+=A):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}let x=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function hP(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Wl=class extends nr{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Or,u!==Or&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Or&&(i=Yi),i===void 0&&u===Js&&(i=Lr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fx=new nr,Ux=new Wl(1,1);Ux.compareFunction=Rx;var kx=new Nl,Bx=new jf,Vx=new Vl,U0=[],k0=[],B0=new Float32Array(16),V0=new Float32Array(9),z0=new Float32Array(4);function io(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=U0[r];if(s===void 0&&(s=new Float32Array(r),U0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xl(n,e){let t=k0[e];t===void 0&&(t=new Int32Array(e),k0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function pP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function mP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function gP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function vP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;z0.set(i),n.uniformMatrix2fv(this.addr,!1,z0),It(t,i)}}function yP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;V0.set(i),n.uniformMatrix3fv(this.addr,!1,V0),It(t,i)}}function _P(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;B0.set(i),n.uniformMatrix4fv(this.addr,!1,B0),It(t,i)}}function xP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function SP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function wP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function bP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function TP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function CP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function AP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Ux:Fx;t.setTexture2D(e||s,r)}function DP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bx,r)}function IP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vx,r)}function RP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kx,r)}function PP(n){switch(n){case 5126:return fP;case 35664:return pP;case 35665:return mP;case 35666:return gP;case 35674:return vP;case 35675:return yP;case 35676:return _P;case 5124:case 35670:return xP;case 35667:case 35671:return MP;case 35668:case 35672:return SP;case 35669:case 35673:return wP;case 5125:return bP;case 36294:return EP;case 36295:return TP;case 36296:return CP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return DP;case 35680:case 36300:case 36308:case 36293:return IP;case 36289:case 36303:case 36311:case 36292:return RP}}function NP(n,e){n.uniform1fv(this.addr,e)}function LP(n,e){let t=io(e,this.size,2);n.uniform2fv(this.addr,t)}function OP(n,e){let t=io(e,this.size,3);n.uniform3fv(this.addr,t)}function FP(n,e){let t=io(e,this.size,4);n.uniform4fv(this.addr,t)}function UP(n,e){let t=io(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kP(n,e){let t=io(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function BP(n,e){let t=io(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VP(n,e){n.uniform1iv(this.addr,e)}function zP(n,e){n.uniform2iv(this.addr,e)}function HP(n,e){n.uniform3iv(this.addr,e)}function GP(n,e){n.uniform4iv(this.addr,e)}function WP(n,e){n.uniform1uiv(this.addr,e)}function jP(n,e){n.uniform2uiv(this.addr,e)}function $P(n,e){n.uniform3uiv(this.addr,e)}function qP(n,e){n.uniform4uiv(this.addr,e)}function XP(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fx,s[o])}function YP(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bx,s[o])}function ZP(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vx,s[o])}function JP(n,e,t){let i=this.cache,r=e.length,s=Xl(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kx,s[o])}function KP(n){switch(n){case 5126:return NP;case 35664:return LP;case 35665:return OP;case 35666:return FP;case 35674:return UP;case 35675:return kP;case 35676:return BP;case 5124:case 35670:return VP;case 35667:case 35671:return zP;case 35668:case 35672:return HP;case 35669:case 35673:return GP;case 5125:return WP;case 36294:return jP;case 36295:return $P;case 36296:return qP;case 35678:case 36198:case 36298:case 36306:case 35682:return XP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return ZP;case 36289:case 36303:case 36311:case 36292:return JP}}var Xf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PP(t.type)}},Yf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KP(t.type)}},Zf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Pf=/(\w+)(\])?(\[|\.)?/g;function H0(n,e){n.seq.push(e),n.map[e.id]=e}function QP(n,e,t){let i=n.name,r=i.length;for(Pf.lastIndex=0;;){let s=Pf.exec(i),o=Pf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){H0(t,l===void 0?new Xf(a,n,e):new Yf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zf(a),H0(t,d)),t=d}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);QP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function G0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var eN=37297,tN=0;function nN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iN(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===Al&&t===Cl?i="LinearDisplayP3ToLinearSRGB":e===Cl&&t===Al&&(i="LinearSRGBToLinearDisplayP3"),n){case bi:case ql:return[i,"LinearTransferOETF"];case Vt:case Tp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function W0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nN(n.getShaderSource(e),o)}else return r}function rN(n,e){let t=iN(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sN(n,e){let t;switch(e){case uD:t="Linear";break;case dD:t="Reinhard";break;case hD:t="OptimizedCineon";break;case fD:t="ACESFilmic";break;case mD:t="AgX";break;case pD:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oN(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function aN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function cN(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lN(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function j0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(n){return n.replace(uN,hN)}var dN=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hN(n,e){let t=ze[e];if(t===void 0){let i=dN.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jf(t)}var fN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(n){return n.replace(fN,pN)}function pN(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function X0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mN(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function gN(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vN(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function yN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case cD:e="ENVMAP_BLENDING_MIX";break;case lD:e="ENVMAP_BLENDING_ADD";break}return e}function _N(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mN(t),l=gN(t),u=vN(t),d=yN(t),h=_N(t),m=t.isWebGL2?"":oN(t),g=aN(t),_=cN(s),p=r.createProgram(),f,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),S.length>0&&(S+=`
`)):(f=[X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),S=[m,X0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ji?sN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,rN("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Jf(o),o=j0(o,t),o=$0(o,t),a=Jf(a),a=j0(a,t),a=$0(a,t),o=q0(o),a=q0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===d0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===d0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=x+f+o,D=x+S+a,C=G0(r,r.VERTEX_SHADER,w),A=G0(r,r.FRAGMENT_SHADER,D);r.attachShader(p,C),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function B(H){if(n.debug.checkShaderErrors){let Q=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(C).trim(),z=r.getShaderInfoLog(A).trim(),k=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,A);else{let G=W0(r,C,"vertex"),W=W0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+G+`
`+W)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(R===""||z==="")&&($=!1);$&&(H.diagnostics={runnable:k,programLog:Q,vertexShader:{log:R,prefix:f},fragmentShader:{log:z,prefix:S}})}r.deleteShader(C),r.deleteShader(A),X=new Xs(r,p),v=lN(r,p)}let X;this.getUniforms=function(){return X===void 0&&B(this),X};let v;this.getAttributes=function(){return v===void 0&&B(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(p,eN)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tN++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}var MN=0,Kf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qf(e),t.set(e,i)),i}},Qf=class{constructor(e){this.id=MN++,this.code=e,this.usedTimes=0}};function SN(n,e,t,i,r,s,o){let a=new Ol,c=new Kf,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,T,H,Q,R){let z=Q.fog,k=R.geometry,$=v.isMeshStandardMaterial?Q.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),W=G&&G.mapping===$l?G.image.height:null,j=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=ee!==void 0?ee.length:0,Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let V,Z,ce,Me;if(j){let dt=ei[j];V=dt.vertexShader,Z=dt.fragmentShader}else V=v.vertexShader,Z=v.fragmentShader,c.update(v),ce=c.getVertexShaderID(v),Me=c.getFragmentShaderID(v);let we=n.getRenderTarget(),fe=R.isInstancedMesh===!0,tt=R.isBatchedMesh===!0,Fe=!!v.map,N=!!v.matcap,Ft=!!G,_e=!!v.aoMap,Re=!!v.lightMap,ge=!!v.bumpMap,vt=!!v.normalMap,Be=!!v.displacementMap,b=!!v.emissiveMap,y=!!v.metalnessMap,L=!!v.roughnessMap,K=v.anisotropy>0,q=v.clearcoat>0,J=v.iridescence>0,pe=v.sheen>0,se=v.transmission>0,le=K&&!!v.anisotropyMap,Te=q&&!!v.clearcoatMap,He=q&&!!v.clearcoatNormalMap,Y=q&&!!v.clearcoatRoughnessMap,ot=J&&!!v.iridescenceMap,Ye=J&&!!v.iridescenceThicknessMap,Pe=pe&&!!v.sheenColorMap,ve=pe&&!!v.sheenRoughnessMap,ue=!!v.specularMap,Ve=!!v.specularColorMap,rt=!!v.specularIntensityMap,pt=se&&!!v.transmissionMap,Je=se&&!!v.thicknessMap,lt=!!v.gradientMap,E=!!v.alphaMap,te=v.alphaTest>0,ne=!!v.alphaHash,he=!!v.extensions,xe=Ji;v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(xe=n.toneMapping);let st={isWebGL2:d,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:Z,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:tt,instancing:fe,instancingColor:fe&&R.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:bi,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:N,envMap:Ft,envMapMode:Ft&&G.mapping,envMapCubeUVHeight:W,aoMap:_e,lightMap:Re,bumpMap:ge,normalMap:vt,displacementMap:m&&Be,emissiveMap:b,normalMapObjectSpace:vt&&v.normalMapType===TD,normalMapTangentSpace:vt&&v.normalMapType===Ep,metalnessMap:y,roughnessMap:L,anisotropy:K,anisotropyMap:le,clearcoat:q,clearcoatMap:Te,clearcoatNormalMap:He,clearcoatRoughnessMap:Y,iridescence:J,iridescenceMap:ot,iridescenceThicknessMap:Ye,sheen:pe,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:ue,specularColorMap:Ve,specularIntensityMap:rt,transmission:se,transmissionMap:pt,thicknessMap:Je,gradientMap:lt,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:E,alphaTest:te,alphaHash:ne,combine:v.combine,mapUv:Fe&&p(v.map.channel),aoMapUv:_e&&p(v.aoMap.channel),lightMapUv:Re&&p(v.lightMap.channel),bumpMapUv:ge&&p(v.bumpMap.channel),normalMapUv:vt&&p(v.normalMap.channel),displacementMapUv:Be&&p(v.displacementMap.channel),emissiveMapUv:b&&p(v.emissiveMap.channel),metalnessMapUv:y&&p(v.metalnessMap.channel),roughnessMapUv:L&&p(v.roughnessMap.channel),anisotropyMapUv:le&&p(v.anisotropyMap.channel),clearcoatMapUv:Te&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:He&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(v.sheenRoughnessMap.channel),specularMapUv:ue&&p(v.specularMap.channel),specularColorMapUv:Ve&&p(v.specularColorMap.channel),specularIntensityMapUv:rt&&p(v.specularIntensityMap.channel),transmissionMapUv:pt&&p(v.transmissionMap.channel),thicknessMapUv:Je&&p(v.thicknessMap.channel),alphaMapUv:E&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(vt||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!k.attributes.uv&&(Fe||E),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:R.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:he&&v.extensions.derivatives===!0,extensionFragDepth:he&&v.extensions.fragDepth===!0,extensionDrawBuffers:he&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:he&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function S(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let H in v.defines)T.push(H),T.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(x(T,v),w(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function D(v){let T=_[v.type],H;if(T){let Q=ei[T];H=dI.clone(Q.uniforms)}else H=v.uniforms;return H}function C(v,T){let H;for(let Q=0,R=u.length;Q<R;Q++){let z=u[Q];if(z.cacheKey===T){H=z,++H.usedTimes;break}}return H===void 0&&(H=new xN(n,T,v,s),u.push(H)),H}function A(v){if(--v.usedTimes===0){let T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function B(v){c.remove(v)}function X(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:A,releaseShaderCache:B,programs:u,dispose:X}}function wN(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Z0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,_,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,_,p){let f=o(d,h,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||bN),i.length>1&&i.sort(h||Y0),r.length>1&&r.sort(h||Y0)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function EN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new Z0,n.set(i,[o])):r>=s.length?(o=new Z0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function CN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var AN=0;function DN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IN(n,e){let t=new TN,i=CN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new I);let s=new I,o=new _t,a=new _t;function c(u,d){let h=0,m=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,p=0,f=0,S=0,x=0,w=0,D=0,C=0,A=0,B=0,X=0;u.sort(DN);let v=d===!0?Math.PI:1;for(let H=0,Q=u.length;H<Q;H++){let R=u[H],z=R.color,k=R.intensity,$=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k*v,m+=z.g*k*v,g+=z.b*k*v;else if(R.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(R.sh.coefficients[W],k);X++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*v),R.castShadow){let j=R.shadow,ee=i.get(R);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,r.directionalShadow[_]=ee,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=R.shadow.matrix,w++}r.directional[_]=W,_++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(k*v),W.distance=$,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,r.spot[f]=W;let j=R.shadow;if(R.map&&(r.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&B++),r.spotLightMatrix[f]=j.matrix,R.castShadow){let ee=i.get(R);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,r.spotShadow[f]=ee,r.spotShadowMap[f]=G,C++}f++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),r.rectArea[S]=W,S++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*v),W.distance=R.distance,W.decay=R.decay,R.castShadow){let j=R.shadow,ee=i.get(R);ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=G,r.pointShadowMatrix[p]=R.shadow.matrix,D++}r.point[p]=W,p++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k*v),W.groundColor.copy(R.groundColor).multiplyScalar(k*v),r.hemi[x]=W,x++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let T=r.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==f||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==C||T.numSpotMaps!==A||T.numLightProbes!==X)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+A-B,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=X,T.directionalLength=_,T.pointLength=p,T.spotLength=f,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=C,T.numSpotMaps=A,T.numLightProbes=X,r.version=AN++)}function l(u,d){let h=0,m=0,g=0,_=0,p=0,f=d.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){let w=u[S];if(w.isDirectionalLight){let D=r.directional[h];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),h++}else if(w.isSpotLight){let D=r.spot[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let D=r.rectArea[_];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let D=r.point[m];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let D=r.hemi[p];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function J0(n,e){let t=new IN(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function RN(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new J0(n,e),t.set(s,[c])):o>=a.length?(c=new J0(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var ep=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tp=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},PN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LN(n,e,t){let i=new ma,r=new Xe,s=new Xe,o=new gt,a=new ep({depthPacking:ED}),c=new tp,l={},u=t.maxTextureSize,d={[Qi]:rn,[rn]:Qi,[Mi]:Mi},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:PN,fragmentShader:NN}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new ti;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Bn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let f=this.type;this.render=function(C,A,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let X=n.getRenderTarget(),v=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Zi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Q=f!==_i&&this.type===_i,R=f===_i&&this.type!==_i;for(let z=0,k=C.length;z<k;z++){let $=C[z],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let W=G.getFrameExtents();if(r.multiply(W),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,G.mapSize.y=s.y)),G.map===null||Q===!0||R===!0){let ee=this.type!==_i?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new Ei(r.x,r.y,ee),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let j=G.getViewportCount();for(let ee=0;ee<j;ee++){let re=G.getViewport(ee);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(o),G.updateMatrices($,ee),i=G.getFrustum(),w(A,B,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===_i&&S(G,B),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(X,v,T)};function S(C,A){let B=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,B,h,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,B,m,_,null)}function x(C,A,B,X){let v=null,T=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)v=T;else if(v=B.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=v.uuid,Q=A.uuid,R=l[H];R===void 0&&(R={},l[H]=R);let z=R[Q];z===void 0&&(z=v.clone(),R[Q]=z,A.addEventListener("dispose",D)),v=z}if(v.visible=A.visible,v.wireframe=A.wireframe,X===_i?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=n.properties.get(v);H.light=B}return v}function w(C,A,B,X,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===_i)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);let Q=e.update(C),R=C.material;if(Array.isArray(R)){let z=Q.groups;for(let k=0,$=z.length;k<$;k++){let G=z[k],W=R[G.materialIndex];if(W&&W.visible){let j=x(C,W,X,v);C.onBeforeShadow(n,C,A,B,Q,j,G),n.renderBufferDirect(B,null,Q,j,C,G),C.onAfterShadow(n,C,A,B,Q,j,G)}}}else if(R.visible){let z=x(C,R,X,v);C.onBeforeShadow(n,C,A,B,Q,z,null),n.renderBufferDirect(B,null,Q,z,C,null),C.onAfterShadow(n,C,A,B,Q,z,null)}}let H=C.children;for(let Q=0,R=H.length;Q<R;Q++)w(H[Q],A,B,X,v)}function D(C){C.target.removeEventListener("dispose",D);for(let B in l){let X=l[B],v=C.target.uuid;v in X&&(X[v].dispose(),delete X[v])}}}function ON(n,e,t){let i=t.isWebGL2;function r(){let E=!1,te=new gt,ne=null,he=new gt(0,0,0,0);return{setMask:function(xe){ne!==xe&&!E&&(n.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){E=xe},setClear:function(xe,st,dt,Ut,mn){mn===!0&&(xe*=Ut,st*=Ut,dt*=Ut),te.set(xe,st,dt,Ut),he.equals(te)===!1&&(n.clearColor(xe,st,dt,Ut),he.copy(te))},reset:function(){E=!1,ne=null,he.set(-1,0,0,0)}}}function s(){let E=!1,te=null,ne=null,he=null;return{setTest:function(xe){xe?fe(n.DEPTH_TEST):tt(n.DEPTH_TEST)},setMask:function(xe){te!==xe&&!E&&(n.depthMask(xe),te=xe)},setFunc:function(xe){if(ne!==xe){switch(xe){case tD:n.depthFunc(n.NEVER);break;case nD:n.depthFunc(n.ALWAYS);break;case iD:n.depthFunc(n.LESS);break;case wl:n.depthFunc(n.LEQUAL);break;case rD:n.depthFunc(n.EQUAL);break;case sD:n.depthFunc(n.GEQUAL);break;case oD:n.depthFunc(n.GREATER);break;case aD:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=xe}},setLocked:function(xe){E=xe},setClear:function(xe){he!==xe&&(n.clearDepth(xe),he=xe)},reset:function(){E=!1,te=null,ne=null,he=null}}}function o(){let E=!1,te=null,ne=null,he=null,xe=null,st=null,dt=null,Ut=null,mn=null;return{setTest:function(ht){E||(ht?fe(n.STENCIL_TEST):tt(n.STENCIL_TEST))},setMask:function(ht){te!==ht&&!E&&(n.stencilMask(ht),te=ht)},setFunc:function(ht,Xt,Hn){(ne!==ht||he!==Xt||xe!==Hn)&&(n.stencilFunc(ht,Xt,Hn),ne=ht,he=Xt,xe=Hn)},setOp:function(ht,Xt,Hn){(st!==ht||dt!==Xt||Ut!==Hn)&&(n.stencilOp(ht,Xt,Hn),st=ht,dt=Xt,Ut=Hn)},setLocked:function(ht){E=ht},setClear:function(ht){mn!==ht&&(n.clearStencil(ht),mn=ht)},reset:function(){E=!1,te=null,ne=null,he=null,xe=null,st=null,dt=null,Ut=null,mn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,w=null,D=null,C=null,A=null,B=null,X=new Ze(0,0,0),v=0,T=!1,H=null,Q=null,R=null,z=null,k=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=W>=2);let ee=null,re={},Ie=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),Z=new gt().fromArray(Ie),ce=new gt().fromArray(V);function Me(E,te,ne,he){let xe=new Uint8Array(4),st=n.createTexture();n.bindTexture(E,st),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<ne;dt++)i&&(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)?n.texImage3D(te,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(te+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return st}let we={};we[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(n.DEPTH_TEST),c.setFunc(wl),Be(!1),b(C_),fe(n.CULL_FACE),ge(Zi);function fe(E){h[E]!==!0&&(n.enable(E),h[E]=!0)}function tt(E){h[E]!==!1&&(n.disable(E),h[E]=!1)}function Fe(E,te){return m[E]!==te?(n.bindFramebuffer(E,te),m[E]=te,i&&(E===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=te),E===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=te)),!0):!1}function N(E,te){let ne=_,he=!1;if(E)if(ne=g.get(te),ne===void 0&&(ne=[],g.set(te,ne)),E.isWebGLMultipleRenderTargets){let xe=E.texture;if(ne.length!==xe.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let st=0,dt=xe.length;st<dt;st++)ne[st]=n.COLOR_ATTACHMENT0+st;ne.length=xe.length,he=!0}}else ne[0]!==n.COLOR_ATTACHMENT0&&(ne[0]=n.COLOR_ATTACHMENT0,he=!0);else ne[0]!==n.BACK&&(ne[0]=n.BACK,he=!0);he&&(t.isWebGL2?n.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ft(E){return p!==E?(n.useProgram(E),p=E,!0):!1}let _e={[Rr]:n.FUNC_ADD,[VA]:n.FUNC_SUBTRACT,[zA]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[R_]=n.MIN,_e[P_]=n.MAX;else{let E=e.get("EXT_blend_minmax");E!==null&&(_e[R_]=E.MIN_EXT,_e[P_]=E.MAX_EXT)}let Re={[HA]:n.ZERO,[GA]:n.ONE,[WA]:n.SRC_COLOR,[Ff]:n.SRC_ALPHA,[ZA]:n.SRC_ALPHA_SATURATE,[XA]:n.DST_COLOR,[$A]:n.DST_ALPHA,[jA]:n.ONE_MINUS_SRC_COLOR,[Uf]:n.ONE_MINUS_SRC_ALPHA,[YA]:n.ONE_MINUS_DST_COLOR,[qA]:n.ONE_MINUS_DST_ALPHA,[JA]:n.CONSTANT_COLOR,[KA]:n.ONE_MINUS_CONSTANT_COLOR,[QA]:n.CONSTANT_ALPHA,[eD]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(E,te,ne,he,xe,st,dt,Ut,mn,ht){if(E===Zi){f===!0&&(tt(n.BLEND),f=!1);return}if(f===!1&&(fe(n.BLEND),f=!0),E!==BA){if(E!==S||ht!==T){if((x!==Rr||C!==Rr)&&(n.blendEquation(n.FUNC_ADD),x=Rr,C=Rr),ht)switch(E){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.ONE,n.ONE);break;case D_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case I_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case A_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case D_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case I_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}w=null,D=null,A=null,B=null,X.set(0,0,0),v=0,S=E,T=ht}return}xe=xe||te,st=st||ne,dt=dt||he,(te!==x||xe!==C)&&(n.blendEquationSeparate(_e[te],_e[xe]),x=te,C=xe),(ne!==w||he!==D||st!==A||dt!==B)&&(n.blendFuncSeparate(Re[ne],Re[he],Re[st],Re[dt]),w=ne,D=he,A=st,B=dt),(Ut.equals(X)===!1||mn!==v)&&(n.blendColor(Ut.r,Ut.g,Ut.b,mn),X.copy(Ut),v=mn),S=E,T=!1}function vt(E,te){E.side===Mi?tt(n.CULL_FACE):fe(n.CULL_FACE);let ne=E.side===rn;te&&(ne=!ne),Be(ne),E.blending===Ws&&E.transparent===!1?ge(Zi):ge(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),c.setFunc(E.depthFunc),c.setTest(E.depthTest),c.setMask(E.depthWrite),a.setMask(E.colorWrite);let he=E.stencilWrite;l.setTest(he),he&&(l.setMask(E.stencilWriteMask),l.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),l.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),L(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(E){H!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),H=E)}function b(E){E!==FA?(fe(n.CULL_FACE),E!==Q&&(E===C_?n.cullFace(n.BACK):E===UA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):tt(n.CULL_FACE),Q=E}function y(E){E!==R&&(G&&n.lineWidth(E),R=E)}function L(E,te,ne){E?(fe(n.POLYGON_OFFSET_FILL),(z!==te||k!==ne)&&(n.polygonOffset(te,ne),z=te,k=ne)):tt(n.POLYGON_OFFSET_FILL)}function K(E){E?fe(n.SCISSOR_TEST):tt(n.SCISSOR_TEST)}function q(E){E===void 0&&(E=n.TEXTURE0+$-1),ee!==E&&(n.activeTexture(E),ee=E)}function J(E,te,ne){ne===void 0&&(ee===null?ne=n.TEXTURE0+$-1:ne=ee);let he=re[ne];he===void 0&&(he={type:void 0,texture:void 0},re[ne]=he),(he.type!==E||he.texture!==te)&&(ee!==ne&&(n.activeTexture(ne),ee=ne),n.bindTexture(E,te||we[E]),he.type=E,he.texture=te)}function pe(){let E=re[ee];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(){try{n.texStorage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(E){Z.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),Z.copy(E))}function rt(E){ce.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),ce.copy(E))}function pt(E,te){let ne=d.get(te);ne===void 0&&(ne=new WeakMap,d.set(te,ne));let he=ne.get(E);he===void 0&&(he=n.getUniformBlockIndex(te,E.name),ne.set(E,he))}function Je(E,te){let he=d.get(te).get(E);u.get(te)!==he&&(n.uniformBlockBinding(te,he,E.__bindingPointIndex),u.set(te,he))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,re={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,w=null,D=null,C=null,A=null,B=null,X=new Ze(0,0,0),v=0,T=!1,H=null,Q=null,R=null,z=null,k=null,Z.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:fe,disable:tt,bindFramebuffer:Fe,drawBuffers:N,useProgram:Ft,setBlending:ge,setMaterial:vt,setFlipSided:Be,setCullFace:b,setLineWidth:y,setPolygonOffset:L,setScissorTest:K,activeTexture:q,bindTexture:J,unbindTexture:pe,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:ve,texImage3D:ue,updateUBOMapping:pt,uniformBlockBinding:Je,texStorage2D:Ye,texStorage3D:Pe,texSubImage2D:Te,texSubImage3D:He,compressedTexSubImage2D:Y,compressedTexSubImage3D:ot,scissor:Ve,viewport:rt,reset:lt}}function FN(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):fa("canvas")}function _(b,y,L,K){let q=1;if((b.width>K||b.height>K)&&(q=K/Math.max(b.width,b.height)),q<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let J=y?Il:Math.floor,pe=J(q*b.width),se=J(q*b.height);d===void 0&&(d=g(pe,se));let le=L?g(pe,se):d;return le.width=pe,le.height=se,le.getContext("2d").drawImage(b,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+se+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return Gf(b.width)&&Gf(b.height)}function f(b){return a?!1:b.wrapS!==Un||b.wrapT!==Un||b.minFilter!==Kt&&b.minFilter!==nn}function S(b,y){return b.generateMipmaps&&y&&b.minFilter!==Kt&&b.minFilter!==nn}function x(b){n.generateMipmap(b)}function w(b,y,L,K,q=!1){if(a===!1)return y;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=y;if(y===n.RED&&(L===n.FLOAT&&(J=n.R32F),L===n.HALF_FLOAT&&(J=n.R16F),L===n.UNSIGNED_BYTE&&(J=n.R8)),y===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(J=n.R8UI),L===n.UNSIGNED_SHORT&&(J=n.R16UI),L===n.UNSIGNED_INT&&(J=n.R32UI),L===n.BYTE&&(J=n.R8I),L===n.SHORT&&(J=n.R16I),L===n.INT&&(J=n.R32I)),y===n.RG&&(L===n.FLOAT&&(J=n.RG32F),L===n.HALF_FLOAT&&(J=n.RG16F),L===n.UNSIGNED_BYTE&&(J=n.RG8)),y===n.RGBA){let pe=q?Tl:ct.getTransfer(K);L===n.FLOAT&&(J=n.RGBA32F),L===n.HALF_FLOAT&&(J=n.RGBA16F),L===n.UNSIGNED_BYTE&&(J=pe===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function D(b,y,L){return S(b,L)===!0||b.isFramebufferTexture&&b.minFilter!==Kt&&b.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){return b===Kt||b===L_||b===ia?n.NEAREST:n.LINEAR}function A(b){let y=b.target;y.removeEventListener("dispose",A),X(y),y.isVideoTexture&&u.delete(y)}function B(b){let y=b.target;y.removeEventListener("dispose",B),T(y)}function X(b){let y=i.get(b);if(y.__webglInit===void 0)return;let L=b.source,K=h.get(L);if(K){let q=K[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&v(b),Object.keys(K).length===0&&h.delete(L)}i.remove(b)}function v(b){let y=i.get(b);n.deleteTexture(y.__webglTexture);let L=b.source,K=h.get(L);delete K[y.__cacheKey],o.memory.textures--}function T(b){let y=b.texture,L=i.get(b),K=i.get(y);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(L.__webglFramebuffer[q]))for(let J=0;J<L.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(L.__webglFramebuffer[q][J]);else n.deleteFramebuffer(L.__webglFramebuffer[q]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[q])}else{if(Array.isArray(L.__webglFramebuffer))for(let q=0;q<L.__webglFramebuffer.length;q++)n.deleteFramebuffer(L.__webglFramebuffer[q]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let q=0;q<L.__webglColorRenderbuffer.length;q++)L.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[q]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let q=0,J=y.length;q<J;q++){let pe=i.get(y[q]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(y[q])}i.remove(y),i.remove(b)}let H=0;function Q(){H=0}function R(){let b=H;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),H+=1,b}function z(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function k(b,y){let L=i.get(b);if(b.isVideoTexture&&vt(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){let K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(L,b,y);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+y)}function $(b,y){let L=i.get(b);if(b.version>0&&L.__version!==b.version){Z(L,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+y)}function G(b,y){let L=i.get(b);if(b.version>0&&L.__version!==b.version){Z(L,b,y);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+y)}function W(b,y){let L=i.get(b);if(b.version>0&&L.__version!==b.version){ce(L,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+y)}let j={[Vf]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[zf]:n.MIRRORED_REPEAT},ee={[Kt]:n.NEAREST,[L_]:n.NEAREST_MIPMAP_NEAREST,[ia]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[rf]:n.LINEAR_MIPMAP_NEAREST,[Nr]:n.LINEAR_MIPMAP_LINEAR},re={[CD]:n.NEVER,[ND]:n.ALWAYS,[AD]:n.LESS,[Rx]:n.LEQUAL,[DD]:n.EQUAL,[PD]:n.GEQUAL,[ID]:n.GREATER,[RD]:n.NOTEQUAL};function Ie(b,y,L){if(y.type===Si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===rf||y.magFilter===ia||y.magFilter===Nr||y.minFilter===nn||y.minFilter===rf||y.minFilter===ia||y.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),L?(n.texParameteri(b,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,j[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ee[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ee[y.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Un||y.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,C(y.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==Kt&&y.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Kt||y.minFilter!==ia&&y.minFilter!==Nr||y.type===Si&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===da&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function V(b,y){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));let K=y.source,q=h.get(K);q===void 0&&(q={},h.set(K,q));let J=z(y);if(J!==b.__cacheKey){q[J]===void 0&&(q[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),q[J].usedTimes++;let pe=q[b.__cacheKey];pe!==void 0&&(q[b.__cacheKey].usedTimes--,pe.usedTimes===0&&v(y)),b.__cacheKey=J,b.__webglTexture=q[J].texture}return L}function Z(b,y,L){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);let q=V(b,y),J=y.source;t.bindTexture(K,b.__webglTexture,n.TEXTURE0+L);let pe=i.get(J);if(J.version!==pe.__version||q===!0){t.activeTexture(n.TEXTURE0+L);let se=ct.getPrimaries(ct.workingColorSpace),le=y.colorSpace===Tn?null:ct.getPrimaries(y.colorSpace),Te=y.colorSpace===Tn||se===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let He=f(y)&&p(y.image)===!1,Y=_(y.image,He,!1,r.maxTextureSize);Y=Be(y,Y);let ot=p(Y)||a,Ye=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type),ve=w(y.internalFormat,Ye,Pe,y.colorSpace,y.isVideoTexture);Ie(K,y,ot);let ue,Ve=y.mipmaps,rt=a&&y.isVideoTexture!==!0&&ve!==Dx,pt=pe.__version===void 0||q===!0,Je=J.dataReady,lt=D(y,Y,ot);if(y.isDepthTexture)ve=n.DEPTH_COMPONENT,a?y.type===Si?ve=n.DEPTH_COMPONENT32F:y.type===Yi?ve=n.DEPTH_COMPONENT24:y.type===Lr?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:y.type===Si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Or&&ve===n.DEPTH_COMPONENT&&y.type!==bp&&y.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Yi,Pe=s.convert(y.type)),y.format===Js&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,y.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Lr,Pe=s.convert(y.type))),pt&&(rt?t.texStorage2D(n.TEXTURE_2D,1,ve,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,Ye,Pe,null));else if(y.isDataTexture)if(Ve.length>0&&ot){rt&&pt&&t.texStorage2D(n.TEXTURE_2D,lt,ve,Ve[0].width,Ve[0].height);for(let E=0,te=Ve.length;E<te;E++)ue=Ve[E],rt?Je&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,Ye,Pe,ue.data):t.texImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,Ye,Pe,ue.data);y.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(n.TEXTURE_2D,lt,ve,Y.width,Y.height),Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,Ye,Pe,Y.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,Ye,Pe,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ve,Ve[0].width,Ve[0].height,Y.depth);for(let E=0,te=Ve.length;E<te;E++)ue=Ve[E],y.format!==kn?Ye!==null?rt?Je&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,ue.width,ue.height,Y.depth,Ye,ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,E,ve,ue.width,ue.height,Y.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,E,0,0,0,ue.width,ue.height,Y.depth,Ye,Pe,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,E,ve,ue.width,ue.height,Y.depth,0,Ye,Pe,ue.data)}else{rt&&pt&&t.texStorage2D(n.TEXTURE_2D,lt,ve,Ve[0].width,Ve[0].height);for(let E=0,te=Ve.length;E<te;E++)ue=Ve[E],y.format!==kn?Ye!==null?rt?Je&&t.compressedTexSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,Ye,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Je&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,ue.width,ue.height,Ye,Pe,ue.data):t.texImage2D(n.TEXTURE_2D,E,ve,ue.width,ue.height,0,Ye,Pe,ue.data)}else if(y.isDataArrayTexture)rt?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,lt,ve,Y.width,Y.height,Y.depth),Je&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ye,Pe,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Y.width,Y.height,Y.depth,0,Ye,Pe,Y.data);else if(y.isData3DTexture)rt?(pt&&t.texStorage3D(n.TEXTURE_3D,lt,ve,Y.width,Y.height,Y.depth),Je&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ye,Pe,Y.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Y.width,Y.height,Y.depth,0,Ye,Pe,Y.data);else if(y.isFramebufferTexture){if(pt)if(rt)t.texStorage2D(n.TEXTURE_2D,lt,ve,Y.width,Y.height);else{let E=Y.width,te=Y.height;for(let ne=0;ne<lt;ne++)t.texImage2D(n.TEXTURE_2D,ne,ve,E,te,0,Ye,Pe,null),E>>=1,te>>=1}}else if(Ve.length>0&&ot){rt&&pt&&t.texStorage2D(n.TEXTURE_2D,lt,ve,Ve[0].width,Ve[0].height);for(let E=0,te=Ve.length;E<te;E++)ue=Ve[E],rt?Je&&t.texSubImage2D(n.TEXTURE_2D,E,0,0,Ye,Pe,ue):t.texImage2D(n.TEXTURE_2D,E,ve,Ye,Pe,ue);y.generateMipmaps=!1}else rt?(pt&&t.texStorage2D(n.TEXTURE_2D,lt,ve,Y.width,Y.height),Je&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ye,Pe,Y)):t.texImage2D(n.TEXTURE_2D,0,ve,Ye,Pe,Y);S(y,ot)&&x(K),pe.__version=J.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ce(b,y,L){if(y.image.length!==6)return;let K=V(b,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+L);let J=i.get(q);if(q.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+L);let pe=ct.getPrimaries(ct.workingColorSpace),se=y.colorSpace===Tn?null:ct.getPrimaries(y.colorSpace),le=y.colorSpace===Tn||pe===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,He=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let E=0;E<6;E++)!Te&&!He?Y[E]=_(y.image[E],!1,!0,r.maxCubemapSize):Y[E]=He?y.image[E].image:y.image[E],Y[E]=Be(y,Y[E]);let ot=Y[0],Ye=p(ot)||a,Pe=s.convert(y.format,y.colorSpace),ve=s.convert(y.type),ue=w(y.internalFormat,Pe,ve,y.colorSpace),Ve=a&&y.isVideoTexture!==!0,rt=J.__version===void 0||K===!0,pt=q.dataReady,Je=D(y,ot,Ye);Ie(n.TEXTURE_CUBE_MAP,y,Ye);let lt;if(Te){Ve&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,ue,ot.width,ot.height);for(let E=0;E<6;E++){lt=Y[E].mipmaps;for(let te=0;te<lt.length;te++){let ne=lt[te];y.format!==kn?Pe!==null?Ve?pt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ne.width,ne.height,Pe,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ue,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,0,0,ne.width,ne.height,Pe,ve,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te,ue,ne.width,ne.height,0,Pe,ve,ne.data)}}}else{lt=y.mipmaps,Ve&&rt&&(lt.length>0&&Je++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,ue,Y[0].width,Y[0].height));for(let E=0;E<6;E++)if(He){Ve?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,Y[E].width,Y[E].height,Pe,ve,Y[E].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ue,Y[E].width,Y[E].height,0,Pe,ve,Y[E].data);for(let te=0;te<lt.length;te++){let he=lt[te].image[E].image;Ve?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,he.width,he.height,Pe,ve,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ue,he.width,he.height,0,Pe,ve,he.data)}}else{Ve?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,Pe,ve,Y[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,ue,Pe,ve,Y[E]);for(let te=0;te<lt.length;te++){let ne=lt[te];Ve?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,0,0,Pe,ve,ne.image[E]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+E,te+1,ue,Pe,ve,ne.image[E])}}}S(y,Ye)&&x(n.TEXTURE_CUBE_MAP),J.__version=q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Me(b,y,L,K,q,J){let pe=s.convert(L.format,L.colorSpace),se=s.convert(L.type),le=w(L.internalFormat,pe,se,L.colorSpace);if(!i.get(y).__hasExternalTextures){let He=Math.max(1,y.width>>J),Y=Math.max(1,y.height>>J);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,J,le,He,Y,y.depth,0,pe,se,null):t.texImage2D(q,J,le,He,Y,0,pe,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,q,i.get(L).__webglTexture,0,Re(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,q,i.get(L).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(b,y,L){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(L||ge(y)){let q=y.depthTexture;q&&q.isDepthTexture&&(q.type===Si?K=n.DEPTH_COMPONENT32F:q.type===Yi&&(K=n.DEPTH_COMPONENT24));let J=Re(y);ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,K,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,K,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let K=Re(y);L&&ge(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,y.width,y.height):ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let q=0;q<K.length;q++){let J=K[q],pe=s.convert(J.format,J.colorSpace),se=s.convert(J.type),le=w(J.internalFormat,pe,se,J.colorSpace),Te=Re(y);L&&ge(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,le,y.width,y.height):ge(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),k(y.depthTexture,0);let K=i.get(y.depthTexture).__webglTexture,q=Re(y);if(y.depthTexture.format===Or)ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===Js)ge(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function tt(b){let y=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");fe(y.__webglFramebuffer,b)}else if(L){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=n.createRenderbuffer(),we(y.__webglDepthbuffer[K],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),we(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(b,y,L){let K=i.get(b);y!==void 0&&Me(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&tt(b)}function N(b){let y=b.texture,L=i.get(b),K=i.get(y);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++);let q=b.isWebGLCubeRenderTarget===!0,J=b.isWebGLMultipleRenderTargets===!0,pe=p(b)||a;if(q){L.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[se]=[];for(let le=0;le<y.mipmaps.length;le++)L.__webglFramebuffer[se][le]=n.createFramebuffer()}else L.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)L.__webglFramebuffer[se]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(J)if(r.drawBuffers){let se=b.texture;for(let le=0,Te=se.length;le<Te;le++){let He=i.get(se[le]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ge(b)===!1){let se=J?y:[y];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<se.length;le++){let Te=se[le];L.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[le]);let He=s.convert(Te.format,Te.colorSpace),Y=s.convert(Te.type),ot=w(Te.internalFormat,He,Y,Te.colorSpace,b.isXRRenderTarget===!0),Ye=Re(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,ot,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,L.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),we(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(n.TEXTURE_CUBE_MAP,y,pe);for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Me(L.__webglFramebuffer[se][le],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,le);else Me(L.__webglFramebuffer[se],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);S(y,pe)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){let se=b.texture;for(let le=0,Te=se.length;le<Te;le++){let He=se[le],Y=i.get(He);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture),Ie(n.TEXTURE_2D,He,pe),Me(L.__webglFramebuffer,b,He,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),S(He,pe)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?se=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,K.__webglTexture),Ie(se,y,pe),a&&y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Me(L.__webglFramebuffer[le],b,y,n.COLOR_ATTACHMENT0,se,le);else Me(L.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,se,0);S(y,pe)&&x(se),t.unbindTexture()}b.depthBuffer&&tt(b)}function Ft(b){let y=p(b)||a,L=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let K=0,q=L.length;K<q;K++){let J=L[K];if(S(J,y)){let pe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(J).__webglTexture;t.bindTexture(pe,se),x(pe),t.unbindTexture()}}}function _e(b){if(a&&b.samples>0&&ge(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],L=b.width,K=b.height,q=n.COLOR_BUFFER_BIT,J=[],pe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(b),le=b.isWebGLMultipleRenderTargets===!0;if(le)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){J.push(n.COLOR_ATTACHMENT0+Te),b.depthBuffer&&J.push(pe);let He=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(He===!1&&(b.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),le&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]),He===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),le){let Y=i.get(y[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,L,K,0,0,L,K,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);let He=i.get(y[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Re(b){return Math.min(r.maxSamples,b.samples)}function ge(b){let y=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function vt(b){let y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Be(b,y){let L=b.colorSpace,K=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Hf||L!==bi&&L!==Tn&&(ct.getTransfer(L)===mt?a===!1?e.has("EXT_sRGB")===!0&&K===kn?(b.format=Hf,b.minFilter=nn,b.generateMipmaps=!1):y=Rl.sRGBToLinear(y):(K!==kn||q!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ge}function UN(n,e,t){let i=t.isWebGL2;function r(s,o=Tn){let a,c=ct.getTransfer(o);if(s===Ki)return n.UNSIGNED_BYTE;if(s===bx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ex)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gD)return n.BYTE;if(s===vD)return n.SHORT;if(s===bp)return n.UNSIGNED_SHORT;if(s===wx)return n.INT;if(s===Yi)return n.UNSIGNED_INT;if(s===Si)return n.FLOAT;if(s===da)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yD)return n.ALPHA;if(s===kn)return n.RGBA;if(s===_D)return n.LUMINANCE;if(s===xD)return n.LUMINANCE_ALPHA;if(s===Or)return n.DEPTH_COMPONENT;if(s===Js)return n.DEPTH_STENCIL;if(s===Hf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===MD)return n.RED;if(s===Tx)return n.RED_INTEGER;if(s===SD)return n.RG;if(s===Cx)return n.RG_INTEGER;if(s===Ax)return n.RGBA_INTEGER;if(s===sf||s===of||s===af||s===cf)if(c===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===of)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===af)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===O_||s===F_||s===U_||s===k_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===O_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===F_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===U_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===k_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===B_||s===V_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===B_)return c===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===V_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===z_||s===H_||s===G_||s===W_||s===j_||s===$_||s===q_||s===X_||s===Y_||s===Z_||s===J_||s===K_||s===Q_||s===e0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===z_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===H_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===G_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===W_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===j_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===q_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===X_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Y_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Z_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===J_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===K_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Q_)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===e0)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lf||s===t0||s===n0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lf)return c===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===t0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===n0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wD||s===i0||s===r0||s===s0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===i0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===r0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===s0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var np=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gs=class extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kN={type:"move"},ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},BN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ip=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new nr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new ni({extensions:{fragDepth:!0},vertexShader:BN,fragmentShader:VN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new zl(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},rp=class extends er{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,_=new ip,p=t.getContextAttributes(),f=null,S=null,x=[],w=[],D=new Xe,C=null,A=new qt;A.layers.enable(1),A.viewport=new gt;let B=new qt;B.layers.enable(2),B.viewport=new gt;let X=[A,B],v=new np;v.layers.enable(1),v.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=x[V];return Z===void 0&&(Z=new ua,x[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=x[V];return Z===void 0&&(Z=new ua,x[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=x[V];return Z===void 0&&(Z=new ua,x[V]=Z),Z.getHandSpace()};function Q(V){let Z=w.indexOf(V.inputSource);if(Z===-1)return;let ce=x[Z];ce!==void 0&&(ce.update(V.inputSource,V.frame,l||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function R(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",z);for(let V=0;V<x.length;V++){let Z=w[V];Z!==null&&(w[V]=null,x[V].disconnect(Z))}T=null,H=null,_.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(V){return so(this,null,function*(){if(r=V,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",R),r.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ei(m.framebufferWidth,m.framebufferHeight,{format:kn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ce=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?Js:Or,ce=p.stencil?Lr:Yi);let we={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Ei(h.textureWidth,h.textureHeight,{format:kn,type:Ki,depthTexture:new Wl(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let fe=e.properties.get(S);fe.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(V){for(let Z=0;Z<V.removed.length;Z++){let ce=V.removed[Z],Me=w.indexOf(ce);Me>=0&&(w[Me]=null,x[Me].disconnect(ce))}for(let Z=0;Z<V.added.length;Z++){let ce=V.added[Z],Me=w.indexOf(ce);if(Me===-1){for(let fe=0;fe<x.length;fe++)if(fe>=w.length){w.push(ce),Me=fe;break}else if(w[fe]===null){w[fe]=ce,Me=fe;break}if(Me===-1)break}let we=x[Me];we&&we.connect(ce)}}let k=new I,$=new I;function G(V,Z,ce){k.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);let Me=k.distanceTo($),we=Z.projectionMatrix.elements,fe=ce.projectionMatrix.elements,tt=we[14]/(we[10]-1),Fe=we[14]/(we[10]+1),N=(we[9]+1)/we[5],Ft=(we[9]-1)/we[5],_e=(we[8]-1)/we[0],Re=(fe[8]+1)/fe[0],ge=tt*_e,vt=tt*Re,Be=Me/(-_e+Re),b=Be*-_e;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(b),V.translateZ(Be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let y=tt+Be,L=Fe+Be,K=ge-b,q=vt+(Me-b),J=N*Fe/L*y,pe=Ft*Fe/L*y;V.projectionMatrix.makePerspective(K,q,J,pe,y,L),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),v.near=B.near=A.near=V.near,v.far=B.far=A.far=V.far,(T!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,H=v.far,A.near=T,A.far=H,B.near=T,B.far=H,A.updateProjectionMatrix(),B.updateProjectionMatrix(),V.updateProjectionMatrix());let Z=V.parent,ce=v.cameras;W(v,Z);for(let Me=0;Me<ce.length;Me++)W(ce[Me],Z);ce.length===2?G(v,A,B):v.projectionMatrix.copy(A.projectionMatrix),j(V,v,Z)};function j(V,Z,ce){ce===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ha*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ee=null;function re(V,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){let ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Me=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let fe=0;fe<ce.length;fe++){let tt=ce[fe],Fe=null;if(m!==null)Fe=m.getViewport(tt);else{let Ft=d.getViewSubImage(h,tt);Fe=Ft.viewport,fe===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,h.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(S))}let N=X[fe];N===void 0&&(N=new qt,N.layers.enable(fe),N.viewport=new gt,X[fe]=N),N.matrix.fromArray(tt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(tt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),fe===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(N)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){let fe=d.getDepthInformation(ce[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,r.renderState)}}for(let ce=0;ce<x.length;ce++){let Me=w[ce],we=x[ce];Me!==null&&we!==void 0&&we.update(Me,Z,l||o)}_.render(e,v),ee&&ee(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Ie=new Ox;Ie.setAnimationLoop(re),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}};function zN(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Lx(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===rn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===rn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HN(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){let w=x.program;i.uniformBlockBinding(S,w)}function l(S,x){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",p));let D=x.program;i.updateUBOMapping(S,D);let C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){let x=d();S.__bindingPointIndex=x;let w=n.createBuffer(),D=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let x=r[S.id],w=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,A=w.length;C<A;C++){let B=Array.isArray(w[C])?w[C]:[w[C]];for(let X=0,v=B.length;X<v;X++){let T=B[X];if(m(T,C,X,D)===!0){let H=T.__offset,Q=Array.isArray(T.value)?T.value:[T.value],R=0;for(let z=0;z<Q.length;z++){let k=Q[z],$=_(k);typeof k=="number"||typeof k=="boolean"?(T.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,H+R,T.__data)):k.isMatrix3?(T.__data[0]=k.elements[0],T.__data[1]=k.elements[1],T.__data[2]=k.elements[2],T.__data[3]=0,T.__data[4]=k.elements[3],T.__data[5]=k.elements[4],T.__data[6]=k.elements[5],T.__data[7]=0,T.__data[8]=k.elements[6],T.__data[9]=k.elements[7],T.__data[10]=k.elements[8],T.__data[11]=0):(k.toArray(T.__data,R),R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,x,w,D){let C=S.value,A=x+"_"+w;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{let B=D[A];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return D[A]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function g(S){let x=S.uniforms,w=0,D=16;for(let A=0,B=x.length;A<B;A++){let X=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,T=X.length;v<T;v++){let H=X[v],Q=Array.isArray(H.value)?H.value:[H.value];for(let R=0,z=Q.length;R<z;R++){let k=Q[R],$=_(k),G=w%D;G!==0&&D-G<$.boundary&&(w+=D-G),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=$.storage}}}let C=w%D;return C>0&&(w+=D-C),S.__size=w,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){let x=S.target;x.removeEventListener("dispose",p);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var sp=class{constructor(e={}){let{canvas:t=XD(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let x=this,w=!1,D=0,C=0,A=null,B=-1,X=null,v=new gt,T=new gt,H=null,Q=new Ze(0),R=0,z=t.width,k=t.height,$=1,G=null,W=null,j=new gt(0,0,z,k),ee=new gt(0,0,z,k),re=!1,Ie=new ma,V=!1,Z=!1,ce=null,Me=new _t,we=new Xe,fe=new I,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?$:1}let N=i;function Ft(M,P){for(let F=0;F<M.length;F++){let U=M[F],O=t.getContext(U,P);if(O!==null)return O}return null}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sp}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",E,!1),t.addEventListener("webglcontextcreationerror",te,!1),N===null){let P=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&P.shift(),N=Ft(P,M),N===null)throw Ft(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _e,Re,ge,vt,Be,b,y,L,K,q,J,pe,se,le,Te,He,Y,ot,Ye,Pe,ve,ue,Ve,rt;function pt(){_e=new sP(N),Re=new Q1(N,_e,e),_e.init(Re),ue=new UN(N,_e,Re),ge=new ON(N,_e,Re),vt=new cP(N),Be=new wN,b=new FN(N,_e,ge,Be,Re,ue,vt),y=new tP(x),L=new rP(x),K=new gI(N,Re),Ve=new J1(N,_e,K,Re),q=new oP(N,K,vt,Ve),J=new hP(N,q,K,vt),Ye=new dP(N,Re,b),He=new eP(Be),pe=new SN(x,y,L,_e,Re,Ve,He),se=new zN(x,Be),le=new EN,Te=new RN(_e,Re),ot=new Z1(x,y,L,ge,J,h,c),Y=new LN(x,J,Re),rt=new HN(N,vt,Re,ge),Pe=new K1(N,_e,vt,Re),ve=new aP(N,_e,vt,Re),vt.programs=pe.programs,x.capabilities=Re,x.extensions=_e,x.properties=Be,x.renderLists=le,x.shadowMap=Y,x.state=ge,x.info=vt}pt();let Je=new rp(x,N);this.xr=Je,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=_e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=_e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(z,k,!1))},this.getSize=function(M){return M.set(z,k)},this.setSize=function(M,P,F=!0){if(Je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,k=P,t.width=Math.floor(M*$),t.height=Math.floor(P*$),F===!0&&(t.style.width=M+"px",t.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(z*$,k*$).floor()},this.setDrawingBufferSize=function(M,P,F){z=M,k=P,$=F,t.width=Math.floor(M*F),t.height=Math.floor(P*F),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,P,F,U){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,P,F,U),ge.viewport(v.copy(j).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,P,F,U){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,P,F,U),ge.scissor(T.copy(ee).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){ge.setScissorTest(re=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(M=!0,P=!0,F=!0){let U=0;if(M){let O=!1;if(A!==null){let ae=A.texture.format;O=ae===Ax||ae===Cx||ae===Tx}if(O){let ae=A.texture.type,me=ae===Ki||ae===Yi||ae===bp||ae===Lr||ae===bx||ae===Ex,be=ot.getClearColor(),Ae=ot.getClearAlpha(),Ge=be.r,Oe=be.g,Ue=be.b;me?(m[0]=Ge,m[1]=Oe,m[2]=Ue,m[3]=Ae,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Ge,g[1]=Oe,g[2]=Ue,g[3]=Ae,N.clearBufferiv(N.COLOR,0,g))}else U|=N.COLOR_BUFFER_BIT}P&&(U|=N.DEPTH_BUFFER_BIT),F&&(U|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",E,!1),t.removeEventListener("webglcontextcreationerror",te,!1),le.dispose(),Te.dispose(),Be.dispose(),y.dispose(),L.dispose(),J.dispose(),Ve.dispose(),rt.dispose(),pe.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",mn),Je.removeEventListener("sessionend",ht),ce&&(ce.dispose(),ce=null),Xt.stop()};function lt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function E(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=vt.autoReset,P=Y.enabled,F=Y.autoUpdate,U=Y.needsUpdate,O=Y.type;pt(),vt.autoReset=M,Y.enabled=P,Y.autoUpdate=F,Y.needsUpdate=U,Y.type=O}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ne(M){let P=M.target;P.removeEventListener("dispose",ne),he(P)}function he(M){xe(M),Be.remove(M)}function xe(M){let P=Be.get(M).programs;P!==void 0&&(P.forEach(function(F){pe.releaseProgram(F)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,F,U,O,ae){P===null&&(P=tt);let me=O.isMesh&&O.matrixWorld.determinant()<0,be=Gx(M,P,F,U,O);ge.setMaterial(U,me);let Ae=F.index,Ge=1;if(U.wireframe===!0){if(Ae=q.getWireframeAttribute(F),Ae===void 0)return;Ge=2}let Oe=F.drawRange,Ue=F.attributes.position,Mt=Oe.start*Ge,sn=(Oe.start+Oe.count)*Ge;ae!==null&&(Mt=Math.max(Mt,ae.start*Ge),sn=Math.min(sn,(ae.start+ae.count)*Ge)),Ae!==null?(Mt=Math.max(Mt,0),sn=Math.min(sn,Ae.count)):Ue!=null&&(Mt=Math.max(Mt,0),sn=Math.min(sn,Ue.count));let Rt=sn-Mt;if(Rt<0||Rt===1/0)return;Ve.setup(O,U,be,F,Ae);let ii,yt=Pe;if(Ae!==null&&(ii=K.get(Ae),yt=ve,yt.setIndex(ii)),O.isMesh)U.wireframe===!0?(ge.setLineWidth(U.wireframeLinewidth*Fe()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(O.isLine){let We=U.linewidth;We===void 0&&(We=1),ge.setLineWidth(We*Fe()),O.isLineSegments?yt.setMode(N.LINES):O.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else O.isPoints?yt.setMode(N.POINTS):O.isSprite&&yt.setMode(N.TRIANGLES);if(O.isBatchedMesh)yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)yt.renderInstances(Mt,Rt,O.count);else if(F.isInstancedBufferGeometry){let We=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Yl=Math.min(F.instanceCount,We);yt.renderInstances(Mt,Rt,Yl)}else yt.render(Mt,Rt)};function st(M,P,F){M.transparent===!0&&M.side===Mi&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,ya(M,P,F),M.side=Qi,M.needsUpdate=!0,ya(M,P,F),M.side=Mi):ya(M,P,F)}this.compile=function(M,P,F=null){F===null&&(F=M),p=Te.get(F),p.init(),S.push(p),F.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==F&&M.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(x._useLegacyLights);let U=new Set;return M.traverse(function(O){let ae=O.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){let be=ae[me];st(be,F,O),U.add(be)}else st(ae,F,O),U.add(ae)}),S.pop(),p=null,U},this.compileAsync=function(M,P,F=null){let U=this.compile(M,P,F);return new Promise(O=>{function ae(){if(U.forEach(function(me){Be.get(me).currentProgram.isReady()&&U.delete(me)}),U.size===0){O(M);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let dt=null;function Ut(M){dt&&dt(M)}function mn(){Xt.stop()}function ht(){Xt.start()}let Xt=new Ox;Xt.setAnimationLoop(Ut),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(M){dt=M,Je.setAnimationLoop(M),M===null?Xt.stop():Xt.start()},Je.addEventListener("sessionstart",mn),Je.addEventListener("sessionend",ht),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(P),P=Je.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,P,A),p=Te.get(M,S.length),p.init(),S.push(p),Me.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Ie.setFromProjectionMatrix(Me),Z=this.localClippingEnabled,V=He.init(this.clippingPlanes,Z),_=le.get(M,f.length),_.init(),f.push(_),Hn(M,P,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,W),this.info.render.frame++,V===!0&&He.beginShadows();let F=p.state.shadowsArray;if(Y.render(F,M,P),V===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1)&&ot.render(_,M),p.setupLights(x._useLegacyLights),P.isArrayCamera){let U=P.cameras;for(let O=0,ae=U.length;O<ae;O++){let me=U[O];Rp(_,M,me,me.viewport)}}else Rp(_,M,P);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,P),Ve.resetDefaultState(),B=-1,X=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Hn(M,P,F,U){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){U&&fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Me);let me=J.update(M),be=M.material;be.visible&&_.push(M,me,be,F,fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){let me=J.update(M),be=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),fe.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),fe.copy(me.boundingSphere.center)),fe.applyMatrix4(M.matrixWorld).applyMatrix4(Me)),Array.isArray(be)){let Ae=me.groups;for(let Ge=0,Oe=Ae.length;Ge<Oe;Ge++){let Ue=Ae[Ge],Mt=be[Ue.materialIndex];Mt&&Mt.visible&&_.push(M,me,Mt,F,fe.z,Ue)}}else be.visible&&_.push(M,me,be,F,fe.z,null)}}let ae=M.children;for(let me=0,be=ae.length;me<be;me++)Hn(ae[me],P,F,U)}function Rp(M,P,F,U){let O=M.opaque,ae=M.transmissive,me=M.transparent;p.setupLightsView(F),V===!0&&He.setGlobalState(x.clippingPlanes,F),ae.length>0&&Hx(O,ae,P,F),U&&ge.viewport(v.copy(U)),O.length>0&&va(O,P,F),ae.length>0&&va(ae,P,F),me.length>0&&va(me,P,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Hx(M,P,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ae=Re.isWebGL2;ce===null&&(ce=new Ei(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?da:Ki,minFilter:Nr,samples:ae?4:0})),x.getDrawingBufferSize(we),ae?ce.setSize(we.x,we.y):ce.setSize(Il(we.x),Il(we.y));let me=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(Q),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let be=x.toneMapping;x.toneMapping=Ji,va(M,F,U),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce);let Ae=!1;for(let Ge=0,Oe=P.length;Ge<Oe;Ge++){let Ue=P[Ge],Mt=Ue.object,sn=Ue.geometry,Rt=Ue.material,ii=Ue.group;if(Rt.side===Mi&&Mt.layers.test(U.layers)){let yt=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,Pp(Mt,F,U,sn,Rt,ii),Rt.side=yt,Rt.needsUpdate=!0,Ae=!0}}Ae===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce)),x.setRenderTarget(me),x.setClearColor(Q,R),x.toneMapping=be}function va(M,P,F){let U=P.isScene===!0?P.overrideMaterial:null;for(let O=0,ae=M.length;O<ae;O++){let me=M[O],be=me.object,Ae=me.geometry,Ge=U===null?me.material:U,Oe=me.group;be.layers.test(F.layers)&&Pp(be,P,F,Ae,Ge,Oe)}}function Pp(M,P,F,U,O,ae){M.onBeforeRender(x,P,F,U,O,ae),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,P,F,U,M,ae),O.transparent===!0&&O.side===Mi&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,x.renderBufferDirect(F,P,U,O,M,ae),O.side=Qi,O.needsUpdate=!0,x.renderBufferDirect(F,P,U,O,M,ae),O.side=Mi):x.renderBufferDirect(F,P,U,O,M,ae),M.onAfterRender(x,P,F,U,O,ae)}function ya(M,P,F){P.isScene!==!0&&(P=tt);let U=Be.get(M),O=p.state.lights,ae=p.state.shadowsArray,me=O.state.version,be=pe.getParameters(M,O.state,ae,P,F),Ae=pe.getProgramCacheKey(be),Ge=U.programs;U.environment=M.isMeshStandardMaterial?P.environment:null,U.fog=P.fog,U.envMap=(M.isMeshStandardMaterial?L:y).get(M.envMap||U.environment),Ge===void 0&&(M.addEventListener("dispose",ne),Ge=new Map,U.programs=Ge);let Oe=Ge.get(Ae);if(Oe!==void 0){if(U.currentProgram===Oe&&U.lightsStateVersion===me)return Lp(M,be),Oe}else be.uniforms=pe.getUniforms(M),M.onBuild(F,be,x),M.onBeforeCompile(be,x),Oe=pe.acquireProgram(be,Ae),Ge.set(Ae,Oe),U.uniforms=be.uniforms;let Ue=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=He.uniform),Lp(M,be),U.needsLights=jx(M),U.lightsStateVersion=me,U.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),U.currentProgram=Oe,U.uniformsList=null,Oe}function Np(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=Xs.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Lp(M,P){let F=Be.get(M);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function Gx(M,P,F,U,O){P.isScene!==!0&&(P=tt),b.resetTextureUnits();let ae=P.fog,me=U.isMeshStandardMaterial?P.environment:null,be=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bi,Ae=(U.isMeshStandardMaterial?L:y).get(U.envMap||me),Ge=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Oe=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ue=!!F.morphAttributes.position,Mt=!!F.morphAttributes.normal,sn=!!F.morphAttributes.color,Rt=Ji;U.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let ii=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=ii!==void 0?ii.length:0,We=Be.get(U),Yl=p.state.lights;if(V===!0&&(Z===!0||M!==X)){let gn=M===X&&U.id===B;He.setState(U,M,gn)}let xt=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yl.state.version||We.outputColorSpace!==be||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||We.envMap!==Ae||U.fog===!0&&We.fog!==ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==He.numPlanes||We.numIntersection!==He.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==Ue||We.morphNormals!==Mt||We.morphColors!==sn||We.toneMapping!==Rt||Re.isWebGL2===!0&&We.morphTargetsCount!==yt)&&(xt=!0):(xt=!0,We.__version=U.version);let ir=We.currentProgram;xt===!0&&(ir=ya(U,P,O));let Op=!1,ro=!1,Zl=!1,Ht=ir.getUniforms(),rr=We.uniforms;if(ge.useProgram(ir.program)&&(Op=!0,ro=!0,Zl=!0),U.id!==B&&(B=U.id,ro=!0),Op||X!==M){Ht.setValue(N,"projectionMatrix",M.projectionMatrix),Ht.setValue(N,"viewMatrix",M.matrixWorldInverse);let gn=Ht.map.cameraPosition;gn!==void 0&&gn.setValue(N,fe.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,ro=!0,Zl=!0)}if(O.isSkinnedMesh){Ht.setOptional(N,O,"bindMatrix"),Ht.setOptional(N,O,"bindMatrixInverse");let gn=O.skeleton;gn&&(Re.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ht.setValue(N,"boneTexture",gn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Ht.setOptional(N,O,"batchingTexture"),Ht.setValue(N,"batchingTexture",O._matricesTexture,b));let Jl=F.morphAttributes;if((Jl.position!==void 0||Jl.normal!==void 0||Jl.color!==void 0&&Re.isWebGL2===!0)&&Ye.update(O,F,ir),(ro||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,Ht.setValue(N,"receiveShadow",O.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(rr.envMap.value=Ae,rr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ro&&(Ht.setValue(N,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Wx(rr,Zl),ae&&U.fog===!0&&se.refreshFogUniforms(rr,ae),se.refreshMaterialUniforms(rr,U,$,k,ce),Xs.upload(N,Np(We),rr,b)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Xs.upload(N,Np(We),rr,b),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ht.setValue(N,"center",O.center),Ht.setValue(N,"modelViewMatrix",O.modelViewMatrix),Ht.setValue(N,"normalMatrix",O.normalMatrix),Ht.setValue(N,"modelMatrix",O.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let gn=U.uniformsGroups;for(let Kl=0,$x=gn.length;Kl<$x;Kl++)if(Re.isWebGL2){let Fp=gn[Kl];rt.update(Fp,ir),rt.bind(Fp,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function Wx(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function jx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,P,F){Be.get(M.texture).__webglTexture=P,Be.get(M.depthTexture).__webglTexture=F;let U=Be.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,P){let F=Be.get(M);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,F=0){A=M,D=P,C=F;let U=!0,O=null,ae=!1,me=!1;if(M){let Ae=Be.get(M);Ae.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(N.FRAMEBUFFER,null),U=!1):Ae.__webglFramebuffer===void 0?b.setupRenderTarget(M):Ae.__hasExternalTextures&&b.rebindTextures(M,Be.get(M.texture).__webglTexture,Be.get(M.depthTexture).__webglTexture);let Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(me=!0);let Oe=Be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[P])?O=Oe[P][F]:O=Oe[P],ae=!0):Re.isWebGL2&&M.samples>0&&b.useMultisampledRTT(M)===!1?O=Be.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[F]:O=Oe,v.copy(M.viewport),T.copy(M.scissor),H=M.scissorTest}else v.copy(j).multiplyScalar($).floor(),T.copy(ee).multiplyScalar($).floor(),H=re;if(ge.bindFramebuffer(N.FRAMEBUFFER,O)&&Re.drawBuffers&&U&&ge.drawBuffers(M,O),ge.viewport(v),ge.scissor(T),ge.setScissorTest(H),ae){let Ae=Be.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ae.__webglTexture,F)}else if(me){let Ae=Be.get(M.texture),Ge=P||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,F||0,Ge)}B=-1},this.readRenderTargetPixels=function(M,P,F,U,O,ae,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){ge.bindFramebuffer(N.FRAMEBUFFER,be);try{let Ae=M.texture,Ge=Ae.format,Oe=Ae.type;if(Ge!==kn&&ue.convert(Ge)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Oe===da&&(_e.has("EXT_color_buffer_half_float")||Re.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Oe!==Ki&&ue.convert(Oe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Si&&(Re.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-U&&F>=0&&F<=M.height-O&&N.readPixels(P,F,U,O,ue.convert(Ge),ue.convert(Oe),ae)}finally{let Ae=A!==null?Be.get(A).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,P,F=0){let U=Math.pow(2,-F),O=Math.floor(P.image.width*U),ae=Math.floor(P.image.height*U);b.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,M.x,M.y,O,ae),ge.unbindTexture()},this.copyTextureToTexture=function(M,P,F,U=0){let O=P.image.width,ae=P.image.height,me=ue.convert(F.format),be=ue.convert(F.type);b.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,M.x,M.y,O,ae,me,be,P.image.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,M.x,M.y,P.mipmaps[0].width,P.mipmaps[0].height,me,P.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,U,M.x,M.y,me,be,P.image),U===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,P,F,U,O=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ae=M.max.x-M.min.x+1,me=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Ae=ue.convert(U.format),Ge=ue.convert(U.type),Oe;if(U.isData3DTexture)b.setTexture3D(U,0),Oe=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)b.setTexture2DArray(U,0),Oe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ue=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Rt=N.getParameter(N.UNPACK_SKIP_ROWS),ii=N.getParameter(N.UNPACK_SKIP_IMAGES),yt=F.isCompressedTexture?F.mipmaps[O]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(Oe,O,P.x,P.y,P.z,ae,me,be,Ae,Ge,yt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Oe,O,P.x,P.y,P.z,ae,me,be,Ae,yt.data)):N.texSubImage3D(Oe,O,P.x,P.y,P.z,ae,me,be,Ae,Ge,yt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ue),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ii),O===0&&U.generateMipmaps&&N.generateMipmap(Oe),ge.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,ge.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Tp?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===ql?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Fr:Ix}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?Vt:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},op=class extends sp{};op.prototype.isWebGL1Renderer=!0;var K0=class extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ap=class extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Q0=new I,ex=new I,tx=new _t,Nf=new Ll,Ml=new Ks,cp=class extends Vn{constructor(e=new ti,t=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Q0.fromBufferAttribute(t,r-1),ex.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Q0.distanceTo(ex);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;tx.copy(r).invert(),Nf.copy(e.ray).applyMatrix4(tx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,d=new I,h=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=f,w=S-1;x<w;x+=m){let D=g.getX(x),C=g.getX(x+1);if(l.fromBufferAttribute(p,D),u.fromBufferAttribute(p,C),Nf.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(h);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=f,w=S-1;x<w;x+=m){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Nf.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},nx=new I,ix=new I,rx=class extends cp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)nx.fromBufferAttribute(t,r),ix.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nx.distanceTo(ix);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lp=class n extends ti{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let x=new I,w=new I,D=new I;for(let C=0;C<t.length;C+=3)m(t[C+0],x),m(t[C+1],w),m(t[C+2],D),c(x,w,D,S)}function c(S,x,w,D){let C=D+1,A=[];for(let B=0;B<=C;B++){A[B]=[];let X=S.clone().lerp(w,B/C),v=x.clone().lerp(w,B/C),T=C-B;for(let H=0;H<=T;H++)H===0&&B===C?A[B][H]=X:A[B][H]=X.clone().lerp(v,H/T)}for(let B=0;B<C;B++)for(let X=0;X<2*(C-B)-1;X++){let v=Math.floor(X/2);X%2===0?(h(A[B][v+1]),h(A[B+1][v]),h(A[B][v])):(h(A[B][v+1]),h(A[B+1][v+1]),h(A[B+1][v]))}}function l(S){let x=new I;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(S),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function u(){let S=new I;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];let w=p(S)/2/Math.PI+.5,D=f(S)/Math.PI+.5;o.push(w,1-D)}g(),d()}function d(){for(let S=0;S<o.length;S+=6){let x=o[S+0],w=o[S+2],D=o[S+4],C=Math.max(x,w,D),A=Math.min(x,w,D);C>.9&&A<.1&&(x<.2&&(o[S+0]+=1),w<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,x){let w=S*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function g(){let S=new I,x=new I,w=new I,D=new I,C=new Xe,A=new Xe,B=new Xe;for(let X=0,v=0;X<s.length;X+=9,v+=6){S.set(s[X+0],s[X+1],s[X+2]),x.set(s[X+3],s[X+4],s[X+5]),w.set(s[X+6],s[X+7],s[X+8]),C.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),B.set(o[v+4],o[v+5]),D.copy(S).add(x).add(w).divideScalar(3);let T=p(D);_(C,v+0,S,T),_(A,v+2,x,T),_(B,v+4,w,T)}}function _(S,x,w,D){D<0&&S.x===1&&(o[x]=S.x-1),w.x===0&&w.z===0&&(o[x]=D/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var sx=class n extends lp{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ox=class n extends ti{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new I,h=new I,m=[],g=[],_=[],p=[];for(let f=0;f<=i;f++){let S=[],x=f/i,w=0;f===0&&o===0?w=.5/t:f===i&&c===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){let C=D/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(C+w,1-x),S.push(l++)}u.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){let x=u[f][S+1],w=u[f][S],D=u[f+1][S],C=u[f+1][S+1];(f!==0||o>0)&&m.push(x,w,C),(f!==i-1||c<Math.PI)&&m.push(w,D,C)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ax=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var cx=class extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Sl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function GN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var eo=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},up=class extends eo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:o0,endingEnd:o0}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case a0:s=e,a=2*t-i;break;case c0:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case a0:o=e,c=2*i-t;break;case c0:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,f=-h*p+2*h*_-h*g,S=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let D=0;D!==a;++D)s[D]=f*o[u+D]+S*o[l+D]+x*o[c+D]+w*o[d+D];return s}},dp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},hp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sl(t,this.TimeBufferType),this.values=Sl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sl(e.times,Array),values:Sl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new up(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bl:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case uf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bl;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return uf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&GN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===uf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=El;var kr=class extends zn{};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=bl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var fp=class extends zn{};fp.prototype.ValueTypeName="color";var pp=class extends zn{};pp.prototype.ValueTypeName="number";var mp=class extends eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)tr.slerpFlat(s,0,o,l-a,o,l,c);return s}},ga=class extends zn{InterpolantFactoryMethodLinear(e){return new mp(this.times,this.values,this.getValueSize(),e)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.DefaultInterpolation=El;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends zn{};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=bl;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var gp=class extends zn{};gp.prototype.ValueTypeName="vector";var lx={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},vp=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},WN=new vp,zx=(()=>{class n{constructor(t){this.manager=t!==void 0?t:WN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})();var yp=class extends zx{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=lx.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=fa("img");function c(){u(),lx.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var ux=class extends zx{constructor(e){super(e)}load(e,t,i,r){let s=new nr,o=new yp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},to=class extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},dx=class extends to{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lf=new _t,hx=new I,fx=new I,jl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;hx.setFromMatrixPosition(e.matrixWorld),t.position.copy(hx),fx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fx),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var px=new _t,ca=new I,Of=new I,_p=class extends jl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Of.copy(i.position),Of.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Of),i.updateMatrixWorld(),r.makeTranslation(-ca.x,-ca.y,-ca.z),px.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(px)}},mx=class extends to{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _p}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xp=class extends jl{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gx=class extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new xp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vx=class extends to{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var yx=new _t,_x=new _t,Dr=new _t,xx=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Dr.copy(e.projectionMatrix);let r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(js*t.fov*.5)/t.zoom,a,c;_x.elements[12]=-r,yx.elements[12]=r,a=-o*t.aspect+s,c=o*t.aspect+s,Dr.elements[0]=2*t.near/(c-a),Dr.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(Dr),a=-o*t.aspect-s,c=o*t.aspect-s,Dr.elements[0]=2*t.near/(c-a),Dr.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(Dr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_x),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(yx)}};var Dp="\\[\\]\\.:\\/",jN=new RegExp("["+Dp+"]","g"),Ip="[^"+Dp+"]",$N="[^"+Dp.replace("\\.","")+"]",qN=/((?:WC+[\/:])*)/.source.replace("WC",Ip),XN=/(WCOD+)?/.source.replace("WCOD",$N),YN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ip),ZN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ip),JN=new RegExp("^"+qN+XN+YN+ZN+"$"),KN=["material","materials","bones","map"],Mp=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jN,"")}static parseTrackName(t){let i=JN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);KN.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Mp,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lB=new Float32Array(1);var Mx=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);var QN=(()=>{class n{static createButton(t){let i=document.createElement("button");function r(){let l=null;function u(m){return so(this,null,function*(){m.addEventListener("end",d),yield t.xr.setSession(m),i.textContent="EXIT VR",l=m})}function d(){l.removeEventListener("end",d),i.textContent="ENTER VR",l=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="ENTER VR";let h={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",h).then(u):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(u).catch(m=>{console.warn(m)})}function s(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function o(){s(),i.textContent="VR NOT SUPPORTED"}function a(l){s(),console.warn("Exception when trying to call xr.isSessionSupported",l),i.textContent="VR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return i.id="VRButton",i.style.display="none",c(i),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?r():o(),l&&n.xrSessionIsGranted&&i.click()}).catch(a),i;{let l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{n.xrSessionIsGranted=!0})}}}return n.xrSessionIsGranted=!1,n})();QN.registerSessionGrantedListener();export{lg as a,gr as b,Li as c,_r as d,Ui as e,ft as f,ay as g,cy as h,Zd as i,Gk as j,BE as k,VE as l,Wk as m,Dy as n,F3 as o,U3 as p,lC as q,nB as r,iB as s,oB as t,aB as u,Kt as v,nn as w,kn as x,er as y,cB as z,Xe as A,qe as B,Ei as C,tr as D,I as E,Ll as F,Vn as G,Ze as H,Fl as I,zt as J,ti as K,Bn as L,pa as M,ni as N,qt as O,xi as P,zl as Q,Hl as R,sp as S,K0 as T,ap as U,rx as V,sx as W,ox as X,ax as Y,cx as Z,ux as _,dx as $,mx as aa,gx as ba,vx as ca,xx as da,Mx as ea,QN as fa};
