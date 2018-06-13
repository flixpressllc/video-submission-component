(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unreachable"
return new Error(t)}function e(t,e){if(!t)throw new Error(e||"assertion failure")}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function i(r,o){try{var s=e[r](o),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)})
t(a)}("next")})}},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},u=Object.keys
function p(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]
if(null!==i&&"object"===(void 0===i?"undefined":n(i)))for(var r=u(i),o=0;o<r.length;o++){var s=r[o]
t[s]=i[s]}}return t}var c=0
function h(t){return t._guid=++c}function l(){return Object.create(null)}var f=function(){function t(){r(this,t),this.stack=[],this.current=null}return t.prototype.push=function(t){this.current=t,this.stack.push(t)},t.prototype.pop=function(){var t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t},t.prototype.isEmpty=function(){return 0===this.stack.length},o(t,[{key:"size",get:function(){return this.stack.length}}]),t}(),d=function(){function t(){r(this,t),this.clear()}return t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.clear=function(){this._head=this._tail=null},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t.next},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=e.next},t.prototype.insertBefore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)},t.prototype.append=function(t){var e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t},t.prototype.remove=function(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t},t}(),m=function(){function t(e,n){r(this,t),this._head=e,this._tail=n}return t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=this.nextNode(e)},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t===this._tail?null:t.next},t}(),y=(new m(null,null),Object.freeze([])),v=1,g=function(){function t(){r(this,t)}return t.prototype.validate=function(t){return this.value()===t},t}()
g.id=0
var b=[],k=[],w=function(){function t(e,n){r(this,t),this.type=e,this.inner=n}return t.prototype.value=function(){return(0,b[this.type])(this.inner)},t.prototype.validate=function(t){return(0,k[this.type])(this.inner,t)},t}()
function S(t){var e=b.length
b.push(function(t){return t.value()}),k.push(function(t,e){return t.validate(e)}),t.id=e}b.push(function(){return 0}),k.push(function(t,e){return 0===e})
var _=new w(0,null)
b.push(function(){return NaN}),k.push(function(t,e){return NaN===e})
var C=new w(1,null)
b.push(function(){return A}),k.push(function(t,e){return e===A})
new w(2,null)
function E(t){return t.tag===_}function x(t){return t===_}var A=v,N=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A
r(this,e)
var i=a(this,t.call(this))
return i.revision=n,i}return s(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A
return new w(this.id,new e(t))},e.prototype.value=function(){return this.revision},e.prototype.dirty=function(){this.revision=++A},e}(g)
function O(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n].tag
if(r===C)return C
r!==_&&e.push(r)}return B(e)}function T(t){for(var e=[],n=t.head();null!==n;){var i=n.tag
if(i===C)return C
i!==_&&e.push(i),n=t.nextNode(n)}return B(e)}function D(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n]
if(r===C)return C
r!==_&&e.push(r)}return B(e)}function B(t){switch(t.length){case 0:return _
case 1:return t[0]
case 2:return R.create(t[0],t[1])
default:return M.create(t)}}S(N)
var L=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return s(e,t),e.prototype.value=function(){var t=this.lastChecked
this.lastValue
return t!==A&&(this.lastChecked=A,this.lastValue=this.compute()),this.lastValue},e.prototype.invalidate=function(){this.lastChecked=null},e}(g),R=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.first=n,o.second=i,o}return s(e,t),e.create=function(t,n){return new w(this.id,new e(t,n))},e.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},e}(L)
S(R)
var M=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.tags=n,i}return s(e,t),e.create=function(t){return new w(this.id,new e(t))},e.prototype.compute=function(){for(var t=this.tags,e=-1,n=0;n<t.length;n++){var i=t[n].value()
e=Math.max(i,e)}return e},e}(L)
S(M)
var I=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.tag=n,i.lastUpdated=v,i}return s(e,t),e.create=function(t){return new w(this.id,new e(t))},e.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},e.prototype.update=function(t){t!==this.tag&&(this.tag=t,this.lastUpdated=A,this.invalidate())},e}(L)
S(I)
var P=function(){function t(){r(this,t),this.lastRevision=null,this.lastValue=null}return t.prototype.value=function(){var t=this.tag,e=this.lastRevision,n=this.lastValue
return null!==e&&t.validate(e)||(n=this.lastValue=this.compute(),this.lastRevision=t.value()),n},t.prototype.invalidate=function(){this.lastRevision=null},t}(),F=(function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.tag=n.tag,o.reference=n,o.mapper=i,o}s(e,t),e.prototype.compute=function(){var t=this.reference
return(0,this.mapper)(t.value())}}(P),function(){function t(e){r(this,t),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return t.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},t.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var t=this.reference,e=this.lastRevision,n=t.tag
if(n.validate(e))return j
this.lastRevision=n.value()
var i=this.lastValue,r=t.value()
return r===i?j:(this.lastValue=r,r)},t.prototype.initialize=function(){var t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e},t}()),j="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
var V,U=function(){function t(e){r(this,t),this.inner=e,this.tag=_}return t.prototype.value=function(){return this.inner},t}(),H=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this,n.valueReferenceFor(i)))
return o.retained=!1,o.seen=!1,o.key=i.key,o.iterable=n,o.memo=n.memoReferenceFor(i),o}return s(e,t),e.prototype.update=function(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)},e.prototype.shouldRemove=function(){return!this.retained},e.prototype.reset=function(){this.retained=!1,this.seen=!1},e}(function t(e){r(this,t),this.next=null,this.prev=null,this.value=e}),z=function(){function t(e){r(this,t),this.iterator=null,this.map=l(),this.list=new d,this.tag=e.tag,this.iterable=e}return t.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},t.prototype.iterate=function(){var t=void 0
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t},t.prototype.has=function(t){return!!this.map[t]},t.prototype.get=function(t){return this.map[t]},t.prototype.wasSeen=function(t){var e=this.map[t]
return void 0!==e&&e.seen},t.prototype.append=function(t){var e=this.map,n=this.list,i=this.iterable,r=e[t.key]=new H(i,t)
return n.append(r),r},t.prototype.insertBefore=function(t,e){var n=this.map,i=this.list,r=this.iterable,o=n[t.key]=new H(r,t)
return o.retained=!0,i.insertBefore(o,e),o},t.prototype.move=function(t,e){var n=this.list
t.retained=!0,n.remove(t),n.insertBefore(t,e)},t.prototype.remove=function(t){this.list.remove(t),delete this.map[t.key]},t.prototype.nextNode=function(t){return this.list.nextNode(t)},t.prototype.head=function(){return this.list.head()},t}(),Y=function(){function t(e){r(this,t),this.iterator=null
var n=new z(e)
this.artifacts=n}return t.prototype.next=function(){var t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)},t}();(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(V||(V={}))
var G=function(){function t(e){var n=e.target,i=e.artifacts
r(this,t),this.target=n,this.artifacts=i,this.iterator=i.iterate(),this.current=i.head()}return t.prototype.sync=function(){for(var t=V.Append;;)switch(t){case V.Append:t=this.nextAppend()
break
case V.Prune:t=this.nextPrune()
break
case V.Done:return void this.nextDone()}},t.prototype.advanceToKey=function(t){for(var e=this.current,n=this.artifacts,i=e;null!==i&&i.key!==t;)i.seen=!0,i=n.nextNode(i)
null!==i&&(this.current=n.nextNode(i))},t.prototype.nextAppend=function(){var t=this.iterator,e=this.current,n=this.artifacts,i=t.next()
if(null===i)return this.startPrune()
var r=i.key
return null!==e&&e.key===r?this.nextRetain(i):n.has(r)?this.nextMove(i):this.nextInsert(i),V.Append},t.prototype.nextRetain=function(t){var e=this.artifacts,n=this.current;(n=n).update(t),this.current=e.nextNode(n),this.target.retain(t.key,n.value,n.memo)},t.prototype.nextMove=function(t){var e=this.current,n=this.artifacts,i=this.target,r=t.key,o=n.get(t.key)
o.update(t),n.wasSeen(t.key)?(n.move(o,e),i.move(o.key,o.value,o.memo,e?e.key:null)):this.advanceToKey(r)},t.prototype.nextInsert=function(t){var e=this.artifacts,n=this.target,i=this.current,r=e.insertBefore(t,i)
n.insert(r.key,r.value,r.memo,i?i.key:null)},t.prototype.startPrune=function(){return this.current=this.artifacts.head(),V.Prune},t.prototype.nextPrune=function(){var t=this.artifacts,e=this.target,n=this.current
if(null===n)return V.Done
var i=n
return this.current=t.nextNode(i),i.shouldRemove()?(t.remove(i),e.delete(i.key)):i.reset(),V.Prune},t.prototype.nextDone=function(){this.target.done()},t}()
function W(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
var i=e[0],r=e[1],o=e[2]
return"string"==typeof i?function(t,n,i){return X(t,n,i,e)}:o?X(i,r,o,[]):void function(t,e){var n=Symbol(e)
J(t).trackedProperties[e]=!0,void 0!==t[e]&&t[e]
Object.defineProperty(t,e,{configurable:!0,get:function(){return this[n]},set:function(t){J(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,Q()}})}(i,r)}function X(t,e,n,i){var r=J(t)
return r.trackedProperties[e]=!0,r.trackedPropertyDependencies[e]=i||[],{enumerable:!0,configurable:!1,get:n.get,set:function(){J(this).dirtyableTagFor(e).inner.dirty(),n.set.apply(this,arguments),Q()}}}var q=function(){function t(e){r(this,t),this.tags=l(),this.computedPropertyTags=l(),this.trackedProperties=e?Object.create(e.trackedProperties):l(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):l()}return t.prototype.tagFor=function(t){var e=this.tags[t]
if(e)return e
var n
return(n=this.trackedPropertyDependencies[t])?this.tags[t]=function(t,e,n){var i=[t.dirtyableTagFor(e)]
if(n&&n.length)for(var r=0;r<n.length;r++)i.push(t.tagFor(n[r]))
return D(i)}(this,t,n):this.tags[t]=N.create()},t.prototype.dirtyableTagFor=function(t){return this.trackedPropertyDependencies[t]?this.computedPropertyTags[t]||(this.computedPropertyTags[t]=N.create()):this.tags[t]||(this.tags[t]=N.create())},t}()
var K=Symbol("ember-object")
function J(t){var e=t[K]
return e&&function(t,e){return $.call(t,e)}(t,K)?e:t[K]=new q(e)}var $=Object.prototype.hasOwnProperty
var Q=function(){};(function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,o))
return s.target=n,s.key=i,s}s(e,t),e.for=function(t,n){return new e(t,n,"The property '"+n+"' on "+t+" was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")}})(Error)
function Z(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2]
return"object"===(void 0===t?"undefined":n(t))&&t?J(t).tagFor(e):_}var tt=function(){function t(e){r(this,t),this.debugName=null,this.__args__=null,Object.assign(this,e)}return t.create=function(t){return new this(t)},t.prototype.didInsertElement=function(){},t.prototype.didUpdate=function(){},t.prototype.willDestroy=function(){},t.prototype.destroy=function(){this.willDestroy()},t.prototype.toString=function(){return this.debugName+" component"},o(t,[{key:"element",get:function(){var t=this.bounds
return e(t&&t.firstNode===t.lastNode,"The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes."),t.firstNode}},{key:"args",get:function(){return this.__args__},set:function(t){this.__args__=t,J(this).dirtyableTagFor("args").inner.dirty()}}]),t}(),et={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0},nt=function(){function t(e,n,i,o){r(this,t),this.name=e,this.manager=n,this.ComponentClass=i,this.handle=o,this.state={name:e,capabilities:et,ComponentClass:i,handle:o}}return t.prototype.toJSON=function(){return{GlimmerDebug:'<component-definition name="'+this.name+'">'}},t}(),it=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
r(this,t),this._registry=e,this._resolver=n,this._lookups={},this._factoryDefinitionLookups={}}return t.prototype.factoryFor=function(t){var e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)},t.prototype.lookup=function(t){var e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
var n=this.factoryFor(t)
if(n){if(!1===this._registry.registeredOption(t,"instantiate"))return n.class
var i=n.create()
return e&&i&&(this._lookups[t]=i),i}},t.prototype.defaultInjections=function(t){return{}},t.prototype.buildInjections=function(t){for(var e=this.defaultInjections(t),n=this._registry.registeredInjections(t),i=void 0,r=0;r<n.length;r++)e[(i=n[r]).property]=this.lookup(i.source)
return e},t.prototype.buildFactory=function(t,e){var n=this.buildInjections(t)
return{class:e,create:function(t){var i=Object.assign({},n,t)
return e.create(i)}}},t}(),rt=function(){function t(e){r(this,t),this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}return t.prototype.register=function(t,e,n){this._registrations[t]=e,n&&(this._registeredOptions[t]=n)},t.prototype.registration=function(t){var e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e},t.prototype.unregister=function(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]},t.prototype.registerOption=function(t,e,n){var i=this._registeredOptions[t]
i||(i={},this._registeredOptions[t]=i),i[e]=n},t.prototype.registeredOption=function(t,e){var n=void 0,i=this.registeredOptions(t)
return i&&(n=i[e]),void 0===n&&void 0!==this._fallback&&(n=this._fallback.registeredOption(t,e)),n},t.prototype.registeredOptions=function(t){var e=this._registeredOptions[t]
if(void 0===e){var n=t.split(":")[0]
e=this._registeredOptions[n]}return e},t.prototype.unregisterOption=function(t,e){var n=this._registeredOptions[t]
n&&delete n[e]},t.prototype.registerInjection=function(t,e,n){var i=this._registeredInjections[t]
void 0===i&&(this._registeredInjections[t]=i=[]),i.push({property:e,source:n})},t.prototype.registeredInjections=function(t){var e=t.split(":")[0],n=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(n,this._registeredInjections[e]),Array.prototype.push.apply(n,this._registeredInjections[t]),n},t}(),ot="__owner__"
function st(t){return t[ot]}function at(t,e){t[ot]=e}var ut,pt=function(){function t(e){r(this,t),this._bounds=e}return o(t,[{key:"firstNode",get:function(){return this._bounds.firstNode()}},{key:"lastNode",get:function(){return this._bounds.lastNode()}}]),t}(),ct=new(function(){function t(){r(this,t),this.evaluateOpcode=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=null
return e}(82).slice()}return t.prototype.add=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"syscall"
this.evaluateOpcode[t]={syscall:"syscall"===n,evaluate:e}},t.prototype.debugBefore=function(t,e,n){return{sp:void 0,state:void 0}},t.prototype.debugAfter=function(t,e,n,i){var r=i.sp
i.state
t.stack.sp},t.prototype.evaluate=function(t,e,n){var i=this.evaluateOpcode[n]
i.syscall?i.evaluate(t,e):i.evaluate(t.inner,e)},t}()),ht=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.next=null,n.prev=null,n}return s(e,t),e}(function t(){r(this,t),h(this)});(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})(ut||(ut={}))
var lt,ft=function(t){function e(n){return r(this,e),a(this,t.call(this,n))}return s(e,t),e.create=function(t){return void 0===t?yt:null===t?vt:!0===t?gt:!1===t?bt:"number"==typeof t?new mt(t):new dt(t)},e.prototype.get=function(t){return yt},e}(U),dt=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.lengthReference=null,n}return s(e,t),e.prototype.get=function(e){if("length"===e){var n=this.lengthReference
return null===n&&(n=this.lengthReference=new mt(this.inner.length)),n}return t.prototype.get.call(this,e)},e}(ft),mt=function(t){function e(n){return r(this,e),a(this,t.call(this,n))}return s(e,t),e}(ft),yt=new mt(void 0),vt=new mt(null),gt=new mt(!0),bt=new mt(!1),kt=function(){function t(e){r(this,t),this.inner=e,this.tag=e.tag}return t.prototype.value=function(){return this.toBool(this.inner.value())},t.prototype.toBool=function(t){return!!t},t}(),wt=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.parts=n,i.tag=O(n),i}return s(e,t),e.prototype.compute=function(){for(var t=new Array,e=0;e<this.parts.length;e++){var n=this.parts[e].value()
null!=n&&(t[e]=St(n))}return t.length>0?t.join(""):null},e}(P)
function St(t){return"function"!=typeof t.toString?"":String(t)}function _t(t){return function(e){return Array.isArray(e)&&e[0]===t}}ct.add(1,function(t,e){var n=e.op1,i=t.stack,r=t.constants.resolveHandle(n)(t,i.pop())
t.loadValue(ut.v0,r)}),ct.add(4,function(t,e){var n=e.op1,i=t.referenceForSymbol(n)
t.stack.push(i)}),ct.add(2,function(t,e){var n=e.op1,i=t.stack.pop()
t.scope().bindSymbol(n,i)}),ct.add(3,function(t,e){var n=e.op1,i=t.stack.pop(),r=t.stack.pop(),o=t.stack.pop(),s=o?[i,r,o]:null
t.scope().bindBlock(n,s)}),ct.add(80,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.scope().getPartialMap()[i]
void 0===r&&(r=t.getSelf().get(i)),t.stack.push(r)}),ct.add(17,function(t,e){var n=e.op1,i=e.op2
t.pushRootScope(n,!!i)}),ct.add(5,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.stack.pop()
t.stack.push(r.get(i))}),ct.add(6,function(t,e){var n=e.op1,i=t.stack,r=t.scope().getBlock(n)
r?(i.push(r[2]),i.push(r[1]),i.push(r[0])):(i.push(null),i.push(null),i.push(null))}),ct.add(7,function(t,e){var n=e.op1,i=!!t.scope().getBlock(n)
t.stack.push(i?gt:bt)}),ct.add(8,function(t){t.stack.pop(),t.stack.pop()
var e=t.stack.pop(),n=e&&e.parameters.length
t.stack.push(n?gt:bt)}),ct.add(9,function(t,e){for(var n=e.op1,i=new Array(n),r=n;r>0;r--){i[r-1]=t.stack.pop()}t.stack.push(new wt(i))}),function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"}(lt||(lt={}))
var Ct,Et,xt=_t(lt.Get),At=_t(lt.MaybeLocal);(Et=Ct||(Ct={}))[Et.OpenComponentElement=0]="OpenComponentElement",Et[Et.DidCreateElement=1]="DidCreateElement",Et[Et.SetComponentAttrs=2]="SetComponentAttrs",Et[Et.DidRenderLayout=3]="DidRenderLayout",Et[Et.Debugger=4]="Debugger"
var Nt=lt,Ot=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
r(this,t),this.offset=e,this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.compile=function(t,e){var n=t[this.offset],i=this.names[n],r=this.funcs[i]
r(t,e)},t}(),Tt=void 0
function Dt(t,e,n){var i=t[1],r=t[2],o=t[3]
n.expr(r),o?n.dynamicAttr(i,o,e):n.dynamicAttr(i,null,e)}var Bt=void 0
var Lt=function t(){r(this,t)
var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Rt,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Mt
return t.add("if",function(t,e,n,i,r){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.toBoolean(),r.enter(1),r.jumpUnless("ELSE"),r.invokeStaticBlock(n),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("unless",function(t,e,n,i,r){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.toBoolean(),r.enter(1),r.jumpIf("ELSE"),r.invokeStaticBlock(n),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("with",function(t,e,n,i,r){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.dup(),r.toBoolean(),r.enter(2),r.jumpUnless("ELSE"),r.invokeStaticBlock(n,1),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("each",function(t,e,n,i,r){r.startLabels(),r.pushFrame(),r.returnTo("END"),e&&"key"===e[0][0]?r.expr(e[1][0]):r.pushPrimitiveReference(null),r.expr(t[0]),r.enter(2),r.putIterator(),r.jumpUnless("ELSE"),r.pushFrame(),r.returnTo("ITER"),r.dup(ut.fp,1),r.enterList("BODY"),r.label("ITER"),r.iterate("BREAK"),r.label("BODY"),r.invokeStaticBlock(n,2),r.pop(2),r.exit(),r.return(),r.label("BREAK"),r.exitList(),r.popFrame(),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("in-element",function(t,e,n,i,r){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END")
for(var o=e[0],s=e[1],a=0;a<o.length;a++){var u=o[a]
if("nextSibling"!==u&&"guid"!==u)throw new Error("SYNTAX ERROR: #in-element does not take a `"+o[0]+"` option")
r.expr(s[a])}r.expr(t[0]),r.dup(),r.enter(4),r.jumpUnless("ELSE"),r.pushRemoteElement(),r.invokeStaticBlock(n),r.popRemoteElement(),r.label("ELSE"),r.exit(),r.return(),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("-with-dynamic-vars",function(t,e,n,i,r){if(e){var o=e[0],s=e[1]
r.compileParams(s),r.pushDynamicScope(),r.bindDynamicScope(o),r.invokeStaticBlock(n),r.popDynamicScope()}else r.invokeStaticBlock(n)}),t.add("component",function(t,e,n,i,r){if("string"!=typeof t[0]||!r.staticComponentHelper(t[0],e,n)){var o=t[0],s=t.slice(1)
r.dynamicComponent(o,s,e,!0,n,i)}}),e.add("component",function(t,e,n,i){var r=e&&e[0]
if("string"==typeof r&&i.staticComponentHelper(r,n,null))return!0
var o=e[0],s=e.slice(1)
return i.dynamicComponent(o,s,n,!0,null,null),!0}),{blocks:t,inlines:e}}(),n=e.blocks,i=e.inlines
this.blocks=n,this.inlines=i},Rt=function(){function t(){r(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e,n,i,r,o){var s=this.names[t]
void 0===s?(0,this.missing)(t,e,n,i,r,o):(0,this.funcs[s])(e,n,i,r,o)},t}(),Mt=function(){function t(){r(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e){var n=t[1]
if(!Array.isArray(n))return["expr",n]
var i=void 0,r=void 0,o=void 0
if(n[0]===Nt.Helper)i=n[1],r=n[2],o=n[3]
else{if(n[0]!==Nt.Unknown)return["expr",n]
i=n[1],r=o=null}var s=this.names[i]
if(void 0===s&&this.missing){var a=(0,this.missing)(i,r,o,e)
return!1===a?["expr",n]:a}if(void 0!==s){var u=(0,this.funcs[s])(i,r,o,e)
return!1===u?["expr",n]:u}return["expr",n]},t}()
var It=function(){function t(e,n,i,o){r(this,t),this.statements=e,this.containingLayout=n,this.options=i,this.symbolTable=o,this.compiled=null,this.statementCompiler=function(){if(Tt)return Tt
var t=Tt=new Ot
t.add(Nt.Text,function(t,e){e.text(t[1])}),t.add(Nt.Comment,function(t,e){e.comment(t[1])}),t.add(Nt.CloseElement,function(t,e){e.closeElement()}),t.add(Nt.FlushElement,function(t,e){e.flushElement()}),t.add(Nt.Modifier,function(t,e){var n=e.resolver,i=e.referrer,r=t[1],o=t[2],s=t[3],a=n.lookupModifier(r,i)
if(!a)throw new Error("Compile Error "+r+" is not a modifier: Helpers may not be used in the element form.")
e.modifier(a,o,s)}),t.add(Nt.StaticAttr,function(t,e){var n=t[1],i=t[2],r=t[3]
e.staticAttr(n,r,i)}),t.add(Nt.DynamicAttr,function(t,e){Dt(t,!1,e)}),t.add(Nt.TrustingAttr,function(t,e){Dt(t,!0,e)}),t.add(Nt.OpenElement,function(t,e){e.openPrimitiveElement(t[1])}),t.add(Nt.OpenSplattedElement,function(t,e){e.setComponentAttrs(!0),e.putComponentOperations(),e.openPrimitiveElement(t[1])}),t.add(Nt.Component,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4],s=e.resolver,a=e.referrer,u=s.lookupComponentDefinition(n,a)
if(null===u)throw new Error("Compile Error: Cannot find component "+n)
var p=s.getCapabilities(u),c=[[Nt.ClientSideStatement,Ct.SetComponentAttrs,!0]].concat(i,[[Nt.ClientSideStatement,Ct.SetComponentAttrs,!1]]),h=e.inlineBlock({statements:c,parameters:y}),l=e.template(o)
if(!1===p.dynamicLayout){var f=s.getLayout(u)
e.pushComponentDefinition(u),e.invokeStaticComponent(p,f,h,null,r,!1,l&&l)}else e.pushComponentDefinition(u),e.invokeComponent(h,null,r,!1,l&&l)}),t.add(Nt.Partial,function(t,e){var n=t[1],i=t[2],r=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),e.expr(n),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(r,e.evalSymbols(),i),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),t.add(Nt.Yield,function(t,e){var n=t[1],i=t[2]
e.yield(n,i)}),t.add(Nt.AttrSplat,function(t,e){var n=t[1]
e.yield(n,[]),e.didCreateElement(ut.s0),e.setComponentAttrs(!1)}),t.add(Nt.Debugger,function(t,e){var n=t[1]
e.debugger(e.evalSymbols(),n)}),t.add(Nt.ClientSideStatement,function(t,n){e.compile(t,n)}),t.add(Nt.Append,function(t,e){var n=t[1],i=t[2]
if(!0!==(e.macros.inlines.compile(t,e)||n)){var r=xt(n),o=At(n)
i?e.guardedAppend(n,!0):r||o?e.guardedAppend(n,!1):(e.expr(n),e.primitive(!1),e.load(ut.t0),e.dynamicContent())}}),t.add(Nt.Block,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4],s=t[5],a=e.template(o),u=e.template(s),p=a&&a,c=u&&u
e.macros.blocks.compile(n,i,r,p,c,e)})
var e=new Ot(1)
return e.add(Ct.OpenComponentElement,function(t,e){e.putComponentOperations(),e.openPrimitiveElement(t[2])}),e.add(Ct.DidCreateElement,function(t,e){e.didCreateElement(ut.s0)}),e.add(Ct.SetComponentAttrs,function(t,e){e.setComponentAttrs(t[2])}),e.add(Ct.Debugger,function(){}),e.add(Ct.DidRenderLayout,function(t,e){e.didRenderLayout(ut.s0)}),t}()}return t.topLevel=function(e,n){return new t(e.statements,{block:e,referrer:n.referrer},n,{referrer:n.referrer,hasEval:e.hasEval,symbols:e.symbols})},t.prototype.compile=function(t){var e=this.compiled
if(null!==e)return e
this.compiled=-1
for(var n=this.options,i=this.statements,r=this.containingLayout,o=r.referrer,s=n.program,a=n.resolver,u=n.macros,p=n.asPartial,c=new(0,n.Builder)(s,a,o,u,r,p,t),h=0;h<i.length;h++)this.statementCompiler.compile(i[h],c)
var l=c.commit(s.heap,r.block.symbols.length)
return this.compiled=l},t}(),Pt=function(){function t(e){r(this,t),this.builder=e}return t.prototype.static=function(t,e){var n=e[0],i=e[1],r=e[2],o=e[3],s=this.builder,a=s.resolver
if(null!==t){var u=a.getCapabilities(t)
if(!1===u.dynamicLayout){var p=a.getLayout(t)
s.pushComponentDefinition(t),s.invokeStaticComponent(u,p,null,n,i,!1,r,o)}else s.pushComponentDefinition(t),s.invokeComponent(null,n,i,!1,r,o)}},t}(),Ft=function(){function t(e){r(this,t),this.buffer=e,this.typePos=0,this.size=0}return t.prototype.encode=function(t,e){if(t>255)throw new Error("Opcode type over 8-bits. Got "+t+".")
this.buffer.push(t|e|arguments.length-2<<8),this.typePos=this.buffer.length-1
for(var n=2;n<arguments.length;n++){var i=arguments[n]
if("number"==typeof i&&i>65535)throw new Error("Operand over 16-bits. Got "+i+".")
this.buffer.push(i)}this.size=this.buffer.length},t.prototype.patch=function(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e},t}(),jt=function(){function t(){r(this,t),this.labels=l(),this.targets=[]}return t.prototype.label=function(t,e){this.labels[t]=e},t.prototype.target=function(t,e){this.targets.push({at:t,target:e})},t.prototype.patch=function(t){for(var e=this.targets,n=this.labels,i=0;i<e.length;i++){var r=e[i],o=r.at,s=n[r.target]-o
t.patch(o,s)}},t}(),Vt=function(e){function i(t,n,o,s,u,p,c){r(this,i)
var h=a(this,e.call(this))
return h.program=t,h.resolver=n,h.referrer=o,h.macros=s,h.containingLayout=u,h.asPartial=p,h.stdLib=c,h.component=new Pt(h),h.expressionCompiler=function(){if(Bt)return Bt
var t=Bt=new Ot
return t.add(Nt.Unknown,function(t,e){var n=e.resolver,i=e.asPartial,r=e.referrer,o=t[1],s=n.lookupHelper(o,r)
null!==s?e.helper(s,null,null):i?e.resolveMaybeLocal(o):(e.getVariable(0),e.getProperty(o))}),t.add(Nt.Concat,function(t,e){for(var n=t[1],i=0;i<n.length;i++)e.expr(n[i])
e.concat(n.length)}),t.add(Nt.Helper,function(t,e){var n=e.resolver,i=e.referrer,r=t[1],o=t[2],s=t[3]
if("component"!==r){var a=n.lookupHelper(r,i)
if(null===a)throw new Error("Compile Error: "+r+" is not a helper")
e.helper(a,o,s)}else{var u=o[0],p=o.slice(1)
e.curryComponent(u,p,s,!0)}}),t.add(Nt.Get,function(t,e){var n=t[1],i=t[2]
e.getVariable(n)
for(var r=0;r<i.length;r++)e.getProperty(i[r])}),t.add(Nt.MaybeLocal,function(t,e){var n=t[1]
if(e.asPartial){var i=n[0]
n=n.slice(1),e.resolveMaybeLocal(i)}else e.getVariable(0)
for(var r=0;r<n.length;r++)e.getProperty(n[r])}),t.add(Nt.Undefined,function(t,e){return e.pushPrimitiveReference(void 0)}),t.add(Nt.HasBlock,function(t,e){e.hasBlock(t[1])}),t.add(Nt.HasBlockParams,function(t,e){e.hasBlockParams(t[1])}),t}(),h.labelsStack=new f,h.isComponentAttrs=!1,h.constants=t.constants,h}return s(i,e),i.prototype.label=function(t){this.labels.label(t,this.nextPos)},i.prototype.setComponentAttrs=function(t){this.isComponentAttrs=t},i.prototype.expr=function(t){Array.isArray(t)?this.expressionCompiler.compile(t,this):this.pushPrimitiveReference(t)},i.prototype.pushArgs=function(t,e){var n=this.constants.stringArray(t)
this.push(63,n,e)},i.prototype.startLabels=function(){this.labelsStack.push(new jt)},i.prototype.stopLabels=function(){this.labelsStack.pop().patch(this.encoder)},i.prototype.pushComponentDefinition=function(t){this.push(59,this.constants.handle(t))},i.prototype.pushCurriedComponent=function(){this.push(61)},i.prototype.pushDynamicComponentInstance=function(){this.push(60)},i.prototype.resolveDynamicComponent=function(t){this.push(62,this.constants.serializable(t))},i.prototype.staticComponentHelper=function(t,e,n){var i=this.resolver.lookupComponentDefinition(t,this.referrer)
if(i){var r=this.resolver.getCapabilities(i)
if(!1===r.dynamicLayout){if(e)for(var o=0;o<e.length;o+=2)e[o][0]="@"+e[o][0]
var s=this.resolver.getLayout(i)
return this.pushComponentDefinition(i),this.invokeStaticComponent(r,s,null,null,e,!1,n&&n),!0}}return!1},i.prototype.invokePartial=function(t,e,n){var i=this.constants.serializable(t),r=this.constants.stringArray(e),o=this.constants.array(n)
this.push(79,i,r,o)},i.prototype.resolveMaybeLocal=function(t){this.push(80,this.string(t))},i.prototype.debugger=function(t,e){this.push(81,this.constants.stringArray(t),this.constants.array(e))},i.prototype.text=function(t){this.push(22,this.constants.string(t))},i.prototype.openPrimitiveElement=function(t){this.push(25,this.constants.string(t))},i.prototype.openDynamicElement=function(){this.push(26)},i.prototype.flushElement=function(){this.push(30)},i.prototype.closeElement=function(){this.push(31)},i.prototype.staticAttr=function(t,e,n){var i=this.constants.string(t),r=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(n),this.push(29,i,1,r)
else{var o=this.constants.string(n)
this.push(27,i,o,r)}},i.prototype.dynamicAttr=function(t,e,n){var i=this.constants.string(t),r=e?this.constants.string(e):0
this.isComponentAttrs?this.push(29,i,!0===n?1:0,r):this.push(28,i,!0===n?1:0,r)},i.prototype.comment=function(t){var e=this.constants.string(t)
this.push(23,e)},i.prototype.modifier=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(32,this.constants.handle(t)),this.popFrame()},i.prototype.putIterator=function(){this.push(54)},i.prototype.enterList=function(t){this.reserve(52),this.labels.target(this.pos,t)},i.prototype.exitList=function(){this.push(53)},i.prototype.iterate=function(t){this.reserve(55),this.labels.target(this.pos,t)},i.prototype.setVariable=function(t){this.push(2,t)},i.prototype.setBlock=function(t){this.push(3,t)},i.prototype.getVariable=function(t){this.push(4,t)},i.prototype.getProperty=function(t){this.push(5,this.string(t))},i.prototype.getBlock=function(t){this.push(6,t)},i.prototype.hasBlock=function(t){this.push(7,t)},i.prototype.hasBlockParams=function(t){this.getBlock(t),this.resolveBlock(),this.push(8)},i.prototype.concat=function(t){this.push(9,t)},i.prototype.load=function(t){this.push(15,t)},i.prototype.fetch=function(t){this.push(16,t)},i.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut.sp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(13,t,e)},i.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(14,t)},i.prototype.returnTo=function(t){this.reserveMachine(21),this.labels.target(this.pos,t)},i.prototype.primitive=function(t){var e=0,i=void 0
switch(void 0===t?"undefined":n(t)){case"number":t%1==0?t>-1?i=t:(i=this.negative(t),e=4):(i=this.float(t),e=1)
break
case"string":i=this.string(t),e=2
break
case"boolean":i=0|t,e=3
break
case"object":i=2,e=3
break
case"undefined":i=3,e=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,i<<3|e)},i.prototype.float=function(t){return this.constants.float(t)},i.prototype.negative=function(t){return this.constants.negative(t)},i.prototype.pushPrimitiveReference=function(t){this.primitive(t),this.primitiveReference()},i.prototype.primitiveReference=function(){this.push(12)},i.prototype.helper=function(t,e,n){this.pushFrame(),this.compileArgs(e,n,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch(ut.v0)},i.prototype.bindDynamicScope=function(t){this.push(35,this.names(t))},i.prototype.enter=function(t){this.push(49,t)},i.prototype.exit=function(){this.push(50)},i.prototype.return=function(){this.pushMachine(20)},i.prototype.jump=function(t){this.reserveMachine(44),this.labels.target(this.pos,t)},i.prototype.jumpIf=function(t){this.reserve(45),this.labels.target(this.pos,t)},i.prototype.jumpUnless=function(t){this.reserve(46),this.labels.target(this.pos,t)},i.prototype.string=function(t){return this.constants.string(t)},i.prototype.names=function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n]
e[n]=this.constants.string(i)}return this.constants.array(e)},i.prototype.symbols=function(t){return this.constants.array(t)},i.prototype.inlineBlock=function(t){var e=t.parameters,n=t.statements,i={parameters:e,referrer:this.containingLayout.referrer},r={program:this.program,macros:this.macros,Builder:this.constructor,resolver:this.resolver,asPartial:this.asPartial,referrer:this.referrer}
return new It(n,this.containingLayout,r,i)},i.prototype.evalSymbols=function(){var t=this.containingLayout.block
return t.hasEval?t.symbols:null},i.prototype.compileParams=function(t){if(!t)return 0
for(var e=0;e<t.length;e++)this.expr(t[e])
return t.length},i.prototype.compileArgs=function(t,e,n,i){n&&(this.pushYieldableBlock(n.main),this.pushYieldableBlock(n.else),this.pushYieldableBlock(n.attrs))
var r=this.compileParams(t)<<4
i&&(r|=8),n&&(r|=7)
var o=y
if(e){o=e[0]
for(var s=e[1],a=0;a<s.length;a++)this.expr(s[a])}this.pushArgs(o,r)},i.prototype.invokeStaticBlock=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.symbolTable.parameters,i=n.length,r=Math.min(e,i)
if(this.pushFrame(),r){this.pushChildScope()
for(var o=0;o<r;o++)this.dup(ut.fp,e-o),this.setVariable(n[o])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),r&&this.popScope(),this.popFrame()},i.prototype.builtInGuardedAppend=function(){this.dup(),this.startLabels(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(),this.exit(),this.return(),this.stopLabels()},i.prototype.guardedAppend=function(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.stdLib?(this.primitive(!!e),this.load(ut.t0),this.expr(t),this.primitive(this.stdLib.guardedAppend),this.invokeVirtual()):(this.expr(t),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushCurriedComponent(),this.pushDynamicComponentInstance(),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.primitive(!!e),this.load(ut.t0),this.dynamicContent(),this.exit(),this.return()),this.label("END"),this.popFrame(),this.stopLabels()},i.prototype.yield=function(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()},i.prototype.populateLayout=function(t){this.push(73,t)},i.prototype.invokeComponent=function(t,e,n,i,r){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments[6]
this.fetch(ut.s0),this.dup(ut.sp,1),this.load(ut.s0),this.pushFrame()
var u={main:r,else:s,attrs:t}
this.compileArgs(e,n,u,i),this.prepareArgs(ut.s0),this.invokePreparedComponent(null!==r,function(){a?(o.pushSymbolTable(a.symbolTable),o.pushLayout(a),o.resolveLayout()):o.getComponentLayout(ut.s0),o.populateLayout(ut.s0)}),this.load(ut.s0)},i.prototype.invokeStaticComponent=function(e,n,i,r,o,s,a){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,p=n.symbolTable
if(p.hasEval||e.prepareArgs)this.invokeComponent(i,r,o,s,a,u,n)
else{this.fetch(ut.s0),this.dup(ut.sp,1),this.load(ut.s0)
var c=p.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,o,null,s)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(ut.s0,null!==a),e.createArgs&&this.popFrame(),this.registerComponentDestructor(ut.s0)
var h=[]
this.getComponentSelf(ut.s0),h.push({symbol:0,isBlock:!1})
for(var l=0;l<c.length;l++){var f=c[l]
switch(f.charAt(0)){case"&":var d=null
if("&default"===f)d=a
else if("&inverse"===f)d=u
else{if("&attrs"!==f)throw t()
d=i}d?(this.pushYieldableBlock(d),h.push({symbol:l+1,isBlock:!0})):(this.pushYieldableBlock(null),h.push({symbol:l+1,isBlock:!0}))
break
case"@":if(!o)break
var m=o[0],y=o[1],v=f
s&&(v=f.slice(1))
var g=m.indexOf(v);-1!==g&&(this.expr(y[g]),h.push({symbol:l+1,isBlock:!1}))}}this.pushRootScope(c.length+1,!!(a||u||i))
for(var b=h.length-1;b>=0;b--){var k=h[b],w=k.symbol
k.isBlock?this.setBlock(w):this.setVariable(w)}this.pushFrame(),this.invokeStatic(n),this.didRenderLayout(ut.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(ut.s0)}},i.prototype.dynamicComponent=function(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null
this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.resolveDynamicComponent(this.referrer),this.pushDynamicComponentInstance(),this.invokeComponent(null,e,n,i,r,o),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},i.prototype.isComponent=function(){this.push(57)},i.prototype.curryComponent=function(t,e,n,i){var r=this.referrer
this.pushFrame(),this.compileArgs(e,n,null,i),this.push(66),this.expr(t),this.push(58,this.constants.serializable(r)),this.popFrame(),this.fetch(ut.v0)},i.prototype.pushSymbolTable=function(t){if(t){var e=this.constants.serializable(t)
this.push(40,e)}else this.primitive(null)},i.prototype.pushBlockScope=function(){this.push(39)},i.prototype.pushYieldableBlock=function(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)},i.prototype.template=function(t){return t?this.inlineBlock(t):null},o(i,[{key:"labels",get:function(){return this.labelsStack.current}}]),i}(function(){function t(){r(this,t),this.encoder=new Ft([])}return t.prototype.push=function(t){switch(arguments.length){case 1:return this.encoder.encode(t,0)
case 2:return this.encoder.encode(t,0,arguments[1])
case 3:return this.encoder.encode(t,0,arguments[1],arguments[2])
default:return this.encoder.encode(t,0,arguments[1],arguments[2],arguments[3])}},t.prototype.pushMachine=function(t){switch(arguments.length){case 1:return this.encoder.encode(t,1024)
case 2:return this.encoder.encode(t,1024,arguments[1])
case 3:return this.encoder.encode(t,1024,arguments[1],arguments[2])
default:return this.encoder.encode(t,1024,arguments[1],arguments[2],arguments[3])}},t.prototype.commit=function(t,e){this.pushMachine(20)
for(var n=this.encoder.buffer,i=t.malloc(),r=0;r<n.length;r++){var o=n[r]
"function"==typeof o?t.pushPlaceholder(o):t.push(o)}return t.finishMalloc(i,e),i},t.prototype.reserve=function(t){this.encoder.encode(t,0,-1)},t.prototype.reserveMachine=function(t){this.encoder.encode(t,1024,-1)},t.prototype.main=function(){this.push(56,ut.s0),this.invokePreparedComponent(!1)},t.prototype.dynamicContent=function(){this.push(24)},t.prototype.beginComponentTransaction=function(){this.push(75)},t.prototype.commitComponentTransaction=function(){this.push(76)},t.prototype.pushDynamicScope=function(){this.push(36)},t.prototype.popDynamicScope=function(){this.push(37)},t.prototype.pushRemoteElement=function(){this.push(33)},t.prototype.popRemoteElement=function(){this.push(34)},t.prototype.pushRootScope=function(t,e){this.push(17,t,e?1:0)},t.prototype.pushChildScope=function(){this.push(18)},t.prototype.popScope=function(){this.push(19)},t.prototype.prepareArgs=function(t){this.push(65,t)},t.prototype.createComponent=function(t,e){var n=0|e
this.push(67,n,t)},t.prototype.registerComponentDestructor=function(t){this.push(68,t)},t.prototype.putComponentOperations=function(){this.push(69)},t.prototype.getComponentSelf=function(t){this.push(70,t)},t.prototype.getComponentTagName=function(t){this.push(71,t)},t.prototype.getComponentLayout=function(t){this.push(72,t)},t.prototype.invokeComponentLayout=function(t){this.push(74,t)},t.prototype.didCreateElement=function(t){this.push(77,t)},t.prototype.didRenderLayout=function(t){this.push(78,t)},t.prototype.pushFrame=function(){this.pushMachine(47)},t.prototype.popFrame=function(){this.pushMachine(48)},t.prototype.invokeVirtual=function(){this.pushMachine(41)},t.prototype.invokeYield=function(){this.push(43)},t.prototype.toBoolean=function(){this.push(51)},t.prototype.invokePreparedComponent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(ut.s0,t),e&&e(),this.registerComponentDestructor(ut.s0),this.getComponentSelf(ut.s0),this.invokeComponentLayout(ut.s0),this.didRenderLayout(ut.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction()},o(t,[{key:"pos",get:function(){return this.encoder.typePos}},{key:"nextPos",get:function(){return this.encoder.size}}]),t}()),Ut=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.pushBlock=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveBlock=function(){this.push(38)},e.prototype.pushLayout=function(t){t?this.pushOther(t):this.primitive(null)},e.prototype.resolveLayout=function(){this.push(38)},e.prototype.invokeStatic=function(t){this.pushOther(t),this.push(38),this.pushMachine(41)},e.prototype.pushOther=function(t){this.push(10,this.other(t))},e.prototype.other=function(t){return this.constants.other(t)},e}(Vt),Ht=(function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}s(e,t),e.prototype.pushBlock=function(t){var e=t?t.compile(this.stdLib):null
this.primitive(e)},e.prototype.resolveBlock=function(){},e.prototype.pushLayout=function(t){t?this.primitive(t.compile(this.stdLib)):this.primitive(null)},e.prototype.resolveLayout=function(){},e.prototype.invokeStatic=function(t){var e=this,n=t.compile();-1===n?this.pushMachine(42,function(){return t.compile(e.stdLib)}):this.pushMachine(42,n)}}(Vt),function(){function t(){r(this,t),this.stack=null,this.positional=new zt,this.named=new Gt,this.blocks=new Xt}return t.prototype.setup=function(t,e,n,i,r){this.stack=t
var o=this.named,s=e.length,a=t.sp-s+1
o.setup(t,a,s,e,r)
var u=a-i
this.positional.setup(t,u,i)
var p=this.blocks,c=n.length,h=u-3*c
p.setup(t,h,c,n)},t.prototype.at=function(t){return this.positional.at(t)},t.prototype.realloc=function(t){if(t>0){for(var e=this.positional,n=this.named,i=this.stack,r=e.base+t,o=e.length+n.length-1;o>=0;o--)i.copy(o+e.base,o+r)
e.base+=t,n.base+=t,i.sp+=t}},t.prototype.capture=function(){var t=0===this.positional.length?Jt:this.positional.capture(),e=0===this.named.length?Kt:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}},t.prototype.clear=function(){var t=this.stack,e=this.length
t.pop(e)},o(t,[{key:"tag",get:function(){return O([this.positional,this.named])}},{key:"base",get:function(){return this.blocks.base}},{key:"length",get:function(){return this.positional.length+this.named.length+3*this.blocks.length}}]),t}()),zt=function(){function t(){r(this,t),this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}return t.prototype.setup=function(t,e,n){this.stack=t,this.base=e,this.length=n,0===n?(this._tag=_,this._references=y):(this._tag=null,this._references=null)},t.prototype.at=function(t){var e=this.base,n=this.length,i=this.stack
return t<0||t>=n?yt:i.get(t,e)},t.prototype.capture=function(){return new Yt(this.tag,this.references)},t.prototype.prepend=function(t){var e=t.length
if(e>0){var n=this.base,i=this.length,r=this.stack
this.base=n-=e,this.length=i+e
for(var o=0;o<e;o++)r.set(t.at(o),o,n)
this._tag=null,this._references=null}},o(t,[{key:"tag",get:function(){var t=this._tag
return t||(t=this._tag=O(this.references)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.stack,n=this.base,i=this.length
t=this._references=e.sliceArray(n,n+i)}return t}}]),t}(),Yt=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
r(this,t),this.tag=e,this.references=n,this.length=i}return t.empty=function(){return new t(_,y,0)},t.prototype.at=function(t){return this.references[t]},t.prototype.value=function(){return this.references.map(this.valueOf)},t.prototype.get=function(t){var e=this.references,n=this.length
if("length"===t)return ft.create(n)
var i=parseInt(t,10)
return i<0||i>=n?yt:e[i]},t.prototype.valueOf=function(t){return t.value()},t}(),Gt=function(){function t(){r(this,t),this.base=0,this.length=0,this._references=null,this._names=y,this._atNames=y}return t.prototype.setup=function(t,e,n,i,r){this.stack=t,this.base=e,this.length=n,0===n?(this._references=y,this._names=y,this._atNames=y):(this._references=null,r?(this._names=i,this._atNames=null):(this._names=null,this._atNames=i))},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.base,i=this.stack,r=(e?this.names:this.atNames).indexOf(t)
return-1===r?yt:i.get(r,n)},t.prototype.capture=function(){return new Wt(this.tag,this.names,this.references)},t.prototype.merge=function(t){var e=t.length
if(e>0){var n=this.names,i=this.length,r=this.stack,o=t.names
Object.isFrozen(n)&&0===n.length&&(n=[])
for(var s=0;s<e;s++){var a=o[s];-1===n.indexOf(a)&&(i=n.push(a),r.push(t.references[s]))}this.length=i,this._references=null,this._names=n,this._atNames=null}},t.prototype.toSyntheticName=function(t){return t.slice(1)},t.prototype.toAtName=function(t){return"@"+t},o(t,[{key:"tag",get:function(){return O(this.references)}},{key:"names",get:function(){var t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}},{key:"atNames",get:function(){var t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.base,n=this.length,i=this.stack
t=this._references=i.sliceArray(e,e+n)}return t}}]),t}(),Wt=function(){function t(e,n,i){r(this,t),this.tag=e,this.names=n,this.references=i,this.length=n.length,this._map=null}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.references,i=e.indexOf(t)
return-1===i?yt:n[i]},t.prototype.value=function(){for(var t=this.names,e=this.references,n=l(),i=0;i<t.length;i++){n[t[i]]=e[i].value()}return n},o(t,[{key:"map",get:function(){var t=this._map
if(!t){var e=this.names,n=this.references
t=this._map=l()
for(var i=0;i<e.length;i++){t[e[i]]=n[i]}}return t}}]),t}(),Xt=function(){function t(){r(this,t),this.internalValues=null,this.internalTag=null,this.names=y,this.length=0,this.base=0}return t.prototype.setup=function(t,e,n,i){this.stack=t,this.names=i,this.base=e,this.length=n,0===n?(this.internalTag=_,this.internalValues=y):(this.internalTag=null,this.internalValues=null)},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.base,n=this.stack,i=this.names,r=i.indexOf(t)
if(-1===i.indexOf(t))return null
var o=n.get(3*r,e),s=n.get(3*r+1,e),a=n.get(3*r+2,e)
return null===a?null:[a,s,o]},t.prototype.capture=function(){return new qt(this.names,this.values)},o(t,[{key:"values",get:function(){var t=this.internalValues
if(!t){var e=this.base,n=this.length,i=this.stack
t=this.internalValues=i.sliceArray(e,e+3*n)}return t}}]),t}(),qt=function(){function t(e,n){r(this,t),this.names=e,this.values=n,this.length=e.length}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]},t}(),Kt=new Wt(_,y,y),Jt=new Yt(_,y),$t={tag:_,length:0,positional:Jt,named:Kt},Qt="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
function Zt(t){return!(!t||!t[Qt])}var te=function(){function t(e,n){r(this,t),this.inner=e,this.args=n,this[Qt]=!0}return t.prototype.unwrap=function(t){t.realloc(this.offset)
for(var e=this;;){var n=e,i=n.args,r=n.inner
if(i&&(t.positional.prepend(i.positional),t.named.merge(i.named)),!Zt(r))return r
e=r}},o(t,[{key:"offset",get:function(){var t=this.inner,e=this.args,n=e?e.positional.length:0
return Zt(t)?n+t.offset:n}}]),t}(),ee=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.create=function(t){return new e(t)},e.prototype.toBool=function(t){return Zt(t)},e}(kt)
ct.add(24,function(t){var e=t.stack.pop(),n=t.fetchValue(ut.t0),i=e.value(),r=void 0
r=n?t.elements().appendTrustingDynamicContent(i):t.elements().appendCautiousDynamicContent(i),E(e)||t.updateWith(new ne(e,r)),t.loadValue(ut.t0,null)})
var ne=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.reference=n,o.content=i,o.tag=n.tag,o}return s(e,t),e.prototype.evaluate=function(t){var e=this.content,n=this.reference
e.update(t.env,n.value())},e}(ht)
ct.add(18,function(t){return t.pushChildScope()}),ct.add(19,function(t){return t.popScope()}),ct.add(36,function(t){return t.pushDynamicScope()}),ct.add(37,function(t){return t.popDynamicScope()}),ct.add(10,function(t,e){var n=e.op1
t.stack.push(t.constants.getOther(n))}),ct.add(11,function(t,e){var n=e.op1,i=t.stack,r=n>>3
switch(7&n){case 0:i.push(r)
break
case 1:i.push(t.constants.getFloat(r))
break
case 2:i.push(t.constants.getString(r))
break
case 3:i.pushEncodedImmediate(n)
break
case 4:i.push(t.constants.getNegative(r))}}),ct.add(12,function(t){var e=t.stack
e.push(ft.create(e.pop()))}),ct.add(13,function(t,e){var n=e.op1,i=e.op2,r=t.fetchValue(n)-i
t.stack.dup(r)}),ct.add(14,function(t,e){var n=e.op1
t.stack.pop(n)}),ct.add(15,function(t,e){var n=e.op1
t.load(n)}),ct.add(16,function(t,e){var n=e.op1
t.fetch(n)}),ct.add(35,function(t,e){var n=e.op1,i=t.constants.getArray(n)
t.bindDynamicScope(i)}),ct.add(49,function(t,e){var n=e.op1
t.enter(n)}),ct.add(50,function(t){t.exit()}),ct.add(40,function(t,e){var n=e.op1
t.stack.push(t.constants.getSerializable(n))}),ct.add(39,function(t){t.stack.push(t.scope())}),ct.add(38,function(t){var e=t.stack,n=e.pop()
n?e.pushSmi(n.compile()):e.pushNull()}),ct.add(43,function(t){var e=t.stack,n=e.pop(),i=e.pop(),r=e.pop(),o=e.pop()
if(null===r)return t.pushFrame(),void t.pushScope(i)
var s=i,a=r.parameters,u=a.length
if(u>0){s=s.child()
for(var p=0;p<u;p++)s.bindSymbol(a[p],o.at(p))}t.pushFrame(),t.pushScope(s),t.call(n)}),ct.add(45,function(t,e){var n=e.op1,i=t.stack.pop()
if(E(i))i.value()&&t.goto(n)
else{var r=new F(i)
r.peek()&&t.goto(n),t.updateWith(new ie(r))}}),ct.add(46,function(t,e){var n=e.op1,i=t.stack.pop()
if(E(i))i.value()||t.goto(n)
else{var r=new F(i)
r.peek()||t.goto(n),t.updateWith(new ie(r))}}),ct.add(51,function(t){var e=t.env,n=t.stack
n.push(e.toConditionalReference(n.pop()))})
var ie=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.type="assert",i.tag=n.tag,i.cache=n,i}return s(e,t),e.prototype.evaluate=function(t){var e=this.cache
e.revalidate()!==j&&t.throw()},e}(ht),re=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.target=i,o.type="jump-if-not-modified",o.tag=n,o.lastRevision=n.value(),o}return s(e,t),e.prototype.evaluate=function(t){var e=this.tag,n=this.target,i=this.lastRevision
!t.alwaysRevalidate&&e.validate(i)&&t.goto(n)},e.prototype.didModify=function(){this.lastRevision=this.tag.value()},e}(ht),oe=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.target=n,i.type="did-modify",i.tag=_,i}return s(e,t),e.prototype.evaluate=function(){this.target.didModify()},e}(ht),se=function(){function t(e){r(this,t),this.tag=_,this.type="label",this.label=null,this.prev=null,this.next=null,h(this),this.label=e}return t.prototype.evaluate=function(){},t.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},t}()
ct.add(22,function(t,e){var n=e.op1
t.elements().appendText(t.constants.getString(n))}),ct.add(23,function(t,e){var n=e.op1
t.elements().appendComment(t.constants.getString(n))}),ct.add(25,function(t,e){var n=e.op1
t.elements().openElement(t.constants.getString(n))}),ct.add(26,function(t){var e=t.stack.pop().value()
t.elements().openElement(e)}),ct.add(33,function(t){var e=t.stack.pop(),n=t.stack.pop(),i=void 0,r=void 0,o=t.stack.pop().value()
if(E(e))i=e.value()
else{var s=new F(e)
i=s.peek(),t.updateWith(new ie(s))}if(E(n))r=n.value()
else{var a=new F(n)
r=a.peek(),t.updateWith(new ie(a))}t.elements().pushRemoteElement(i,o,r)}),ct.add(34,function(t){t.elements().popRemoteElement()}),ct.add(30,function(t){var e=t.fetchValue(ut.t0)
e&&(e.flush(t),t.loadValue(ut.t0,null)),t.elements().flushElement()}),ct.add(31,function(t){t.elements().closeElement()}),ct.add(32,function(t,e){var n=e.op1,i=t.constants.resolveHandle(n),r=t.stack.pop(),o=t.elements(),s=o.constructing,a=o.updateOperations,u=t.dynamicScope(),p=i.create(s,r,u,a)
t.env.scheduleInstallModifier(p,i)
var c=i.getDestructor(p)
c&&t.newDestroyable(c)
var h=i.getTag(p)
x(h)||t.updateWith(new ae(h,i,p))})
var ae=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this))
return s.tag=n,s.manager=i,s.modifier=o,s.type="update-modifier",s.lastUpdated=n.value(),s}return s(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.modifier,i=this.tag,r=this.lastUpdated
i.validate(r)||(t.env.scheduleUpdateModifier(n,e),this.lastUpdated=i.value())},e}(ht)
ct.add(27,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.constants.getString(i),a=r?t.constants.getString(r):null
t.elements().setStaticAttribute(o,s,a)}),ct.add(28,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.stack.pop(),a=s.value(),u=r?t.constants.getString(r):null,p=t.elements().setDynamicAttribute(o,a,!!i,u)
E(s)||t.updateWith(new ue(s,p))})
var ue=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.reference=n,o.attribute=i,o.type="patch-element",o.tag=n.tag,o.lastRevision=o.tag.value(),o}return s(e,t),e.prototype.evaluate=function(t){var e=this.attribute,n=this.reference,i=this.tag
i.validate(this.lastRevision)||(this.lastRevision=i.value(),e.update(n.value(),t.env))},e}(ht)
function pe(t,e,n){var i=t.lookupComponent(e,n)
return i}var ce=function(){function t(e,n,i,o){r(this,t),this.inner=e,this.resolver=n,this.meta=i,this.args=o,this.tag=e.tag,this.lastValue=null,this.lastDefinition=null}return t.prototype.value=function(){var t=this.inner,e=this.lastValue,n=t.value()
if(n===e)return this.lastDefinition
var i=null
if(Zt(n))i=n
else if("string"==typeof n&&n){i=pe(this.resolver,n,this.meta)}return i=this.curry(i),this.lastValue=n,this.lastDefinition=i,i},t.prototype.get=function(){return yt},t.prototype.curry=function(t){var e=this.args
return!e&&Zt(t)?t:t?new te(t,e):null},t}()
function he(t){return le(t)?"":String(t)}function le(t){return null==t||"function"!=typeof t.toString}function fe(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t&&"function"==typeof t.toHTML}function de(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t&&"number"==typeof t.nodeType}function me(t){return de(t)&&11===t.nodeType}function ye(t){return"string"==typeof t}var ve=function(){function t(e){r(this,t),this.list=e,this.tag=O(e),this.list=e}return t.prototype.value=function(){for(var t=[],e=this.list,n=0;n<e.length;n++){var i=he(e[n].value())
i&&t.push(i)}return 0===t.length?null:t.join(" ")},t}()
function ge(t){return 0|(t.dynamicLayout?1:0)|(t.dynamicTag?2:0)|(t.prepareArgs?4:0)|(t.createArgs?8:0)|(t.attributeHook?16:0)|(t.elementHook?32:0)}function be(t,e){return!!(t&e)}var ke=new Ht
ct.add(57,function(t){var e=t.stack,n=e.pop()
e.push(ee.create(n))}),ct.add(58,function(t,e){var n=e.op1,i=t.stack,r=i.pop(),o=i.pop(),s=t.constants.getSerializable(n),a=t.constants.resolver
t.loadValue(ut.v0,new ce(r,a,s,o))}),ct.add(59,function(t,e){var n=e.op1,i=t.constants.resolveHandle(n),r=i.manager,o=ge(r.getCapabilities(i.state)),s={definition:i,manager:r,capabilities:o,state:null,handle:null,table:null}
t.stack.push(s)}),ct.add(62,function(e,n){var i=n.op1,r=e.stack,o=r.pop().value(),s=e.constants.getSerializable(i)
e.loadValue(ut.t1,null)
var a=void 0
if("string"==typeof o){a=pe(e.constants.resolver,o,s)}else{if(!Zt(o))throw t()
a=o}r.push(a)}),ct.add(60,function(t){var e=t.stack,n=e.pop(),i=void 0,r=void 0
Zt(n)?r=i=null:i=ge((r=n.manager).getCapabilities(n.state)),e.push({definition:n,capabilities:i,manager:r,state:null,handle:null,table:null})}),ct.add(61,function(e,n){n.op1
var i=e.stack,r=i.pop().value(),o=void 0
if(!Zt(r))throw t()
o=r,i.push(o)}),ct.add(63,function(t,e){var n=e.op1,i=e.op2,r=t.stack,o=t.constants.getStringArray(n),s=i>>4,a=8&i,u=[]
4&i&&u.push("main"),2&i&&u.push("else"),1&i&&u.push("attrs"),ke.setup(r,o,u,s,!!a),r.push(ke)}),ct.add(66,function(t){var e=t.stack,n=e.pop().capture()
e.push(n)}),ct.add(65,function(t,e){var n=e.op1,i=t.stack,r=t.fetchValue(n),o=i.pop(),s=r.definition
Zt(s)&&(s=function(t,e,n){var i=t.definition=e.unwrap(n),r=i.manager,o=i.state
return t.manager=r,t.capabilities=ge(r.getCapabilities(o)),i}(r,s,o))
var a=s,u=a.manager,p=a.state
if(!0===be(r.capabilities,4)){var c=o.blocks.values,h=o.blocks.names,l=u.prepareArgs(p,o)
if(l){o.clear()
for(var f=0;f<c.length;f++)i.push(c[f])
for(var d=l.positional,m=l.named,y=d.length,v=0;v<y;v++)i.push(d[v])
for(var g=Object.keys(m),b=0;b<g.length;b++)i.push(m[g[b]])
o.setup(i,g,h,y,!0)}i.push(o)}else i.push(o)}),ct.add(67,function(t,e){var n=e.op1,i=e.op2,r=t.dynamicScope(),o=t.fetchValue(i),s=o.definition,a=o.manager,u=1&n,p=null
be(o.capabilities=ge(a.getCapabilities(s.state)),8)&&(p=t.stack.peek())
var c=a.create(t.env,s.state,p,r,t.getSelf(),!!u)
o.state=c
var h=a.getTag(c)
x(h)||t.updateWith(new Se(h,c,a,r))}),ct.add(68,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.state,s=r.getDestructor(o)
s&&t.newDestroyable(s)}),ct.add(75,function(t){t.beginCacheGroup(),t.elements().pushSimpleBlock()}),ct.add(69,function(t){t.loadValue(ut.t0,new we)}),ct.add(29,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.stack.pop(),a=r?t.constants.getString(r):null
t.fetchValue(ut.t0).setAttribute(o,s,!!i,a)})
var we=function(){function t(){r(this,t),this.attributes=l(),this.classes=[]}return t.prototype.setAttribute=function(t,e,n,i){var r={value:e,namespace:i,trusting:n}
"class"===t&&this.classes.push(e),this.attributes[t]=r},t.prototype.flush=function(t){for(var e in this.attributes){var n=this.attributes[e],i=n.value,r=n.namespace,o=n.trusting
"class"===e&&(i=new ve(this.classes))
var s=t.elements().setDynamicAttribute(e,i.value(),o,r)
E(i)||t.updateWith(new ue(i,s))}},t}()
ct.add(77,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.definition,o=i.state,s=r.manager,a=t.fetchValue(ut.t0)
s.didCreateElement(o,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),ct.add(70,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.definition,o=i.state,s=r.manager
t.stack.push(s.getSelf(o))}),ct.add(71,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.definition,o=i.state,s=r.manager
t.stack.push(s.getTagName(o))}),ct.add(72,function(e,n){var i=n.op1,r=e.fetchValue(i),o=r.manager,s=r.definition,a=e.constants.resolver,u=e.stack,p=r.state,c=r.capabilities,h=s.state,l=void 0
if(function(t,e){return!1===be(t,1)}(c))l=o.getLayout(h,a)
else{if(!function(t,e){return!0===be(t,1)}(c))throw t()
l=o.getDynamicLayout(p,a)}u.push(l.symbolTable),u.push(l.handle)}),ct.add(56,function(t,e){var n=e.op1,i=t.stack.pop(),r=t.stack.pop(),o=i.manager,s=ge(o.getCapabilities(i.state)),a={definition:i,manager:o,capabilities:s,state:null,handle:r.handle,table:r.symbolTable}
t.loadValue(n,a)}),ct.add(73,function(t,e){var n=e.op1,i=t.stack,r=i.pop(),o=i.pop(),s=t.fetchValue(n)
s.handle=r,s.table=o}),ct.add(74,function(t,e){var n=e.op1,i=t.stack,r=t.fetchValue(n),o=r.handle,s=r.table,a=s.symbols,u=s.hasEval,p=i.pop(),c=t.pushRootScope(a.length+1,!0)
c.bindSelf(p)
var h=t.stack.pop(),f=null
u&&(f=l())
for(var d=h.named.atNames,m=d.length-1;m>=0;m--){var y=d[m],v=a.indexOf(d[m]),g=h.named.get(y,!1);-1!==v&&c.bindSymbol(v+1,g),u&&(f[y]=g)}var b=function(t,e){var n=a.indexOf(t),i=k.get(e);-1!==n&&c.bindBlock(n+1,i),f&&(f[t]=i)},k=h.blocks
b("&attrs","attrs"),b("&inverse","else"),b("&default","main"),f&&c.bindEvalScope(f),t.call(o)}),ct.add(78,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.state,s=t.elements().popBlock()
r.didRenderLayout(o,s),t.env.didCreate(o,r),t.updateWith(new _e(r,o,s))}),ct.add(76,function(t){t.commitCacheGroup()})
var Se=function(t){function e(n,i,o,s){r(this,e)
var u=a(this,t.call(this))
return u.tag=n,u.component=i,u.manager=o,u.dynamicScope=s,u.type="update-component",u}return s(e,t),e.prototype.evaluate=function(t){var e=this.component,n=this.manager,i=this.dynamicScope
n.update(e,i)},e}(ht),_e=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this))
return s.manager=n,s.component=i,s.bounds=o,s.type="did-update-layout",s.tag=_,s}return s(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.component,i=this.bounds
e.didUpdateLayout(n,i),t.env.didUpdate(n,e)},e}(ht)
var Ce=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")},Ee=function(){function t(e,n,i){r(this,t),this.scope=e,this.locals=l()
for(var o=0;o<i.length;o++){var s=i[o],a=n[s-1],u=e.getSymbol(s)
this.locals[a]=u}}return t.prototype.get=function(t){var e=this.scope,n=this.locals,i=t.split("."),r=t.split("."),o=r[0],s=r.slice(1),a=e.getEvalScope(),u=void 0
return"this"===o?u=e.getSelf():n[o]?u=n[o]:0===o.indexOf("@")&&a[o]?u=a[o]:(u=this.scope.getSelf(),s=i),s.reduce(function(t,e){return t.get(e)},u)},t}()
ct.add(81,function(t,e){var n=e.op1,i=e.op2,r=t.constants.getStringArray(n),o=t.constants.getArray(i),s=new Ee(t.scope(),r,o)
Ce(t.getSelf().value(),function(t){return s.get(t).value()})}),ct.add(79,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants,s=t.constants.resolver,a=t.stack.pop().value(),u=o.getSerializable(n),p=o.getStringArray(i),c=o.getArray(r),h=s.lookupPartial(a,u),l=s.resolve(h).getPartial(),f=l.symbolTable,d=l.handle,m=f.symbols,y=t.scope(),v=t.pushRootScope(m.length,!1),g=y.getEvalScope()
v.bindCallerScope(y.getCallerScope()),v.bindEvalScope(g),v.bindSelf(y.getSelf())
for(var b=Object.create(y.getPartialMap()),k=0;k<c.length;k++){var w=c[k],S=p[w-1],_=y.getSymbol(w)
b[S]=_}if(g)for(var C=0;C<m.length;C++){var E=C+1,x=g[m[C]]
void 0!==x&&v.bind(E,x)}v.bindPartialMap(b),t.pushFrame(),t.call(d)})
var xe=function(){function t(e){r(this,t),this.tag=e.tag,this.artifacts=e}return t.prototype.value=function(){return!this.artifacts.isEmpty()},t}()
ct.add(54,function(t){var e=t.stack,n=e.pop(),i=e.pop(),r=t.env.iterableFor(n,i.value()),o=new Y(r)
e.push(o),e.push(new xe(o.artifacts))}),ct.add(52,function(t,e){var n=e.op1
t.enterList(n)}),ct.add(53,function(t){t.exitList()}),ct.add(55,function(t,e){var n=e.op1,i=t.stack.peek().next()
if(i){var r=t.iterate(i.memo,i.value)
t.enterItem(i.key,r)}else t.goto(n)})
var Ae=function t(e,n){r(this,t),this.element=e,this.nextSibling=n},Ne=function(){function t(e,n,i){r(this,t),this.parentNode=e,this.first=n,this.last=i}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.first},t.prototype.lastNode=function(){return this.last},t}(),Oe=function(){function t(e,n){r(this,t),this.parentNode=e,this.node=n}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.node},t.prototype.lastNode=function(){return this.node},t}()
function Te(t,e,n){return new Ne(t,e,n)}function De(t,e){return new Oe(t,e)}function Be(t,e){for(var n=t.parentElement(),i=t.firstNode(),r=t.lastNode(),o=i;o;){var s=o.nextSibling
if(n.insertBefore(o,e),o===r)return s
o=s}return null}function Le(t){for(var e=t.parentElement(),n=t.firstNode(),i=t.lastNode(),r=n;r;){var o=r.nextSibling
if(e.removeChild(r),r===i)return o
r=o}return null}var Re="http://www.w3.org/2000/svg"
function Me(t,e,n){if(!t)return e
if(!function(t,e){var n=t.createElementNS(e,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==n.childNodes.length||n.firstChild.namespaceURI!==Re}}(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):function(t,e,n,i){var r="<svg>"+n+"</svg>"
e.innerHTML=r
var o=function(t,e,n){var i=t.firstChild,r=null,o=i
for(;o;)r=o,o=o.nextSibling,e.insertBefore(r,n)
return[i,r]}(e.firstChild,t,i),s=o[0],a=o[1]
return new Ne(t,s,a)}(e,i,o,r)},e}(e)}function Ie(t,e){return t&&function(t){var e=t.createElement("div")
if(e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2===e.childNodes.length)return!1
return!0}(t)?function(t){function e(n){r(this,e)
var i=a(this,t.call(this,n))
return i.uselessComment=n.createComment(""),i}return s(e,t),e.prototype.insertHTMLBefore=function(e,n,i){if(null===i)return t.prototype.insertHTMLBefore.call(this,e,n,i)
var r=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(r=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,i)
return r&&e.removeChild(this.uselessComment),s},e}(e):e}var Pe="http://www.w3.org/2000/svg",Fe={foreignObject:1,desc:1,title:1},je=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(t){return je[t]=1})
var Ve="undefined"==typeof document?null:document
var Ue,He=function(){function t(e){r(this,t),this.document=e,this.setupUselessElement()}return t.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},t.prototype.createElement=function(t,e){var n=void 0,i=void 0
if(e?(n=e.namespaceURI===Pe||"svg"===t,i=Fe[e.tagName]):(n="svg"===t,i=!1),n&&!i){if(je[t])throw new Error("Cannot create a "+t+" inside an SVG context")
return this.document.createElementNS(Pe,t)}return this.document.createElement(t)},t.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},t.prototype.insertHTMLBefore=function(t,e,n){return function(t,e,n,i){var r=e,o=n,s=o?o.previousSibling:r.lastChild,a=void 0
if(null===i||""===i)return new Ne(r,null,null)
null===o?(r.insertAdjacentHTML("beforeend",i),a=r.lastChild):o instanceof HTMLElement?(o.insertAdjacentHTML("beforebegin",i),a=o.previousSibling):(r.insertBefore(t,o),t.insertAdjacentHTML("beforebegin",i),a=t.previousSibling,r.removeChild(t))
var u=s?s.nextSibling:r.firstChild
return new Ne(r,u,a)}(this.uselessElement,t,e,n)},t.prototype.createTextNode=function(t){return this.document.createTextNode(t)},t.prototype.createComment=function(t){return this.document.createComment(t)},t}();(function(t){var e=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.createElementNS=function(t,e){return this.document.createElementNS(t,e)},e.prototype.setAttribute=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)},e}(He)
t.TreeConstruction=e
var n=e
n=Ie(Ve,n),n=Me(Ve,n,Pe),t.DOMTreeConstruction=n})(Ue||(Ue={}))
var ze=function(t){function e(n){r(this,e)
var i=a(this,t.call(this,n))
return i.document=n,i.namespace=null,i}return s(e,t),e.prototype.setAttribute=function(t,e,n){t.setAttribute(e,n)},e.prototype.removeAttribute=function(t,e){t.removeAttribute(e)},e.prototype.insertAfter=function(t,e,n){this.insertBefore(t,e,n.nextSibling)},e}(He)
var Ye=ze
Ye=Ie(Ve,Ye)
var Ge=Ye=Me(Ve,Ye,Pe),We=Ue.DOMTreeConstruction,Xe=["javascript:","vbscript:"],qe=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],Ke=["EMBED"],Je=["href","src","background","action"],$e=["src"]
function Qe(t,e){return-1!==t.indexOf(e)}function Ze(t,e){return(null===t||Qe(qe,t))&&Qe(Je,e)}function tn(t,e){return null!==t&&(Qe(Ke,t)&&Qe($e,e))}function en(t,e){return Ze(t,e)||tn(t,e)}function nn(t,e,n,i){var r=null
if(null==i)return i
if(fe(i))return i.toHTML()
r=e?e.tagName.toUpperCase():null
var o=he(i)
if(Ze(r,n)){var s=t.protocolForURL(o)
if(Qe(Xe,s))return"unsafe:"+o}return tn(r,n)?"unsafe:"+o:o}function rn(t,e){var n,i,r,o=void 0,s=void 0
if(e in t)s=e,o="prop"
else{var a=e.toLowerCase()
a in t?(o="prop",s=a):(o="attr",s=e)}return"prop"===o&&("style"===s.toLowerCase()||(n=t.tagName,i=s,(r=on[n.toUpperCase()])&&r[i.toLowerCase()]))&&(o="attr"),{normalized:s,type:o}}var on={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
function sn(t,e){var n=t.tagName
if(t.namespaceURI===Pe)return an(n,e)
var i=rn(t,e),r=i.type,o=i.normalized
return"attr"===r?an(n,o):function(t,e){if(en(t,e))return hn
if(function(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}(t,e))return fn
if(function(t,e){return"OPTION"===t&&"selected"===e}(t,e))return dn
return cn}(n,o)}function an(t,e){return en(t,e)?ln:pn}var un=function t(e){r(this,t),this.attribute=e},pn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(t,e,n){var i=mn(e)
if(null!==i){var r=this.attribute,o=r.name,s=r.namespace
t.__setAttribute(o,i,s)}},e.prototype.update=function(t,e){var n=mn(t),i=this.attribute,r=i.element,o=i.name
null===n?r.removeAttribute(o):r.setAttribute(o,n)},e}(un),cn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(t,e,n){if(null!=e){var i=this.attribute.name
this.value=e,t.__setProperty(i,e)}},e.prototype.update=function(t,e){var n=this.attribute,i=n.element,r=n.name
this.value!==t&&(i[r]=this.value=t,null==t&&this.removeAttribute())},e.prototype.removeAttribute=function(){var t=this.attribute,e=t.element,n=t.name,i=t.namespace
i?e.removeAttributeNS(i,n):e.removeAttribute(n)},e}(un),hn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(e,n,i){var r=this.attribute,o=nn(i,r.element,r.name,n)
t.prototype.set.call(this,e,o,i)},e.prototype.update=function(e,n){var i=this.attribute,r=nn(n,i.element,i.name,e)
t.prototype.update.call(this,r,n)},e}(cn),ln=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(e,n,i){var r=this.attribute,o=nn(i,r.element,r.name,n)
t.prototype.set.call(this,e,o,i)},e.prototype.update=function(e,n){var i=this.attribute,r=nn(n,i.element,i.name,e)
t.prototype.update.call(this,r,n)},e}(pn),fn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(t,e){t.__setProperty("value",he(e))},e.prototype.update=function(t){var e=this.attribute.element,n=e.value,i=he(t)
n!==i&&(e.value=i)},e}(cn),dn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.set=function(t,e){null!=e&&!1!==e&&t.__setProperty("selected",!0)},e.prototype.update=function(t){var e=this.attribute.element
e.selected=!!t},e}(cn)
function mn(t){return!1===t||null==t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}var yn=function(){function t(e,n,i,o){r(this,t),this.slots=e,this.callerScope=n,this.evalScope=i,this.partialMap=o}return t.root=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(n+1),r=0;r<=n;r++)i[r]=yt
return new t(i,null,null,null).init({self:e})},t.sized=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=new Array(e+1),i=0;i<=e;i++)n[i]=yt
return new t(n,null,null,null)},t.prototype.init=function(t){var e=t.self
return this.slots[0]=e,this},t.prototype.getSelf=function(){return this.get(0)},t.prototype.getSymbol=function(t){return this.get(t)},t.prototype.getBlock=function(t){return this.get(t)},t.prototype.getEvalScope=function(){return this.evalScope},t.prototype.getPartialMap=function(){return this.partialMap},t.prototype.bind=function(t,e){this.set(t,e)},t.prototype.bindSelf=function(t){this.set(0,t)},t.prototype.bindSymbol=function(t,e){this.set(t,e)},t.prototype.bindBlock=function(t,e){this.set(t,e)},t.prototype.bindEvalScope=function(t){this.evalScope=t},t.prototype.bindPartialMap=function(t){this.partialMap=t},t.prototype.bindCallerScope=function(t){this.callerScope=t},t.prototype.getCallerScope=function(){return this.callerScope},t.prototype.child=function(){return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},t.prototype.get=function(t){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
return this.slots[t]},t.prototype.set=function(t,e){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
this.slots[t]=e},t}(),vn=function(){function t(){r(this,t),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return t.prototype.didCreate=function(t,e){this.createdComponents.push(t),this.createdManagers.push(e)},t.prototype.didUpdate=function(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)},t.prototype.scheduleInstallModifier=function(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)},t.prototype.scheduleUpdateModifier=function(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)},t.prototype.didDestroy=function(t){this.destructors.push(t)},t.prototype.commit=function(){for(var t=this.createdComponents,e=this.createdManagers,n=0;n<t.length;n++){var i=t[n]
e[n].didCreate(i)}for(var r=this.updatedComponents,o=this.updatedManagers,s=0;s<r.length;s++){var a=r[s]
o[s].didUpdate(a)}for(var u=this.destructors,p=0;p<u.length;p++)u[p].destroy()
for(var c=this.scheduledInstallManagers,h=this.scheduledInstallModifiers,l=0;l<c.length;l++){var f=c[l],d=h[l]
f.install(d)}for(var m=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers,v=0;v<m.length;v++){var g=m[v],b=y[v]
g.update(b)}},t}(),gn=function(){function t(e){var n=e.appendOperations,i=e.updateOperations
r(this,t),this._transaction=null,this.appendOperations=n,this.updateOperations=i}return t.prototype.toConditionalReference=function(t){return new kt(t)},t.prototype.getAppendOperations=function(){return this.appendOperations},t.prototype.getDOM=function(){return this.updateOperations},t.prototype.getIdentity=function(t){return function(t){return t._guid||h(t)}(t)+""},t.prototype.begin=function(){this._transaction=new vn},t.prototype.didCreate=function(t,e){this.transaction.didCreate(t,e)},t.prototype.didUpdate=function(t,e){this.transaction.didUpdate(t,e)},t.prototype.scheduleInstallModifier=function(t,e){this.transaction.scheduleInstallModifier(t,e)},t.prototype.scheduleUpdateModifier=function(t,e){this.transaction.scheduleUpdateModifier(t,e)},t.prototype.didDestroy=function(t){this.transaction.didDestroy(t)},t.prototype.commit=function(){var t=this.transaction
this._transaction=null,t.commit()},t.prototype.attributeFor=function(t,e,n){arguments.length>3&&void 0!==arguments[3]&&arguments[3]
return sn(t,e)},o(t,[{key:"transaction",get:function(){return this._transaction}}]),t}(),bn=(function(t){function e(n){if(r(this,e),!n){var i=window.document
n={appendOperations:new We(i),updateOperations:new ze(i)}}return a(this,t.call(this,n))}s(e,t)}(gn),function(){function t(e,n,i,o){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:-1
r(this,t),this.stack=e,this.heap=n,this.program=i,this.externs=o,this.pc=s,this.ra=a,this.currentOpSize=0}return t.prototype.pushFrame=function(){this.stack.pushSmi(this.ra),this.stack.pushSmi(this.stack.fp),this.stack.fp=this.stack.sp-1},t.prototype.popFrame=function(){this.stack.sp=this.stack.fp-1,this.ra=this.stack.getSmi(0),this.stack.fp=this.stack.getSmi(1)},t.prototype.goto=function(t){var e=this.pc+t-this.currentOpSize
this.pc=e},t.prototype.call=function(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)},t.prototype.returnTo=function(t){var e=this.pc+t-this.currentOpSize
this.ra=e},t.prototype.return=function(){this.pc=this.ra},t.prototype.nextStatement=function(){var t=this.pc,e=this.program
if(-1===t)return null
var n=this.program.opcode(t).size,i=this.currentOpSize=n
return this.pc+=i,e.opcode(t)},t.prototype.evaluateOuter=function(t,e){this.evaluateInner(t,e)},t.prototype.evaluateInner=function(t,e){t.isMachine?this.evaluateMachine(t):this.evaluateSyscall(t,e)},t.prototype.evaluateMachine=function(t){switch(t.type){case 47:return this.pushFrame()
case 48:return this.popFrame()
case 42:return this.call(t.op1)
case 41:return this.call(this.stack.popSmi())
case 44:return this.goto(t.op1)
case 20:return this.return()
case 21:return this.returnTo(t.op1)}},t.prototype.evaluateSyscall=function(t,e){ct.evaluate(e,t,t.type)},t}()),kn=function(){function t(e){r(this,t),this.trusting=e}return t.prototype.retry=function(t,e){var n=this.bounds,i=n.parentElement(),r=Le(n),o=Nn.forInitialRender(t,{element:i,nextSibling:r})
return this.trusting?o.__appendTrustingDynamicContent(e):o.__appendCautiousDynamicContent(e)},t}(),wn=function(){function t(e){r(this,t),this.inner=e,this.bounds=e.bounds}return t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.update=function(t,e){var n=this.inner=this.inner.update(t,e)
return this.bounds=n.bounds,this},t}(),Sn=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,o))
return s.bounds=n,s.lastValue=i,s}return s(e,t),e.prototype.update=function(t,e){var n=this.lastValue
if(e===n)return this
if(de(e)||fe(e))return this.retry(t,e)
var i=void 0;(i=le(e)?"":ye(e)?e:String(e))!==n&&(this.bounds.firstNode().nodeValue=this.lastValue=i)
return this},e}(kn),_n=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,o))
return s.bounds=n,s.lastValue=i,s}return s(e,t),e.prototype.update=function(t,e){return e===this.lastValue?this:this.retry(t,e)},e}(kn),Cn=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,o))
return s.bounds=n,s.lastValue=i,s}return s(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:fe(e)&&e.toHTML()===n.toHTML()?(this.lastValue=e,this):this.retry(t,e)},e}(kn),En=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,o))
return s.bounds=n,s.lastValue=i,s}return s(e,t),e.prototype.update=function(t,e){var n=this.lastValue
return e===n?this:function(t){return le(t)?"":ye(t)?t:fe(t)?t.toHTML():de(t)?t:String(t)}(e)===n?this:this.retry(t,e)},e}(kn),xn=function(){function t(e){r(this,t),this.node=e}return t.prototype.firstNode=function(){return this.node},t}(),An=function(){function t(e){r(this,t),this.node=e}return t.prototype.lastNode=function(){return this.node},t}(),Nn=function(){function t(e,n,i){r(this,t),this.constructing=null,this.operations=null,this.cursorStack=new f,this.blockStack=new f,this.pushElement(n,i),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}return t.forInitialRender=function(t,e){var n=new this(t,e.element,e.nextSibling)
return n.pushSimpleBlock(),n},t.resume=function(t,e,n){var i=new this(t,e.parentElement(),n)
return i.pushSimpleBlock(),i.pushBlockTracker(e),i},t.prototype.expectConstructing=function(t){return this.constructing},t.prototype.block=function(){return this.blockStack.current},t.prototype.popElement=function(){this.cursorStack.pop(),this.cursorStack.current},t.prototype.pushSimpleBlock=function(){return this.pushBlockTracker(new On(this.element))},t.prototype.pushUpdatableBlock=function(){return this.pushBlockTracker(new Dn(this.element))},t.prototype.pushBlockList=function(t){return this.pushBlockTracker(new Bn(this.element,t))},t.prototype.pushBlockTracker=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),e||n.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t},t.prototype.popBlock=function(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()},t.prototype.__openBlock=function(){},t.prototype.__closeBlock=function(){},t.prototype.openElement=function(t){var e=this.__openElement(t)
return this.constructing=e,e},t.prototype.__openElement=function(t){return this.dom.createElement(t,this.element)},t.prototype.flushElement=function(){var t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)},t.prototype.__flushElement=function(t,e){this.dom.insertBefore(t,e,this.nextSibling)},t.prototype.closeElement=function(){this.willCloseElement(),this.popElement()},t.prototype.pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this.__pushRemoteElement(t,e,n)},t.prototype.__pushRemoteElement=function(t,e,n){this.pushElement(t,n)
var i=new Tn(t)
this.pushBlockTracker(i,!0)},t.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},t.prototype.pushElement=function(t,e){this.cursorStack.push(new Ae(t,e))},t.prototype.didAddDestroyable=function(t){this.block().newDestroyable(t)},t.prototype.didAppendBounds=function(t){return this.block().didAppendBounds(t),t},t.prototype.didAppendNode=function(t){return this.block().didAppendNode(t),t},t.prototype.didOpenElement=function(t){return this.block().openElement(t),t},t.prototype.willCloseElement=function(){this.block().closeElement()},t.prototype.appendText=function(t){return this.didAppendNode(this.__appendText(t))},t.prototype.__appendText=function(t){var e=this.dom,n=this.element,i=this.nextSibling,r=e.createTextNode(t)
return e.insertBefore(n,r,i),r},t.prototype.__appendNode=function(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t},t.prototype.__appendFragment=function(t){var e=t.firstChild
if(e){var n=Te(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),n}return De(this.element,this.__appendComment(""))},t.prototype.__appendHTML=function(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)},t.prototype.appendTrustingDynamicContent=function(t){var e=new wn(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e},t.prototype.__appendTrustingDynamicContent=function(t){if(ye(t))return this.trustedContent(t)
if(le(t))return this.trustedContent("")
if(fe(t))return this.trustedContent(t.toHTML())
if(me(t)){var e=this.__appendFragment(t)
return new _n(e,t,!0)}if(de(t)){var n=this.__appendNode(t)
return new _n(De(this.element,n),n,!0)}return this.trustedContent(String(t))},t.prototype.appendCautiousDynamicContent=function(t){var e=new wn(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e},t.prototype.__appendCautiousDynamicContent=function(t){if(ye(t))return this.untrustedContent(t)
if(le(t))return this.untrustedContent("")
if(me(t)){var e=this.__appendFragment(t)
return new _n(e,t,!1)}if(de(t)){var n=this.__appendNode(t)
return new _n(De(this.element,n),n,!1)}if(fe(t)){var i=t.toHTML(),r=this.__appendHTML(i)
return new Cn(r,t,!1)}return this.untrustedContent(String(t))},t.prototype.trustedContent=function(t){var e=this.__appendHTML(t)
return new En(e,t,!0)},t.prototype.untrustedContent=function(t){var e=this.__appendText(t),n=De(this.element,e)
return new Sn(n,t,!1)},t.prototype.appendComment=function(t){return this.didAppendNode(this.__appendComment(t))},t.prototype.__appendComment=function(t){var e=this.dom,n=this.element,i=this.nextSibling,r=e.createComment(t)
return e.insertBefore(n,r,i),r},t.prototype.__setAttribute=function(t,e,n){this.dom.setAttribute(this.constructing,t,e,n)},t.prototype.__setProperty=function(t,e){this.constructing[t]=e},t.prototype.setStaticAttribute=function(t,e,n){this.__setAttribute(t,e,n)},t.prototype.setDynamicAttribute=function(t,e,n,i){var r=this.constructing,o=new(this.env.attributeFor(r,t,n,i))({element:r,name:t,namespace:i||null})
return o.set(this,e,this.env),o},o(t,[{key:"element",get:function(){return this.cursorStack.current.element}},{key:"nextSibling",get:function(){return this.cursorStack.current.nextSibling}}]),t}(),On=function(){function t(e){r(this,t),this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return t.prototype.destroy=function(){var t=this.destroyables
if(t&&t.length)for(var e=0;e<t.length;e++)t[e].destroy()},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){return this.first&&this.first.firstNode()},t.prototype.lastNode=function(){return this.last&&this.last.lastNode()},t.prototype.openElement=function(t){this.didAppendNode(t),this.nesting++},t.prototype.closeElement=function(){this.nesting--},t.prototype.didAppendNode=function(t){0===this.nesting&&(this.first||(this.first=new xn(t)),this.last=new An(t))},t.prototype.didAppendBounds=function(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)},t.prototype.newDestroyable=function(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)},t.prototype.finalize=function(t){this.first||t.appendComment("")},t}(),Tn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),Le(this)},e}(On),Dn=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.reset=function(t){var e=this.destroyables
if(e&&e.length)for(var n=0;n<e.length;n++)t.didDestroy(e[n])
var i=Le(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,i},e}(On),Bn=function(){function t(e,n){r(this,t),this.parent=e,this.boundList=n,this.parent=e,this.boundList=n}return t.prototype.destroy=function(){this.boundList.forEachNode(function(t){return t.destroy()})},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){var t=this.boundList.head()
return t&&t.firstNode()},t.prototype.lastNode=function(){var t=this.boundList.tail()
return t&&t.lastNode()},t.prototype.openElement=function(t){},t.prototype.closeElement=function(){},t.prototype.didAppendNode=function(t){},t.prototype.didAppendBounds=function(t){},t.prototype.newDestroyable=function(t){},t.prototype.finalize=function(t){},t}()
var Ln=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
r(this,t),this.vec=e}return t.prototype.clone=function(){return new t(this.vec.slice())},t.prototype.sliceFrom=function(e){return new t(this.vec.slice(e))},t.prototype.slice=function(e,n){return new t(this.vec.slice(e,n))},t.prototype.copy=function(t,e){this.vec[e]=this.vec[t]},t.prototype.writeRaw=function(t,e){this.vec[t]=e},t.prototype.writeSmi=function(t,e){var n
this.vec[t]=(n=e)<0?Math.abs(n)<<3|4:n<<3|0},t.prototype.getRaw=function(t){return this.vec[t]},t.prototype.getSmi=function(t){return function(t){switch(7&t){case 0:return t>>3
case 4:return-(t>>3)
default:throw new Error("unreachable")}}(this.vec[t])},t.prototype.reset=function(){this.vec.length=0},t.prototype.len=function(){return this.vec.length},t}()
var Rn=2147483648,Mn=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Ln,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
r(this,e),this.inner=t,this.js=n}return e.prototype.slice=function(t,n){return new e("number"==typeof t&&"number"==typeof n?this.inner.slice(t,n):"number"==typeof t&&void 0===n?this.inner.sliceFrom(t):this.inner.clone(),this.js.slice(t,n))},e.prototype.sliceInner=function(t,e){for(var n=[],i=t;i<e;i++)n.push(this.get(i))
return n},e.prototype.copy=function(t,e){this.inner.copy(t,e)},e.prototype.write=function(t,e){if(function(t){var e=void 0===t?"undefined":n(t)
if(null==t)return!0
switch(e){case"boolean":case"undefined":return!0
case"number":if(t%1!=0)return!1
var i=Math.abs(t)
return!(i&Rn)
default:return!1}}(e))this.inner.writeRaw(t,Pn(e))
else{var i=this.js.length
this.js.push(e),this.inner.writeRaw(t,i|Rn)}},e.prototype.writeSmi=function(t,e){this.inner.writeSmi(t,e)},e.prototype.writeImmediate=function(t,e){this.inner.writeRaw(t,e)},e.prototype.get=function(e){var n=this.inner.getRaw(e)
return n&Rn?this.js[2147483647&n]:function(e){switch(e){case 3:return!1
case 11:return!0
case 19:return null
case 27:return
default:return function(e){switch(7&e){case 0:return e>>3
case 4:return-(e>>3)
default:throw t()}}(e)}}(n)},e.prototype.getSmi=function(t){return this.inner.getSmi(t)},e.prototype.reset=function(){this.inner.reset()},o(e,[{key:"length",get:function(){return this.inner.len()}}]),e}(),In=function(){function t(e,n,i){r(this,t),this.stack=e,this.fp=n,this.sp=i}return t.empty=function(){return new this(new Mn,0,-1)},t.restore=function(t){for(var e=new Mn,n=0;n<t.length;n++)e.write(n,t[n])
return new this(e,0,t.length-1)},t.prototype.push=function(t){this.stack.write(++this.sp,t)},t.prototype.pushSmi=function(t){this.stack.writeSmi(++this.sp,t)},t.prototype.pushImmediate=function(t){this.stack.writeImmediate(++this.sp,Pn(t))},t.prototype.pushEncodedImmediate=function(t){this.stack.writeImmediate(++this.sp,t)},t.prototype.pushNull=function(){this.stack.writeImmediate(++this.sp,19)},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.stack.copy(t,++this.sp)},t.prototype.copy=function(t,e){this.stack.copy(t,e)},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.stack.get(this.sp)
return this.sp-=t,e},t.prototype.popSmi=function(){return this.stack.getSmi(this.sp--)},t.prototype.peek=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.get(this.sp-t)},t.prototype.peekSmi=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
return this.stack.getSmi(this.sp-t)},t.prototype.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.get(e+t)},t.prototype.getSmi=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fp
return this.stack.getSmi(e+t)},t.prototype.set=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.fp
this.stack.write(n+e,t)},t.prototype.slice=function(t,e){return this.stack.slice(t,e)},t.prototype.sliceArray=function(t,e){return this.stack.sliceInner(t,e)},t.prototype.capture=function(t){var e=this.sp+1,n=e-t
return this.stack.sliceInner(n,e)},t.prototype.reset=function(){this.stack.reset()},t.prototype.toArray=function(){return this.stack.sliceInner(this.fp,this.sp+1)},t}()
function Pn(e){switch(void 0===e?"undefined":n(e)){case"number":return function(t){return t<0?Math.abs(t)<<3|4:t<<3|0}(e)
case"boolean":return e?11:3
case"object":return 19
case"undefined":return 27
default:throw t()}}var Fn=function(){function t(e,n,i){var o=i.alwaysRevalidate,s=void 0!==o&&o
r(this,t),this.frameStack=new f,this.env=e,this.constants=n.constants,this.dom=e.getDOM(),this.alwaysRevalidate=s}return t.prototype.execute=function(t,e){var n=this.frameStack
for(this.try(t,e);!n.isEmpty();){var i=this.frame.nextStatement()
null!==i?i.evaluate(this):this.frameStack.pop()}},t.prototype.goto=function(t){this.frame.goto(t)},t.prototype.try=function(t,e){this.frameStack.push(new zn(t,e))},t.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},o(t,[{key:"frame",get:function(){return this.frameStack.current}}]),t}(),jn=function(t){function e(n,i,o,s){r(this,e)
var u=a(this,t.call(this))
return u.start=n,u.state=i,u.type="block",u.next=null,u.prev=null,u.children=s,u.bounds=o,u}return s(e,t),e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.evaluate=function(t){t.try(this.children,null)},e.prototype.destroy=function(){this.bounds.destroy()},e.prototype.didDestroy=function(){this.state.env.didDestroy(this.bounds)},e}(ht),Vn=function(t){function e(n,i,o,s){r(this,e)
var u=a(this,t.call(this,n,i,o,s))
return u.type="try",u.tag=u._tag=I.create(_),u}return s(e,t),e.prototype.didInitializeChildren=function(){this._tag.inner.update(T(this.children))},e.prototype.evaluate=function(t){t.try(this.children,this)},e.prototype.handleException=function(){var t=this,e=this.state,n=this.bounds,i=this.children,r=this.start,o=this.prev,s=this.next
i.clear()
var a=Nn.resume(e.env,n,n.reset(e.env)),u=Gn.resume(e,a),p=new d
u.execute(r,function(n){n.stack=In.restore(e.stack),n.updatingOpcodeStack.push(p),n.updateWith(t),n.updatingOpcodeStack.push(i)}),this.prev=o,this.next=s},e}(jn),Un=function(){function t(e,n){r(this,t),this.opcode=e,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return t.prototype.insert=function(t,e,n,i){var r=this.map,o=this.opcode,s=this.updating,a=null,u=null
a=i?(u=r[i]).bounds.firstNode():this.marker
var p=o.vmForInsertion(a),c=null,h=o.start
p.execute(h,function(i){r[t]=c=i.iterate(n,e),i.updatingOpcodeStack.push(new d),i.updateWith(c),i.updatingOpcodeStack.push(c.children)}),s.insertBefore(c,u),this.didInsert=!0},t.prototype.retain=function(t,e,n){},t.prototype.move=function(t,e,n,i){var r=this.map,o=this.updating,s=r[t],a=r[i]||null
Be(s,i?a.firstNode():this.marker),o.remove(s),o.insertBefore(s,a)},t.prototype.delete=function(t){var e=this.map,n=e[t]
n.didDestroy(),Le(n),this.updating.remove(n),delete e[t],this.didDelete=!0},t.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},t}(),Hn=function(t){function e(n,i,o,s,u){r(this,e)
var p=a(this,t.call(this,n,i,o,s))
p.type="list-block",p.map=l(),p.lastIterated=v,p.artifacts=u
var c=p._tag=I.create(_)
return p.tag=D([u.tag,c]),p}return s(e,t),e.prototype.didInitializeChildren=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(T(this.children))},e.prototype.evaluate=function(e){var n=this.artifacts,i=this.lastIterated
if(!n.tag.validate(i)){var r=this.bounds,o=e.dom,s=o.createComment("")
o.insertAfter(r.parentElement(),s,r.lastNode())
var a=new Un(this,s)
new G({target:a,artifacts:n}).sync(),this.parentElement().removeChild(s)}t.prototype.evaluate.call(this,e)},e.prototype.vmForInsertion=function(t){var e=this.bounds,n=this.state,i=Nn.forInitialRender(n.env,{element:e.parentElement(),nextSibling:t})
return Gn.resume(n,i)},e}(jn),zn=function(){function t(e,n){r(this,t),this.ops=e,this.exceptionHandler=n,this.current=e.head()}return t.prototype.goto=function(t){this.current=t},t.prototype.nextStatement=function(){var t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t},t.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},t}(),Yn=function(){function t(e,n,i,o){r(this,t),this.env=e,this.program=n,this.updating=i,this.bounds=o}return t.prototype.rerender=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1}).alwaysRevalidate,e=void 0!==t&&t,n=this.env,i=this.program,r=this.updating
new Fn(n,i,{alwaysRevalidate:e}).execute(r,this)},t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.handleException=function(){throw"this should never happen"},t.prototype.destroy=function(){this.bounds.destroy(),Le(this.bounds)},t}(),Gn=function(){function t(e,n,i,o,s){var a=this
r(this,t),this.program=e,this.env=n,this.elementStack=s,this.dynamicScopeStack=new f,this.scopeStack=new f,this.updatingOpcodeStack=new f,this.cacheGroups=new f,this.listBlockStack=new f,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=n,this.heap=e.heap,this.constants=e.constants,this.elementStack=s,this.scopeStack.push(i),this.dynamicScopeStack.push(o),this.inner=new bn(In.empty(),this.heap,e,{debugBefore:function(t){return ct.debugBefore(a,t,t.type)},debugAfter:function(t,e){ct.debugAfter(a,t,t.type,e)}})}return t.prototype.fetch=function(t){this.stack.push(this[ut[t]])},t.prototype.load=function(t){this[ut[t]]=this.stack.pop()},t.prototype.fetchValue=function(t){return this[ut[t]]},t.prototype.loadValue=function(t,e){this[ut[t]]=e},t.prototype.pushFrame=function(){this.inner.pushFrame()},t.prototype.popFrame=function(){this.inner.popFrame()},t.prototype.goto=function(t){this.inner.goto(t)},t.prototype.call=function(t){this.inner.call(t)},t.prototype.returnTo=function(t){this.inner.returnTo(t)},t.prototype.return=function(){this.inner.return()},t.initial=function(e,n,i,r,o,s,a){var u=e.heap.scopesizeof(a),p=new t(e,n,yn.root(i,u),o,s)
return p.pc=p.heap.getaddr(a),p.updatingOpcodeStack.push(new d),p},t.empty=function(e,n,i){var r={get:function(){return yt},set:function(){return yt},child:function(){return r}},o=new t(e,n,yn.root(yt,0),r,i)
return o.updatingOpcodeStack.push(new d),o},t.resume=function(e,n){return new t(e.program,e.env,e.scope,e.dynamicScope,n)},t.prototype.capture=function(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}},t.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},t.prototype.commitCacheGroup=function(){var t=new se("END"),e=this.updating(),n=this.cacheGroups.pop(),i=n?e.nextNode(n):e.head(),r=e.tail(),o=T(new m(i,r)),s=new re(o,t)
e.insertBefore(s,i),e.append(new oe(s)),e.append(t)},t.prototype.enter=function(t){var e=new d,n=this.capture(t),i=this.elements().pushUpdatableBlock(),r=new Vn(this.heap.gethandle(this.pc),n,i,e)
this.didEnter(r)},t.prototype.iterate=function(t,e){var n=this.stack
n.push(e),n.push(t)
var i=this.capture(2),r=this.elements().pushUpdatableBlock()
return new Vn(this.heap.gethandle(this.pc),i,r,new d)},t.prototype.enterItem=function(t,e){this.listBlock().map[t]=e,this.didEnter(e)},t.prototype.enterList=function(t){var e=new d,n=this.capture(0),i=this.elements().pushBlockList(e),r=this.stack.peek().artifacts,o=this.pc+t-this.currentOpSize,s=this.heap.gethandle(o),a=new Hn(s,n,i,e,r)
this.listBlockStack.push(a),this.didEnter(a)},t.prototype.didEnter=function(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)},t.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},t.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},t.prototype.updateWith=function(t){this.updating().append(t)},t.prototype.listBlock=function(){return this.listBlockStack.current},t.prototype.updating=function(){return this.updatingOpcodeStack.current},t.prototype.elements=function(){return this.elementStack},t.prototype.scope=function(){return this.scopeStack.current},t.prototype.dynamicScope=function(){return this.dynamicScopeStack.current},t.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},t.prototype.pushDynamicScope=function(){var t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t},t.prototype.pushRootScope=function(t,e){var n=yn.sized(t)
return e&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},t.prototype.pushScope=function(t){this.scopeStack.push(t)},t.prototype.popScope=function(){this.scopeStack.pop()},t.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},t.prototype.newDestroyable=function(t){this.elements().didAddDestroyable(t)},t.prototype.getSelf=function(){return this.scope().getSelf()},t.prototype.referenceForSymbol=function(t){return this.scope().getSymbol(t)},t.prototype.execute=function(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
for(var n=void 0;!(n=this.next()).done;);return n.value},t.prototype.next=function(){var t=this.env,e=this.program,n=this.updatingOpcodeStack,i=this.elementStack,r=this.inner.nextStatement(),o=void 0
return null!==r?(this.inner.evaluateOuter(r,this),o={done:!1,value:null}):(this.stack.reset(),o={done:!0,value:new Yn(t,e,n.pop(),i.popBlock())}),o},t.prototype.bindDynamicScope=function(t){for(var e=this.dynamicScope(),n=t.length-1;n>=0;n--){var i=this.constants.getString(t[n])
e.set(i,this.stack.pop())}},o(t,[{key:"stack",get:function(){return this.inner.stack},set:function(t){this.inner.stack=t}},{key:"currentOpSize",set:function(t){this.inner.currentOpSize=t},get:function(){return this.inner.currentOpSize}},{key:"pc",get:function(){return this.inner.pc},set:function(t){this.inner.pc=t}},{key:"ra",get:function(){return this.inner.ra},set:function(t){this.inner.ra=t}},{key:"fp",get:function(){return this.stack.fp},set:function(t){this.stack.fp=t}},{key:"sp",get:function(){return this.stack.sp},set:function(t){this.stack.sp=t}}]),t}(),Wn=function(){function t(e){r(this,t),this.vm=e}return t.prototype.next=function(){return this.vm.next()},t}(),Xn=0
function qn(t){var e=t.id,n=t.meta,i=t.block,r=void 0,o=e||"client-"+Xn++
return{id:o,meta:n,create:function(t,e){var s=e?p({},e,n):n
return r||(r=JSON.parse(i)),new Kn(t,{id:o,block:r,referrer:s})}}}var Kn=function(){function t(e,n){r(this,t),this.options=e,this.parsedLayout=n,this.layout=null,this.partial=null
var i=n.block
this.symbols=i.symbols,this.hasEval=i.hasEval,this.statements=i.statements,this.referrer=n.referrer,this.id=n.id||"client-"+Xn++}return t.prototype.renderLayout=function(t){var e=t.env,n=t.self,i=t.dynamicScope,r=t.args,o=void 0===r?$t:r,s=t.builder,a=this.asLayout().compile(),u=Gn.initial(this.options.program,e,n,o,i,s,a)
return new Wn(u)},t.prototype.asLayout=function(){return this.layout?this.layout:this.layout=Jn(this.parsedLayout,this.options,!1)},t.prototype.asPartial=function(){return this.partial?this.partial:this.partial=Jn(this.parsedLayout,this.options,!0)},t}()
function Jn(t,e,n){var i=t.block,r=t.referrer,o=i.hasEval,s=i.symbols,a=p({},e,{asPartial:n,referrer:r})
return new It(i.statements,t,a,{referrer:r,hasEval:o,symbols:s})}var $n=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,n,i))
return s.startingBlockDepth=o,s.candidate=null,s.injectedOmittedNode=!1,s.openBlockDepth=o-1,s}return s(e,t),e}(Ae),Qn=function(t){function e(n,i,o){r(this,e)
var s=a(this,t.call(this,n,i,o))
if(s.unmatchedAttributes=null,s.blockDepth=0,o)throw new Error("Rehydration with nextSibling not supported")
return s.candidate=s.currentCursor.element.firstChild,s}return s(e,t),e.prototype.pushElement=function(t,e){var n=this.blockDepth,i=new $n(t,e,void 0===n?0:n),r=this.currentCursor
r&&r.candidate&&(i.candidate=t.firstChild,r.candidate=t.nextSibling),this.cursorStack.push(i)},e.prototype.clearMismatch=function(t){var e=t,n=this.currentCursor
if(null!==n){var i=n.openBlockDepth
if(i>=n.startingBlockDepth)for(;e&&(!Zn(e)||ti(e)!==i);)e=this.remove(e)
else for(;null!==e;)e=this.remove(e)
n.nextSibling=e,n.candidate=null}},e.prototype.__openBlock=function(){var t=this.currentCursor
if(null!==t){var e=this.blockDepth
this.blockDepth++
var n,i=t.candidate
if(null!==i)Zn(i)&&((n=i.nodeValue.match(/^%\+b:(\d+)%$/))&&n[1]?Number(n[1]):null)===e?(t.candidate=this.remove(i),t.openBlockDepth=e):this.clearMismatch(i)}},e.prototype.__closeBlock=function(){var t=this.currentCursor
if(null!==t){var e=t.openBlockDepth
this.blockDepth--
var n=t.candidate
null!==n&&(Zn(n)&&ti(n)===e?(t.candidate=this.remove(n),t.openBlockDepth--):this.clearMismatch(n)),t.openBlockDepth===this.blockDepth&&(t.candidate=this.remove(t.nextSibling),t.openBlockDepth--)}},e.prototype.__appendNode=function(e){var n=this.candidate
return n||t.prototype.__appendNode.call(this,e)},e.prototype.__appendHTML=function(e){var n=this.markerBounds()
if(n){var i=n.firstNode(),r=n.lastNode(),o=Te(this.element,i.nextSibling,r.previousSibling)
return this.remove(i),this.remove(r),o}return t.prototype.__appendHTML.call(this,e)},e.prototype.remove=function(t){var e=t.parentNode,n=t.nextSibling
return e.removeChild(t),n},e.prototype.markerBounds=function(){var t=this.candidate
if(t&&ni(t)){for(var e=t,n=e.nextSibling;n&&!ni(n);)n=n.nextSibling
return Te(this.element,e,n)}return null},e.prototype.__appendText=function(e){var n=this.candidate
if(n){if(3===n.nodeType)return n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n
if(n&&(function(t){return 8===t.nodeType&&"%|%"===t.nodeValue}(n)||ii(n)))return this.candidate=n.nextSibling,this.remove(n),this.__appendText(e)
if(ii(n)){var i=this.remove(n)
this.candidate=i
var r=this.dom.createTextNode(e)
return this.dom.insertBefore(this.element,r,i),r}return this.clearMismatch(n),t.prototype.__appendText.call(this,e)}return t.prototype.__appendText.call(this,e)},e.prototype.__appendComment=function(e){var n=this.candidate
return n&&Zn(n)?(n.nodeValue!==e&&(n.nodeValue=e),this.candidate=n.nextSibling,n):(n&&this.clearMismatch(n),t.prototype.__appendComment.call(this,e))},e.prototype.__openElement=function(e){var n=this.candidate
if(n&&ei(n)&&function(t,e){if(t.namespaceURI===Pe)return t.tagName===e
return t.tagName===e.toUpperCase()}(n,e))return this.unmatchedAttributes=[].slice.call(n.attributes),n
if(n){if(ei(n)&&"TBODY"===n.tagName)return this.pushElement(n,null),this.currentCursor.injectedOmittedNode=!0,this.__openElement(e)
this.clearMismatch(n)}return t.prototype.__openElement.call(this,e)},e.prototype.__setAttribute=function(e,n,i){var r=this.unmatchedAttributes
if(r){var o=ri(r,e)
if(o)return o.value!==n&&(o.value=n),void r.splice(r.indexOf(o),1)}return t.prototype.__setAttribute.call(this,e,n,i)},e.prototype.__setProperty=function(e,n){var i=this.unmatchedAttributes
if(i){var r=ri(i,e)
if(r)return r.value!==n&&(r.value=n),void i.splice(i.indexOf(r),1)}return t.prototype.__setProperty.call(this,e,n)},e.prototype.__flushElement=function(e,n){var i=this.unmatchedAttributes
if(i){for(var r=0;r<i.length;r++)this.constructing.removeAttribute(i[r].name)
this.unmatchedAttributes=null}else t.prototype.__flushElement.call(this,e,n)},e.prototype.appendCautiousDynamicContent=function(e){var n=t.prototype.appendCautiousDynamicContent.call(this,e)
return n.update(this.env,e),n},e.prototype.willCloseElement=function(){var e=this.candidate,n=this.currentCursor
null!==e&&this.clearMismatch(e),n&&n.injectedOmittedNode&&this.popElement(),t.prototype.willCloseElement.call(this)},e.prototype.getMarker=function(t,e){var n=t.querySelector('script[glmr="'+e+'"]')
if(n)return n
throw new Error("Cannot find serialized cursor for `in-element`")},e.prototype.__pushRemoteElement=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=this.getMarker(t,e)
if(i.parentNode===t){var r=this.currentCursor,o=r.candidate
this.pushElement(t,n),r.candidate=o,this.candidate=this.remove(i)
var s=new Tn(t)
this.pushBlockTracker(s,!0)}},e.prototype.didAppendBounds=function(e){if(t.prototype.didAppendBounds.call(this,e),this.candidate){var n=e.lastNode()
this.candidate=n&&n.nextSibling}return e},o(e,[{key:"currentCursor",get:function(){return this.cursorStack.current}},{key:"candidate",get:function(){return this.currentCursor?this.currentCursor.candidate:null},set:function(t){this.currentCursor.candidate=t}}]),e}(Nn)
function Zn(t){return 8===t.nodeType}function ti(t){var e=t.nodeValue.match(/^%\-b:(\d+)%$/)
return e&&e[1]?Number(e[1]):null}function ei(t){return 1===t.nodeType}function ni(t){return 8===t.nodeType&&"%glmr%"===t.nodeValue}function ii(t){return 8===t.nodeType&&"% %"===t.nodeValue}function ri(t,e){for(var n=0;n<t.length;n++){var i=t[n]
if(i.name===e)return i}}var oi=function(){function t(){r(this,t)}return t.prototype.get=function(t){return ui.create(this,t)},t}(),si=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n._lastRevision=null,n._lastValue=null,n}return s(e,t),e.prototype.value=function(){var t=this.tag,e=this._lastRevision,n=this._lastValue
return e&&t.validate(e)||(n=this._lastValue=this.compute(),this._lastRevision=t.value()),n},e}(oi),ai=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.children=l(),n}return s(e,t),e.prototype.get=function(t){var e=this.children[t]
return e||(e=this.children[t]=new pi(this.inner,t)),e},e}(U),ui=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.create=function(t,e){return E(t)?new pi(t.value(),e):new ci(t,e)},e.prototype.get=function(t){return new ci(this,t)},e}(si),pi=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o._parentValue=n,o._propertyKey=i,o.tag=Z(n,i),o}return s(e,t),e.prototype.compute=function(){return this._parentValue[this._propertyKey]},e}(ui),ci=function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this)),s=n.tag,u=I.create(_)
return o._parentReference=n,o._parentObjectTag=u,o._propertyKey=i,o.tag=D([s,u]),o}return s(e,t),e.prototype.compute=function(){var t=this._parentReference,e=this._parentObjectTag,i=this._propertyKey,r=t.value()
return e.inner.update(Z(r,i)),"string"==typeof r&&"length"===i?r.length:"object"===(void 0===r?"undefined":n(r))&&r?r[i]:void 0},e}(ui),hi=function(t){function e(n){r(this,e)
var i=a(this,t.call(this))
return i.tag=N.create(),i._value=n,i}return s(e,t),e.prototype.value=function(){return this._value},e.prototype.update=function(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)},e}(oi),li=(function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}s(e,t),e.create=function(t){if(E(t)){var n=t.value()
return ft.create(n)}return new e(t)}}(kt),function(t){function e(n){r(this,e)
var i=a(this,t.call(this,void 0))
return i.name=n,i}s(e,t),e.prototype.get=function(t){throw new Error("You tried to reference {{"+t+"}} from the "+this.name+" template, which doesn't have an associated component class. Template-only components can only access args passed to them. Did you mean {{@"+t+"}}?")}}(U),function(){function t(e,n,i){r(this,t)
var o=e.ComponentClass,s=e.name
this.args=n
var a={debugName:s,args:this.namedArgsSnapshot()}
at(a,i),o&&(this.component=o.create(a))}return t.prototype.namedArgsSnapshot=function(){return Object.freeze(this.args.named.value())},o(t,[{key:"tag",get:function(){return this.args.tag}}]),t}()),fi=new ai(null),di=function(){function t(e){r(this,t),this.env=e.env}return t.create=function(e){return new t(e)},t.prototype.prepareArgs=function(t,e){return null},t.prototype.getCapabilities=function(t){return t.capabilities},t.prototype.getLayout=function(t,e){var n=t.name,i=t.handle,r=t.symbolTable
return i&&r?{handle:i,symbolTable:r}:e.compileTemplate(n,i)},t.prototype.create=function(t,e,n,i,r,o){if(e.ComponentClass){var s=st(this.env)
return new li(e,n.capture(),s)}},t.prototype.getSelf=function(t){return t?new ai(t.component):fi},t.prototype.didCreateElement=function(t,e){},t.prototype.didRenderLayout=function(t,e){t&&(t.component.bounds=new pt(e))},t.prototype.didCreate=function(t){t&&t.component.didInsertElement()},t.prototype.getTag=function(t){return t?t.tag:_},t.prototype.update=function(t,e){t&&(t.component.args=t.namedArgsSnapshot())},t.prototype.didUpdateLayout=function(){},t.prototype.didUpdate=function(t){t&&t.component.didUpdate()},t.prototype.getDestructor=function(t){return t?t.component:mi},t}(),mi={destroy:function(){}}
function yi(t,e,n){function i(){return Reflect.construct(HTMLElement,[],i)}i.prototype=Object.create(HTMLElement.prototype,{constructor:{value:i},connectedCallback:{value:function(){var e=this,i=document.createElement("span"),r=this.parentNode
r.insertBefore(i,this),r.removeChild(this),t.renderComponent(n,r,i),function t(e,n){e._rendering?requestAnimationFrame(function(){t(e,n)}):n()}(t,function(){var t=e,n=i.previousElementSibling
i.remove(),function(t,e){for(var n=t.attributes,i=0;i<n.length;i++){var r=n.item(i),o=r.name,s=r.value
e.setAttribute(o,s)}}(t,n)})}}}),window.customElements.define(e,i)}var vi=function(){function t(e,n){r(this,t),this._registry=e,this._resolver=n}return t.prototype.register=function(t,e,n){var i=this._toAbsoluteSpecifier(t)
this._registry.register(i,e,n)},t.prototype.registration=function(t){var e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)},t.prototype.unregister=function(t){var e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)},t.prototype.registerOption=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(i,e,n)},t.prototype.registeredOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(n,e)},t.prototype.registeredOptions=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)},t.prototype.unregisterOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(n,e)},t.prototype.registerInjection=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t),r=this._toAbsoluteSpecifier(n)
this._registry.registerInjection(i,e,r)},t.prototype.registeredInjections=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)},t.prototype._toAbsoluteSpecifier=function(t,e){return this._resolver.identify(t,e)},t.prototype._toAbsoluteOrTypeSpecifier=function(t){return function(t){return-1===t.indexOf(":")}(t)?t:this._toAbsoluteSpecifier(t)},t}(),gi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
r(this,t),this.bucket=e?p({},e):{}}return t.prototype.get=function(t){return this.bucket[t]},t.prototype.set=function(t,e){return this.bucket[t]=e},t.prototype.child=function(){return new t(this.bucket)},t}(),bi=function(){function t(e,n){r(this,t),this.position=0,this.array=e,this.keyFor=n}return t.prototype.isEmpty=function(){return 0===this.array.length},t.prototype.next=function(){var t=this.position,e=this.array,n=this.keyFor
if(t>=e.length)return null
var i=e[t],r=n(i,t),o=t
return this.position++,{key:r,value:i,memo:o}},t}(),ki=function(){function t(e,n,i){r(this,t),this.position=0,this.keys=e,this.values=n,this.keyFor=i}return t.prototype.isEmpty=function(){return 0===this.keys.length},t.prototype.next=function(){var t=this.position,e=this.keys,n=this.values,i=this.keyFor
if(t>=e.length)return null
var r=n[t],o=e[t],s=i(r,o)
return this.position++,{key:s,value:r,memo:o}},t}(),wi=new(function(){function t(){r(this,t)}return t.prototype.isEmpty=function(){return!0},t.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},t}()),Si=function(){function t(e,n){r(this,t),this.tag=e.tag,this.ref=e,this.keyFor=n}return t.prototype.iterate=function(){var t=this.ref,e=this.keyFor,i=t.value()
if(Array.isArray(i))return i.length>0?new bi(i,e):wi
if(null==i)return wi
if(void 0!==i.forEach){var r=[]
return i.forEach(function(t){r.push(t)}),r.length>0?new bi(r,e):wi}if("object"===(void 0===i?"undefined":n(i))){var o=Object.keys(i)
return o.length>0?new ki(o,o.map(function(t){return i[t]}),e):wi}throw new Error("Don't know how to {{#each "+i+"}}")},t.prototype.valueReferenceFor=function(t){return new hi(t.value)},t.prototype.updateValueReference=function(t,e){t.update(e.value)},t.prototype.memoReferenceFor=function(t){return new hi(t.memo)},t.prototype.updateMemoReference=function(t,e){t.update(e.memo)},t}(),_i=function(t){function e(n){r(this,e)
var i=a(this,t.call(this,{appendOperations:n.appendOperations,updateOperations:new Ge(n.document||document)}))
return at(i,st(n)),i.uselessAnchor=n.document.createElement("a"),i}return s(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new We(t.document),new e(t)},e.prototype.protocolForURL=function(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol},e.prototype.iterableFor=function(t,e){var n=void 0
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":n=function(t,e){return String(e)}
break
case"@primitive":n=function(t){return String(t)}
break
default:n=function(t){return t[e]}}return new Si(t,n)},e}(gn),Ci="object"===("undefined"==typeof document?"undefined":n(document))?document:null,Ei=function(){function t(n){r(this,t),this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=n.rootName,this.resolver=n.resolver,e(n.loader,"Must provide a Loader for preparing templates and other metadata required for a Glimmer Application."),e(n.renderer,"Must provide a Renderer to render the templates produced by the Loader."),e(n.builder,"Must provide a Builder that is responsible to building DOM."),this.document=n.document||Ci,this.loader=n.loader,this.renderer=n.renderer,this.builder=n.builder}return t.prototype.renderComponent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=this._roots,r=this._self
i.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:n}),r&&(r.update({roots:i}),this.scheduleRerender())},t.prototype.boot=function(){var t=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.initialize(),this.env=this.lookup("environment:/"+this.rootName+"/main/main"),t.next=4,this._render()
case 4:case"end":return t.stop()}},t,this)}))
return function(){return t.apply(this,arguments)}}(),t.prototype.scheduleRerender=function(){var t=this
!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,setTimeout(function(){t._scheduled=!1,t._rerender(),t._rendering=!1},0))},t.prototype.initialize=function(){this.initRegistry(),this.initContainer()},t.prototype.registerInitializer=function(t){this._initializers.push(t)},t.prototype.initRegistry=function(){var t=this._registry=new rt,e=new vi(this._registry,this.resolver)
t.register("environment:/"+this.rootName+"/main/main",_i),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register("document:/"+this.rootName+"/main/main",this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document","document:/"+this.rootName+"/main/main"),t.registerInjection("component-manager","env","environment:/"+this.rootName+"/main/main")
for(var n=this._initializers,i=0;i<n.length;i++)n[i].initialize(e)
this._initialized=!0},t.prototype.initContainer=function(){var t=this
this._container=new it(this._registry,this.resolver),this._container.defaultInjections=function(e){var n={}
return at(n,t),n}},t.prototype._render=function(){var t=i(regeneratorRuntime.mark(function t(){var e,n,i,r,o
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.env,n=this._self=new hi({roots:this._roots}),i=new gi,r=this.builder.getBuilder(e),t.next=6,this.loader.getTemplateIterator(this,e,r,i,n)
case 6:return o=t.sent,t.prev=7,e.begin(),t.next=11,this.renderer.render(o)
case 11:e.commit(),this._didRender(),t.next=19
break
case 15:throw t.prev=15,t.t0=t.catch(7),this._didError(t.t0),t.t0
case 19:case"end":return t.stop()}},t,this,[[7,15]])}))
return function(){return t.apply(this,arguments)}}(),t.prototype._rerender=function(){var t=i(regeneratorRuntime.mark(function t(){var e
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.env,t.prev=1,e.begin(),t.next=5,this.renderer.rerender()
case 5:e.commit(),this._didRender(),t.next=13
break
case 9:throw t.prev=9,t.t0=t.catch(1),this._didError(t.t0),t.t0
case 13:case"end":return t.stop()}},t,this,[[1,9]])}))
return function(){return t.apply(this,arguments)}}(),t.prototype._didRender=function(){this._rendered=!0
var t=this._notifiers
this._notifiers=[],t.forEach(function(t){return t[0]()})},t.prototype._didError=function(t){var e=this._notifiers
this._notifiers=[],e.forEach(function(e){return e[1](t)})},t.prototype.identify=function(t,e){return this.resolver.identify(t,e)},t.prototype.factoryFor=function(t,e){return this._container.factoryFor(this.identify(t,e))},t.prototype.lookup=function(t,e){return this._container.lookup(this.identify(t,e))},t}(),xi=function(){function t(){r(this,t),this.byName=l(),this.byHandle=l()}return t.prototype.hasName=function(t){return t in this.byName},t.prototype.getHandle=function(t){return this.byName[t]},t.prototype.hasHandle=function(t){return t in this.byHandle},t.prototype.getByHandle=function(t){return this.byHandle[t]},t.prototype.register=function(t,e,n){this.byHandle[t]=n,this.byName[e]=t},t}(),Ai=function(){function t(e,n){r(this,t),this.helper=e,this.tag=n.tag,this.args=n.capture()}return t.prototype.value=function(){var t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())},t.prototype.get=function(){return new ai(this)},t}(),Ni=function(){function t(e){r(this,t),this.owner=e,this.handleLookup=[],this.cache={component:new xi,template:new xi,compiledTemplate:new xi,helper:new xi,manager:new xi,modifier:new xi}}return t.prototype.setCompileOptions=function(t){this.templateOptions=t},t.prototype.lookup=function(t,e,n){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null},t.prototype.register=function(t,e,n){var i=this.cache[t],r=this.handleLookup.length
return this.handleLookup.push(i),this.cache[t].register(r,e,n),r},t.prototype.lookupModifier=function(t,e){var n=this.lookup("modifier",t)
if(null===n)throw new Error("Modifier for "+t+" not found.")
return n},t.prototype.compileTemplate=function(t,e){if(!this.cache.compiledTemplate.hasName(t)){var n=this.resolve(e),i=n.block,r=n.meta,o=n.id,s=JSON.parse(i),a=new Kn(this.templateOptions,{id:o,block:s,referrer:r}).asLayout(),u={handle:a.compile(),symbolTable:a.symbolTable}
return this.register("compiledTemplate",t,u),u}var p=this.lookup("compiledTemplate",t)
return this.resolve(p)},t.prototype.registerHelper=function(t,e){return this.register("helper",t,function(t,n){return new Ai(e,n)})},t.prototype.registerInternalHelper=function(t,e){this.register("helper",t,e)},t.prototype.registerComponent=function(t,e,n,i){var r=this.registerTemplate(e,i),o=this.managerFor(r.meta.managerId),s=new nt(t,o,n,r.handle)
return this.register("component",t,s)},t.prototype.lookupComponentHandle=function(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)},t.prototype.managerFor=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=void 0
if(this.cache.manager.hasName(t)){var n=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(n)}var i=this.owner.rootName
if(!(e=this.owner.lookup("component-manager:/"+i+"/component-managers/"+t)))throw new Error("No component manager found for ID "+t+".")
return this.register("manager",t,e),e},t.prototype.registerTemplate=function(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}},t.prototype.lookupComponent=function(t,e){var n=void 0
if(this.cache.component.hasName(t))n=this.lookup("component",t,e)
else{var i=function(t,e){if(null==t)throw new Error(e)
return t}(this.identifyComponent(t,e),"Could not find the component '"+t+"'"),r=this.owner.lookup("template",i),o=this.owner.identify("component",i),s=null
void 0!==o&&(s=this.owner.factoryFor(o)),n=this.registerComponent(t,i,s,r)}return this.resolve(n)},t.prototype.lookupHelper=function(t,e){if(!this.cache.helper.hasName(t)){var n=this.owner,i="helper:"+t,r=e.specifier,o=n.identify(i,r)
if(void 0===o)return null
var s=this.owner.lookup(o,e.specifier)
return this.registerHelper(t,s)}return this.lookup("helper",t,e)},t.prototype.lookupPartial=function(t,e){throw new Error("Partials are not available in Glimmer applications.")},t.prototype.resolve=function(t){return this.handleLookup[t].getByHandle(t)},t.prototype.identifyComponent=function(t,e){var n=this.owner,i="template:"+t,r=e.specifier,o=n.identify(i,r)
if(void 0===o&&n.identify("component:"+t,r))throw new Error("The component '"+t+"' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.")
return o},t}(),Oi={},Ti=Object.freeze([]),Di=function(){function t(){r(this,t),this.strings=[],this.arrays=[Ti],this.tables=[],this.handles=[],this.resolved=[],this.floats=[],this.negatives=[]}return t.prototype.float=function(t){var e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1},t.prototype.negative=function(t){return this.negatives.push(t)-1},t.prototype.string=function(t){var e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1},t.prototype.stringArray=function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=this.string(t[n])
return this.array(e)},t.prototype.array=function(t){if(0===t.length)return 0
var e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1},t.prototype.handle=function(t){var e=this.handles.indexOf(t)
return e>-1?e:(this.resolved.push(Oi),this.handles.push(t)-1)},t.prototype.serializable=function(t){var e=JSON.stringify(t),n=this.strings.indexOf(e)
return n>-1?n:this.strings.push(e)-1},t.prototype.toPool=function(){return{strings:this.strings,arrays:this.arrays,handles:this.handles,floats:this.floats,negatives:this.negatives}},t}(),Bi=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.others=[],n.serializables=[],n}return s(e,t),e.prototype.serializable=function(t){var e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1},e.prototype.getSerializable=function(t){return this.serializables[t]},e.prototype.getOther=function(t){return this.others[t-1]},e.prototype.other=function(t){return this.others.push(t)},e}(function(t){function e(n,i){r(this,e)
var o=a(this,t.call(this))
return o.resolver=n,i&&(o.strings=i.strings,o.arrays=i.arrays,o.handles=i.handles,o.floats=i.floats,o.negatives=i.negatives,o.resolved=o.handles.map(function(){return Oi})),o}return s(e,t),e.prototype.getFloat=function(t){return this.floats[t]},e.prototype.getNegative=function(t){return this.negatives[t]},e.prototype.getString=function(t){return this.strings[t]},e.prototype.getStringArray=function(t){for(var e=this.getArray(t),n=new Array(e.length),i=0;i<e.length;i++){var r=e[i]
n[i]=this.getString(r)}return n},e.prototype.getArray=function(t){return this.arrays[t]},e.prototype.resolveHandle=function(t){var e=this.resolved[t]
if(e===Oi){var n=this.handles[t]
e=this.resolved[t]=this.resolver.resolve(n)}return e},e.prototype.getSerializable=function(t){return JSON.parse(this.strings[t])},e}(Di)),Li=function(){function t(e){r(this,t),this.heap=e,this.offset=0}return o(t,[{key:"size",get:function(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}},{key:"isMachine",get:function(){return 1024&this.heap.getbyaddr(this.offset)}},{key:"type",get:function(){return 255&this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),t}()
function Ri(t,e,n){return t|e<<16|n<<30}function Mi(t,e){return t|e<<30}var Ii=function(){function t(e){if(r(this,t),this.placeholders=[],this.offset=0,this.handle=0,e){var n=e.buffer,i=e.table,o=e.handle
this.heap=new Uint16Array(n),this.table=i,this.offset=this.heap.length,this.handle=o}else this.heap=new Uint16Array(1048576),this.table=[]}return t.prototype.push=function(t){this.heap[this.offset++]=t},t.prototype.getbyaddr=function(t){return this.heap[t]},t.prototype.setbyaddr=function(t,e){this.heap[t]=e},t.prototype.malloc=function(){this.table.push(this.offset,0)
var t=this.handle
return this.handle+=2,t},t.prototype.finishMalloc=function(t,e){var n=this.table[t],i=Ri(this.offset-n,e,0)
this.table[t+1]=i},t.prototype.size=function(){return this.offset},t.prototype.getaddr=function(t){return this.table[t]},t.prototype.gethandle=function(t){this.table.push(t,Ri(0,0,3))
var e=this.handle
return this.handle+=2,e},t.prototype.sizeof=function(t){return-1},t.prototype.scopesizeof=function(t){return(1073676288&this.table[t+1])>>16},t.prototype.free=function(t){var e=this.table[t+1]
this.table[t+1]=Mi(e,1)},t.prototype.compact=function(){for(var t=0,e=this.table,n=this.table.length,i=this.heap,r=0;r<n;r+=2){var o=e[r],s=e[r+1],a=65535&s,u=-1&s
if(2!==u)if(1===u)e[r+1]=Mi(s,2),t+=a
else if(0===u){for(var p=o;p<=r+a;p++)i[p-t]=i[p]
e[r]=o-t}else 3===u&&(e[r]=o-t)}this.offset=this.offset-t},t.prototype.pushPlaceholder=function(t){var e=this.offset++
this.heap[e]=65535,this.placeholders.push([e,t])},t.prototype.patchPlaceholders=function(){for(var t=this.placeholders,e=0;e<t.length;e++){var n=t[e],i=n[0],r=n[1]
this.setbyaddr(i,r())}},t.prototype.capture=function(){this.patchPlaceholders()
var t=function(t,e,n){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,n).buffer
for(var i=new Uint16Array(n);e<n;e++)i[e]=t[e]
return i.buffer}return null}(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}},t}(),Pi=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e}(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Di,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Ii
r(this,t),this.constants=e,this.heap=n,this._opcode=new Li(this.heap)}return t.prototype.opcode=function(t){return this._opcode.offset=t,this._opcode},t}())
var Fi={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
function ji(t,e){var i=t.getSelf(),r=e.capture(),o=r.positional.at(0).value()
return"function"!=typeof o&&function(t,e){var i=function(t){var e="",i=void 0,r=void 0
if(null==t)return e
"parent"in t&&"property"in t?(i=t.parent.value(),r=t.property):"_parentValue"in t&&"_propertyKey"in t&&(i=t._parentValue,r=t._propertyKey)
void 0!==r&&(e+="('"+r+"' on "+function(t){var e=void 0===t?"undefined":n(t)
if(null==t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}(i)+") ")
return e}(e)
throw new Error("You tried to create an action with the {{action}} helper, but the first argument "+i+"was "+(void 0===t?"undefined":n(t))+" instead of a function.")}(o,r.positional.at(0)),new hi(function(){var t=r.positional.value()
t.shift(),t.push.apply(t,arguments),o.apply(i&&i.value(),t)})}function Vi(t){return t[0]?t[1]:t[2]}var Ui=function(){function t(e){r(this,t),this.resolver=e}return t.prototype.getComponentDefinition=function(t){var n=this.resolver.resolve(t)
return e(!!n,"Couldn't find a template for "+t),n},t.prototype.getCapabilities=function(t){var e=this.getComponentDefinition(t),n=e.manager,i=e.state
return n.getCapabilities(i)},t.prototype.getLayout=function(t){var e=this.getComponentDefinition(t),n=e.manager.getLayout(e,this.resolver)
return{compile:function(){return n.handle},symbolTable:n.symbolTable}},t.prototype.lookupHelper=function(t,e){return this.resolver.lookupHelper(t,e)},t.prototype.lookupModifier=function(t,e){return this.resolver.lookupModifier(t,e)},t.prototype.lookupComponentDefinition=function(t,e){return this.resolver.lookupComponentHandle(t,e)},t.prototype.lookupPartial=function(t,e){return this.resolver.lookupPartial(t,e)},t}(),Hi=function(){function t(e){r(this,t),this.resolver=e}return t.prototype.getTemplateIterator=function(){var t=i(regeneratorRuntime.mark(function t(e,n,i,r,o){var s,a,u,p,c,h
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=new Ni(e),a=new Pi(new Bi(s)),u=new Lt,p=new Ui(s),c={program:a,macros:u,resolver:p,Builder:Ut},s.setCompileOptions(c),s.registerTemplate("main",Fi),s.registerInternalHelper("action",ji),s.registerHelper("if",Vi),h=qn(Fi).create(c),t.abrupt("return",Promise.resolve(h.renderLayout({env:n,builder:i,dynamicScope:r,self:o})))
case 11:case"end":return t.stop()}},t,this)}))
return function(e,n,i,r,o){return t.apply(this,arguments)}}(),t}(),zi=function(){function t(e){var n=e.element,i=e.nextSibling,o=void 0===i?null:i
r(this,t),this.cursor={element:n,nextSibling:o}}return t.prototype.getBuilder=function(t){return function(t,e){return Nn.forInitialRender(t,e)}(t,this.cursor)},t}(),Yi=(function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}s(e,t),e.prototype.getBuilder=function(t){return function(t,e){return Qn.forInitialRender(t,e)}(t,this.cursor)}}(zi),function(){function t(){r(this,t)}return t.prototype.render=function(t){var e=void 0
do{e=t.next()}while(!e.done)
this.result=e.value},t.prototype.rerender=function(){if(!this.result)throw new Error("Cannot re-render before initial render has completed")
this.result.rerender()},t}())
function Gi(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function Wi(t){var e=t.type,n=function(t){var e=[]
t.rootName&&e.push(t.rootName)
t.collection&&e.push(t.collection)
t.namespace&&e.push(t.namespace)
t.name&&e.push(t.name)
if(e.length>0){var n=e.join("/")
return Gi(t)&&(n="/"+n),n}}(t)
return n?e+":"+n:e}function Xi(t){var e={}
if(t.indexOf(":")>-1){var n=t.split(":"),i=n[0],r=n[1]
e.type=i
var o=void 0
0===r.indexOf("/")?(o=r.substr(1).split("/"),e.rootName=o.shift(),e.collection=o.shift()):o=r.split("/"),o.length>0&&(e.name=o.pop(),o.length>0&&(e.namespace=o.join("/")))}else e.type=t
return e}function qi(t,e){if(!e)throw new Error("Assertion Failed: "+t)}var Ki=function(){function t(e,n){r(this,t),this.config=e,this.registry=n}return t.prototype.identify=function(t,e){if(function(t){var e=t.split(":"),n=e[0],i=e[1]
return!!(n&&i&&0===i.indexOf("/")&&i.split("/").length>3)}(t))return t
var n=Xi(t),i=void 0
if(e){var r=Xi(e)
if(Gi(r)){qi("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=r.rootName,n.collection=r.collection
var o=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=r.namespace,n.name=r.name,this._serializeAndVerify(n)
if(n.namespace=r.namespace?r.namespace+"/"+r.name:r.name,function(t){var e=t.namespace,n=t.collection,i=e.lastIndexOf("/-")
if(i>-1){i+=2
var r=e.indexOf("/",i)
n=e.slice(i,r>-1?r:void 0)}return n}(n)===o&&(i=this._serializeAndVerify(n)))return i
if(o&&(n.namespace+="/-"+o,i=this._serializeAndVerify(n)))return i
n.rootName=n.collection=n.namespace=void 0}else qi('Referrer must either be "absolute" or include a `type` to determine the associated type',r.type),n.collection=this._definitiveCollection(r.type),n.namespace||(n.namespace=r.rootName),qi("'"+r.type+"' does not have a definitive collection",n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),qi("'"+n.type+"' does not have a definitive collection",n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",i=this._serializeAndVerify(n))return i
n.namespace?(n.rootName=n.namespace,n.namespace=void 0):(n.rootName=n.name,n.name="main")}return(i=this._serializeAndVerify(n))?i:void 0},t.prototype.retrieve=function(t){return this.registry.get(t)},t.prototype.resolve=function(t,e){var n=this.identify(t,e)
if(n)return this.retrieve(n)},t.prototype._definitiveCollection=function(t){var e=this.config.types[t]
return qi("'"+t+"' is not a recognized type",e),e.definitiveCollection},t.prototype._serializeAndVerify=function(t){var e=Wi(t)
if(this.registry.has(e))return e},t}(),Ji=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
r(this,t),this._entries=e}return t.prototype.has=function(t){return t in this._entries},t.prototype.get=function(t){return this._entries[t]},t}()
var $i,Qi,Zi=(function(t,e){function i(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function r(t){return JSON.parse(JSON.stringify(t))}function o(t){var e=i(t)
return["null","undefined"].indexOf(e)>-1||["object","array","arguments","json","string"].indexOf(e)>-1&&("string"===e?0===t.length:0===Object.getOwnPropertyNames(t).length||0===t.length)}function s(t){return"object"===i(t)}function a(t,e,n,i){void 0===n&&(n=!1),void 0===i&&(i=!0)
var u=i?r(t):t,p={}
for(var c in u)if(!1!==u.hasOwnProperty(c)){if(s(u[c])&&n){var h=Array.from(arguments).slice().slice(1),l=a.apply(this,[u[c]].concat(h))
o(l)||(u[c]=l)}var f=e(c,u[c])
if(Array.isArray(f)&&2===f.length)p[f[0]]=f[1]
else if(!o(f))throw new Error("It looks like you might have been trying to construct a new object, but you returned something other than an array that looks like [key, value]. You returned "+f)}return p}function u(t,e){for(var n=e.split("."),i=t,r=!0,o=[];r&&n.length>0;){var s=n.shift()
i[s]?(o.push(s),i=i[s]):r=!1}return{exists:r,existingPath:o.join("."),finalValidProperty:i}}function p(t,e,n,i){void 0===n&&(n=!1),void 0===i&&(i=!0)
var o="UpperFirst"===e,s=i?r(t):t,u=o?/[a-z]/:/[A-z]/
return a(s,function(t,e){var n=[t,e]
return"string"!=typeof t?n:null===t.charAt(0).match(u)?n:[o?c(t):h(t),e]},n)}function c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return t.charAt(0).toLowerCase()+t.slice(1)}function l(t){if(!s(t))throw new Error("'obj' was not an object. Was "+i(t))
return Object.keys(t).map(function(e){return t[e]})}function f(t,e){return-1!==l(e).indexOf(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.toType=i,e.round=function(t,e){return void 0===e&&(e=2),Number(Math.round(Number(t+"e"+e))+"e-"+e)},e.clone=r,e.isEmpty=o,e.isNotEmpty=function(t){return!o(t)},e.wrapObjectWithProperty=function(t,e,n){void 0===n&&(n=!0)
var i={},o=n?r(t):t
return i[e]=o,i},e.isObject=s,e.traverseObject=a,e.nestedPropertyDetails=u,e.nestedPropertyTest=function(t,e,n){var i=u(t,e)
return!!i.exists&&!!n(i.finalValidProperty)},e.nestedPropertyExists=function(t,e){return u(t,e).exists},e.changePropsInitialCase=p,e.firstCharToUpper=c,e.firstCharToLower=h,e.convertPropKeysForAsp=function(t){return p(t,"UpperFirst",!0)},e.convertPropKeysForJs=function(t){return p(t,"lowerFirst",!0)},e.valuesArrayFromObject=l,e.objectContainsValue=f,e.objectKeyForValue=function(t,e){return!!f(t,e)&&Object.keys(e).reduce(function(n,i){return e[i]===t&&(n=i),n},"")},e.forceArray=function(t){return-1!=["null","undefined"].indexOf(i(t))?[]:"array"!==i(t)?[t]:t}
var d=function(){var t=[],e=[],i=!0
return function(r,o){if("object"===(void 0===o?"undefined":n(o))&&null!==o){i&&(r="__BASE_OBJECT__",i=!1)
var s=t.indexOf(o)
if(-1!==s)return"[circular reference of "+e[s]+"]"
t.push(o),e.push(r)}return o}}
e.stringify=function(t,e){void 0===e&&(e={})
var n=Object.assign({tabLength:2,stripQuotes:!1},e),i=n.tabLength,r=n.stripQuotes,o=JSON.stringify(t,d(),i)
return r&&(o=o.replace(/"(.*?)": /g,"$1: ")),o},e.mediaWidth=function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)},e.mediaHeight=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}($i={exports:{}},$i.exports),$i.exports);(Qi=Zi)&&Qi.__esModule&&Object.prototype.hasOwnProperty.call(Qi,"default")&&Qi.default
var tr=Zi.nestedPropertyDetails,er=Object.freeze({english:{button:{invoke_file_picker:"Choose a file",submit:"Submit"},label:{email:"Email Address",first_name:"First Name"},message:{upload_failure:"Something went wrong, please try again later.",uploading:"Uploading..."},paragraph:{no_email_consequences:"If you do not provide an email address, we can not send you a link when your video is done processing.",no_name_consequences:"If you do not provide your name, we cannot personalize your video.",video_finished_uploading:"Your video has uploaded!"}},spanish:{button:{invoke_file_picker:"Escoge un archivo",submit:"Entregar"},label:{email:"Dirección de correo electrónico",first_name:"Nombre de pila"},message:{upload_failure:"Algo salió mal. Inténtalo de nuevo más tarde.",uploading:"Cargando..."},paragraph:{no_email_consequences:"Si no proporciona una dirección de correo electrónico, no podemos enviarle un enlace cuando finalice el procesamiento de su video.",no_name_consequences:"Si no proporciona su nombre, no podemos personalizar su video.",video_finished_uploading:"Tu video ha sido subido"}}}),nr="english"
function ir(t){var e=[].concat(t)[0]
return function(t,e){var n=er[t],i=tr(n,e),r=i.exists,o=(i.existingPath,i.finalValidProperty)
return r?o:(console.warn("No i18n string could be found for "+e),e)}(nr,e)}var rr=function(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a)
return s>3&&a&&Object.defineProperty(e,i,a),a},or=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function a(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})},sr=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.message=ir("message.uploading"),n}return s(e,t),e.prototype.didInsertElement=function(){var t=this
this.uploadVideo().then(this.submitData).then(this.args.onComplete).catch(function(){t.message=ir("message.upload_failure")})},e.prototype.uploadVideo=function(){var t=this.args,e=t.uploadUrl,n=t.file,i=new FormData
return i.append("video",n),window.fetch(e,{method:"POST",body:i})},e.prototype.submitData=function(t){return or(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i,r,o
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.args,i=n.name,r=n.email,n.submitUrl,e.next=3,t.json()
case 3:return o=e.sent.videoUrl,e.abrupt("return",window.fetch(this.args.submitUrl,{method:"POST",body:JSON.stringify({name:i,email:r,videoUrl:o})}))
case 5:case"end":return e.stop()}},e,this)}))},e}(tt)
rr([W],sr.prototype,"message",void 0)
var ar=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.fileChanged=function(t){var e=t.target.files[0]
this.args.onFileChosen(e)},e.prototype.invokeFileInput=function(){this.bounds.firstNode.click()},e}(tt),ur=function(t,e,i,r){var o,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r
if("object"===("undefined"==typeof Reflect?"undefined":n(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r)
else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(s<3?o(a):s>3?o(e,i,a):o(e,i))||a)
return s>3&&a&&Object.defineProperty(e,i,a),a},pr=function(t){function e(){r(this,e)
var n=a(this,t.apply(this,arguments))
return n.name="",n.email="",n.steps={},n}return s(e,t),e.prototype.didInsertElement=function(){var t=this
setTimeout(function(){var e
t.uploadUrl=t.bounds.firstNode.dataset.uploadEndpoint,t.submitUrl=t.bounds.firstNode.dataset.submitEndpoint,e=t.bounds.firstNode.dataset.language||"english",er[e.toLowerCase()]?nr=e.toLowerCase():console.error("No lookup file for "+e),t.setStep("one")},0)},e.prototype.setStep=function(t){var e={}
e[t]=!0,this.steps=e},e.prototype.handleFileChosen=function(t){this.file=t,this.setStep("two")},e.prototype.nameChanged=function(t){this.name=t.target.value},e.prototype.emailChanged=function(t){this.email=t.target.value},e.prototype.submitData=function(){this.setStep("three")},e.prototype.handleDataUploaded=function(){this.setStep("four")},o(e,[{key:"noName",get:function(){return""===this.name}},{key:"noEmail",get:function(){return""===this.email}}]),e}(tt)
ur([W],pr.prototype,"name",void 0),ur([W],pr.prototype,"email",void 0),ur([W],pr.prototype,"steps",void 0),ur([W("name")],pr.prototype,"noName",null),ur([W("email")],pr.prototype,"noEmail",null)
var cr={"component:/video-submission-component/components/DataUploader":sr,"template:/video-submission-component/components/DataUploader":{id:"tuZabpr1",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","message message-data-uploader"],[8],[1,[20,"message"],false],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/DataUploader"}},"component:/video-submission-component/components/FileChooser":ar,"template:/video-submission-component/components/FileChooser":{id:"9HHohVcD",block:'{"symbols":["&attrs","&default"],"statements":[[7,"input"],[10,"style","display:none"],[10,"type","file"],[11,"onchange",[26,"action",[[22,["fileChanged"]]],null],null],[12,1],[8],[9],[0,"\\n"],[6,"button"],[10,"class","choose-file-button"],[10,"type","button"],[11,"onclick",[26,"action",[[22,["invokeFileInput"]]],null],null],[8],[13,2],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/FileChooser"}},"component:/video-submission-component/components/VideoSubmissionComponent":pr,"template:/video-submission-component/components/VideoSubmissionComponent":{id:"XiFFynAq",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","video-submission"],[8],[0,"\\n"],[4,"if",[[22,["steps","one"]]],null,{"statements":[[0,"    "],[5,"FileChooser",[[10,"accept","video/*"]],[["@onFileChosen"],[[26,"action",[[22,["handleFileChosen"]]],null]]],{"statements":[[0,"\\n      "],[1,[26,"i18n",["button.invoke_file_picker"],null],false],[0,"\\n    "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","two"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","field field-name"],[8],[0,"\\n      "],[6,"label"],[10,"for","name"],[8],[1,[26,"i18n",["label.first_name"],null],false],[9],[0,"\\n      "],[6,"input"],[10,"type","text"],[10,"id","name"],[11,"oninput",[26,"action",[[22,["nameChanged"]]],null],null],[11,"value",[20,"name"],null],[8],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","field field-email"],[8],[0,"\\n      "],[6,"label"],[10,"for","email"],[8],[1,[26,"i18n",["label.email"],null],false],[9],[0,"\\n      "],[6,"input"],[10,"type","text"],[10,"id","email"],[11,"oninput",[26,"action",[[22,["emailChanged"]]],null],null],[11,"value",[20,"email"],null],[8],[9],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[22,["noName"]]],null,{"statements":[[0,"      "],[6,"p"],[10,"class","info info-no-name"],[8],[0,"\\n        "],[1,[26,"i18n",["paragraph.no_name_consequences"],null],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[22,["noEmail"]]],null,{"statements":[[0,"      "],[6,"p"],[10,"class","info info-no-email"],[8],[0,"\\n        "],[1,[26,"i18n",["paragraph.no_email_consequences"],null],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[6,"div"],[10,"class","field field-submit-data"],[8],[0,"\\n      "],[6,"button"],[10,"class","submit-data-button"],[10,"type","button"],[11,"onclick",[26,"action",[[22,["submitData"]]],null],null],[8],[1,[26,"i18n",["button.submit"],null],false],[9],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","three"]]],null,{"statements":[[0,"    "],[5,"DataUploader",[],[["@name","@email","@file","@onComplete","@uploadUrl","@submitUrl"],[[20,"name"],[20,"email"],[20,"file"],[26,"action",[[22,["handleDataUploaded"]]],null],[20,"uploadUrl"],[20,"submitUrl"]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[22,["steps","four"]]],null,{"statements":[[0,"    "],[6,"p"],[10,"class","message message-finished-uploading"],[8],[1,[26,"i18n",["paragraph.video_finished_uploading"],null],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/video-submission-component/components/VideoSubmissionComponent"}},"helper:/video-submission-component/components/i18n":ir},hr={app:{name:"video-submission-component",rootName:"video-submission-component"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}},lr=new(function(t){function e(){r(this,e)
var n=new Ji(cr),i=new Ki(hr,n),o=document.body
return a(this,t.call(this,{builder:new zi({element:o,nextSibling:null}),loader:new Hi(i),renderer:new Yi,resolver:i,rootName:hr.app.rootName}))}return s(e,t),e}(Ei)),fr=document.getElementById("app")
Q=function(){lr.scheduleRerender()},lr.registerInitializer({initialize:function(t){t.register("component-manager:/"+lr.rootName+"/component-managers/main",di)}}),lr.renderComponent("VideoSubmissionComponent",fr,null),lr.boot(),function(t,e){for(var n in e)yi(t,n,e[n])}(lr,{"video-submission":"VideoSubmissionComponent"})})
