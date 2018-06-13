(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function r(i,o){try{var s=e[i](o),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){r("next",t)},function(t){r("throw",t)})
t(a)}("next")})}},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},a=(t(function(t){!function(n){var r,i=Object.prototype,o=i.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",p=s.toStringTag||"@@toStringTag",c=n.regeneratorRuntime
if(c)t.exports=c
else{(c=n.regeneratorRuntime=t.exports).wrap=k
var h="suspendedStart",l="suspendedYield",f="executing",d="completed",m={},y={}
y[a]=function(){return this}
var v=Object.getPrototypeOf,g=v&&v(v(T([])))
g&&g!==i&&o.call(g,a)&&(y=g)
var b=E.prototype=S.prototype=Object.create(y)
_.prototype=b.constructor=E,E.constructor=_,E[p]=_.displayName="GeneratorFunction",c.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},c.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,p in t||(t[p]="GeneratorFunction")),t.prototype=Object.create(b),t},c.awrap=function(t){return{__await:t}},C(x.prototype),x.prototype[u]=function(){return this},c.AsyncIterator=x,c.async=function(t,e,n,r){var i=new x(k(t,e,n,r))
return c.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(b),b[p]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},c.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e.reverse(),function n(){for(;e.length;){var r=e.pop()
if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var e=this
function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion
if("root"===s.tryLoc)return n("end")
if(s.tryLoc<=this.prev){var u=o.call(s,"catchLoc"),p=o.call(s,"finallyLoc")
if(u&&p){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)
if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally")
if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n]
if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r
break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null)
var s=i?i.completion:{}
return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.tryLoc===t){var r=n.completion
if("throw"===r.type){var i=r.arg
O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function k(t,e,n,r){var i=e&&e.prototype instanceof S?e:S,o=Object.create(i.prototype),s=new L(r||[])
return o._invoke=function(t,e,n){var r=h
return function(i,o){if(r===f)throw new Error("Generator is already running")
if(r===d){if("throw"===i)throw o
return D()}for(n.method=i,n.arg=o;;){var s=n.delegate
if(s){var a=A(s,n)
if(a){if(a===m)continue
return a}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===h)throw r=d,n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=f
var u=w(t,e,n)
if("normal"===u.type){if(r=n.done?d:l,u.arg===m)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,s),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function S(){}function _(){}function E(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){var n
this._invoke=function(r,i){function s(){return new Promise(function(n,s){(function n(r,i,s,a){var u=w(t[r],t,i)
if("throw"!==u.type){var p=u.arg,c=p.value
return c&&"object"===(void 0===c?"undefined":e(c))&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){n("next",t,s,a)},function(t){n("throw",t,s,a)}):Promise.resolve(c).then(function(t){p.value=t,s(p)},a)}a(u.arg)})(r,i,n,s)})}return n=n?n.then(s,s):s()}}function A(t,e){var n=t.iterator[e.method]
if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,A(t,e),"throw"===e.method))return m
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=w(n,t.iterator,e.arg)
if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m
var o=i.arg
return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var e=t[a]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e
return e.value=r,e.done=!0,e}
return i.next=i}}return{next:D}}function D(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())}),function(){return this}()||Function("return this")()),u=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,p=u&&a.regeneratorRuntime
if(a.regeneratorRuntime=void 0,u)a.regeneratorRuntime=p
else try{delete a.regeneratorRuntime}catch(t){a.regeneratorRuntime=void 0}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unreachable"
return new Error(t)}function h(t,e){if(!t)throw new Error(e||"assertion failure")}var l=Object.keys
function f(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]
if(null!==r&&"object"===(void 0===r?"undefined":e(r)))for(var i=l(r),o=0;o<i.length;o++){var s=i[o]
t[s]=r[s]}}return t}var d=0
function m(t){return t._guid=++d}function y(){return Object.create(null)}var v=function(){function t(){r(this,t),this.stack=[],this.current=null}return t.prototype.push=function(t){this.current=t,this.stack.push(t)},t.prototype.pop=function(){var t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t},t.prototype.isEmpty=function(){return 0===this.stack.length},i(t,[{key:"size",get:function(){return this.stack.length}}]),t}(),g=function(){function t(){r(this,t),this.clear()}return t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.clear=function(){this._head=this._tail=null},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t.next},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=e.next},t.prototype.insertBefore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)},t.prototype.append=function(t){var e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t},t.prototype.remove=function(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t},t}(),b=function(){function t(e,n){r(this,t),this._head=e,this._tail=n}return t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=this.nextNode(e)},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t===this._tail?null:t.next},t}(),k=(new b(null,null),Object.freeze([])),w=1,S=function(){function t(){r(this,t)}return t.prototype.validate=function(t){return this.value()===t},t}()
S.id=0
var _=[],E=[],C=function(){function t(e,n){r(this,t),this.type=e,this.inner=n}return t.prototype.value=function(){return(0,_[this.type])(this.inner)},t.prototype.validate=function(t){return(0,E[this.type])(this.inner,t)},t}()
function x(t){var e=_.length
_.push(function(t){return t.value()}),E.push(function(t,e){return t.validate(e)}),t.id=e}_.push(function(){return 0}),E.push(function(t,e){return 0===e})
var A=new C(0,null)
_.push(function(){return NaN}),E.push(function(t,e){return NaN===e})
var N=new C(1,null)
_.push(function(){return T}),E.push(function(t,e){return e===T})
new C(2,null)
function O(t){return t.tag===A}function L(t){return t===A}var T=w,D=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T
r(this,e)
var i=s(this,t.call(this))
return i.revision=n,i}return o(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T
return new C(this.id,new e(t))},e.prototype.value=function(){return this.revision},e.prototype.dirty=function(){this.revision=++T},e}(S)
function B(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n].tag
if(i===N)return N
i!==A&&e.push(i)}return j(e)}function R(t){for(var e=[],n=t.head();null!==n;){var r=n.tag
if(r===N)return N
r!==A&&e.push(r),n=t.nextNode(n)}return j(e)}function M(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n]
if(i===N)return N
i!==A&&e.push(i)}return j(e)}function j(t){switch(t.length){case 0:return A
case 1:return t[0]
case 2:return I.create(t[0],t[1])
default:return F.create(t)}}x(D)
var P=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return o(e,t),e.prototype.value=function(){var t=this.lastChecked
this.lastValue
return t!==T&&(this.lastChecked=T,this.lastValue=this.compute()),this.lastValue},e.prototype.invalidate=function(){this.lastChecked=null},e}(S),I=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.first=n,o.second=i,o}return o(e,t),e.create=function(t,n){return new C(this.id,new e(t,n))},e.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},e}(P)
x(I)
var F=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.tags=n,i}return o(e,t),e.create=function(t){return new C(this.id,new e(t))},e.prototype.compute=function(){for(var t=this.tags,e=-1,n=0;n<t.length;n++){var r=t[n].value()
e=Math.max(r,e)}return e},e}(P)
x(F)
var V=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.tag=n,i.lastUpdated=w,i}return o(e,t),e.create=function(t){return new C(this.id,new e(t))},e.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},e.prototype.update=function(t){t!==this.tag&&(this.tag=t,this.lastUpdated=T,this.invalidate())},e}(P)
x(V)
var U=function(){function t(){r(this,t),this.lastRevision=null,this.lastValue=null}return t.prototype.value=function(){var t=this.tag,e=this.lastRevision,n=this.lastValue
return null!==e&&t.validate(e)||(n=this.lastValue=this.compute(),this.lastRevision=t.value()),n},t.prototype.invalidate=function(){this.lastRevision=null},t}(),H=(function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.tag=n.tag,o.reference=n,o.mapper=i,o}o(e,t),e.prototype.compute=function(){var t=this.reference
return(0,this.mapper)(t.value())}}(U),function(){function t(e){r(this,t),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return t.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},t.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var t=this.reference,e=this.lastRevision,n=t.tag
if(n.validate(e))return z
this.lastRevision=n.value()
var r=this.lastValue,i=t.value()
return i===r?z:(this.lastValue=i,i)},t.prototype.initialize=function(){var t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e},t}()),z="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
var G,Y=function(){function t(e){r(this,t),this.inner=e,this.tag=A}return t.prototype.value=function(){return this.inner},t}(),W=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this,n.valueReferenceFor(i)))
return o.retained=!1,o.seen=!1,o.key=i.key,o.iterable=n,o.memo=n.memoReferenceFor(i),o}return o(e,t),e.prototype.update=function(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)},e.prototype.shouldRemove=function(){return!this.retained},e.prototype.reset=function(){this.retained=!1,this.seen=!1},e}(function t(e){r(this,t),this.next=null,this.prev=null,this.value=e}),X=function(){function t(e){r(this,t),this.iterator=null,this.map=y(),this.list=new g,this.tag=e.tag,this.iterable=e}return t.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},t.prototype.iterate=function(){var t=void 0
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t},t.prototype.has=function(t){return!!this.map[t]},t.prototype.get=function(t){return this.map[t]},t.prototype.wasSeen=function(t){var e=this.map[t]
return void 0!==e&&e.seen},t.prototype.append=function(t){var e=this.map,n=this.list,r=this.iterable,i=e[t.key]=new W(r,t)
return n.append(i),i},t.prototype.insertBefore=function(t,e){var n=this.map,r=this.list,i=this.iterable,o=n[t.key]=new W(i,t)
return o.retained=!0,r.insertBefore(o,e),o},t.prototype.move=function(t,e){var n=this.list
t.retained=!0,n.remove(t),n.insertBefore(t,e)},t.prototype.remove=function(t){this.list.remove(t),delete this.map[t.key]},t.prototype.nextNode=function(t){return this.list.nextNode(t)},t.prototype.head=function(){return this.list.head()},t}(),q=function(){function t(e){r(this,t),this.iterator=null
var n=new X(e)
this.artifacts=n}return t.prototype.next=function(){var t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)},t}();(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(G||(G={}))
var K=function(){function t(e){var n=e.target,i=e.artifacts
r(this,t),this.target=n,this.artifacts=i,this.iterator=i.iterate(),this.current=i.head()}return t.prototype.sync=function(){for(var t=G.Append;;)switch(t){case G.Append:t=this.nextAppend()
break
case G.Prune:t=this.nextPrune()
break
case G.Done:return void this.nextDone()}},t.prototype.advanceToKey=function(t){for(var e=this.current,n=this.artifacts,r=e;null!==r&&r.key!==t;)r.seen=!0,r=n.nextNode(r)
null!==r&&(this.current=n.nextNode(r))},t.prototype.nextAppend=function(){var t=this.iterator,e=this.current,n=this.artifacts,r=t.next()
if(null===r)return this.startPrune()
var i=r.key
return null!==e&&e.key===i?this.nextRetain(r):n.has(i)?this.nextMove(r):this.nextInsert(r),G.Append},t.prototype.nextRetain=function(t){var e=this.artifacts,n=this.current;(n=n).update(t),this.current=e.nextNode(n),this.target.retain(t.key,n.value,n.memo)},t.prototype.nextMove=function(t){var e=this.current,n=this.artifacts,r=this.target,i=t.key,o=n.get(t.key)
o.update(t),n.wasSeen(t.key)?(n.move(o,e),r.move(o.key,o.value,o.memo,e?e.key:null)):this.advanceToKey(i)},t.prototype.nextInsert=function(t){var e=this.artifacts,n=this.target,r=this.current,i=e.insertBefore(t,r)
n.insert(i.key,i.value,i.memo,r?r.key:null)},t.prototype.startPrune=function(){return this.current=this.artifacts.head(),G.Prune},t.prototype.nextPrune=function(){var t=this.artifacts,e=this.target,n=this.current
if(null===n)return G.Done
var r=n
return this.current=t.nextNode(r),r.shouldRemove()?(t.remove(r),e.delete(r.key)):r.reset(),G.Prune},t.prototype.nextDone=function(){this.target.done()},t}()
function J(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
var r=e[0],i=e[1],o=e[2]
return"string"==typeof r?function(t,n,r){return $(t,n,r,e)}:o?$(r,i,o,[]):void function(t,e){var n=Symbol(e)
tt(t).trackedProperties[e]=!0,void 0!==t[e]&&t[e]
Object.defineProperty(t,e,{configurable:!0,get:function(){return this[n]},set:function(t){tt(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,nt()}})}(r,i)}function $(t,e,n,r){var i=tt(t)
return i.trackedProperties[e]=!0,i.trackedPropertyDependencies[e]=r||[],{enumerable:!0,configurable:!1,get:n.get,set:function(){tt(this).dirtyableTagFor(e).inner.dirty(),n.set.apply(this,arguments),nt()}}}var Q=function(){function t(e){r(this,t),this.tags=y(),this.computedPropertyTags=y(),this.trackedProperties=e?Object.create(e.trackedProperties):y(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):y()}return t.prototype.tagFor=function(t){var e=this.tags[t]
if(e)return e
var n
return(n=this.trackedPropertyDependencies[t])?this.tags[t]=function(t,e,n){var r=[t.dirtyableTagFor(e)]
if(n&&n.length)for(var i=0;i<n.length;i++)r.push(t.tagFor(n[i]))
return M(r)}(this,t,n):this.tags[t]=D.create()},t.prototype.dirtyableTagFor=function(t){return this.trackedPropertyDependencies[t]?this.computedPropertyTags[t]||(this.computedPropertyTags[t]=D.create()):this.tags[t]||(this.tags[t]=D.create())},t}()
var Z=Symbol("ember-object")
function tt(t){var e=t[Z]
return e&&function(t,e){return et.call(t,e)}(t,Z)?e:t[Z]=new Q(e)}var et=Object.prototype.hasOwnProperty
var nt=function(){};(function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,o))
return a.target=n,a.key=i,a}o(e,t),e.for=function(t,n){return new e(t,n,"The property '"+n+"' on "+t+" was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")}})(Error)
function rt(t,n){arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return"object"===(void 0===t?"undefined":e(t))&&t?tt(t).tagFor(n):A}var it=function(){function t(e){r(this,t),this.debugName=null,this.__args__=null,Object.assign(this,e)}return t.create=function(t){return new this(t)},t.prototype.didInsertElement=function(){},t.prototype.didUpdate=function(){},t.prototype.willDestroy=function(){},t.prototype.destroy=function(){this.willDestroy()},t.prototype.toString=function(){return this.debugName+" component"},i(t,[{key:"element",get:function(){var t=this.bounds
return h(t&&t.firstNode===t.lastNode,"The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes."),t.firstNode}},{key:"args",get:function(){return this.__args__},set:function(t){this.__args__=t,tt(this).dirtyableTagFor("args").inner.dirty()}}]),t}(),ot={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0},st=function(){function t(e,n,i,o){r(this,t),this.name=e,this.manager=n,this.ComponentClass=i,this.handle=o,this.state={name:e,capabilities:ot,ComponentClass:i,handle:o}}return t.prototype.toJSON=function(){return{GlimmerDebug:'<component-definition name="'+this.name+'">'}},t}(),at=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
r(this,t),this._registry=e,this._resolver=n,this._lookups={},this._factoryDefinitionLookups={}}return t.prototype.factoryFor=function(t){var e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)},t.prototype.lookup=function(t){var e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
var n=this.factoryFor(t)
if(n){if(!1===this._registry.registeredOption(t,"instantiate"))return n.class
var r=n.create()
return e&&r&&(this._lookups[t]=r),r}},t.prototype.defaultInjections=function(t){return{}},t.prototype.buildInjections=function(t){for(var e=this.defaultInjections(t),n=this._registry.registeredInjections(t),r=void 0,i=0;i<n.length;i++)e[(r=n[i]).property]=this.lookup(r.source)
return e},t.prototype.buildFactory=function(t,e){var n=this.buildInjections(t)
return{class:e,create:function(t){var r=Object.assign({},n,t)
return e.create(r)}}},t}(),ut=function(){function t(e){r(this,t),this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}return t.prototype.register=function(t,e,n){this._registrations[t]=e,n&&(this._registeredOptions[t]=n)},t.prototype.registration=function(t){var e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e},t.prototype.unregister=function(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]},t.prototype.registerOption=function(t,e,n){var r=this._registeredOptions[t]
r||(r={},this._registeredOptions[t]=r),r[e]=n},t.prototype.registeredOption=function(t,e){var n=void 0,r=this.registeredOptions(t)
return r&&(n=r[e]),void 0===n&&void 0!==this._fallback&&(n=this._fallback.registeredOption(t,e)),n},t.prototype.registeredOptions=function(t){var e=this._registeredOptions[t]
if(void 0===e){var n=t.split(":")[0]
e=this._registeredOptions[n]}return e},t.prototype.unregisterOption=function(t,e){var n=this._registeredOptions[t]
n&&delete n[e]},t.prototype.registerInjection=function(t,e,n){var r=this._registeredInjections[t]
void 0===r&&(this._registeredInjections[t]=r=[]),r.push({property:e,source:n})},t.prototype.registeredInjections=function(t){var e=t.split(":")[0],n=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(n,this._registeredInjections[e]),Array.prototype.push.apply(n,this._registeredInjections[t]),n},t}(),pt="__owner__"
function ct(t){return t[pt]}function ht(t,e){t[pt]=e}var lt,ft=function(){function t(e){r(this,t),this._bounds=e}return i(t,[{key:"firstNode",get:function(){return this._bounds.firstNode()}},{key:"lastNode",get:function(){return this._bounds.lastNode()}}]),t}(),dt=new(function(){function t(){r(this,t),this.evaluateOpcode=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=null
return e}(82).slice()}return t.prototype.add=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"syscall"
this.evaluateOpcode[t]={syscall:"syscall"===n,evaluate:e}},t.prototype.debugBefore=function(t,e,n){return{sp:void 0,state:void 0}},t.prototype.debugAfter=function(t,e,n,r){var i=r.sp
r.state
t.stack.sp},t.prototype.evaluate=function(t,e,n){var r=this.evaluateOpcode[n]
r.syscall?r.evaluate(t,e):r.evaluate(t.inner,e)},t}()),mt=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.next=null,n.prev=null,n}return o(e,t),e}(function t(){r(this,t),m(this)});(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})(lt||(lt={}))
var yt,vt=function(t){function e(n){return r(this,e),s(this,t.call(this,n))}return o(e,t),e.create=function(t){return void 0===t?kt:null===t?wt:!0===t?St:!1===t?_t:"number"==typeof t?new bt(t):new gt(t)},e.prototype.get=function(t){return kt},e}(Y),gt=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.lengthReference=null,n}return o(e,t),e.prototype.get=function(e){if("length"===e){var n=this.lengthReference
return null===n&&(n=this.lengthReference=new bt(this.inner.length)),n}return t.prototype.get.call(this,e)},e}(vt),bt=function(t){function e(n){return r(this,e),s(this,t.call(this,n))}return o(e,t),e}(vt),kt=new bt(void 0),wt=new bt(null),St=new bt(!0),_t=new bt(!1),Et=function(){function t(e){r(this,t),this.inner=e,this.tag=e.tag}return t.prototype.value=function(){return this.toBool(this.inner.value())},t.prototype.toBool=function(t){return!!t},t}(),Ct=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.parts=n,i.tag=B(n),i}return o(e,t),e.prototype.compute=function(){for(var t=new Array,e=0;e<this.parts.length;e++){var n=this.parts[e].value()
null!=n&&(t[e]=xt(n))}return t.length>0?t.join(""):null},e}(U)
function xt(t){return"function"!=typeof t.toString?"":String(t)}function At(t){return function(e){return Array.isArray(e)&&e[0]===t}}dt.add(1,function(t,e){var n=e.op1,r=t.stack,i=t.constants.resolveHandle(n)(t,r.pop())
t.loadValue(lt.v0,i)}),dt.add(4,function(t,e){var n=e.op1,r=t.referenceForSymbol(n)
t.stack.push(r)}),dt.add(2,function(t,e){var n=e.op1,r=t.stack.pop()
t.scope().bindSymbol(n,r)}),dt.add(3,function(t,e){var n=e.op1,r=t.stack.pop(),i=t.stack.pop(),o=t.stack.pop(),s=o?[r,i,o]:null
t.scope().bindBlock(n,s)}),dt.add(80,function(t,e){var n=e.op1,r=t.constants.getString(n),i=t.scope().getPartialMap()[r]
void 0===i&&(i=t.getSelf().get(r)),t.stack.push(i)}),dt.add(17,function(t,e){var n=e.op1,r=e.op2
t.pushRootScope(n,!!r)}),dt.add(5,function(t,e){var n=e.op1,r=t.constants.getString(n),i=t.stack.pop()
t.stack.push(i.get(r))}),dt.add(6,function(t,e){var n=e.op1,r=t.stack,i=t.scope().getBlock(n)
i?(r.push(i[2]),r.push(i[1]),r.push(i[0])):(r.push(null),r.push(null),r.push(null))}),dt.add(7,function(t,e){var n=e.op1,r=!!t.scope().getBlock(n)
t.stack.push(r?St:_t)}),dt.add(8,function(t){t.stack.pop(),t.stack.pop()
var e=t.stack.pop(),n=e&&e.parameters.length
t.stack.push(n?St:_t)}),dt.add(9,function(t,e){for(var n=e.op1,r=new Array(n),i=n;i>0;i--){r[i-1]=t.stack.pop()}t.stack.push(new Ct(r))}),function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"}(yt||(yt={}))
var Nt,Ot,Lt=At(yt.Get),Tt=At(yt.MaybeLocal);(Ot=Nt||(Nt={}))[Ot.OpenComponentElement=0]="OpenComponentElement",Ot[Ot.DidCreateElement=1]="DidCreateElement",Ot[Ot.SetComponentAttrs=2]="SetComponentAttrs",Ot[Ot.DidRenderLayout=3]="DidRenderLayout",Ot[Ot.Debugger=4]="Debugger"
var Dt=yt,Bt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
r(this,t),this.offset=e,this.names=y(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.compile=function(t,e){var n=t[this.offset],r=this.names[n],i=this.funcs[r]
i(t,e)},t}(),Rt=void 0
function Mt(t,e,n){var r=t[1],i=t[2],o=t[3]
n.expr(i),o?n.dynamicAttr(r,o,e):n.dynamicAttr(r,null,e)}var jt=void 0
var Pt=function t(){r(this,t)
var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new It,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Ft
return t.add("if",function(t,e,n,r,i){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(t[0]),i.toBoolean(),i.enter(1),i.jumpUnless("ELSE"),i.invokeStaticBlock(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("unless",function(t,e,n,r,i){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(t[0]),i.toBoolean(),i.enter(1),i.jumpIf("ELSE"),i.invokeStaticBlock(n),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("with",function(t,e,n,r,i){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END"),i.expr(t[0]),i.dup(),i.toBoolean(),i.enter(2),i.jumpUnless("ELSE"),i.invokeStaticBlock(n,1),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("each",function(t,e,n,r,i){i.startLabels(),i.pushFrame(),i.returnTo("END"),e&&"key"===e[0][0]?i.expr(e[1][0]):i.pushPrimitiveReference(null),i.expr(t[0]),i.enter(2),i.putIterator(),i.jumpUnless("ELSE"),i.pushFrame(),i.returnTo("ITER"),i.dup(lt.fp,1),i.enterList("BODY"),i.label("ITER"),i.iterate("BREAK"),i.label("BODY"),i.invokeStaticBlock(n,2),i.pop(2),i.exit(),i.return(),i.label("BREAK"),i.exitList(),i.popFrame(),r?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(r),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("in-element",function(t,e,n,r,i){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
i.startLabels(),i.pushFrame(),i.returnTo("END")
for(var o=e[0],s=e[1],a=0;a<o.length;a++){var u=o[a]
if("nextSibling"!==u&&"guid"!==u)throw new Error("SYNTAX ERROR: #in-element does not take a `"+o[0]+"` option")
i.expr(s[a])}i.expr(t[0]),i.dup(),i.enter(4),i.jumpUnless("ELSE"),i.pushRemoteElement(),i.invokeStaticBlock(n),i.popRemoteElement(),i.label("ELSE"),i.exit(),i.return(),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("-with-dynamic-vars",function(t,e,n,r,i){if(e){var o=e[0],s=e[1]
i.compileParams(s),i.pushDynamicScope(),i.bindDynamicScope(o),i.invokeStaticBlock(n),i.popDynamicScope()}else i.invokeStaticBlock(n)}),t.add("component",function(t,e,n,r,i){if("string"!=typeof t[0]||!i.staticComponentHelper(t[0],e,n)){var o=t[0],s=t.slice(1)
i.dynamicComponent(o,s,e,!0,n,r)}}),e.add("component",function(t,e,n,r){var i=e&&e[0]
if("string"==typeof i&&r.staticComponentHelper(i,n,null))return!0
var o=e[0],s=e.slice(1)
return r.dynamicComponent(o,s,n,!0,null,null),!0}),{blocks:t,inlines:e}}(),n=e.blocks,i=e.inlines
this.blocks=n,this.inlines=i},It=function(){function t(){r(this,t),this.names=y(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e,n,r,i,o){var s=this.names[t]
void 0===s?(0,this.missing)(t,e,n,r,i,o):(0,this.funcs[s])(e,n,r,i,o)},t}(),Ft=function(){function t(){r(this,t),this.names=y(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e){var n=t[1]
if(!Array.isArray(n))return["expr",n]
var r=void 0,i=void 0,o=void 0
if(n[0]===Dt.Helper)r=n[1],i=n[2],o=n[3]
else{if(n[0]!==Dt.Unknown)return["expr",n]
r=n[1],i=o=null}var s=this.names[r]
if(void 0===s&&this.missing){var a=(0,this.missing)(r,i,o,e)
return!1===a?["expr",n]:a}if(void 0!==s){var u=(0,this.funcs[s])(r,i,o,e)
return!1===u?["expr",n]:u}return["expr",n]},t}()
var Vt=function(){function t(e,n,i,o){r(this,t),this.statements=e,this.containingLayout=n,this.options=i,this.symbolTable=o,this.compiled=null,this.statementCompiler=function(){if(Rt)return Rt
var t=Rt=new Bt
t.add(Dt.Text,function(t,e){e.text(t[1])}),t.add(Dt.Comment,function(t,e){e.comment(t[1])}),t.add(Dt.CloseElement,function(t,e){e.closeElement()}),t.add(Dt.FlushElement,function(t,e){e.flushElement()}),t.add(Dt.Modifier,function(t,e){var n=e.resolver,r=e.referrer,i=t[1],o=t[2],s=t[3],a=n.lookupModifier(i,r)
if(!a)throw new Error("Compile Error "+i+" is not a modifier: Helpers may not be used in the element form.")
e.modifier(a,o,s)}),t.add(Dt.StaticAttr,function(t,e){var n=t[1],r=t[2],i=t[3]
e.staticAttr(n,i,r)}),t.add(Dt.DynamicAttr,function(t,e){Mt(t,!1,e)}),t.add(Dt.TrustingAttr,function(t,e){Mt(t,!0,e)}),t.add(Dt.OpenElement,function(t,e){e.openPrimitiveElement(t[1])}),t.add(Dt.OpenSplattedElement,function(t,e){e.setComponentAttrs(!0),e.putComponentOperations(),e.openPrimitiveElement(t[1])}),t.add(Dt.Component,function(t,e){var n=t[1],r=t[2],i=t[3],o=t[4],s=e.resolver,a=e.referrer,u=s.lookupComponentDefinition(n,a)
if(null===u)throw new Error("Compile Error: Cannot find component "+n)
var p=s.getCapabilities(u),c=[[Dt.ClientSideStatement,Nt.SetComponentAttrs,!0]].concat(r,[[Dt.ClientSideStatement,Nt.SetComponentAttrs,!1]]),h=e.inlineBlock({statements:c,parameters:k}),l=e.template(o)
if(!1===p.dynamicLayout){var f=s.getLayout(u)
e.pushComponentDefinition(u),e.invokeStaticComponent(p,f,h,null,i,!1,l&&l)}else e.pushComponentDefinition(u),e.invokeComponent(h,null,i,!1,l&&l)}),t.add(Dt.Partial,function(t,e){var n=t[1],r=t[2],i=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),e.expr(n),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(i,e.evalSymbols(),r),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),t.add(Dt.Yield,function(t,e){var n=t[1],r=t[2]
e.yield(n,r)}),t.add(Dt.AttrSplat,function(t,e){var n=t[1]
e.yield(n,[]),e.didCreateElement(lt.s0),e.setComponentAttrs(!1)}),t.add(Dt.Debugger,function(t,e){var n=t[1]
e.debugger(e.evalSymbols(),n)}),t.add(Dt.ClientSideStatement,function(t,n){e.compile(t,n)}),t.add(Dt.Append,function(t,e){var n=t[1],r=t[2]
if(!0!==(e.macros.inlines.compile(t,e)||n)){var i=Lt(n),o=Tt(n)
r?e.guardedAppend(n,!0):i||o?e.guardedAppend(n,!1):(e.expr(n),e.primitive(!1),e.load(lt.t0),e.dynamicContent())}}),t.add(Dt.Block,function(t,e){var n=t[1],r=t[2],i=t[3],o=t[4],s=t[5],a=e.template(o),u=e.template(s),p=a&&a,c=u&&u
e.macros.blocks.compile(n,r,i,p,c,e)})
var e=new Bt(1)
return e.add(Nt.OpenComponentElement,function(t,e){e.putComponentOperations(),e.openPrimitiveElement(t[2])}),e.add(Nt.DidCreateElement,function(t,e){e.didCreateElement(lt.s0)}),e.add(Nt.SetComponentAttrs,function(t,e){e.setComponentAttrs(t[2])}),e.add(Nt.Debugger,function(){}),e.add(Nt.DidRenderLayout,function(t,e){e.didRenderLayout(lt.s0)}),t}()}return t.topLevel=function(e,n){return new t(e.statements,{block:e,referrer:n.referrer},n,{referrer:n.referrer,hasEval:e.hasEval,symbols:e.symbols})},t.prototype.compile=function(t){var e=this.compiled
if(null!==e)return e
this.compiled=-1
for(var n=this.options,r=this.statements,i=this.containingLayout,o=i.referrer,s=n.program,a=n.resolver,u=n.macros,p=n.asPartial,c=new(0,n.Builder)(s,a,o,u,i,p,t),h=0;h<r.length;h++)this.statementCompiler.compile(r[h],c)
var l=c.commit(s.heap,i.block.symbols.length)
return this.compiled=l},t}(),Ut=function(){function t(e){r(this,t),this.builder=e}return t.prototype.static=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],s=this.builder,a=s.resolver
if(null!==t){var u=a.getCapabilities(t)
if(!1===u.dynamicLayout){var p=a.getLayout(t)
s.pushComponentDefinition(t),s.invokeStaticComponent(u,p,null,n,r,!1,i,o)}else s.pushComponentDefinition(t),s.invokeComponent(null,n,r,!1,i,o)}},t}(),Ht=function(){function t(e){r(this,t),this.buffer=e,this.typePos=0,this.size=0}return t.prototype.encode=function(t,e){if(t>255)throw new Error("Opcode type over 8-bits. Got "+t+".")
this.buffer.push(t|e|arguments.length-2<<8),this.typePos=this.buffer.length-1
for(var n=2;n<arguments.length;n++){var r=arguments[n]
if("number"==typeof r&&r>65535)throw new Error("Operand over 16-bits. Got "+r+".")
this.buffer.push(r)}this.size=this.buffer.length},t.prototype.patch=function(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e},t}(),zt=function(){function t(){r(this,t),this.labels=y(),this.targets=[]}return t.prototype.label=function(t,e){this.labels[t]=e},t.prototype.target=function(t,e){this.targets.push({at:t,target:e})},t.prototype.patch=function(t){for(var e=this.targets,n=this.labels,r=0;r<e.length;r++){var i=e[r],o=i.at,s=n[i.target]-o
t.patch(o,s)}},t}(),Gt=function(t){function n(e,i,o,a,u,p,c){r(this,n)
var h=s(this,t.call(this))
return h.program=e,h.resolver=i,h.referrer=o,h.macros=a,h.containingLayout=u,h.asPartial=p,h.stdLib=c,h.component=new Ut(h),h.expressionCompiler=function(){if(jt)return jt
var t=jt=new Bt
return t.add(Dt.Unknown,function(t,e){var n=e.resolver,r=e.asPartial,i=e.referrer,o=t[1],s=n.lookupHelper(o,i)
null!==s?e.helper(s,null,null):r?e.resolveMaybeLocal(o):(e.getVariable(0),e.getProperty(o))}),t.add(Dt.Concat,function(t,e){for(var n=t[1],r=0;r<n.length;r++)e.expr(n[r])
e.concat(n.length)}),t.add(Dt.Helper,function(t,e){var n=e.resolver,r=e.referrer,i=t[1],o=t[2],s=t[3]
if("component"!==i){var a=n.lookupHelper(i,r)
if(null===a)throw new Error("Compile Error: "+i+" is not a helper")
e.helper(a,o,s)}else{var u=o[0],p=o.slice(1)
e.curryComponent(u,p,s,!0)}}),t.add(Dt.Get,function(t,e){var n=t[1],r=t[2]
e.getVariable(n)
for(var i=0;i<r.length;i++)e.getProperty(r[i])}),t.add(Dt.MaybeLocal,function(t,e){var n=t[1]
if(e.asPartial){var r=n[0]
n=n.slice(1),e.resolveMaybeLocal(r)}else e.getVariable(0)
for(var i=0;i<n.length;i++)e.getProperty(n[i])}),t.add(Dt.Undefined,function(t,e){return e.pushPrimitiveReference(void 0)}),t.add(Dt.HasBlock,function(t,e){e.hasBlock(t[1])}),t.add(Dt.HasBlockParams,function(t,e){e.hasBlockParams(t[1])}),t}(),h.labelsStack=new v,h.isComponentAttrs=!1,h.constants=e.constants,h}return o(n,t),n.prototype.label=function(t){this.labels.label(t,this.nextPos)},n.prototype.setComponentAttrs=function(t){this.isComponentAttrs=t},n.prototype.expr=function(t){Array.isArray(t)?this.expressionCompiler.compile(t,this):this.pushPrimitiveReference(t)},n.prototype.pushArgs=function(t,e){var n=this.constants.stringArray(t)
this.push(63,n,e)},n.prototype.startLabels=function(){this.labelsStack.push(new zt)},n.prototype.stopLabels=function(){this.labelsStack.pop().patch(this.encoder)},n.prototype.pushComponentDefinition=function(t){this.push(59,this.constants.handle(t))},n.prototype.pushCurriedComponent=function(){this.push(61)},n.prototype.pushDynamicComponentInstance=function(){this.push(60)},n.prototype.resolveDynamicComponent=function(t){this.push(62,this.constants.serializable(t))},n.prototype.staticComponentHelper=function(t,e,n){var r=this.resolver.lookupComponentDefinition(t,this.referrer)
if(r){var i=this.resolver.getCapabilities(r)
if(!1===i.dynamicLayout){if(e)for(var o=0;o<e.length;o+=2)e[o][0]="@"+e[o][0]
var s=this.resolver.getLayout(r)
return this.pushComponentDefinition(r),this.invokeStaticComponent(i,s,null,null,e,!1,n&&n),!0}}return!1},n.prototype.invokePartial=function(t,e,n){var r=this.constants.serializable(t),i=this.constants.stringArray(e),o=this.constants.array(n)
this.push(79,r,i,o)},n.prototype.resolveMaybeLocal=function(t){this.push(80,this.string(t))},n.prototype.debugger=function(t,e){this.push(81,this.constants.stringArray(t),this.constants.array(e))},n.prototype.text=function(t){this.push(22,this.constants.string(t))},n.prototype.openPrimitiveElement=function(t){this.push(25,this.constants.string(t))},n.prototype.openDynamicElement=function(){this.push(26)},n.prototype.flushElement=function(){this.push(30)},n.prototype.closeElement=function(){this.push(31)},n.prototype.staticAttr=function(t,e,n){var r=this.constants.string(t),i=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(n),this.push(29,r,1,i)
else{var o=this.constants.string(n)
this.push(27,r,o,i)}},n.prototype.dynamicAttr=function(t,e,n){var r=this.constants.string(t),i=e?this.constants.string(e):0
this.isComponentAttrs?this.push(29,r,!0===n?1:0,i):this.push(28,r,!0===n?1:0,i)},n.prototype.comment=function(t){var e=this.constants.string(t)
this.push(23,e)},n.prototype.modifier=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(32,this.constants.handle(t)),this.popFrame()},n.prototype.putIterator=function(){this.push(54)},n.prototype.enterList=function(t){this.reserve(52),this.labels.target(this.pos,t)},n.prototype.exitList=function(){this.push(53)},n.prototype.iterate=function(t){this.reserve(55),this.labels.target(this.pos,t)},n.prototype.setVariable=function(t){this.push(2,t)},n.prototype.setBlock=function(t){this.push(3,t)},n.prototype.getVariable=function(t){this.push(4,t)},n.prototype.getProperty=function(t){this.push(5,this.string(t))},n.prototype.getBlock=function(t){this.push(6,t)},n.prototype.hasBlock=function(t){this.push(7,t)},n.prototype.hasBlockParams=function(t){this.getBlock(t),this.resolveBlock(),this.push(8)},n.prototype.concat=function(t){this.push(9,t)},n.prototype.load=function(t){this.push(15,t)},n.prototype.fetch=function(t){this.push(16,t)},n.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt.sp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(13,t,e)},n.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(14,t)},n.prototype.returnTo=function(t){this.reserveMachine(21),this.labels.target(this.pos,t)},n.prototype.primitive=function(t){var n=0,r=void 0
switch(void 0===t?"undefined":e(t)){case"number":t%1==0?t>-1?r=t:(r=this.negative(t),n=4):(r=this.float(t),n=1)
break
case"string":r=this.string(t),n=2
break
case"boolean":r=0|t,n=3
break
case"object":r=2,n=3
break
case"undefined":r=3,n=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,r<<3|n)},n.prototype.float=function(t){return this.constants.float(t)},n.prototype.negative=function(t){return this.constants.negative(t)},n.prototype.pushPrimitiveReference=function(t){this.primitive(t),this.primitiveReference()},n.prototype.primitiveReference=function(){this.push(12)},n.prototype.helper=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch(lt.v0)},n.prototype.bindDynamicScope=function(t){this.push(35,this.names(t))},n.prototype.enter=function(t){this.push(49,t)},n.prototype.exit=function(){this.push(50)},n.prototype.return=function(){this.pushMachine(20)},n.prototype.jump=function(t){this.reserveMachine(44),this.labels.target(this.pos,t)},n.prototype.jumpIf=function(t){this.reserve(45),this.labels.target(this.pos,t)},n.prototype.jumpUnless=function(t){this.reserve(46),this.labels.target(this.pos,t)},n.prototype.string=function(t){return this.constants.string(t)},n.prototype.names=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n]
e[n]=this.constants.string(r)}return this.constants.array(e)},n.prototype.symbols=function(t){return this.constants.array(t)},n.prototype.inlineBlock=function(t){var e=t.parameters,n=t.statements,r={parameters:e,referrer:this.containingLayout.referrer},i={program:this.program,macros:this.macros,Builder:this.constructor,resolver:this.resolver,asPartial:this.asPartial,referrer:this.referrer}
return new Vt(n,this.containingLayout,i,r)},n.prototype.evalSymbols=function(){var t=this.containingLayout.block
return t.hasEval?t.symbols:null},n.prototype.compileParams=function(t){if(!t)return 0
for(var e=0;e<t.length;e++)this.expr(t[e])
return t.length},n.prototype.compileArgs=function(t,e,n,r){n&&(this.pushYieldableBlock(n.main),this.pushYieldableBlock(n.else),this.pushYieldableBlock(n.attrs))
var i=this.compileParams(t)<<4
r&&(i|=8),n&&(i|=7)
var o=k
if(e){o=e[0]
for(var s=e[1],a=0;a<s.length;a++)this.expr(s[a])}this.pushArgs(o,i)},n.prototype.invokeStaticBlock=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.symbolTable.parameters,r=n.length,i=Math.min(e,r)
if(this.pushFrame(),i){this.pushChildScope()
for(var o=0;o<i;o++)this.dup(lt.fp,e-o),this.setVariable(n[o])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),i&&this.popScope(),this.popFrame()},n.prototype.builtInGuardedAppend=function(){this.dup(),this.startLabels(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(),this.exit(),this.return(),this.stopLabels()},n.prototype.guardedAppend=function(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.stdLib?(this.primitive(!!e),this.load(lt.t0),this.expr(t),this.primitive(this.stdLib.guardedAppend),this.invokeVirtual()):(this.expr(t),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.primitive(!!e),this.load(lt.t0),this.dynamicContent(),this.exit(),this.return()),this.label("END"),this.popFrame(),this.stopLabels()},n.prototype.yield=function(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()},n.prototype.populateLayout=function(t){this.push(73,t)},n.prototype.invokeComponent=function(t,e,n,r,i){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments[6]
this.fetch(lt.s0),this.dup(lt.sp,1),this.load(lt.s0),this.pushFrame()
var u={main:i,else:s,attrs:t}
this.compileArgs(e,n,u,r),this.prepareArgs(lt.s0),this.invokePreparedComponent(null!==i,function(){a?(o.pushSymbolTable(a.symbolTable),o.pushLayout(a),o.resolveLayout()):o.getComponentLayout(lt.s0),o.populateLayout(lt.s0)}),this.load(lt.s0)},n.prototype.invokeStaticComponent=function(t,e,n,r,i,o,s){var a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,u=e.symbolTable
if(u.hasEval||t.prepareArgs)this.invokeComponent(n,r,i,o,s,a,e)
else{this.fetch(lt.s0),this.dup(lt.sp,1),this.load(lt.s0)
var p=u.symbols
t.createArgs&&(this.pushFrame(),this.compileArgs(null,i,null,o)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(lt.s0,null!==s),t.createArgs&&this.popFrame(),this.registerComponentDestructor(lt.s0)
var h=[]
this.getComponentSelf(lt.s0),h.push({symbol:0,isBlock:!1})
for(var l=0;l<p.length;l++){var f=p[l]
switch(f.charAt(0)){case"&":var d=null
if("&default"===f)d=s
else if("&inverse"===f)d=a
else{if("&attrs"!==f)throw c()
d=n}d?(this.pushYieldableBlock(d),h.push({symbol:l+1,isBlock:!0})):(this.pushYieldableBlock(null),h.push({symbol:l+1,isBlock:!0}))
break
case"@":if(!i)break
var m=i[0],y=i[1],v=f
o&&(v=f.slice(1))
var g=m.indexOf(v);-1!==g&&(this.expr(y[g]),h.push({symbol:l+1,isBlock:!1}))}}this.pushRootScope(p.length+1,!!(s||a||n))
for(var b=h.length-1;b>=0;b--){var k=h[b],w=k.symbol
k.isBlock?this.setBlock(w):this.setVariable(w)}this.pushFrame(),this.invokeStatic(e),this.didRenderLayout(lt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(lt.s0)}},n.prototype.dynamicComponent=function(t,e,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null
this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.resolveDynamicComponent(this.referrer),this.pushDynamicComponentInstance(),this.invokeComponent(null,e,n,r,i,o),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},n.prototype.isComponent=function(){this.push(57)},n.prototype.curryComponent=function(t,e,n,r){var i=this.referrer
this.pushFrame(),this.compileArgs(e,n,null,r),this.push(66),this.expr(t),this.push(58,this.constants.serializable(i)),this.popFrame(),this.fetch(lt.v0)},n.prototype.pushSymbolTable=function(t){if(t){var e=this.constants.serializable(t)
this.push(40,e)}else this.primitive(null)},n.prototype.pushBlockScope=function(){this.push(39)},n.prototype.pushYieldableBlock=function(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)},n.prototype.template=function(t){return t?this.inlineBlock(t):null},i(n,[{key:"labels",get:function(){return this.labelsStack.current}}]),n}(function(){function t(){r(this,t),this.encoder=new Ht([])}return t.prototype.push=function(t){switch(arguments.length){case 1:return this.encoder.encode(t,0)
case 2:return this.encoder.encode(t,0,arguments[1])
case 3:return this.encoder.encode(t,0,arguments[1],arguments[2])
default:return this.encoder.encode(t,0,arguments[1],arguments[2],arguments[3])}},t.prototype.pushMachine=function(t){switch(arguments.length){case 1:return this.encoder.encode(t,1024)
case 2:return this.encoder.encode(t,1024,arguments[1])
case 3:return this.encoder.encode(t,1024,arguments[1],arguments[2])
default:return this.encoder.encode(t,1024,arguments[1],arguments[2],arguments[3])}},t.prototype.commit=function(t,e){this.pushMachine(20)
for(var n=this.encoder.buffer,r=t.malloc(),i=0;i<n.length;i++){var o=n[i]
"function"==typeof o?t.pushPlaceholder(o):t.push(o)}return t.finishMalloc(r,e),r},t.prototype.reserve=function(t){this.encoder.encode(t,0,-1)},t.prototype.reserveMachine=function(t){this.encoder.encode(t,1024,-1)},t.prototype.main=function(){this.push(56,lt.s0),this.invokePreparedComponent(!1)},t.prototype.dynamicContent=function(){this.push(24)},t.prototype.beginComponentTransaction=function(){this.push(75)},t.prototype.commitComponentTransaction=function(){this.push(76)},t.prototype.pushDynamicScope=function(){this.push(36)},t.prototype.popDynamicScope=function(){this.push(37)},t.prototype.pushRemoteElement=function(){this.push(33)},t.prototype.popRemoteElement=function(){this.push(34)},t.prototype.pushRootScope=function(t,e){this.push(17,t,e?1:0)},t.prototype.pushChildScope=function(){this.push(18)},t.prototype.popScope=function(){this.push(19)},t.prototype.prepareArgs=function(t){this.push(65,t)},t.prototype.createComponent=function(t,e){var n=0|e
this.push(67,n,t)},t.prototype.registerComponentDestructor=function(t){this.push(68,t)},t.prototype.putComponentOperations=function(){this.push(69)},t.prototype.getComponentSelf=function(t){this.push(70,t)},t.prototype.getComponentTagName=function(t){this.push(71,t)},t.prototype.getComponentLayout=function(t){this.push(72,t)},t.prototype.invokeComponentLayout=function(t){this.push(74,t)},t.prototype.didCreateElement=function(t){this.push(77,t)},t.prototype.didRenderLayout=function(t){this.push(78,t)},t.prototype.pushFrame=function(){this.pushMachine(47)},t.prototype.popFrame=function(){this.pushMachine(48)},t.prototype.invokeVirtual=function(){this.pushMachine(41)},t.prototype.invokeYield=function(){this.push(43)},t.prototype.toBoolean=function(){this.push(51)},t.prototype.invokePreparedComponent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(lt.s0,t),e&&e(),this.registerComponentDestructor(lt.s0),this.getComponentSelf(lt.s0),this.invokeComponentLayout(lt.s0),this.didRenderLayout(lt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction()},i(t,[{key:"pos",get:function(){return this.encoder.typePos}},{key:"nextPos",get:function(){return this.encoder.size}}]),t}()),Yt=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.pushBlock=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveBlock=function(){this.push(38)},e.prototype.pushLayout=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveLayout=function(){this.push(38)},e.prototype.invokeStatic=function(t){this.pushOther(t),this.push(38),this.pushMachine(41)},e.prototype.pushOther=function(t){this.push(10,this.other(t))},e.prototype.other=function(t){return this.constants.other(t)},e}(Gt),Wt=(function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}o(e,t),e.prototype.pushBlock=function(t){var e=t?t.compile(this.stdLib):null
this.primitive(e)},e.prototype.resolveBlock=function(){},e.prototype.pushLayout=function(t){t?this.primitive(t.compile(this.stdLib)):this.primitive(null)},e.prototype.resolveLayout=function(){},e.prototype.invokeStatic=function(t){var e=this,n=t.compile();-1===n?this.pushMachine(42,function(){return t.compile(e.stdLib)}):this.pushMachine(42,n)}}(Gt),function(){function t(){r(this,t),this.stack=null,this.positional=new Xt,this.named=new Kt,this.blocks=new $t}return t.prototype.setup=function(t,e,n,r,i){this.stack=t
var o=this.named,s=e.length,a=t.sp-s+1
o.setup(t,a,s,e,i)
var u=a-r
this.positional.setup(t,u,r)
var p=this.blocks,c=n.length,h=u-3*c
p.setup(t,h,c,n)},t.prototype.at=function(t){return this.positional.at(t)},t.prototype.realloc=function(t){if(t>0){for(var e=this.positional,n=this.named,r=this.stack,i=e.base+t,o=e.length+n.length-1;o>=0;o--)r.copy(o+e.base,o+i)
e.base+=t,n.base+=t,r.sp+=t}},t.prototype.capture=function(){var t=0===this.positional.length?te:this.positional.capture(),e=0===this.named.length?Zt:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}},t.prototype.clear=function(){var t=this.stack,e=this.length
t.pop(e)},i(t,[{key:"tag",get:function(){return B([this.positional,this.named])}},{key:"base",get:function(){return this.blocks.base}},{key:"length",get:function(){return this.positional.length+this.named.length+3*this.blocks.length}}]),t}()),Xt=function(){function t(){r(this,t),this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}return t.prototype.setup=function(t,e,n){this.stack=t,this.base=e,this.length=n,0===n?(this._tag=A,this._references=k):(this._tag=null,this._references=null)},t.prototype.at=function(t){var e=this.base,n=this.length,r=this.stack
return t<0||t>=n?kt:r.get(t,e)},t.prototype.capture=function(){return new qt(this.tag,this.references)},t.prototype.prepend=function(t){var e=t.length
if(e>0){var n=this.base,r=this.length,i=this.stack
this.base=n-=e,this.length=r+e
for(var o=0;o<e;o++)i.set(t.at(o),o,n)
this._tag=null,this._references=null}},i(t,[{key:"tag",get:function(){var t=this._tag
return t||(t=this._tag=B(this.references)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.stack,n=this.base,r=this.length
t=this._references=e.sliceArray(n,n+r)}return t}}]),t}(),qt=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
r(this,t),this.tag=e,this.references=n,this.length=i}return t.empty=function(){return new t(A,k,0)},t.prototype.at=function(t){return this.references[t]},t.prototype.value=function(){return this.references.map(this.valueOf)},t.prototype.get=function(t){var e=this.references,n=this.length
if("length"===t)return vt.create(n)
var r=parseInt(t,10)
return r<0||r>=n?kt:e[r]},t.prototype.valueOf=function(t){return t.value()},t}(),Kt=function(){function t(){r(this,t),this.base=0,this.length=0,this._references=null,this._names=k,this._atNames=k}return t.prototype.setup=function(t,e,n,r,i){this.stack=t,this.base=e,this.length=n,0===n?(this._references=k,this._names=k,this._atNames=k):(this._references=null,i?(this._names=r,this._atNames=null):(this._names=null,this._atNames=r))},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.base,r=this.stack,i=(e?this.names:this.atNames).indexOf(t)
return-1===i?kt:r.get(i,n)},t.prototype.capture=function(){return new Jt(this.tag,this.names,this.references)},t.prototype.merge=function(t){var e=t.length
if(e>0){var n=this.names,r=this.length,i=this.stack,o=t.names
Object.isFrozen(n)&&0===n.length&&(n=[])
for(var s=0;s<e;s++){var a=o[s];-1===n.indexOf(a)&&(r=n.push(a),i.push(t.references[s]))}this.length=r,this._references=null,this._names=n,this._atNames=null}},t.prototype.toSyntheticName=function(t){return t.slice(1)},t.prototype.toAtName=function(t){return"@"+t},i(t,[{key:"tag",get:function(){return B(this.references)}},{key:"names",get:function(){var t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}},{key:"atNames",get:function(){var t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.base,n=this.length,r=this.stack
t=this._references=r.sliceArray(e,e+n)}return t}}]),t}(),Jt=function(){function t(e,n,i){r(this,t),this.tag=e,this.names=n,this.references=i,this.length=n.length,this._map=null}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.references,r=e.indexOf(t)
return-1===r?kt:n[r]},t.prototype.value=function(){for(var t=this.names,e=this.references,n=y(),r=0;r<t.length;r++){n[t[r]]=e[r].value()}return n},i(t,[{key:"map",get:function(){var t=this._map
if(!t){var e=this.names,n=this.references
t=this._map=y()
for(var r=0;r<e.length;r++){t[e[r]]=n[r]}}return t}}]),t}(),$t=function(){function t(){r(this,t),this.internalValues=null,this.internalTag=null,this.names=k,this.length=0,this.base=0}return t.prototype.setup=function(t,e,n,r){this.stack=t,this.names=r,this.base=e,this.length=n,0===n?(this.internalTag=A,this.internalValues=k):(this.internalTag=null,this.internalValues=null)},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.base,n=this.stack,r=this.names,i=r.indexOf(t)
if(-1===r.indexOf(t))return null
var o=n.get(3*i,e),s=n.get(3*i+1,e),a=n.get(3*i+2,e)
return null===a?null:[a,s,o]},t.prototype.capture=function(){return new Qt(this.names,this.values)},i(t,[{key:"values",get:function(){var t=this.internalValues
if(!t){var e=this.base,n=this.length,r=this.stack
t=this.internalValues=r.sliceArray(e,e+3*n)}return t}}]),t}(),Qt=function(){function t(e,n){r(this,t),this.names=e,this.values=n,this.length=e.length}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]},t}(),Zt=new Jt(A,k,k),te=new qt(A,k),ee={tag:A,length:0,positional:te,named:Zt},ne="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
function re(t){return!(!t||!t[ne])}var ie=function(){function t(e,n){r(this,t),this.inner=e,this.args=n,this[ne]=!0}return t.prototype.unwrap=function(t){t.realloc(this.offset)
for(var e=this;;){var n=e,r=n.args,i=n.inner
if(r&&(t.positional.prepend(r.positional),t.named.merge(r.named)),!re(i))return i
e=i}},i(t,[{key:"offset",get:function(){var t=this.inner,e=this.args,n=e?e.positional.length:0
return re(t)?n+t.offset:n}}]),t}(),oe=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.create=function(t){return new e(t)},e.prototype.toBool=function(t){return re(t)},e}(Et)
dt.add(24,function(t){var e=t.stack.pop(),n=t.fetchValue(lt.t0),r=e.value(),i=void 0
i=n?t.elements().appendTrustingDynamicContent(r):t.elements().appendCautiousDynamicContent(r),O(e)||t.updateWith(new se(e,i)),t.loadValue(lt.t0,null)})
var se=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.reference=n,o.content=i,o.tag=n.tag,o}return o(e,t),e.prototype.evaluate=function(t){var e=this.content,n=this.reference
e.update(t.env,n.value())},e}(mt)
dt.add(18,function(t){return t.pushChildScope()}),dt.add(19,function(t){return t.popScope()}),dt.add(36,function(t){return t.pushDynamicScope()}),dt.add(37,function(t){return t.popDynamicScope()}),dt.add(10,function(t,e){var n=e.op1
t.stack.push(t.constants.getOther(n))}),dt.add(11,function(t,e){var n=e.op1,r=t.stack,i=n>>3
switch(7&n){case 0:r.push(i)
break
case 1:r.push(t.constants.getFloat(i))
break
case 2:r.push(t.constants.getString(i))
break
case 3:r.pushEncodedImmediate(n)
break
case 4:r.push(t.constants.getNegative(i))}}),dt.add(12,function(t){var e=t.stack
e.push(vt.create(e.pop()))}),dt.add(13,function(t,e){var n=e.op1,r=e.op2,i=t.fetchValue(n)-r
t.stack.dup(i)}),dt.add(14,function(t,e){var n=e.op1
t.stack.pop(n)}),dt.add(15,function(t,e){var n=e.op1
t.load(n)}),dt.add(16,function(t,e){var n=e.op1
t.fetch(n)}),dt.add(35,function(t,e){var n=e.op1,r=t.constants.getArray(n)
t.bindDynamicScope(r)}),dt.add(49,function(t,e){var n=e.op1
t.enter(n)}),dt.add(50,function(t){t.exit()}),dt.add(40,function(t,e){var n=e.op1
t.stack.push(t.constants.getSerializable(n))}),dt.add(39,function(t){t.stack.push(t.scope())}),dt.add(38,function(t){var e=t.stack,n=e.pop()
n?e.pushSmi(n.compile()):e.pushNull()}),dt.add(43,function(t){var e=t.stack,n=e.pop(),r=e.pop(),i=e.pop(),o=e.pop()
if(null===i)return t.pushFrame(),void t.pushScope(r)
var s=r,a=i.parameters,u=a.length
if(u>0){s=s.child()
for(var p=0;p<u;p++)s.bindSymbol(a[p],o.at(p))}t.pushFrame(),t.pushScope(s),t.call(n)}),dt.add(45,function(t,e){var n=e.op1,r=t.stack.pop()
if(O(r))r.value()&&t.goto(n)
else{var i=new H(r)
i.peek()&&t.goto(n),t.updateWith(new ae(i))}}),dt.add(46,function(t,e){var n=e.op1,r=t.stack.pop()
if(O(r))r.value()||t.goto(n)
else{var i=new H(r)
i.peek()||t.goto(n),t.updateWith(new ae(i))}}),dt.add(51,function(t){var e=t.env,n=t.stack
n.push(e.toConditionalReference(n.pop()))})
var ae=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.type="assert",i.tag=n.tag,i.cache=n,i}return o(e,t),e.prototype.evaluate=function(t){var e=this.cache
e.revalidate()!==z&&t.throw()},e}(mt),ue=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.target=i,o.type="jump-if-not-modified",o.tag=n,o.lastRevision=n.value(),o}return o(e,t),e.prototype.evaluate=function(t){var e=this.tag,n=this.target,r=this.lastRevision
!t.alwaysRevalidate&&e.validate(r)&&t.goto(n)},e.prototype.didModify=function(){this.lastRevision=this.tag.value()},e}(mt),pe=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.target=n,i.type="did-modify",i.tag=A,i}return o(e,t),e.prototype.evaluate=function(){this.target.didModify()},e}(mt),ce=function(){function t(e){r(this,t),this.tag=A,this.type="label",this.label=null,this.prev=null,this.next=null,m(this),this.label=e}return t.prototype.evaluate=function(){},t.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},t}()
dt.add(22,function(t,e){var n=e.op1
t.elements().appendText(t.constants.getString(n))}),dt.add(23,function(t,e){var n=e.op1
t.elements().appendComment(t.constants.getString(n))}),dt.add(25,function(t,e){var n=e.op1
t.elements().openElement(t.constants.getString(n))}),dt.add(26,function(t){var e=t.stack.pop().value()
t.elements().openElement(e)}),dt.add(33,function(t){var e=t.stack.pop(),n=t.stack.pop(),r=void 0,i=void 0,o=t.stack.pop().value()
if(O(e))r=e.value()
else{var s=new H(e)
r=s.peek(),t.updateWith(new ae(s))}if(O(n))i=n.value()
else{var a=new H(n)
i=a.peek(),t.updateWith(new ae(a))}t.elements().pushRemoteElement(r,o,i)}),dt.add(34,function(t){t.elements().popRemoteElement()}),dt.add(30,function(t){var e=t.fetchValue(lt.t0)
e&&(e.flush(t),t.loadValue(lt.t0,null)),t.elements().flushElement()}),dt.add(31,function(t){t.elements().closeElement()}),dt.add(32,function(t,e){var n=e.op1,r=t.constants.resolveHandle(n),i=t.stack.pop(),o=t.elements(),s=o.constructing,a=o.updateOperations,u=t.dynamicScope(),p=r.create(s,i,u,a)
t.env.scheduleInstallModifier(p,r)
var c=r.getDestructor(p)
c&&t.newDestroyable(c)
var h=r.getTag(p)
L(h)||t.updateWith(new he(h,r,p))})
var he=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this))
return a.tag=n,a.manager=i,a.modifier=o,a.type="update-modifier",a.lastUpdated=n.value(),a}return o(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.modifier,r=this.tag,i=this.lastUpdated
r.validate(i)||(t.env.scheduleUpdateModifier(n,e),this.lastUpdated=r.value())},e}(mt)
dt.add(27,function(t,e){var n=e.op1,r=e.op2,i=e.op3,o=t.constants.getString(n),s=t.constants.getString(r),a=i?t.constants.getString(i):null
t.elements().setStaticAttribute(o,s,a)}),dt.add(28,function(t,e){var n=e.op1,r=e.op2,i=e.op3,o=t.constants.getString(n),s=t.stack.pop(),a=s.value(),u=i?t.constants.getString(i):null,p=t.elements().setDynamicAttribute(o,a,!!r,u)
O(s)||t.updateWith(new le(s,p))})
var le=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.reference=n,o.attribute=i,o.type="patch-element",o.tag=n.tag,o.lastRevision=o.tag.value(),o}return o(e,t),e.prototype.evaluate=function(t){var e=this.attribute,n=this.reference,r=this.tag
r.validate(this.lastRevision)||(this.lastRevision=r.value(),e.update(n.value(),t.env))},e}(mt)
function fe(t,e,n){var r=t.lookupComponent(e,n)
return r}var de=function(){function t(e,n,i,o){r(this,t),this.inner=e,this.resolver=n,this.meta=i,this.args=o,this.tag=e.tag,this.lastValue=null,this.lastDefinition=null}return t.prototype.value=function(){var t=this.inner,e=this.lastValue,n=t.value()
if(n===e)return this.lastDefinition
var r=null
if(re(n))r=n
else if("string"==typeof n&&n){r=fe(this.resolver,n,this.meta)}return r=this.curry(r),this.lastValue=n,this.lastDefinition=r,r},t.prototype.get=function(){return kt},t.prototype.curry=function(t){var e=this.args
return!e&&re(t)?t:t?new ie(t,e):null},t}()
function me(t){return ye(t)?"":String(t)}function ye(t){return null==t||"function"!=typeof t.toString}function ve(t){return"object"===(void 0===t?"undefined":e(t))&&null!==t&&"function"==typeof t.toHTML}function ge(t){return"object"===(void 0===t?"undefined":e(t))&&null!==t&&"number"==typeof t.nodeType}function be(t){return ge(t)&&11===t.nodeType}function ke(t){return"string"==typeof t}var we=function(){function t(e){r(this,t),this.list=e,this.tag=B(e),this.list=e}return t.prototype.value=function(){for(var t=[],e=this.list,n=0;n<e.length;n++){var r=me(e[n].value())
r&&t.push(r)}return 0===t.length?null:t.join(" ")},t}()
function Se(t){return 0|(t.dynamicLayout?1:0)|(t.dynamicTag?2:0)|(t.prepareArgs?4:0)|(t.createArgs?8:0)|(t.attributeHook?16:0)|(t.elementHook?32:0)}function _e(t,e){return!!(t&e)}var Ee=new Wt
dt.add(57,function(t){var e=t.stack,n=e.pop()
e.push(oe.create(n))}),dt.add(58,function(t,e){var n=e.op1,r=t.stack,i=r.pop(),o=r.pop(),s=t.constants.getSerializable(n),a=t.constants.resolver
t.loadValue(lt.v0,new de(i,a,s,o))}),dt.add(59,function(t,e){var n=e.op1,r=t.constants.resolveHandle(n),i=r.manager,o=Se(i.getCapabilities(r.state)),s={definition:r,manager:i,capabilities:o,state:null,handle:null,table:null}
t.stack.push(s)}),dt.add(62,function(t,e){var n=e.op1,r=t.stack,i=r.pop().value(),o=t.constants.getSerializable(n)
t.loadValue(lt.t1,null)
var s=void 0
if("string"==typeof i){s=fe(t.constants.resolver,i,o)}else{if(!re(i))throw c()
s=i}r.push(s)}),dt.add(60,function(t){var e=t.stack,n=e.pop(),r=void 0,i=void 0
re(n)?i=r=null:r=Se((i=n.manager).getCapabilities(n.state)),e.push({definition:n,capabilities:r,manager:i,state:null,handle:null,table:null})}),dt.add(61,function(t,e){e.op1
var n=t.stack,r=n.pop().value(),i=void 0
if(!re(r))throw c()
i=r,n.push(i)}),dt.add(63,function(t,e){var n=e.op1,r=e.op2,i=t.stack,o=t.constants.getStringArray(n),s=r>>4,a=8&r,u=[]
4&r&&u.push("main"),2&r&&u.push("else"),1&r&&u.push("attrs"),Ee.setup(i,o,u,s,!!a),i.push(Ee)}),dt.add(66,function(t){var e=t.stack,n=e.pop().capture()
e.push(n)}),dt.add(65,function(t,e){var n=e.op1,r=t.stack,i=t.fetchValue(n),o=r.pop(),s=i.definition
re(s)&&(s=function(t,e,n){var r=t.definition=e.unwrap(n),i=r.manager,o=r.state
return t.manager=i,t.capabilities=Se(i.getCapabilities(o)),r}(i,s,o))
var a=s,u=a.manager,p=a.state
if(!0===_e(i.capabilities,4)){var c=o.blocks.values,h=o.blocks.names,l=u.prepareArgs(p,o)
if(l){o.clear()
for(var f=0;f<c.length;f++)r.push(c[f])
for(var d=l.positional,m=l.named,y=d.length,v=0;v<y;v++)r.push(d[v])
for(var g=Object.keys(m),b=0;b<g.length;b++)r.push(m[g[b]])
o.setup(r,g,h,y,!0)}r.push(o)}else r.push(o)}),dt.add(67,function(t,e){var n=e.op1,r=e.op2,i=t.dynamicScope(),o=t.fetchValue(r),s=o.definition,a=o.manager,u=1&n,p=null
_e(o.capabilities=Se(a.getCapabilities(s.state)),8)&&(p=t.stack.peek())
var c=a.create(t.env,s.state,p,i,t.getSelf(),!!u)
o.state=c
var h=a.getTag(c)
L(h)||t.updateWith(new xe(h,c,a,i))}),dt.add(68,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.manager,o=r.state,s=i.getDestructor(o)
s&&t.newDestroyable(s)}),dt.add(75,function(t){t.beginCacheGroup(),t.elements().pushSimpleBlock()}),dt.add(69,function(t){t.loadValue(lt.t0,new Ce)}),dt.add(29,function(t,e){var n=e.op1,r=e.op2,i=e.op3,o=t.constants.getString(n),s=t.stack.pop(),a=i?t.constants.getString(i):null
t.fetchValue(lt.t0).setAttribute(o,s,!!r,a)})
var Ce=function(){function t(){r(this,t),this.attributes=y(),this.classes=[]}return t.prototype.setAttribute=function(t,e,n,r){var i={value:e,namespace:r,trusting:n}
"class"===t&&this.classes.push(e),this.attributes[t]=i},t.prototype.flush=function(t){for(var e in this.attributes){var n=this.attributes[e],r=n.value,i=n.namespace,o=n.trusting
"class"===e&&(r=new we(this.classes))
var s=t.elements().setDynamicAttribute(e,r.value(),o,i)
O(r)||t.updateWith(new le(r,s))}},t}()
dt.add(77,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.definition,o=r.state,s=i.manager,a=t.fetchValue(lt.t0)
s.didCreateElement(o,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),dt.add(70,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.definition,o=r.state,s=i.manager
t.stack.push(s.getSelf(o))}),dt.add(71,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.definition,o=r.state,s=i.manager
t.stack.push(s.getTagName(o))}),dt.add(72,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.manager,o=r.definition,s=t.constants.resolver,a=t.stack,u=r.state,p=r.capabilities,h=o.state,l=void 0
if(function(t,e){return!1===_e(t,1)}(p))l=i.getLayout(h,s)
else{if(!function(t,e){return!0===_e(t,1)}(p))throw c()
l=i.getDynamicLayout(u,s)}a.push(l.symbolTable),a.push(l.handle)}),dt.add(56,function(t,e){var n=e.op1,r=t.stack.pop(),i=t.stack.pop(),o=r.manager,s=Se(o.getCapabilities(r.state)),a={definition:r,manager:o,capabilities:s,state:null,handle:i.handle,table:i.symbolTable}
t.loadValue(n,a)}),dt.add(73,function(t,e){var n=e.op1,r=t.stack,i=r.pop(),o=r.pop(),s=t.fetchValue(n)
s.handle=i,s.table=o}),dt.add(74,function(t,e){var n=e.op1,r=t.stack,i=t.fetchValue(n),o=i.handle,s=i.table,a=s.symbols,u=s.hasEval,p=r.pop(),c=t.pushRootScope(a.length+1,!0)
c.bindSelf(p)
var h=t.stack.pop(),l=null
u&&(l=y())
for(var f=h.named.atNames,d=f.length-1;d>=0;d--){var m=f[d],v=a.indexOf(f[d]),g=h.named.get(m,!1);-1!==v&&c.bindSymbol(v+1,g),u&&(l[m]=g)}var b=function(t,e){var n=a.indexOf(t),r=k.get(e);-1!==n&&c.bindBlock(n+1,r),l&&(l[t]=r)},k=h.blocks
b("&attrs","attrs"),b("&inverse","else"),b("&default","main"),l&&c.bindEvalScope(l),t.call(o)}),dt.add(78,function(t,e){var n=e.op1,r=t.fetchValue(n),i=r.manager,o=r.state,s=t.elements().popBlock()
i.didRenderLayout(o,s),t.env.didCreate(o,i),t.updateWith(new Ae(i,o,s))}),dt.add(76,function(t){t.commitCacheGroup()})
var xe=function(t){function e(n,i,o,a){r(this,e)
var u=s(this,t.call(this))
return u.tag=n,u.component=i,u.manager=o,u.dynamicScope=a,u.type="update-component",u}return o(e,t),e.prototype.evaluate=function(t){var e=this.component,n=this.manager,r=this.dynamicScope
n.update(e,r)},e}(mt),Ae=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this))
return a.manager=n,a.component=i,a.bounds=o,a.type="did-update-layout",a.tag=A,a}return o(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.component,r=this.bounds
e.didUpdateLayout(n,r),t.env.didUpdate(n,e)},e}(mt)
var Ne=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")},Oe=function(){function t(e,n,i){r(this,t),this.scope=e,this.locals=y()
for(var o=0;o<i.length;o++){var s=i[o],a=n[s-1],u=e.getSymbol(s)
this.locals[a]=u}}return t.prototype.get=function(t){var e=this.scope,n=this.locals,r=t.split("."),i=t.split("."),o=i[0],s=i.slice(1),a=e.getEvalScope(),u=void 0
return"this"===o?u=e.getSelf():n[o]?u=n[o]:0===o.indexOf("@")&&a[o]?u=a[o]:(u=this.scope.getSelf(),s=r),s.reduce(function(t,e){return t.get(e)},u)},t}()
dt.add(81,function(t,e){var n=e.op1,r=e.op2,i=t.constants.getStringArray(n),o=t.constants.getArray(r),s=new Oe(t.scope(),i,o)
Ne(t.getSelf().value(),function(t){return s.get(t).value()})}),dt.add(79,function(t,e){var n=e.op1,r=e.op2,i=e.op3,o=t.constants,s=t.constants.resolver,a=t.stack.pop().value(),u=o.getSerializable(n),p=o.getStringArray(r),c=o.getArray(i),h=s.lookupPartial(a,u),l=s.resolve(h).getPartial(),f=l.symbolTable,d=l.handle,m=f.symbols,y=t.scope(),v=t.pushRootScope(m.length,!1),g=y.getEvalScope()
v.bindCallerScope(y.getCallerScope()),v.bindEvalScope(g),v.bindSelf(y.getSelf())
for(var b=Object.create(y.getPartialMap()),k=0;k<c.length;k++){var w=c[k],S=p[w-1],_=y.getSymbol(w)
b[S]=_}if(g)for(var E=0;E<m.length;E++){var C=E+1,x=g[m[E]]
void 0!==x&&v.bind(C,x)}v.bindPartialMap(b),t.pushFrame(),t.call(d)})
var Le=function(){function t(e){r(this,t),this.tag=e.tag,this.artifacts=e}return t.prototype.value=function(){return!this.artifacts.isEmpty()},t}()
dt.add(54,function(t){var e=t.stack,n=e.pop(),r=e.pop(),i=t.env.iterableFor(n,r.value()),o=new q(i)
e.push(o),e.push(new Le(o.artifacts))}),dt.add(52,function(t,e){var n=e.op1
t.enterList(n)}),dt.add(53,function(t){t.exitList()}),dt.add(55,function(t,e){var n=e.op1,r=t.stack.peek().next()
if(r){var i=t.iterate(r.memo,r.value)
t.enterItem(r.key,i)}else t.goto(n)})
var Te=function t(e,n){r(this,t),this.element=e,this.nextSibling=n},De=function(){function t(e,n,i){r(this,t),this.parentNode=e,this.first=n,this.last=i}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.first},t.prototype.lastNode=function(){return this.last},t}(),Be=function(){function t(e,n){r(this,t),this.parentNode=e,this.node=n}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.node},t.prototype.lastNode=function(){return this.node},t}()
function Re(t,e,n){return new De(t,e,n)}function Me(t,e){return new Be(t,e)}function je(t,e){for(var n=t.parentElement(),r=t.firstNode(),i=t.lastNode(),o=r;o;){var s=o.nextSibling
if(n.insertBefore(o,e),o===i)return s
o=s}return null}function Pe(t){for(var e=t.parentElement(),n=t.firstNode(),r=t.lastNode(),i=n;i;){var o=i.nextSibling
if(e.removeChild(i),i===r)return o
i=o}return null}var Ie="http://www.w3.org/2000/svg"
function Fe(t,e,n){if(!t)return e
if(!function(t,e){var n=t.createElementNS(e,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==n.childNodes.length||n.firstChild.namespaceURI!==Ie}}(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):function(t,e,n,r){var i="<svg>"+n+"</svg>"
e.innerHTML=i
var o=function(t,e,n){var r=t.firstChild,i=null,o=r
for(;o;)i=o,o=o.nextSibling,e.insertBefore(i,n)
return[r,i]}(e.firstChild,t,r),s=o[0],a=o[1]
return new De(t,s,a)}(e,i,o,r)},e}(e)}function Ve(t,e){return t&&function(t){var e=t.createElement("div")
if(e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2===e.childNodes.length)return!1
return!0}(t)?function(t){function e(n){r(this,e)
var i=s(this,t.call(this,n))
return i.uselessComment=n.createComment(""),i}return o(e,t),e.prototype.insertHTMLBefore=function(e,n,r){if(null===r)return t.prototype.insertHTMLBefore.call(this,e,n,r)
var i=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(i=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,r)
return i&&e.removeChild(this.uselessComment),s},e}(e):e}var Ue="http://www.w3.org/2000/svg",He={foreignObject:1,desc:1,title:1},ze=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(t){return ze[t]=1})
var Ge="undefined"==typeof document?null:document
var Ye,We=function(){function t(e){r(this,t),this.document=e,this.setupUselessElement()}return t.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},t.prototype.createElement=function(t,e){var n=void 0,r=void 0
if(e?(n=e.namespaceURI===Ue||"svg"===t,r=He[e.tagName]):(n="svg"===t,r=!1),n&&!r){if(ze[t])throw new Error("Cannot create a "+t+" inside an SVG context")
return this.document.createElementNS(Ue,t)}return this.document.createElement(t)},t.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},t.prototype.insertHTMLBefore=function(t,e,n){return function(t,e,n,r){var i=e,o=n,s=o?o.previousSibling:i.lastChild,a=void 0
if(null===r||""===r)return new De(i,null,null)
null===o?(i.insertAdjacentHTML("beforeend",r),a=i.lastChild):o instanceof HTMLElement?(o.insertAdjacentHTML("beforebegin",r),a=o.previousSibling):(i.insertBefore(t,o),t.insertAdjacentHTML("beforebegin",r),a=t.previousSibling,i.removeChild(t))
var u=s?s.nextSibling:i.firstChild
return new De(i,u,a)}(this.uselessElement,t,e,n)},t.prototype.createTextNode=function(t){return this.document.createTextNode(t)},t.prototype.createComment=function(t){return this.document.createComment(t)},t}();(function(t){var e=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.createElementNS=function(t,e){return this.document.createElementNS(t,e)},e.prototype.setAttribute=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
r?t.setAttributeNS(r,e,n):t.setAttribute(e,n)},e}(We)
t.TreeConstruction=e
var n=e
n=Ve(Ge,n),n=Fe(Ge,n,Ue),t.DOMTreeConstruction=n})(Ye||(Ye={}))
var Xe=function(t){function e(n){r(this,e)
var i=s(this,t.call(this,n))
return i.document=n,i.namespace=null,i}return o(e,t),e.prototype.setAttribute=function(t,e,n){t.setAttribute(e,n)},e.prototype.removeAttribute=function(t,e){t.removeAttribute(e)},e.prototype.insertAfter=function(t,e,n){this.insertBefore(t,e,n.nextSibling)},e}(We)
var qe=Xe
qe=Ve(Ge,qe)
var Ke=qe=Fe(Ge,qe,Ue),Je=Ye.DOMTreeConstruction,$e=["javascript:","vbscript:"],Qe=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Ze=["EMBED"],tn=["href","src","background","action"],en=["src"]
function nn(t,e){return-1!==t.indexOf(e)}function rn(t,e){return(null===t||nn(Qe,t))&&nn(tn,e)}function on(t,e){return null!==t&&(nn(Ze,t)&&nn(en,e))}function sn(t,e){return rn(t,e)||on(t,e)}function an(t,e,n,r){var i=null
if(null==r)return r
if(ve(r))return r.toHTML()
i=e?e.tagName.toUpperCase():null
var o=me(r)
if(rn(i,n)){var s=t.protocolForURL(o)
if(nn($e,s))return"unsafe:"+o}return on(i,n)?"unsafe:"+o:o}function un(t,e){var n,r,i,o=void 0,s=void 0
if(e in t)s=e,o="prop"
else{var a=e.toLowerCase()
a in t?(o="prop",s=a):(o="attr",s=e)}return"prop"===o&&("style"===s.toLowerCase()||(n=t.tagName,r=s,(i=pn[n.toUpperCase()])&&i[r.toLowerCase()]))&&(o="attr"),{normalized:s,type:o}}var pn={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
function cn(t,e){var n=t.tagName
if(t.namespaceURI===Ue)return hn(n,e)
var r=un(t,e),i=r.type,o=r.normalized
return"attr"===i?hn(n,o):function(t,e){if(sn(t,e))return mn
if(function(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}(t,e))return vn
if(function(t,e){return"OPTION"===t&&"selected"===e}(t,e))return gn
return dn}(n,o)}function hn(t,e){return sn(t,e)?yn:fn}var ln=function t(e){r(this,t),this.attribute=e},fn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(t,e,n){var r=bn(e)
if(null!==r){var i=this.attribute,o=i.name,s=i.namespace
t.__setAttribute(o,r,s)}},e.prototype.update=function(t,e){var n=bn(t),r=this.attribute,i=r.element,o=r.name
null===n?i.removeAttribute(o):i.setAttribute(o,n)},e}(ln),dn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(t,e,n){if(null!=e){var r=this.attribute.name
this.value=e,t.__setProperty(r,e)}},e.prototype.update=function(t,e){var n=this.attribute,r=n.element,i=n.name
this.value!==t&&(r[i]=this.value=t,null==t&&this.removeAttribute())},e.prototype.removeAttribute=function(){var t=this.attribute,e=t.element,n=t.name,r=t.namespace
r?e.removeAttributeNS(r,n):e.removeAttribute(n)},e}(ln),mn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(e,n,r){var i=this.attribute,o=an(r,i.element,i.name,n)
t.prototype.set.call(this,e,o,r)},e.prototype.update=function(e,n){var r=this.attribute,i=an(n,r.element,r.name,e)
t.prototype.update.call(this,i,n)},e}(dn),yn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(e,n,r){var i=this.attribute,o=an(r,i.element,i.name,n)
t.prototype.set.call(this,e,o,r)},e.prototype.update=function(e,n){var r=this.attribute,i=an(n,r.element,r.name,e)
t.prototype.update.call(this,i,n)},e}(fn),vn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(t,e){t.__setProperty("value",me(e))},e.prototype.update=function(t){var e=this.attribute.element,n=e.value,r=me(t)
n!==r&&(e.value=r)},e}(dn),gn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.set=function(t,e){null!=e&&!1!==e&&t.__setProperty("selected",!0)},e.prototype.update=function(t){var e=this.attribute.element
e.selected=!!t},e}(dn)
function bn(t){return!1===t||null==t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}var kn=function(){function t(e,n,i,o){r(this,t),this.slots=e,this.callerScope=n,this.evalScope=i,this.partialMap=o}return t.root=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=new Array(n+1),i=0;i<=n;i++)r[i]=kt
return new t(r,null,null,null).init({self:e})},t.sized=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=new Array(e+1),r=0;r<=e;r++)n[r]=kt
return new t(n,null,null,null)},t.prototype.init=function(t){var e=t.self
return this.slots[0]=e,this},t.prototype.getSelf=function(){return this.get(0)},t.prototype.getSymbol=function(t){return this.get(t)},t.prototype.getBlock=function(t){return this.get(t)},t.prototype.getEvalScope=function(){return this.evalScope},t.prototype.getPartialMap=function(){return this.partialMap},t.prototype.bind=function(t,e){this.set(t,e)},t.prototype.bindSelf=function(t){this.set(0,t)},t.prototype.bindSymbol=function(t,e){this.set(t,e)},t.prototype.bindBlock=function(t,e){this.set(t,e)},t.prototype.bindEvalScope=function(t){this.evalScope=t},t.prototype.bindPartialMap=function(t){this.partialMap=t},t.prototype.bindCallerScope=function(t){this.callerScope=t},t.prototype.getCallerScope=function(){return this.callerScope},t.prototype.child=function(){return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},t.prototype.get=function(t){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
return this.slots[t]},t.prototype.set=function(t,e){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
this.slots[t]=e},t}(),wn=function(){function t(){r(this,t),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return t.prototype.didCreate=function(t,e){this.createdComponents.push(t),this.createdManagers.push(e)},t.prototype.didUpdate=function(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)},t.prototype.scheduleInstallModifier=function(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)},t.prototype.scheduleUpdateModifier=function(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)},t.prototype.didDestroy=function(t){this.destructors.push(t)},t.prototype.commit=function(){for(var t=this.createdComponents,e=this.createdManagers,n=0;n<t.length;n++){var r=t[n]
e[n].didCreate(r)}for(var i=this.updatedComponents,o=this.updatedManagers,s=0;s<i.length;s++){var a=i[s]
o[s].didUpdate(a)}for(var u=this.destructors,p=0;p<u.length;p++)u[p].destroy()
for(var c=this.scheduledInstallManagers,h=this.scheduledInstallModifiers,l=0;l<c.length;l++){var f=c[l],d=h[l]
f.install(d)}for(var m=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers,v=0;v<m.length;v++){var g=m[v],b=y[v]
g.update(b)}},t}(),Sn=function(){function t(e){var n=e.appendOperations,i=e.updateOperations
r(this,t),this._transaction=null,this.appendOperations=n,this.updateOperations=i}return t.prototype.toConditionalReference=function(t){return new Et(t)},t.prototype.getAppendOperations=function(){return this.appendOperations},t.prototype.getDOM=function(){return this.updateOperations},t.prototype.getIdentity=function(t){return function(t){return t._guid||m(t)}(t)+""},t.prototype.begin=function(){this._transaction=new wn},t.prototype.didCreate=function(t,e){this.transaction.didCreate(t,e)},t.prototype.didUpdate=function(t,e){this.transaction.didUpdate(t,e)},t.prototype.scheduleInstallModifier=function(t,e){this.transaction.scheduleInstallModifier(t,e)},t.prototype.scheduleUpdateModifier=function(t,e){this.transaction.scheduleUpdateModifier(t,e)},t.prototype.didDestroy=function(t){this.transaction.didDestroy(t)},t.prototype.commit=function(){var t=this.transaction
this._transaction=null,t.commit()},t.prototype.attributeFor=function(t,e,n){arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return cn(t,e)},i(t,[{key:"transaction",get:function(){return this._transaction}}]),t}(),_n=(function(t){function e(n){if(r(this,e),!n){var i=window.document
n={appendOperations:new Je(i),updateOperations:new Xe(i)}}return s(this,t.call(this,n))}o(e,t)}(Sn),function(){function t(e,n,i,o){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1
r(this,t),this.stack=e,this.heap=n,this.program=i,this.externs=o,this.pc=s,this.ra=a,this.currentOpSize=0}return t.prototype.pushFrame=function(){this.stack.pushSmi(this.ra),this.stack.pushSmi(this.stack.fp),this.stack.fp=this.stack.sp-1},t.prototype.popFrame=function(){this.stack.sp=this.stack.fp-1,this.ra=this.stack.getSmi(0),this.stack.fp=this.stack.getSmi(1)},t.prototype.goto=function(t){var e=this.pc+t-this.currentOpSize
this.pc=e},t.prototype.call=function(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)},t.prototype.returnTo=function(t){var e=this.pc+t-this.currentOpSize
this.ra=e},t.prototype.return=function(){this.pc=this.ra},t.prototype.nextStatement=function(){var t=this.pc,e=this.program
if(-1===t)return null
var n=this.program.opcode(t).size,r=this.currentOpSize=n
return this.pc+=r,e.opcode(t)},t.prototype.evaluateOuter=function(t,e){this.evaluateInner(t,e)},t.prototype.evaluateInner=function(t,e){t.isMachine?this.evaluateMachine(t):this.evaluateSyscall(t,e)},t.prototype.evaluateMachine=function(t){switch(t.type){case 47:return this.pushFrame()
case 48:return this.popFrame()
case 42:return this.call(t.op1)
case 41:return this.call(this.stack.popSmi())
case 44:return this.goto(t.op1)
case 20:return this.return()
case 21:return this.returnTo(t.op1)}},t.prototype.evaluateSyscall=function(t,e){dt.evaluate(e,t,t.type)},t}()),En=function(){function t(e){r(this,t),this.trusting=e}return t.prototype.retry=function(t,e){var n=this.bounds,r=n.parentElement(),i=Pe(n),o=Dn.forInitialRender(t,{element:r,nextSibling:i})
return this.trusting?o.__appendTrustingDynamicContent(e):o.__appendCautiousDynamicContent(e)},t}(),Cn=function(){function t(e){r(this,t),this.inner=e,this.bounds=e.bounds}return t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.update=function(t,e){var n=this.inner=this.inner.update(t,e)
return this.bounds=n.bounds,this},t}(),xn=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,o))
return a.bounds=n,a.lastValue=i,a}return o(e,t),e.prototype.update=function(t,e){var n=this.lastValue
if(e===n)return this
if(ge(e)||ve(e))return this.retry(t,e)
var r=void 0;(r=ye(e)?"":ke(e)?e:String(e))!==n&&(this.bounds.firstNode().nodeValue=this.lastValue=r)
return this},e}(En),An=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,o))
return a.bounds=n,a.lastValue=i,a}return o(e,t),e.prototype.update=function(t,e){return e===this.lastValue?this:this.retry(t,e)},e}(En),Nn=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,o))
return a.bounds=n,a.lastValue=i,a}return o(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:ve(e)&&e.toHTML()===n.toHTML()?(this.lastValue=e,this):this.retry(t,e)},e}(En),On=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,o))
return a.bounds=n,a.lastValue=i,a}return o(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:function(t){return ye(t)?"":ke(t)?t:ve(t)?t.toHTML():ge(t)?t:String(t)}(e)===n?this:this.retry(t,e)},e}(En),Ln=function(){function t(e){r(this,t),this.node=e}return t.prototype.firstNode=function(){return this.node},t}(),Tn=function(){function t(e){r(this,t),this.node=e}return t.prototype.lastNode=function(){return this.node},t}(),Dn=function(){function t(e,n,i){r(this,t),this.constructing=null,this.operations=null,this.cursorStack=new v,this.blockStack=new v,this.pushElement(n,i),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}return t.forInitialRender=function(t,e){var n=new this(t,e.element,e.nextSibling)
return n.pushSimpleBlock(),n},t.resume=function(t,e,n){var r=new this(t,e.parentElement(),n)
return r.pushSimpleBlock(),r.pushBlockTracker(e),r},t.prototype.expectConstructing=function(t){return this.constructing},t.prototype.block=function(){return this.blockStack.current},t.prototype.popElement=function(){this.cursorStack.pop(),this.cursorStack.current},t.prototype.pushSimpleBlock=function(){return this.pushBlockTracker(new Bn(this.element))},t.prototype.pushUpdatableBlock=function(){return this.pushBlockTracker(new Mn(this.element))},t.prototype.pushBlockList=function(t){return this.pushBlockTracker(new jn(this.element,t))},t.prototype.pushBlockTracker=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),e||n.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t},t.prototype.popBlock=function(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()},t.prototype.__openBlock=function(){},t.prototype.__closeBlock=function(){},t.prototype.openElement=function(t){var e=this.__openElement(t)
return this.constructing=e,e},t.prototype.__openElement=function(t){return this.dom.createElement(t,this.element)},t.prototype.flushElement=function(){var t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)},t.prototype.__flushElement=function(t,e){this.dom.insertBefore(t,e,this.nextSibling)},t.prototype.closeElement=function(){this.willCloseElement(),this.popElement()},t.prototype.pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.__pushRemoteElement(t,e,n)},t.prototype.__pushRemoteElement=function(t,e,n){this.pushElement(t,n)
var r=new Rn(t)
this.pushBlockTracker(r,!0)},t.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},t.prototype.pushElement=function(t,e){this.cursorStack.push(new Te(t,e))},t.prototype.didAddDestroyable=function(t){this.block().newDestroyable(t)},t.prototype.didAppendBounds=function(t){return this.block().didAppendBounds(t),t},t.prototype.didAppendNode=function(t){return this.block().didAppendNode(t),t},t.prototype.didOpenElement=function(t){return this.block().openElement(t),t},t.prototype.willCloseElement=function(){this.block().closeElement()},t.prototype.appendText=function(t){return this.didAppendNode(this.__appendText(t))},t.prototype.__appendText=function(t){var e=this.dom,n=this.element,r=this.nextSibling,i=e.createTextNode(t)
return e.insertBefore(n,i,r),i},t.prototype.__appendNode=function(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t},t.prototype.__appendFragment=function(t){var e=t.firstChild
if(e){var n=Re(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),n}return Me(this.element,this.__appendComment(""))},t.prototype.__appendHTML=function(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)},t.prototype.appendTrustingDynamicContent=function(t){var e=new Cn(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e},t.prototype.__appendTrustingDynamicContent=function(t){if(ke(t))return this.trustedContent(t)
if(ye(t))return this.trustedContent("")
if(ve(t))return this.trustedContent(t.toHTML())
if(be(t)){var e=this.__appendFragment(t)
return new An(e,t,!0)}if(ge(t)){var n=this.__appendNode(t)
return new An(Me(this.element,n),n,!0)}return this.trustedContent(String(t))},t.prototype.appendCautiousDynamicContent=function(t){var e=new Cn(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e},t.prototype.__appendCautiousDynamicContent=function(t){if(ke(t))return this.untrustedContent(t)
if(ye(t))return this.untrustedContent("")
if(be(t)){var e=this.__appendFragment(t)
return new An(e,t,!1)}if(ge(t)){var n=this.__appendNode(t)
return new An(Me(this.element,n),n,!1)}if(ve(t)){var r=t.toHTML(),i=this.__appendHTML(r)
return new Nn(i,t,!1)}return this.untrustedContent(String(t))},t.prototype.trustedContent=function(t){var e=this.__appendHTML(t)
return new On(e,t,!0)},t.prototype.untrustedContent=function(t){var e=this.__appendText(t),n=Me(this.element,e)
return new xn(n,t,!1)},t.prototype.appendComment=function(t){return this.didAppendNode(this.__appendComment(t))},t.prototype.__appendComment=function(t){var e=this.dom,n=this.element,r=this.nextSibling,i=e.createComment(t)
return e.insertBefore(n,i,r),i},t.prototype.__setAttribute=function(t,e,n){this.dom.setAttribute(this.constructing,t,e,n)},t.prototype.__setProperty=function(t,e){this.constructing[t]=e},t.prototype.setStaticAttribute=function(t,e,n){this.__setAttribute(t,e,n)},t.prototype.setDynamicAttribute=function(t,e,n,r){var i=this.constructing,o=new(this.env.attributeFor(i,t,n,r))({element:i,name:t,namespace:r||null})
return o.set(this,e,this.env),o},i(t,[{key:"element",get:function(){return this.cursorStack.current.element}},{key:"nextSibling",get:function(){return this.cursorStack.current.nextSibling}}]),t}(),Bn=function(){function t(e){r(this,t),this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return t.prototype.destroy=function(){var t=this.destroyables
if(t&&t.length)for(var e=0;e<t.length;e++)t[e].destroy()},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){return this.first&&this.first.firstNode()},t.prototype.lastNode=function(){return this.last&&this.last.lastNode()},t.prototype.openElement=function(t){this.didAppendNode(t),this.nesting++},t.prototype.closeElement=function(){this.nesting--},t.prototype.didAppendNode=function(t){0===this.nesting&&(this.first||(this.first=new Ln(t)),this.last=new Tn(t))},t.prototype.didAppendBounds=function(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)},t.prototype.newDestroyable=function(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)},t.prototype.finalize=function(t){this.first||t.appendComment("")},t}(),Rn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),Pe(this)},e}(Bn),Mn=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.reset=function(t){var e=this.destroyables
if(e&&e.length)for(var n=0;n<e.length;n++)t.didDestroy(e[n])
var r=Pe(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,r},e}(Bn),jn=function(){function t(e,n){r(this,t),this.parent=e,this.boundList=n,this.parent=e,this.boundList=n}return t.prototype.destroy=function(){this.boundList.forEachNode(function(t){return t.destroy()})},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){var t=this.boundList.head()
return t&&t.firstNode()},t.prototype.lastNode=function(){var t=this.boundList.tail()
return t&&t.lastNode()},t.prototype.openElement=function(t){},t.prototype.closeElement=function(){},t.prototype.didAppendNode=function(t){},t.prototype.didAppendBounds=function(t){},t.prototype.newDestroyable=function(t){},t.prototype.finalize=function(t){},t}()
var Pn=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
r(this,t),this.vec=e}return t.prototype.clone=function(){return new t(this.vec.slice())},t.prototype.sliceFrom=function(e){return new t(this.vec.slice(e))},t.prototype.slice=function(e,n){return new t(this.vec.slice(e,n))},t.prototype.copy=function(t,e){this.vec[e]=this.vec[t]},t.prototype.writeRaw=function(t,e){this.vec[t]=e},t.prototype.writeSmi=function(t,e){var n
this.vec[t]=(n=e)<0?Math.abs(n)<<3|4:n<<3|0},t.prototype.getRaw=function(t){return this.vec[t]},t.prototype.getSmi=function(t){return function(t){switch(7&t){case 0:return t>>3
case 4:return-(t>>3)
default:throw new Error("unreachable")}}(this.vec[t])},t.prototype.reset=function(){this.vec.length=0},t.prototype.len=function(){return this.vec.length},t}()
var In=2147483648,Fn=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Pn,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
r(this,t),this.inner=e,this.js=n}return t.prototype.slice=function(e,n){return new t("number"==typeof e&&"number"==typeof n?this.inner.slice(e,n):"number"==typeof e&&void 0===n?this.inner.sliceFrom(e):this.inner.clone(),this.js.slice(e,n))},t.prototype.sliceInner=function(t,e){for(var n=[],r=t;r<e;r++)n.push(this.get(r))
return n},t.prototype.copy=function(t,e){this.inner.copy(t,e)},t.prototype.write=function(t,n){if(function(t){var n=void 0===t?"undefined":e(t)
if(null==t)return!0
switch(n){case"boolean":case"undefined":return!0
case"number":if(t%1!=0)return!1
var r=Math.abs(t)
return!(r&In)
default:return!1}}(n))this.inner.writeRaw(t,Un(n))
else{var r=this.js.length
this.js.push(n),this.inner.writeRaw(t,r|In)}},t.prototype.writeSmi=function(t,e){this.inner.writeSmi(t,e)},t.prototype.writeImmediate=function(t,e){this.inner.writeRaw(t,e)},t.prototype.get=function(t){var e=this.inner.getRaw(t)
return e&In?this.js[2147483647&e]:function(t){switch(t){case 3:return!1
case 11:return!0
case 19:return null
case 27:return
default:return function(t){switch(7&t){case 0:return t>>3
case 4:return-(t>>3)
default:throw c()}}(t)}}(e)},t.prototype.getSmi=function(t){return this.inner.getSmi(t)},t.prototype.reset=function(){this.inner.reset()},i(t,[{key:"length",get:function(){return this.inner.len()}}]),t}(),Vn=function(){function t(e,n,i){r(this,t),this.stack=e,this.fp=n,this.sp=i}return t.empty=function(){return new this(new Fn,0,-1)},t.restore=function(t){for(var e=new Fn,n=0;n<t.length;n++)e.write(n,t[n])
return new this(e,0,t.length-1)},t.prototype.push=function(t){this.stack.write(++this.sp,t)},t.prototype.pushSmi=function(t){this.stack.writeSmi(++this.sp,t)},t.prototype.pushImmediate=function(t){this.stack.writeImmediate(++this.sp,Un(t))},t.prototype.pushEncodedImmediate=function(t){this.stack.writeImmediate(++this.sp,t)},t.prototype.pushNull=function(){this.stack.writeImmediate(++this.sp,19)},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.stack.copy(t,++this.sp)},t.prototype.copy=function(t,e){this.stack.copy(t,e)},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.stack.get(this.sp)
return this.sp-=t,e},t.prototype.popSmi=function(){return this.stack.getSmi(this.sp--)},t.prototype.peek=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.get(this.sp-t)},t.prototype.peekSmi=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.getSmi(this.sp-t)},t.prototype.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.get(e+t)},t.prototype.getSmi=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.getSmi(e+t)},t.prototype.set=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.fp
this.stack.write(n+e,t)},t.prototype.slice=function(t,e){return this.stack.slice(t,e)},t.prototype.sliceArray=function(t,e){return this.stack.sliceInner(t,e)},t.prototype.capture=function(t){var e=this.sp+1,n=e-t
return this.stack.sliceInner(n,e)},t.prototype.reset=function(){this.stack.reset()},t.prototype.toArray=function(){return this.stack.sliceInner(this.fp,this.sp+1)},t}()
function Un(t){switch(void 0===t?"undefined":e(t)){case"number":return function(t){return t<0?Math.abs(t)<<3|4:t<<3|0}(t)
case"boolean":return t?11:3
case"object":return 19
case"undefined":return 27
default:throw c()}}var Hn=function(){function t(e,n,i){var o=i.alwaysRevalidate,s=void 0!==o&&o
r(this,t),this.frameStack=new v,this.env=e,this.constants=n.constants,this.dom=e.getDOM(),this.alwaysRevalidate=s}return t.prototype.execute=function(t,e){var n=this.frameStack
for(this.try(t,e);!n.isEmpty();){var r=this.frame.nextStatement()
null!==r?r.evaluate(this):this.frameStack.pop()}},t.prototype.goto=function(t){this.frame.goto(t)},t.prototype.try=function(t,e){this.frameStack.push(new Xn(t,e))},t.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},i(t,[{key:"frame",get:function(){return this.frameStack.current}}]),t}(),zn=function(t){function e(n,i,o,a){r(this,e)
var u=s(this,t.call(this))
return u.start=n,u.state=i,u.type="block",u.next=null,u.prev=null,u.children=a,u.bounds=o,u}return o(e,t),e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.evaluate=function(t){t.try(this.children,null)},e.prototype.destroy=function(){this.bounds.destroy()},e.prototype.didDestroy=function(){this.state.env.didDestroy(this.bounds)},e}(mt),Gn=function(t){function e(n,i,o,a){r(this,e)
var u=s(this,t.call(this,n,i,o,a))
return u.type="try",u.tag=u._tag=V.create(A),u}return o(e,t),e.prototype.didInitializeChildren=function(){this._tag.inner.update(R(this.children))},e.prototype.evaluate=function(t){t.try(this.children,this)},e.prototype.handleException=function(){var t=this,e=this.state,n=this.bounds,r=this.children,i=this.start,o=this.prev,s=this.next
r.clear()
var a=Dn.resume(e.env,n,n.reset(e.env)),u=Kn.resume(e,a),p=new g
u.execute(i,function(n){n.stack=Vn.restore(e.stack),n.updatingOpcodeStack.push(p),n.updateWith(t),n.updatingOpcodeStack.push(r)}),this.prev=o,this.next=s},e}(zn),Yn=function(){function t(e,n){r(this,t),this.opcode=e,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return t.prototype.insert=function(t,e,n,r){var i=this.map,o=this.opcode,s=this.updating,a=null,u=null
a=r?(u=i[r]).bounds.firstNode():this.marker
var p=o.vmForInsertion(a),c=null,h=o.start
p.execute(h,function(r){i[t]=c=r.iterate(n,e),r.updatingOpcodeStack.push(new g),r.updateWith(c),r.updatingOpcodeStack.push(c.children)}),s.insertBefore(c,u),this.didInsert=!0},t.prototype.retain=function(t,e,n){},t.prototype.move=function(t,e,n,r){var i=this.map,o=this.updating,s=i[t],a=i[r]||null
je(s,r?a.firstNode():this.marker),o.remove(s),o.insertBefore(s,a)},t.prototype.delete=function(t){var e=this.map,n=e[t]
n.didDestroy(),Pe(n),this.updating.remove(n),delete e[t],this.didDelete=!0},t.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},t}(),Wn=function(t){function e(n,i,o,a,u){r(this,e)
var p=s(this,t.call(this,n,i,o,a))
p.type="list-block",p.map=y(),p.lastIterated=w,p.artifacts=u
var c=p._tag=V.create(A)
return p.tag=M([u.tag,c]),p}return o(e,t),e.prototype.didInitializeChildren=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(R(this.children))},e.prototype.evaluate=function(e){var n=this.artifacts,r=this.lastIterated
if(!n.tag.validate(r)){var i=this.bounds,o=e.dom,s=o.createComment("")
o.insertAfter(i.parentElement(),s,i.lastNode())
var a=new Yn(this,s)
new K({target:a,artifacts:n}).sync(),this.parentElement().removeChild(s)}t.prototype.evaluate.call(this,e)},e.prototype.vmForInsertion=function(t){var e=this.bounds,n=this.state,r=Dn.forInitialRender(n.env,{element:e.parentElement(),nextSibling:t})
return Kn.resume(n,r)},e}(zn),Xn=function(){function t(e,n){r(this,t),this.ops=e,this.exceptionHandler=n,this.current=e.head()}return t.prototype.goto=function(t){this.current=t},t.prototype.nextStatement=function(){var t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t},t.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},t}(),qn=function(){function t(e,n,i,o){r(this,t),this.env=e,this.program=n,this.updating=i,this.bounds=o}return t.prototype.rerender=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1}).alwaysRevalidate,e=void 0!==t&&t,n=this.env,r=this.program,i=this.updating
new Hn(n,r,{alwaysRevalidate:e}).execute(i,this)},t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.handleException=function(){throw"this should never happen"},t.prototype.destroy=function(){this.bounds.destroy(),Pe(this.bounds)},t}(),Kn=function(){function t(e,n,i,o,s){var a=this
r(this,t),this.program=e,this.env=n,this.elementStack=s,this.dynamicScopeStack=new v,this.scopeStack=new v,this.updatingOpcodeStack=new v,this.cacheGroups=new v,this.listBlockStack=new v,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=n,this.heap=e.heap,this.constants=e.constants,this.elementStack=s,this.scopeStack.push(i),this.dynamicScopeStack.push(o),this.inner=new _n(Vn.empty(),this.heap,e,{debugBefore:function(t){return dt.debugBefore(a,t,t.type)},debugAfter:function(t,e){dt.debugAfter(a,t,t.type,e)}})}return t.prototype.fetch=function(t){this.stack.push(this[lt[t]])},t.prototype.load=function(t){this[lt[t]]=this.stack.pop()},t.prototype.fetchValue=function(t){return this[lt[t]]},t.prototype.loadValue=function(t,e){this[lt[t]]=e},t.prototype.pushFrame=function(){this.inner.pushFrame()},t.prototype.popFrame=function(){this.inner.popFrame()},t.prototype.goto=function(t){this.inner.goto(t)},t.prototype.call=function(t){this.inner.call(t)},t.prototype.returnTo=function(t){this.inner.returnTo(t)},t.prototype.return=function(){this.inner.return()},t.initial=function(e,n,r,i,o,s,a){var u=e.heap.scopesizeof(a),p=new t(e,n,kn.root(r,u),o,s)
return p.pc=p.heap.getaddr(a),p.updatingOpcodeStack.push(new g),p},t.empty=function(e,n,r){var i={get:function(){return kt},set:function(){return kt},child:function(){return i}},o=new t(e,n,kn.root(kt,0),i,r)
return o.updatingOpcodeStack.push(new g),o},t.resume=function(e,n){return new t(e.program,e.env,e.scope,e.dynamicScope,n)},t.prototype.capture=function(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}},t.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},t.prototype.commitCacheGroup=function(){var t=new ce("END"),e=this.updating(),n=this.cacheGroups.pop(),r=n?e.nextNode(n):e.head(),i=e.tail(),o=R(new b(r,i)),s=new ue(o,t)
e.insertBefore(s,r),e.append(new pe(s)),e.append(t)},t.prototype.enter=function(t){var e=new g,n=this.capture(t),r=this.elements().pushUpdatableBlock(),i=new Gn(this.heap.gethandle(this.pc),n,r,e)
this.didEnter(i)},t.prototype.iterate=function(t,e){var n=this.stack
n.push(e),n.push(t)
var r=this.capture(2),i=this.elements().pushUpdatableBlock()
return new Gn(this.heap.gethandle(this.pc),r,i,new g)},t.prototype.enterItem=function(t,e){this.listBlock().map[t]=e,this.didEnter(e)},t.prototype.enterList=function(t){var e=new g,n=this.capture(0),r=this.elements().pushBlockList(e),i=this.stack.peek().artifacts,o=this.pc+t-this.currentOpSize,s=this.heap.gethandle(o),a=new Wn(s,n,r,e,i)
this.listBlockStack.push(a),this.didEnter(a)},t.prototype.didEnter=function(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)},t.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},t.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},t.prototype.updateWith=function(t){this.updating().append(t)},t.prototype.listBlock=function(){return this.listBlockStack.current},t.prototype.updating=function(){return this.updatingOpcodeStack.current},t.prototype.elements=function(){return this.elementStack},t.prototype.scope=function(){return this.scopeStack.current},t.prototype.dynamicScope=function(){return this.dynamicScopeStack.current},t.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},t.prototype.pushDynamicScope=function(){var t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t},t.prototype.pushRootScope=function(t,e){var n=kn.sized(t)
return e&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},t.prototype.pushScope=function(t){this.scopeStack.push(t)},t.prototype.popScope=function(){this.scopeStack.pop()},t.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},t.prototype.newDestroyable=function(t){this.elements().didAddDestroyable(t)},t.prototype.getSelf=function(){return this.scope().getSelf()},t.prototype.referenceForSymbol=function(t){return this.scope().getSymbol(t)},t.prototype.execute=function(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
for(var n=void 0;!(n=this.next()).done;);return n.value},t.prototype.next=function(){var t=this.env,e=this.program,n=this.updatingOpcodeStack,r=this.elementStack,i=this.inner.nextStatement(),o=void 0
return null!==i?(this.inner.evaluateOuter(i,this),o={done:!1,value:null}):(this.stack.reset(),o={done:!0,value:new qn(t,e,n.pop(),r.popBlock())}),o},t.prototype.bindDynamicScope=function(t){for(var e=this.dynamicScope(),n=t.length-1;n>=0;n--){var r=this.constants.getString(t[n])
e.set(r,this.stack.pop())}},i(t,[{key:"stack",get:function(){return this.inner.stack},set:function(t){this.inner.stack=t}},{key:"currentOpSize",set:function(t){this.inner.currentOpSize=t},get:function(){return this.inner.currentOpSize}},{key:"pc",get:function(){return this.inner.pc},set:function(t){this.inner.pc=t}},{key:"ra",get:function(){return this.inner.ra},set:function(t){this.inner.ra=t}},{key:"fp",get:function(){return this.stack.fp},set:function(t){this.stack.fp=t}},{key:"sp",get:function(){return this.stack.sp},set:function(t){this.stack.sp=t}}]),t}(),Jn=function(){function t(e){r(this,t),this.vm=e}return t.prototype.next=function(){return this.vm.next()},t}(),$n=0
function Qn(t){var e=t.id,n=t.meta,r=t.block,i=void 0,o=e||"client-"+$n++
return{id:o,meta:n,create:function(t,e){var s=e?f({},e,n):n
return i||(i=JSON.parse(r)),new Zn(t,{id:o,block:i,referrer:s})}}}var Zn=function(){function t(e,n){r(this,t),this.options=e,this.parsedLayout=n,this.layout=null,this.partial=null
var i=n.block
this.symbols=i.symbols,this.hasEval=i.hasEval,this.statements=i.statements,this.referrer=n.referrer,this.id=n.id||"client-"+$n++}return t.prototype.renderLayout=function(t){var e=t.env,n=t.self,r=t.dynamicScope,i=t.args,o=void 0===i?ee:i,s=t.builder,a=this.asLayout().compile(),u=Kn.initial(this.options.program,e,n,o,r,s,a)
return new Jn(u)},t.prototype.asLayout=function(){return this.layout?this.layout:this.layout=tr(this.parsedLayout,this.options,!1)},t.prototype.asPartial=function(){return this.partial?this.partial:this.partial=tr(this.parsedLayout,this.options,!0)},t}()
function tr(t,e,n){var r=t.block,i=t.referrer,o=r.hasEval,s=r.symbols,a=f({},e,{asPartial:n,referrer:i})
return new Vt(r.statements,t,a,{referrer:i,hasEval:o,symbols:s})}var er=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,n,i))
return a.startingBlockDepth=o,a.candidate=null,a.injectedOmittedNode=!1,a.openBlockDepth=o-1,a}return o(e,t),e}(Te),nr=function(t){function e(n,i,o){r(this,e)
var a=s(this,t.call(this,n,i,o))
if(a.unmatchedAttributes=null,a.blockDepth=0,o)throw new Error("Rehydration with nextSibling not supported")
return a.candidate=a.currentCursor.element.firstChild,a}return o(e,t),e.prototype.pushElement=function(t,e){var n=this.blockDepth,r=new er(t,e,void 0===n?0:n),i=this.currentCursor
i&&i.candidate&&(r.candidate=t.firstChild,i.candidate=t.nextSibling),this.cursorStack.push(r)},e.prototype.clearMismatch=function(t){var e=t,n=this.currentCursor
if(null!==n){var r=n.openBlockDepth
if(r>=n.startingBlockDepth)for(;e&&(!rr(e)||ir(e)!==r);)e=this.remove(e)
else for(;null!==e;)e=this.remove(e)
n.nextSibling=e,n.candidate=null}},e.prototype.__openBlock=function(){var t=this.currentCursor
if(null!==t){var e=this.blockDepth
this.blockDepth++
var n,r=t.candidate
if(null!==r)rr(r)&&((n=r.nodeValue.match(/^%\+b:(\d+)%$/))&&n[1]?Number(n[1]):null)===e?(t.candidate=this.remove(r),t.openBlockDepth=e):this.clearMismatch(r)}},e.prototype.__closeBlock=function(){var t=this.currentCursor
if(null!==t){var e=t.openBlockDepth
this.blockDepth--
var n=t.candidate
null!==n&&(rr(n)&&ir(n)===e?(t.candidate=this.remove(n),t.openBlockDepth--):this.clearMismatch(n)),t.openBlockDepth===this.blockDepth&&(t.candidate=this.remove(t.nextSibling),t.openBlockDepth--)}},e.prototype.__appendNode=function(e){var n=this.candidate
return n||t.prototype.__appendNode.call(this,e)},e.prototype.__appendHTML=function(e){var n=this.markerBounds()
if(n){var r=n.firstNode(),i=n.lastNode(),o=Re(this.element,r.nextSibling,i.previousSibling)
return this.remove(r),this.remove(i),o}return t.prototype.__appendHTML.call(this,e)},e.prototype.remove=function(t){var e=t.parentNode,n=t.nextSibling
return e.removeChild(t),n},e.prototype.markerBounds=function(){var t=this.candidate
if(t&&sr(t)){for(var e=t,n=e.nextSibling;n&&!sr(n);)n=n.nextSibling
return Re(this.element,e,n)}return null},e.prototype.__appendText=function(e){var n=this.candidate
if(n){if(3===n.nodeType)return n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n
if(n&&(function(t){return 8===t.nodeType&&"%|%"===t.nodeValue}(n)||ar(n)))return this.candidate=n.nextSibling,this.remove(n),this.__appendText(e)
if(ar(n)){var r=this.remove(n)
this.candidate=r
var i=this.dom.createTextNode(e)
return this.dom.insertBefore(this.element,i,r),i}return this.clearMismatch(n),t.prototype.__appendText.call(this,e)}return t.prototype.__appendText.call(this,e)},e.prototype.__appendComment=function(e){var n=this.candidate
return n&&rr(n)?(n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n):(n&&this.clearMismatch(n),t.prototype.__appendComment.call(this,e))},e.prototype.__openElement=function(e){var n=this.candidate
if(n&&or(n)&&function(t,e){if(t.namespaceURI===Ue)return t.tagName===e
return t.tagName===e.toUpperCase()}(n,e))return this.unmatchedAttributes=[].slice.call(n.attributes),n
if(n){if(or(n)&&"TBODY"===n.tagName)return this.pushElement(n,null),this.currentCursor.injectedOmittedNode=!0,this.__openElement(e)
this.clearMismatch(n)}return t.prototype.__openElement.call(this,e)},e.prototype.__setAttribute=function(e,n,r){var i=this.unmatchedAttributes
if(i){var o=ur(i,e)
if(o)return o.value!==n&&(o.value=n),void i.splice(i.indexOf(o),1)}return t.prototype.__setAttribute.call(this,e,n,r)},e.prototype.__setProperty=function(e,n){var r=this.unmatchedAttributes
if(r){var i=ur(r,e)
if(i)return i.value!==n&&(i.value=n),void r.splice(r.indexOf(i),1)}return t.prototype.__setProperty.call(this,e,n)},e.prototype.__flushElement=function(e,n){var r=this.unmatchedAttributes
if(r){for(var i=0;i<r.length;i++)this.constructing.removeAttribute(r[i].name)
this.unmatchedAttributes=null}else t.prototype.__flushElement.call(this,e,n)},e.prototype.appendCautiousDynamicContent=function(e){var n=t.prototype.appendCautiousDynamicContent.call(this,e)
return n.update(this.env,e),n},e.prototype.willCloseElement=function(){var e=this.candidate,n=this.currentCursor
null!==e&&this.clearMismatch(e),n&&n.injectedOmittedNode&&this.popElement(),t.prototype.willCloseElement.call(this)},e.prototype.getMarker=function(t,e){var n=t.querySelector('script[glmr="'+e+'"]')
if(n)return n
throw new Error("Cannot find serialized cursor for `in-element`")},e.prototype.__pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this.getMarker(t,e)
if(r.parentNode===t){var i=this.currentCursor,o=i.candidate
this.pushElement(t,n),i.candidate=o,this.candidate=this.remove(r)
var s=new Rn(t)
this.pushBlockTracker(s,!0)}},e.prototype.didAppendBounds=function(e){if(t.prototype.didAppendBounds.call(this,e),this.candidate){var n=e.lastNode()
this.candidate=n&&n.nextSibling}return e},i(e,[{key:"currentCursor",get:function(){return this.cursorStack.current}},{key:"candidate",get:function(){return this.currentCursor?this.currentCursor.candidate:null},set:function(t){this.currentCursor.candidate=t}}]),e}(Dn)
function rr(t){return 8===t.nodeType}function ir(t){var e=t.nodeValue.match(/^%\-b:(\d+)%$/)
return e&&e[1]?Number(e[1]):null}function or(t){return 1===t.nodeType}function sr(t){return 8===t.nodeType&&"%glmr%"===t.nodeValue}function ar(t){return 8===t.nodeType&&"% %"===t.nodeValue}function ur(t,e){for(var n=0;n<t.length;n++){var r=t[n]
if(r.name===e)return r}}var pr=function(){function t(){r(this,t)}return t.prototype.get=function(t){return lr.create(this,t)},t}(),cr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n._lastRevision=null,n._lastValue=null,n}return o(e,t),e.prototype.value=function(){var t=this.tag,e=this._lastRevision,n=this._lastValue
return e&&t.validate(e)||(n=this._lastValue=this.compute(),this._lastRevision=t.value()),n},e}(pr),hr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.children=y(),n}return o(e,t),e.prototype.get=function(t){var e=this.children[t]
return e||(e=this.children[t]=new fr(this.inner,t)),e},e}(Y),lr=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.create=function(t,e){return O(t)?new fr(t.value(),e):new dr(t,e)},e.prototype.get=function(t){return new dr(this,t)},e}(cr),fr=function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o._parentValue=n,o._propertyKey=i,o.tag=rt(n,i),o}return o(e,t),e.prototype.compute=function(){return this._parentValue[this._propertyKey]},e}(lr),dr=function(t){function n(e,i){r(this,n)
var o=s(this,t.call(this)),a=e.tag,u=V.create(A)
return o._parentReference=e,o._parentObjectTag=u,o._propertyKey=i,o.tag=M([a,u]),o}return o(n,t),n.prototype.compute=function(){var t=this._parentReference,n=this._parentObjectTag,r=this._propertyKey,i=t.value()
return n.inner.update(rt(i,r)),"string"==typeof i&&"length"===r?i.length:"object"===(void 0===i?"undefined":e(i))&&i?i[r]:void 0},n}(lr),mr=function(t){function e(n){r(this,e)
var i=s(this,t.call(this))
return i.tag=D.create(),i._value=n,i}return o(e,t),e.prototype.value=function(){return this._value},e.prototype.update=function(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)},e}(pr),yr=(function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}o(e,t),e.create=function(t){if(O(t)){var n=t.value()
return vt.create(n)}return new e(t)}}(Et),function(t){function e(n){r(this,e)
var i=s(this,t.call(this,void 0))
return i.name=n,i}o(e,t),e.prototype.get=function(t){throw new Error("You tried to reference {{"+t+"}} from the "+this.name+" template, which doesn't have an associated component class. Template-only components can only access args passed to them. Did you mean {{@"+t+"}}?")}}(Y),function(){function t(e,n,i){r(this,t)
var o=e.ComponentClass,s=e.name
this.args=n
var a={debugName:s,args:this.namedArgsSnapshot()}
ht(a,i),o&&(this.component=o.create(a))}return t.prototype.namedArgsSnapshot=function(){return Object.freeze(this.args.named.value())},i(t,[{key:"tag",get:function(){return this.args.tag}}]),t}()),vr=new hr(null),gr=function(){function t(e){r(this,t),this.env=e.env}return t.create=function(e){return new t(e)},t.prototype.prepareArgs=function(t,e){return null},t.prototype.getCapabilities=function(t){return t.capabilities},t.prototype.getLayout=function(t,e){var n=t.name,r=t.handle,i=t.symbolTable
return r&&i?{handle:r,symbolTable:i}:e.compileTemplate(n,r)},t.prototype.create=function(t,e,n,r,i,o){if(e.ComponentClass){var s=ct(this.env)
return new yr(e,n.capture(),s)}},t.prototype.getSelf=function(t){return t?new hr(t.component):vr},t.prototype.didCreateElement=function(t,e){},t.prototype.didRenderLayout=function(t,e){t&&(t.component.bounds=new ft(e))},t.prototype.didCreate=function(t){t&&t.component.didInsertElement()},t.prototype.getTag=function(t){return t?t.tag:A},t.prototype.update=function(t,e){t&&(t.component.args=t.namedArgsSnapshot())},t.prototype.didUpdateLayout=function(){},t.prototype.didUpdate=function(t){t&&t.component.didUpdate()},t.prototype.getDestructor=function(t){return t?t.component:br},t}(),br={destroy:function(){}}
function kr(t,e,n){function r(){return Reflect.construct(HTMLElement,[],r)}r.prototype=Object.create(HTMLElement.prototype,{constructor:{value:r},connectedCallback:{value:function(){var e=this,r=document.createElement("span"),i=this.parentNode
i.insertBefore(r,this),i.removeChild(this),t.renderComponent(n,i,r),function t(e,n){e._rendering?requestAnimationFrame(function(){t(e,n)}):n()}(t,function(){var t=e,n=r.previousElementSibling
r.remove(),function(t,e){for(var n=t.attributes,r=0;r<n.length;r++){var i=n.item(r),o=i.name,s=i.value
e.setAttribute(o,s)}}(t,n)})}}}),window.customElements.define(e,r)}var wr=function(){function t(e,n){r(this,t),this._registry=e,this._resolver=n}return t.prototype.register=function(t,e,n){var r=this._toAbsoluteSpecifier(t)
this._registry.register(r,e,n)},t.prototype.registration=function(t){var e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)},t.prototype.unregister=function(t){var e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)},t.prototype.registerOption=function(t,e,n){var r=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(r,e,n)},t.prototype.registeredOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(n,e)},t.prototype.registeredOptions=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)},t.prototype.unregisterOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(n,e)},t.prototype.registerInjection=function(t,e,n){var r=this._toAbsoluteOrTypeSpecifier(t),i=this._toAbsoluteSpecifier(n)
this._registry.registerInjection(r,e,i)},t.prototype.registeredInjections=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)},t.prototype._toAbsoluteSpecifier=function(t,e){return this._resolver.identify(t,e)},t.prototype._toAbsoluteOrTypeSpecifier=function(t){return function(t){return-1===t.indexOf(":")}(t)?t:this._toAbsoluteSpecifier(t)},t}(),Sr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
r(this,t),this.bucket=e?f({},e):{}}return t.prototype.get=function(t){return this.bucket[t]},t.prototype.set=function(t,e){return this.bucket[t]=e},t.prototype.child=function(){return new t(this.bucket)},t}(),_r=function(){function t(e,n){r(this,t),this.position=0,this.array=e,this.keyFor=n}return t.prototype.isEmpty=function(){return 0===this.array.length},t.prototype.next=function(){var t=this.position,e=this.array,n=this.keyFor
if(t>=e.length)return null
var r=e[t],i=n(r,t),o=t
return this.position++,{key:i,value:r,memo:o}},t}(),Er=function(){function t(e,n,i){r(this,t),this.position=0,this.keys=e,this.values=n,this.keyFor=i}return t.prototype.isEmpty=function(){return 0===this.keys.length},t.prototype.next=function(){var t=this.position,e=this.keys,n=this.values,r=this.keyFor
if(t>=e.length)return null
var i=n[t],o=e[t],s=r(i,o)
return this.position++,{key:s,value:i,memo:o}},t}(),Cr=new(function(){function t(){r(this,t)}return t.prototype.isEmpty=function(){return!0},t.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},t}()),xr=function(){function t(e,n){r(this,t),this.tag=e.tag,this.ref=e,this.keyFor=n}return t.prototype.iterate=function(){var t=this.ref,n=this.keyFor,r=t.value()
if(Array.isArray(r))return r.length>0?new _r(r,n):Cr
if(null==r)return Cr
if(void 0!==r.forEach){var i=[]
return r.forEach(function(t){i.push(t)}),i.length>0?new _r(i,n):Cr}if("object"===(void 0===r?"undefined":e(r))){var o=Object.keys(r)
return o.length>0?new Er(o,o.map(function(t){return r[t]}),n):Cr}throw new Error("Don't know how to {{#each "+r+"}}")},t.prototype.valueReferenceFor=function(t){return new mr(t.value)},t.prototype.updateValueReference=function(t,e){t.update(e.value)},t.prototype.memoReferenceFor=function(t){return new mr(t.memo)},t.prototype.updateMemoReference=function(t,e){t.update(e.memo)},t}(),Ar=function(t){function e(n){r(this,e)
var i=s(this,t.call(this,{appendOperations:n.appendOperations,updateOperations:new Ke(n.document||document)}))
return ht(i,ct(n)),i.uselessAnchor=n.document.createElement("a"),i}return o(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Je(t.document),new e(t)},e.prototype.protocolForURL=function(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol},e.prototype.iterableFor=function(t,e){var n=void 0
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":n=function(t,e){return String(e)}
break
case"@primitive":n=function(t){return String(t)}
break
default:n=function(t){return t[e]}}return new xr(t,n)},e}(Sn),Nr="object"===("undefined"==typeof document?"undefined":e(document))?document:null,Or=function(){function t(e){r(this,t),this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=e.rootName,this.resolver=e.resolver,h(e.loader,"Must provide a Loader for preparing templates and other metadata required for a Glimmer Application."),h(e.renderer,"Must provide a Renderer to render the templates produced by the Loader."),h(e.builder,"Must provide a Builder that is responsible to building DOM."),this.document=e.document||Nr,this.loader=e.loader,this.renderer=e.renderer,this.builder=e.builder}return t.prototype.renderComponent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this._roots,i=this._self
r.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:n}),i&&(i.update({roots:r}),this.scheduleRerender())},t.prototype.boot=function(){var t=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.initialize(),this.env=this.lookup("environment:/"+this.rootName+"/main/main"),t.next=4,this._render()
case 4:case"end":return t.stop()}},t,this)}))
return function(){return t.apply(this,arguments)}}(),t.prototype.scheduleRerender=function(){var t=this
!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,setTimeout(function(){t._scheduled=!1,t._rerender(),t._rendering=!1},0))},t.prototype.initialize=function(){this.initRegistry(),this.initContainer()},t.prototype.registerInitializer=function(t){this._initializers.push(t)},t.prototype.initRegistry=function(){var t=this._registry=new ut,e=new wr(this._registry,this.resolver)
t.register("environment:/"+this.rootName+"/main/main",Ar),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register("document:/"+this.rootName+"/main/main",this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document","document:/"+this.rootName+"/main/main"),t.registerInjection("component-manager","env","environment:/"+this.rootName+"/main/main")
for(var n=this._initializers,r=0;r<n.length;r++)n[r].initialize(e)
this._initialized=!0},t.prototype.initContainer=function(){var t=this
this._container=new at(this._registry,this.resolver),this._container.defaultInjections=function(e){var n={}
return ht(n,t),n}},t.prototype._render=function(){var t=n(regeneratorRuntime.mark(function t(){var e,n,r,i,o
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.env,n=this._self=new mr({roots:this._roots}),r=new Sr,i=this.builder.getBuilder(e),t.next=6,this.loader.getTemplateIterator(this,e,i,r,n)
case 6:return o=t.sent,t.prev=7,e.begin(),t.next=11,this.renderer.render(o)
case 11:e.commit(),this._didRender(),t.next=19
break
case 15:throw t.prev=15,t.t0=t.catch(7),this._didError(t.t0),t.t0
case 19:case"end":return t.stop()}},t,this,[[7,15]])}))
return function(){return t.apply(this,arguments)}}(),t.prototype._rerender=function(){var t=n(regeneratorRuntime.mark(function t(){var e
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.env,t.prev=1,e.begin(),t.next=5,this.renderer.rerender()
case 5:e.commit(),this._didRender(),t.next=13
break
case 9:throw t.prev=9,t.t0=t.catch(1),this._didError(t.t0),t.t0
case 13:case"end":return t.stop()}},t,this,[[1,9]])}))
return function(){return t.apply(this,arguments)}}(),t.prototype._didRender=function(){this._rendered=!0
var t=this._notifiers
this._notifiers=[],t.forEach(function(t){return t[0]()})},t.prototype._didError=function(t){var e=this._notifiers
this._notifiers=[],e.forEach(function(e){return e[1](t)})},t.prototype.identify=function(t,e){return this.resolver.identify(t,e)},t.prototype.factoryFor=function(t,e){return this._container.factoryFor(this.identify(t,e))},t.prototype.lookup=function(t,e){return this._container.lookup(this.identify(t,e))},t}(),Lr=function(){function t(){r(this,t),this.byName=y(),this.byHandle=y()}return t.prototype.hasName=function(t){return t in this.byName},t.prototype.getHandle=function(t){return this.byName[t]},t.prototype.hasHandle=function(t){return t in this.byHandle},t.prototype.getByHandle=function(t){return this.byHandle[t]},t.prototype.register=function(t,e,n){this.byHandle[t]=n,this.byName[e]=t},t}(),Tr=function(){function t(e,n){r(this,t),this.helper=e,this.tag=n.tag,this.args=n.capture()}return t.prototype.value=function(){var t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())},t.prototype.get=function(){return new hr(this)},t}(),Dr=function(){function t(e){r(this,t),this.owner=e,this.handleLookup=[],this.cache={component:new Lr,template:new Lr,compiledTemplate:new Lr,helper:new Lr,manager:new Lr,modifier:new Lr}}return t.prototype.setCompileOptions=function(t){this.templateOptions=t},t.prototype.lookup=function(t,e,n){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null},t.prototype.register=function(t,e,n){var r=this.cache[t],i=this.handleLookup.length
return this.handleLookup.push(r),this.cache[t].register(i,e,n),i},t.prototype.lookupModifier=function(t,e){var n=this.lookup("modifier",t)
if(null===n)throw new Error("Modifier for "+t+" not found.")
return n},t.prototype.compileTemplate=function(t,e){if(!this.cache.compiledTemplate.hasName(t)){var n=this.resolve(e),r=n.block,i=n.meta,o=n.id,s=JSON.parse(r),a=new Zn(this.templateOptions,{id:o,block:s,referrer:i}).asLayout(),u={handle:a.compile(),symbolTable:a.symbolTable}
return this.register("compiledTemplate",t,u),u}var p=this.lookup("compiledTemplate",t)
return this.resolve(p)},t.prototype.registerHelper=function(t,e){return this.register("helper",t,function(t,n){return new Tr(e,n)})},t.prototype.registerInternalHelper=function(t,e){this.register("helper",t,e)},t.prototype.registerComponent=function(t,e,n,r){var i=this.registerTemplate(e,r),o=this.managerFor(i.meta.managerId),s=new st(t,o,n,i.handle)
return this.register("component",t,s)},t.prototype.lookupComponentHandle=function(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)},t.prototype.managerFor=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=void 0
if(this.cache.manager.hasName(t)){var n=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(n)}var r=this.owner.rootName
if(!(e=this.owner.lookup("component-manager:/"+r+"/component-managers/"+t)))throw new Error("No component manager found for ID "+t+".")
return this.register("manager",t,e),e},t.prototype.registerTemplate=function(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}},t.prototype.lookupComponent=function(t,e){var n=void 0
if(this.cache.component.hasName(t))n=this.lookup("component",t,e)
else{var r=function(t,e){if(null==t)throw new Error(e)
return t}(this.identifyComponent(t,e),"Could not find the component '"+t+"'"),i=this.owner.lookup("template",r),o=this.owner.identify("component",r),s=null
void 0!==o&&(s=this.owner.factoryFor(o)),n=this.registerComponent(t,r,s,i)}return this.resolve(n)},t.prototype.lookupHelper=function(t,e){if(!this.cache.helper.hasName(t)){var n=this.owner,r="helper:"+t,i=e.specifier,o=n.identify(r,i)
if(void 0===o)return null
var s=this.owner.lookup(o,e.specifier)
return this.registerHelper(t,s)}return this.lookup("helper",t,e)},t.prototype.lookupPartial=function(t,e){throw new Error("Partials are not available in Glimmer applications.")},t.prototype.resolve=function(t){return this.handleLookup[t].getByHandle(t)},t.prototype.identifyComponent=function(t,e){var n=this.owner,r="template:"+t,i=e.specifier,o=n.identify(r,i)
if(void 0===o&&n.identify("component:"+t,i))throw new Error("The component '"+t+"' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.")
return o},t}(),Br={},Rr=Object.freeze([]),Mr=function(){function t(){r(this,t),this.strings=[],this.arrays=[Rr],this.tables=[],this.handles=[],this.resolved=[],this.floats=[],this.negatives=[]}return t.prototype.float=function(t){var e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1},t.prototype.negative=function(t){return this.negatives.push(t)-1},t.prototype.string=function(t){var e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1},t.prototype.stringArray=function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=this.string(t[n])
return this.array(e)},t.prototype.array=function(t){if(0===t.length)return 0
var e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1},t.prototype.handle=function(t){var e=this.handles.indexOf(t)
return e>-1?e:(this.resolved.push(Br),this.handles.push(t)-1)},t.prototype.serializable=function(t){var e=JSON.stringify(t),n=this.strings.indexOf(e)
return n>-1?n:this.strings.push(e)-1},t.prototype.toPool=function(){return{strings:this.strings,arrays:this.arrays,handles:this.handles,floats:this.floats,negatives:this.negatives}},t}(),jr=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.others=[],n.serializables=[],n}return o(e,t),e.prototype.serializable=function(t){var e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1},e.prototype.getSerializable=function(t){return this.serializables[t]},e.prototype.getOther=function(t){return this.others[t-1]},e.prototype.other=function(t){return this.others.push(t)},e}(function(t){function e(n,i){r(this,e)
var o=s(this,t.call(this))
return o.resolver=n,i&&(o.strings=i.strings,o.arrays=i.arrays,o.handles=i.handles,o.floats=i.floats,o.negatives=i.negatives,o.resolved=o.handles.map(function(){return Br})),o}return o(e,t),e.prototype.getFloat=function(t){return this.floats[t]},e.prototype.getNegative=function(t){return this.negatives[t]},e.prototype.getString=function(t){return this.strings[t]},e.prototype.getStringArray=function(t){for(var e=this.getArray(t),n=new Array(e.length),r=0;r<e.length;r++){var i=e[r]
n[r]=this.getString(i)}return n},e.prototype.getArray=function(t){return this.arrays[t]},e.prototype.resolveHandle=function(t){var e=this.resolved[t]
if(e===Br){var n=this.handles[t]
e=this.resolved[t]=this.resolver.resolve(n)}return e},e.prototype.getSerializable=function(t){return JSON.parse(this.strings[t])},e}(Mr)),Pr=function(){function t(e){r(this,t),this.heap=e,this.offset=0}return i(t,[{key:"size",get:function(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}},{key:"isMachine",get:function(){return 1024&this.heap.getbyaddr(this.offset)}},{key:"type",get:function(){return 255&this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),t}()
function Ir(t,e,n){return t|e<<16|n<<30}function Fr(t,e){return t|e<<30}var Vr=function(){function t(e){if(r(this,t),this.placeholders=[],this.offset=0,this.handle=0,e){var n=e.buffer,i=e.table,o=e.handle
this.heap=new Uint16Array(n),this.table=i,this.offset=this.heap.length,this.handle=o}else this.heap=new Uint16Array(1048576),this.table=[]}return t.prototype.push=function(t){this.heap[this.offset++]=t},t.prototype.getbyaddr=function(t){return this.heap[t]},t.prototype.setbyaddr=function(t,e){this.heap[t]=e},t.prototype.malloc=function(){this.table.push(this.offset,0)
var t=this.handle
return this.handle+=2,t},t.prototype.finishMalloc=function(t,e){var n=this.table[t],r=Ir(this.offset-n,e,0)
this.table[t+1]=r},t.prototype.size=function(){return this.offset},t.prototype.getaddr=function(t){return this.table[t]},t.prototype.gethandle=function(t){this.table.push(t,Ir(0,0,3))
var e=this.handle
return this.handle+=2,e},t.prototype.sizeof=function(t){return-1},t.prototype.scopesizeof=function(t){return(1073676288&this.table[t+1])>>16},t.prototype.free=function(t){var e=this.table[t+1]
this.table[t+1]=Fr(e,1)},t.prototype.compact=function(){for(var t=0,e=this.table,n=this.table.length,r=this.heap,i=0;i<n;i+=2){var o=e[i],s=e[i+1],a=65535&s,u=-1&s
if(2!==u)if(1===u)e[i+1]=Fr(s,2),t+=a
else if(0===u){for(var p=o;p<=i+a;p++)r[p-t]=r[p]
e[i]=o-t}else 3===u&&(e[i]=o-t)}this.offset=this.offset-t},t.prototype.pushPlaceholder=function(t){var e=this.offset++
this.heap[e]=65535,this.placeholders.push([e,t])},t.prototype.patchPlaceholders=function(){for(var t=this.placeholders,e=0;e<t.length;e++){var n=t[e],r=n[0],i=n[1]
this.setbyaddr(r,i())}},t.prototype.capture=function(){this.patchPlaceholders()
var t=function(t,e,n){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,n).buffer
for(var r=new Uint16Array(n);e<n;e++)r[e]=t[e]
return r.buffer}return null}(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}},t}(),Ur=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e}(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Mr,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Vr
r(this,t),this.constants=e,this.heap=n,this._opcode=new Pr(this.heap)}return t.prototype.opcode=function(t){return this._opcode.offset=t,this._opcode},t}())
var Hr={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
function zr(t,n){var r=t.getSelf(),i=n.capture(),o=i.positional.at(0).value()
return"function"!=typeof o&&function(t,n){var r=function(t){var n="",r=void 0,i=void 0
if(null==t)return n
"parent"in t&&"property"in t?(r=t.parent.value(),i=t.property):"_parentValue"in t&&"_propertyKey"in t&&(r=t._parentValue,i=t._propertyKey)
void 0!==i&&(n+="('"+i+"' on "+function(t){var n=void 0===t?"undefined":e(t)
if(null==t)return n
if("number"===n||"boolean"===n)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}(r)+") ")
return n}(n)
throw new Error("You tried to create an action with the {{action}} helper, but the first argument "+r+"was "+(void 0===t?"undefined":e(t))+" instead of a function.")}(o,i.positional.at(0)),new mr(function(){var t=i.positional.value()
t.shift(),t.push.apply(t,arguments),o.apply(r&&r.value(),t)})}function Gr(t){return t[0]?t[1]:t[2]}var Yr=function(){function t(e){r(this,t),this.resolver=e}return t.prototype.getComponentDefinition=function(t){var e=this.resolver.resolve(t)
return h(!!e,"Couldn't find a template for "+t),e},t.prototype.getCapabilities=function(t){var e=this.getComponentDefinition(t),n=e.manager,r=e.state
return n.getCapabilities(r)},t.prototype.getLayout=function(t){var e=this.getComponentDefinition(t),n=e.manager.getLayout(e,this.resolver)
return{compile:function(){return n.handle},symbolTable:n.symbolTable}},t.prototype.lookupHelper=function(t,e){return this.resolver.lookupHelper(t,e)},t.prototype.lookupModifier=function(t,e){return this.resolver.lookupModifier(t,e)},t.prototype.lookupComponentDefinition=function(t,e){return this.resolver.lookupComponentHandle(t,e)},t.prototype.lookupPartial=function(t,e){return this.resolver.lookupPartial(t,e)},t}(),Wr=function(){function t(e){r(this,t),this.resolver=e}return t.prototype.getTemplateIterator=function(){var t=n(regeneratorRuntime.mark(function t(e,n,r,i,o){var s,a,u,p,c,h
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=new Dr(e),a=new Ur(new jr(s)),u=new Pt,p=new Yr(s),c={program:a,macros:u,resolver:p,Builder:Yt},s.setCompileOptions(c),s.registerTemplate("main",Hr),s.registerInternalHelper("action",zr),s.registerHelper("if",Gr),h=Qn(Hr).create(c),t.abrupt("return",Promise.resolve(h.renderLayout({env:n,builder:r,dynamicScope:i,self:o})))
case 11:case"end":return t.stop()}},t,this)}))
return function(e,n,r,i,o){return t.apply(this,arguments)}}(),t}(),Xr=function(){function t(e){var n=e.element,i=e.nextSibling,o=void 0===i?null:i
r(this,t),this.cursor={element:n,nextSibling:o}}return t.prototype.getBuilder=function(t){return function(t,e){return Dn.forInitialRender(t,e)}(t,this.cursor)},t}(),qr=(function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}o(e,t),e.prototype.getBuilder=function(t){return function(t,e){return nr.forInitialRender(t,e)}(t,this.cursor)}}(Xr),function(){function t(){r(this,t)}return t.prototype.render=function(t){var e=void 0
do{e=t.next()}while(!e.done)
this.result=e.value},t.prototype.rerender=function(){if(!this.result)throw new Error("Cannot re-render before initial render has completed")
this.result.rerender()},t}())
function Kr(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function Jr(t){var e=t.type,n=function(t){var e=[]
t.rootName&&e.push(t.rootName)
t.collection&&e.push(t.collection)
t.namespace&&e.push(t.namespace)
t.name&&e.push(t.name)
if(e.length>0){var n=e.join("/")
return Kr(t)&&(n="/"+n),n}}(t)
return n?e+":"+n:e}function $r(t){var e={}
if(t.indexOf(":")>-1){var n=t.split(":"),r=n[0],i=n[1]
e.type=r
var o=void 0
0===i.indexOf("/")?(o=i.substr(1).split("/"),e.rootName=o.shift(),e.collection=o.shift()):o=i.split("/"),o.length>0&&(e.name=o.pop(),o.length>0&&(e.namespace=o.join("/")))}else e.type=t
return e}function Qr(t,e){if(!e)throw new Error("Assertion Failed: "+t)}var Zr,ti=function(){function t(e,n){r(this,t),this.config=e,this.registry=n}return t.prototype.identify=function(t,e){if(function(t){var e=t.split(":"),n=e[0],r=e[1]
return!!(n&&r&&0===r.indexOf("/")&&r.split("/").length>3)}(t))return t
var n=$r(t),r=void 0
if(e){var i=$r(e)
if(Kr(i)){Qr("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=i.rootName,n.collection=i.collection
var o=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=i.namespace,n.name=i.name,this._serializeAndVerify(n)
if(n.namespace=i.namespace?i.namespace+"/"+i.name:i.name,function(t){var e=t.namespace,n=t.collection,r=e.lastIndexOf("/-")
if(r>-1){r+=2
var i=e.indexOf("/",r)
n=e.slice(r,i>-1?i:void 0)}return n}(n)===o&&(r=this._serializeAndVerify(n)))return r
if(o&&(n.namespace+="/-"+o,r=this._serializeAndVerify(n)))return r
n.rootName=n.collection=n.namespace=void 0}else Qr('Referrer must either be "absolute" or include a `type` to determine the associated type',i.type),n.collection=this._definitiveCollection(i.type),n.namespace||(n.namespace=i.rootName),Qr("'"+i.type+"' does not have a definitive collection",n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Qr("'"+n.type+"' does not have a definitive collection",n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",r=this._serializeAndVerify(n))return r
n.namespace?(n.rootName=n.namespace,n.namespace=void 0):(n.rootName=n.name,n.name="main")}return(r=this._serializeAndVerify(n))?r:void 0},t.prototype.retrieve=function(t){return this.registry.get(t)},t.prototype.resolve=function(t,e){var n=this.identify(t,e)
if(n)return this.retrieve(n)},t.prototype._definitiveCollection=function(t){var e=this.config.types[t]
return Qr("'"+t+"' is not a recognized type",e),e.definitiveCollection},t.prototype._serializeAndVerify=function(t){var e=Jr(t)
if(this.registry.has(e))return e},t}(),ei=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
r(this,t),this._entries=e}return t.prototype.has=function(t){return t in this._entries},t.prototype.get=function(t){return this._entries[t]},t}(),ni=t(function(t,n){function r(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function i(t){return JSON.parse(JSON.stringify(t))}function o(t){var e=r(t)
return["null","undefined"].indexOf(e)>-1||["object","array","arguments","json","string"].indexOf(e)>-1&&("string"===e?0===t.length:0===Object.getOwnPropertyNames(t).length||0===t.length)}function s(t){return"object"===r(t)}function a(t,e,n,r){void 0===n&&(n=!1),void 0===r&&(r=!0)
var u=r?i(t):t,p={}
for(var c in u)if(!1!==u.hasOwnProperty(c)){if(s(u[c])&&n){var h=Array.from(arguments).slice().slice(1),l=a.apply(this,[u[c]].concat(h))
o(l)||(u[c]=l)}var f=e(c,u[c])
if(Array.isArray(f)&&2===f.length)p[f[0]]=f[1]
else if(!o(f))throw new Error("It looks like you might have been trying to construct a new object, but you returned something other than an array that looks like [key, value]. You returned "+f)}return p}function u(t,e){for(var n=e.split("."),r=t,i=!0,o=[];i&&n.length>0;){var s=n.shift()
r[s]?(o.push(s),r=r[s]):i=!1}return{exists:i,existingPath:o.join("."),finalValidProperty:r}}function p(t,e,n,r){void 0===n&&(n=!1),void 0===r&&(r=!0)
var o="UpperFirst"===e,s=r?i(t):t,u=o?/[a-z]/:/[A-z]/
return a(s,function(t,e){var n=[t,e]
return"string"!=typeof t?n:null===t.charAt(0).match(u)?n:[o?c(t):h(t),e]},n)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return t.charAt(0).toLowerCase()+t.slice(1)}function l(t){if(!s(t))throw new Error("'obj' was not an object. Was "+r(t))
return Object.keys(t).map(function(e){return t[e]})}function f(t,e){return-1!==l(e).indexOf(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.toType=r,n.round=function(t,e){return void 0===e&&(e=2),Number(Math.round(Number(t+"e"+e))+"e-"+e)},n.clone=i,n.isEmpty=o,n.isNotEmpty=function(t){return!o(t)},n.wrapObjectWithProperty=function(t,e,n){void 0===n&&(n=!0)
var r={},o=n?i(t):t
return r[e]=o,r},n.isObject=s,n.traverseObject=a,n.nestedPropertyDetails=u,n.nestedPropertyTest=function(t,e,n){var r=u(t,e)
return!!r.exists&&!!n(r.finalValidProperty)},n.nestedPropertyExists=function(t,e){return u(t,e).exists},n.changePropsInitialCase=p,n.firstCharToUpper=c,n.firstCharToLower=h,n.convertPropKeysForAsp=function(t){return p(t,"UpperFirst",!0)},n.convertPropKeysForJs=function(t){return p(t,"lowerFirst",!0)},n.valuesArrayFromObject=l,n.objectContainsValue=f,n.objectKeyForValue=function(t,e){return!!f(t,e)&&Object.keys(e).reduce(function(n,r){return e[r]===t&&(n=r),n},"")},n.forceArray=function(t){return-1!=["null","undefined"].indexOf(r(t))?[]:"array"!==r(t)?[t]:t}
var d=function(){var t=[],n=[],r=!0
return function(i,o){if("object"===(void 0===o?"undefined":e(o))&&null!==o){r&&(i="__BASE_OBJECT__",r=!1)
var s=t.indexOf(o)
if(-1!==s)return"[circular reference of "+n[s]+"]"
t.push(o),n.push(i)}return o}}
n.stringify=function(t,e){void 0===e&&(e={})
var n=Object.assign({tabLength:2,stripQuotes:!1},e),r=n.tabLength,i=n.stripQuotes,o=JSON.stringify(t,d(),r)
return i&&(o=o.replace(/"(.*?)": /g,"$1: ")),o},n.mediaWidth=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},n.mediaHeight=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)}});(Zr=ni)&&Zr.__esModule&&Object.prototype.hasOwnProperty.call(Zr,"default")&&Zr.default
var ri=ni.nestedPropertyDetails,ii=Object.freeze({english:{button:{invoke_file_picker:"Choose a file",submit:"Submit"},label:{email:"Email Address",first_name:"First Name"},message:{upload_failure:"Something went wrong, please try again later.",uploading:"Uploading..."},paragraph:{no_email_consequences:"If you do not provide an email address, we can not send you a link when your video is done processing.",no_name_consequences:"If you do not provide your name, we cannot personalize your video.",video_finished_uploading:"Your video has uploaded!"}},spanish:{button:{invoke_file_picker:"Escoge un archivo",submit:"Entregar"},label:{email:"Dirección de correo electrónico",first_name:"Nombre de pila"},message:{upload_failure:"Algo salió mal. Inténtalo de nuevo más tarde.",uploading:"Cargando..."},paragraph:{no_email_consequences:"Si no proporciona una dirección de correo electrónico, no podemos enviarle un enlace cuando finalice el procesamiento de su video.",no_name_consequences:"Si no proporciona su nombre, no podemos personalizar su video.",video_finished_uploading:"Tu video ha sido subido"}}}),oi="english"
function si(t){var e=[].concat(t)[0]
return function(t,e){var n=ii[t],r=ri(n,e),i=r.exists,o=(r.existingPath,r.finalValidProperty)
return i?o:(console.warn("No i18n string could be found for "+e),e)}(oi,e)}var ai=function(t,n,r,i){var o,s=arguments.length,a=s<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,r):i
if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,r,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(n,r,a):o(n,r))||a)
return s>3&&a&&Object.defineProperty(n,r,a),a},ui=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},pi=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.message=si("message.uploading"),n}return o(e,t),e.prototype.didInsertElement=function(){var t=this
this.uploadVideo().then(this.submitData).then(this.args.onComplete).catch(function(){t.message=si("message.upload_failure")})},e.prototype.uploadVideo=function(){var t=this.args,e=t.uploadUrl,n=t.file,r=new FormData
return r.append("video",n),window.fetch(e,{method:"POST",body:r})},e.prototype.submitData=function(t){return ui(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,r,i,o
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.args,r=n.name,i=n.email,n.submitUrl,e.next=3,t.json()
case 3:return o=e.sent.videoUrl,e.abrupt("return",window.fetch(this.args.submitUrl,{method:"POST",body:JSON.stringify({name:r,email:i,videoUrl:o})}))
case 5:case"end":return e.stop()}},e,this)}))},e}(it)
ai([J],pi.prototype,"message",void 0)
var ci=function(t){function e(){return r(this,e),s(this,t.apply(this,arguments))}return o(e,t),e.prototype.fileChanged=function(t){var e=t.target.files[0]
this.args.onFileChosen(e)},e.prototype.invokeFileInput=function(){this.bounds.firstNode.click()},e}(it),hi=function(t,n,r,i){var o,s=arguments.length,a=s<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,r):i
if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,r,i)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(n,r,a):o(n,r))||a)
return s>3&&a&&Object.defineProperty(n,r,a),a},li=function(t){function e(){r(this,e)
var n=s(this,t.apply(this,arguments))
return n.name="",n.email="",n.steps={},n}return o(e,t),e.prototype.didInsertElement=function(){var t=this
setTimeout(function(){var e
t.uploadUrl=t.bounds.firstNode.dataset.uploadEndpoint,t.submitUrl=t.bounds.firstNode.dataset.submitEndpoint,e=t.bounds.firstNode.dataset.language||"english",ii[e.toLowerCase()]?oi=e.toLowerCase():console.error("No lookup file for "+e),t.setStep("one")},0)},e.prototype.setStep=function(t){var e={}
e[t]=!0,this.steps=e},e.prototype.handleFileChosen=function(t){this.file=t,this.setStep("two")},e.prototype.nameChanged=function(t){this.name=t.target.value},e.prototype.emailChanged=function(t){this.email=t.target.value},e.prototype.submitData=function(){this.setStep("three")},e.prototype.handleDataUploaded=function(){this.setStep("four")},i(e,[{key:"noName",get:function(){return""===this.name}},{key:"noEmail",get:function(){return""===this.email}}]),e}(it)
hi([J],li.prototype,"name",void 0),hi([J],li.prototype,"email",void 0),hi([J],li.prototype,"steps",void 0),hi([J("name")],li.prototype,"noName",null),hi([J("email")],li.prototype,"noEmail",null)
var fi={"component:/video-submission-component/components/DataUploader":pi,"template:/video-submission-component/components/DataUploader":{id:"tuZabpr1",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","message message-data-uploader"],[8],[1,[20,"message"],false],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/DataUploader"}},"component:/video-submission-component/components/FileChooser":ci,"template:/video-submission-component/components/FileChooser":{id:"9HHohVcD",block:'{"symbols":["&attrs","&default"],"statements":[[7,"input"],[10,"style","display:none"],[10,"type","file"],[11,"onchange",[26,"action",[[22,["fileChanged"]]],null],null],[12,1],[8],[9],[0,"\\n"],[6,"button"],[10,"class","choose-file-button"],[10,"type","button"],[11,"onclick",[26,"action",[[22,["invokeFileInput"]]],null],null],[8],[13,2],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/FileChooser"}},"component:/video-submission-component/components/VideoSubmissionComponent":li,"template:/video-submission-component/components/VideoSubmissionComponent":{id:"XiFFynAq",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","video-submission"],[8],[0,"\\n"],[4,"if",[[22,["steps","one"]]],null,{"statements":[[0,"    "],[5,"FileChooser",[[10,"accept","video/*"]],[["@onFileChosen"],[[26,"action",[[22,["handleFileChosen"]]],null]]],{"statements":[[0,"\\n      "],[1,[26,"i18n",["button.invoke_file_picker"],null],false],[0,"\\n    "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","two"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","field field-name"],[8],[0,"\\n      "],[6,"label"],[10,"for","name"],[8],[1,[26,"i18n",["label.first_name"],null],false],[9],[0,"\\n      "],[6,"input"],[10,"type","text"],[10,"id","name"],[11,"oninput",[26,"action",[[22,["nameChanged"]]],null],null],[11,"value",[20,"name"],null],[8],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field field-email"],[8],[0,"\\n      "],[6,"label"],[10,"for","email"],[8],[1,[26,"i18n",["label.email"],null],false],[9],[0,"\\n      "],[6,"input"],[10,"type","text"],[10,"id","email"],[11,"oninput",[26,"action",[[22,["emailChanged"]]],null],null],[11,"value",[20,"email"],null],[8],[9],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[22,["noName"]]],null,{"statements":[[0,"      "],[6,"p"],[10,"class","info info-no-name"],[8],[0,"\\n        "],[1,[26,"i18n",["paragraph.no_name_consequences"],null],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[22,["noEmail"]]],null,{"statements":[[0,"      "],[6,"p"],[10,"class","info info-no-email"],[8],[0,"\\n        "],[1,[26,"i18n",["paragraph.no_email_consequences"],null],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[6,"div"],[10,"class","field field-submit-data"],[8],[0,"\\n      "],[6,"button"],[10,"class","submit-data-button"],[10,"type","button"],[11,"onclick",[26,"action",[[22,["submitData"]]],null],null],[8],[1,[26,"i18n",["button.submit"],null],false],[9],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","three"]]],null,{"statements":[[0,"    "],[5,"DataUploader",[],[["@name","@email","@file","@onComplete","@uploadUrl","@submitUrl"],[[20,"name"],[20,"email"],[20,"file"],[26,"action",[[22,["handleDataUploaded"]]],null],[20,"uploadUrl"],[20,"submitUrl"]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","four"]]],null,{"statements":[[0,"    "],[6,"p"],[10,"class","message message-finished-uploading"],[8],[1,[26,"i18n",["paragraph.video_finished_uploading"],null],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/VideoSubmissionComponent"}},"helper:/video-submission-component/components/i18n":si},di={app:{name:"video-submission-component",rootName:"video-submission-component"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}},mi=new(function(t){function e(){r(this,e)
var n=new ei(fi),i=new ti(di,n),o=document.body
return s(this,t.call(this,{builder:new Xr({element:o,nextSibling:null}),loader:new Wr(i),renderer:new qr,resolver:i,rootName:di.app.rootName}))}return o(e,t),e}(Or)),yi=document.getElementById("app")
nt=function(){mi.scheduleRerender()},mi.registerInitializer({initialize:function(t){t.register("component-manager:/"+mi.rootName+"/component-managers/main",gr)}}),mi.renderComponent("VideoSubmissionComponent",yi,null),mi.boot(),function(t,e){for(var n in e)kr(t,n,e[n])}(mi,{"video-submission":"VideoSubmissionComponent"})})
