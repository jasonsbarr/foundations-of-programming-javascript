(function (global) {var process;(function (entrypoint, files, compilations, implicitRequires)
{
    function cachedRequire(index)
    {
        const module = Module._cache[index] || new Module(index);

        return module.exports;
    }

    function Module(index)
    {
        Module._cache[index] = this;

        const file = files[index];
        const filename = file[0];

        const precompiled = compilations[file[1]];
        const references = file[2];

        this.exports = { };
        this.__dirname = filename.split("/").slice(0, -1).join("/");
        this.__filename = filename;
        this.require = function require(index)
        {
            if (typeof index !== "number")
                throw TypeError("Expected index require");

            const reference = references[index];

            if (typeof reference !== "number")
                throw TypeError("Could not find file referenced at " + index);

            return cachedRequire(reference);
        }

        precompiled.call(
            this.exports, /*this*/
            this.exports,
            this.require,
            this,
            this.__filename,
            this.__dirname);
    }

    Module._cache = { };

    if (implicitRequires)
        implicitRequires(cachedRequire);

    cachedRequire(entrypoint);
})
(12, [["/app/node_modules/asap/browser-asap.js", 0, [1,]], ["/app/node_modules/asap/browser-raw.js", 1, []], ["/app/node_modules/bluebird/js/browser/bluebird.core.js", 2, [14,]], ["/app/node_modules/runkit-embed/app-channel.js", 3, [4,5,6,13,]], ["/app/node_modules/runkit-embed/dom.js", 4, [6,]], ["/app/node_modules/runkit-embed/eframes.js", 5, [3,4,6,2,]], ["/app/node_modules/runkit-embed/ipromise.js", 6, []], ["/app/node_modules/runkit-embed/notebook.js", 7, [4,5,2,8,]], ["/app/node_modules/runkit-embed/notebook/api.js", 8, [10,]], ["/app/node_modules/runkit-embed/notebook/from-dataset.js", 9, [8,]], ["/app/node_modules/runkit-embed/notebook/notebook.json", 10, []], ["/app/node_modules/runkit-embed/public-api.js", 11, [4,7,9,]], ["/app/node_modules/runkit-embed/runkit-embed.js", 12, [4,11,]], ["/app/node_modules/window-channel/window-channel.js", 13, [0,2,]], ["process", 14, []], ], [(function(t,n,l){"use strict"
var o=n(0),r=[],i=[],s=o.makeRequestCallFromTimer(function(){if(i.length)throw i.shift()})
function e(t){var n;(n=r.length?r.pop():new a).task=t,o(n)}function a(){this.task=null}l.exports=e,a.prototype.call=function(){try{this.task.call()}catch(t){e.onerror?e.onerror(t):(i.push(t),s())}finally{this.task=null,r[r.length]=this}}})
,(function(e,t,n){"use strict"
function r(e){o.length||(a(),!0),o[o.length]=e}n.exports=r
var a,o=[],l=0,u=1024
function i(){for(;l<o.length;){var e=l
if(l+=1,o[e].call(),l>u){for(var t=0,n=o.length-l;t<n;t++)o[t]=o[t+l]
o.length-=l,l=0}}o.length=0,l=0,!1}var c,f,s,v="undefined"!=typeof global?global:self,g=v.MutationObserver||v.WebKitMutationObserver
function h(e){return function(){var t=setTimeout(r,0),n=setInterval(r,50)
function r(){clearTimeout(t),clearInterval(n),e()}}}"function"==typeof g?(c=1,f=new g(i),s=document.createTextNode(""),f.observe(s,{characterData:!0}),a=function(){c=-c,s.data=c}):a=h(i),r.requestFlush=a,r.makeRequestCallFromTimer=h})
,(function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){function r(a,s){if(!e[a]){if(!t[a]){var c="function"==typeof _dereq_&&_dereq_
if(!s&&c)return c(a,!0)
if(o)return o(a,!0)
var l=new Error("Cannot find module '"+a+"'")
throw l.code="MODULE_NOT_FOUND",l}var u=e[a]={exports:{}}
t[a][0].call(u.exports,function(e){var n=t[a][1][e]
return r(n||e)},u,u.exports,i,t,e,n)}return e[a].exports}for(var o="function"==typeof _dereq_&&_dereq_,a=0;a<n.length;a++)r(n[a])
return r}function o(t){var e=this._schedule
return this._schedule=t,this._customScheduler=!0,e}function a(){return this._customScheduler}function s(){this._trampolineEnabled=!0}function c(){return this._isTickUsed||this._haveDrainedQueues}function l(t,e){e?(process.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),process.exit(2)):this.throwLater(t)}function u(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0)
else try{this._schedule(function(){t(e)})}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}}function p(t,e,n){this._lateQueue.push(t,e,n),this._queueTick()}function f(t,e,n){this._normalQueue.push(t,e,n),this._queueTick()}function h(t){this._normalQueue._pushOne(t),this._queueTick()}function _(t,e,n){function r(){t.call(e,n)}this._trampolineEnabled?p.call(this,t,e,n):this._schedule(function(){setTimeout(r,100)})}function d(t,e,n){this._trampolineEnabled?f.call(this,t,e,n):this._schedule(function(){t.call(e,n)})}function v(t){this._trampolineEnabled?h.call(this,t):this._schedule(function(){t._settlePromises()})}function y(t){var e=t.shift()
if("function"!=typeof e)e._settlePromises()
else{var n=t.shift(),r=t.shift()
e.call(n,r)}}function g(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))}function m(){this._isTickUsed=!1}function b(t){for(;t.length()>0;)y(t)}function C(){b(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,b(this._lateQueue)}function w(t,e,n){"use strict"
var r
try{throw new Error}catch(t){r=t}var i=t("./schedule"),y=t("./queue"),b=t("./util")
function w(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new y(16),this._normalQueue=new y(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0
var t=this
this.drainQueues=function(){t._drainQueues()},this._schedule=i}w.prototype.setScheduler=o,w.prototype.hasCustomScheduler=a,w.prototype.enableTrampoline=s,w.prototype.disableTrampolineIfNecessary=function(){b.hasDevTools&&(this._trampolineEnabled=!1)},w.prototype.haveItemsQueued=c,w.prototype.fatalError=l,w.prototype.throwLater=u,b.hasDevTools?(w.prototype.invokeLater=_,w.prototype.invoke=d,w.prototype.settlePromises=v):(w.prototype.invokeLater=p,w.prototype.invoke=f,w.prototype.settlePromises=h),w.prototype._drainQueues=C,w.prototype._queueTick=g,w.prototype._reset=m,e.exports=w,e.exports.firstLineError=r}function E(t,e){this._reject(e)}function k(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target)}function j(t,e){e.promiseRejectionQueued||this._reject(t)}function F(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField}function T(){return 2097152==(2097152&this._bitField)}function P(t,e,n,r){var i=!1,o=E,a=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(o,o,null,this,t)},s=k,c=j
t.prototype.bind=function(o){i||(i=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction())
var l=n(o),u=new t(e)
u._propagateFrom(this,1)
var p=this._target()
if(u._setBoundTo(l),l instanceof t){var f={promiseRejectionQueued:!1,promise:u,target:p,bindingPromise:l}
p._then(e,a,void 0,u,f),l._then(s,c,void 0,u,f),u._setOnCancel(l)}else u._resolveCallback(p)
return u},t.prototype._setBoundTo=F,t.prototype._isBound=T,t.bind=function(e,n){return t.resolve(n).bind(e)}}function S(t,e,n){"use strict"
e.exports=P}function x(t,e,n){"use strict"
var r
"undefined"!=typeof Promise&&(r=Promise)
var i=t("./promise")()
i.noConflict=function(){try{Promise===i&&(Promise=r)}catch(t){}return i},e.exports=i}function R(){this._branchesRemainingToCancel--}function O(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0}function A(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))}function I(){this._enoughBranchesHaveCancelled()&&this._cancel()}function L(){this._length()>0&&this._settlePromises()}function N(){this._onCancelField=void 0}function U(){return this.isPending()&&!this._isCancelled()}function B(){return this.isPending()&&!this.isCancelled()}function H(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())}function D(){this.cancel()}function V(t,e,n){"use strict"
e.exports=function(e,n,r,i){var o=t("./util"),a=o.tryCatch,s=o.errorObj,c=e._async
e.prototype.break=e.prototype.cancel=function(){if(!i.cancellation())return this._warn("cancellation is disabled")
for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched()
break}var n=t._cancellationParent
if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched()
break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n}},e.prototype._branchHasCancelled=R,e.prototype._enoughBranchesHaveCancelled=O,e.prototype._cancelBy=A,e.prototype._cancelBranched=I,e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=L,e.prototype._unsetOnCancel=N,e.prototype._isCancellable=U,e.prototype.isCancellable=B,e.prototype._doInvokeOnCancel=function(t,e){if(o.isArray(t))for(var n=0;n<t.length;++n)this._doInvokeOnCancel(t[n],e)
else if(void 0!==t)if("function"==typeof t){if(!e){var r=a(t).call(this._boundValue())
r===s&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel()
this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=H,e.prototype._resultCancelled=D}}function Q(t,e,n){"use strict"
e.exports=function(e){var n=t("./util"),r=t("./es5").keys,i=n.tryCatch,o=n.errorObj
return function(t,a,s){return function(c){var l=s._boundValue()
t:for(var u=0;u<t.length;++u){var p=t[u]
if(p===Error||null!=p&&p.prototype instanceof Error){if(c instanceof p)return i(a).call(l,c)}else if("function"==typeof p){var f=i(p).call(l,c)
if(f===o)return f
if(f)return i(a).call(l,c)}else if(n.isObject(c)){for(var h=r(p),_=0;_<h.length;++_){var d=h[_]
if(p[d]!=c[d])continue t}return i(a).call(l,c)}}return e}}}}function q(){}function M(){}function G(){return null}function W(){}function $(){}function z(){var t=this._peekContext()
t&&null==t._promiseCreated&&(t._promiseCreated=this)}function X(t){var e=!1,n=[]
function r(){this._trace=new r.CapturedTrace(i())}function i(){var t=n.length-1
if(t>=0)return n[t]}return t.prototype._promiseCreated=q,t.prototype._pushContext=M,t.prototype._popContext=G,t._peekContext=t.prototype._peekContext=W,r.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,n.push(this._trace))},r.prototype._popContext=function(){if(void 0!==this._trace){var t=n.pop(),e=t._promiseCreated
return t._promiseCreated=null,e}return null},r.CapturedTrace=null,r.create=function(){if(e)return new r},r.deactivateLongStackTraces=$,r.activateLongStackTraces=function(){var n=t.prototype._pushContext,o=t.prototype._popContext,a=t._peekContext,s=t.prototype._peekContext,c=t.prototype._promiseCreated
r.deactivateLongStackTraces=function(){t.prototype._pushContext=n,t.prototype._popContext=o,t._peekContext=a,t.prototype._peekContext=s,t.prototype._promiseCreated=c,e=!1},e=!0,t.prototype._pushContext=r.prototype._pushContext,t.prototype._popContext=r.prototype._popContext,t._peekContext=t.prototype._peekContext=i,t.prototype._promiseCreated=z},r}function K(t,e,n){"use strict"
e.exports=X}function J(){var t=this._target()
t._bitField=-1048577&t._bitField|524288}function Y(){if(0==(524288&this._bitField)){this._setRejectionIsUnhandled()
var t=this
setTimeout(function(){t._notifyUnhandledRejection()},1)}}function Z(){this._bitField=268435456|this._bitField}function tt(){return 0!=(268435456&this._bitField)}function et(){this._bitField=262144|this._bitField}function nt(){this._bitField=-262145&this._bitField}function rt(){return(262144&this._bitField)>0}function it(){this._bitField=1048576|this._bitField}function ot(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())}function at(){return(1048576&this._bitField)>0}function st(){}function ct(){return!1}function lt(){return process.emit.apply(process,arguments)}function ut(){return!1}function pt(t,e){return{promise:e}}function ft(t,e,n){return{promise:e,child:n}}function ht(t,e){return{warning:e}}function _t(t,e,n){return{reason:e,promise:n}}function dt(){return!1}function vt(t,e,n){try{t(e,n)}catch(t){return t}}function yt(){}function gt(t){}function mt(t){}function bt(){}function Ct(){}function wt(){}function Et(){}function kt(t,e){}function jt(){return this._onCancelField}function Ft(t){this._onCancelField=t}function Tt(){this._cancellationParent=void 0,this._onCancelField=void 0}function Pt(t,e){if(0!=(1&e)){this._cancellationParent=t
var n=t._branchesRemainingToCancel
void 0===n&&(n=0),t._branchesRemainingToCancel=n+1}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function St(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}function xt(){this._trace=void 0}function Rt(t,e){for(var n=0;n<e.length-1;++n)e[n].push("From previous event:"),e[n]=e[n].join("\n")
return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n")}function Ot(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}function At(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],i=e.length-1,o=e[i],a=-1,s=r.length-1;s>=0;--s)if(r[s]===o){a=s
break}for(s=a;s>=0;--s){var c=r[s]
if(e[i]!==c)break
e.pop(),i--}e=r}}function It(t){return t.length<41?t:t.substr(0,38)+"..."}function Lt(){return!1}function Nt(){var t=this._length
if(!(t<2)){for(var e=[],n={},r=0,i=this;void 0!==i;++r)e.push(i),i=i._parent
for(r=(t=this._length=r)-1;r>=0;--r){var o=e[r].stack
void 0===n[o]&&(n[o]=r)}for(r=0;r<t;++r){var a=n[e[r].stack]
if(void 0!==a&&a!==r){a>0&&(e[a-1]._parent=void 0,e[a-1]._length=1),e[r]._parent=void 0,e[r]._length=1
var s=r>0?e[r-1]:this
a<t-1?(s._parent=e[a+1],s._parent.uncycle(),s._length=s._parent._length+1):(s._parent=void 0,s._length=1)
for(var c=s._length+1,l=r-2;l>=0;--l)e[l]._length=c,c++
return}}}}function Ut(t){t.stack=(new Error).stack}function Bt(t){Error.stackTraceLimit+=6
try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6}function Ht(t){console.warn(t)}function Dt(t,e){var n=e?"[33m":"[31m"
console.warn(n+t+"[0m\n")}function Vt(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}function Qt(t,e,n){"use strict"
e.exports=function(e,n){var i,o,a,s=e._getDomain,c=e._async,l=t("./errors").Warning,u=t("./util"),p=t("./es5"),f=u.canAttachTrace,h=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,_=/\((?:timers\.js):\d+:\d+\)/,d=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,v=null,y=null,g=!1,m=!(0==u.env("BLUEBIRD_DEBUG")),b=!(0==u.env("BLUEBIRD_WARNINGS")||!m&&!u.env("BLUEBIRD_WARNINGS")),C=!(0==u.env("BLUEBIRD_LONG_STACK_TRACES")||!m&&!u.env("BLUEBIRD_LONG_STACK_TRACES")),w=0!=u.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(b||!!u.env("BLUEBIRD_W_FORGOTTEN_RETURN"))
e.prototype.suppressUnhandledRejections=J,e.prototype._ensurePossibleRejectionHandled=Y,e.prototype._notifyUnhandledRejectionIsHandled=function(){Q("rejectionHandled",i,void 0,this)},e.prototype._setReturnedNonUndefined=Z,e.prototype._returnedNonUndefined=tt,e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue()
this._setUnhandledRejectionIsNotified(),Q("unhandledRejection",o,t,this)}},e.prototype._setUnhandledRejectionIsNotified=et,e.prototype._unsetUnhandledRejectionIsNotified=nt,e.prototype._isUnhandledRejectionNotified=rt,e.prototype._setRejectionIsUnhandled=it,e.prototype._unsetRejectionIsUnhandled=ot,e.prototype._isRejectionUnhandled=at,e.prototype._warn=function(t,e,n){return B(t,e,n||this)},e.onPossiblyUnhandledRejection=function(t){var e=s()
o="function"==typeof t?null===e?t:u.domainBind(e,t):void 0},e.onUnhandledRejectionHandled=function(t){var e=s()
i="function"==typeof t?null===e?t:u.domainBind(e,t):void 0}
var E=st
function k(t,e){var n={detail:e,cancelable:!0}
p.defineProperty(n,"promise",{value:e.promise}),p.defineProperty(n,"reason",{value:e.reason})
var r=new CustomEvent(t.toLowerCase(),n)
return!u.global.dispatchEvent(r)}function j(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0})
return n.detail=e,p.defineProperty(n,"promise",{value:e.promise}),p.defineProperty(n,"reason",{value:e.reason}),!u.global.dispatchEvent(n)}function F(t,e){var n=document.createEvent("CustomEvent")
return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!u.global.dispatchEvent(n)}e.longStackTraces=function(){if(c.haveItemsQueued()&&!Mt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n")
if(!Mt.longStackTraces&&M()){var t=e.prototype._captureStackTrace,r=e.prototype._attachExtraTrace,i=e.prototype._dereferenceTrace
Mt.longStackTraces=!0,E=function(){if(c.haveItemsQueued()&&!Mt.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n")
e.prototype._captureStackTrace=t,e.prototype._attachExtraTrace=r,e.prototype._dereferenceTrace=i,n.deactivateLongStackTraces(),c.enableTrampoline(),Mt.longStackTraces=!1},e.prototype._captureStackTrace=N,e.prototype._attachExtraTrace=U,e.prototype._dereferenceTrace=xt,n.activateLongStackTraces(),c.disableTrampolineIfNecessary()}},e.hasLongStackTraces=function(){return Mt.longStackTraces&&M()}
var T=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent")
return u.global.dispatchEvent(t),k}if("function"==typeof Event){t=new Event("CustomEvent")
return u.global.dispatchEvent(t),j}return(t=document.createEvent("CustomEvent")).initCustomEvent("testingtheevent",!1,!0,{}),u.global.dispatchEvent(t),F}catch(t){}return ct}()
function P(t){var e="on"+t.toLowerCase(),n=u.global[e]
return!!n&&(n.apply(u.global,[].slice.call(arguments,1)),!0)}var S=u.isNode?lt:u.global?P:ut,x={promiseCreated:pt,promiseFulfilled:pt,promiseRejected:pt,promiseResolved:pt,promiseCancelled:pt,promiseChained:ft,warning:ht,unhandledRejection:_t,rejectionHandled:pt},R=function(t){var e=!1
try{e=S.apply(null,arguments)}catch(t){c.throwLater(t),e=!0}var n=!1
try{n=T(t,x[t].apply(null,arguments))}catch(t){c.throwLater(t),n=!0}return n||e}
function O(t,e,n){var r=this
try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+u.toString(t))
r._attachCancellationCallback(t)})}catch(t){return t}}function A(t){if(!this._isCancellable())return this
var e=this._onCancel()
void 0!==e?u.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}e.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?e.longStackTraces():!t.longStackTraces&&e.hasLongStackTraces()&&E()),"warnings"in t){var n=t.warnings
Mt.warnings=!!n,w=Mt.warnings,u.isObject(n)&&"wForgottenReturn"in n&&(w=!!n.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!Mt.cancellation){if(c.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use")
e.prototype._clearCancellationData=Tt,e.prototype._propagateFrom=Pt,e.prototype._onCancel=jt,e.prototype._setOnCancel=Ft,e.prototype._attachCancellationCallback=A,e.prototype._execute=O,I=Pt,Mt.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!Mt.monitoring?(Mt.monitoring=!0,e.prototype._fireEvent=R):!t.monitoring&&Mt.monitoring&&(Mt.monitoring=!1,e.prototype._fireEvent=dt)),e},e.prototype._fireEvent=dt,e.prototype._execute=vt,e.prototype._onCancel=yt,e.prototype._setOnCancel=gt,e.prototype._attachCancellationCallback=mt,e.prototype._captureStackTrace=bt,e.prototype._attachExtraTrace=Ct,e.prototype._dereferenceTrace=wt,e.prototype._clearCancellationData=Et,e.prototype._propagateFrom=kt
var I=St
function L(){var t=this._boundTo
return void 0!==t&&t instanceof e?t.isFulfilled()?t.value():void 0:t}function N(){this._trace=new z(this._peekContext())}function U(t,e){if(f(t)){var n=this._trace
if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t)
else if(!t.__stackCleaned__){var r=D(t)
u.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),u.notEnumerableProp(t,"__stackCleaned__",!0)}}}function B(t,n,r){if(Mt.warnings){var i,o=new l(t)
if(n)r._attachExtraTrace(o)
else if(Mt.longStackTraces&&(i=e._peekContext()))i.attachExtraTrace(o)
else{var a=D(o)
o.stack=a.message+"\n"+a.stack.join("\n")}R("warning",o)||V(o,"",!0)}}function H(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],i="    (No stack trace)"===r||v.test(r),o=i&&G(r)
i&&!o&&(g&&" "!==r.charAt(0)&&(r="    "+r),e.push(r))}return e}function D(t){var e=t.stack,n=t.toString()
return e="string"==typeof e&&e.length>0?function(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n]
if("    (No stack trace)"===r||v.test(r))break}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e}(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:H(e)}}function V(t,e,n){if("undefined"!=typeof console){var i
if(u.isObject(t)){var o=t.stack
i=e+y(o,t)}else i=e+String(t)
"function"==typeof a?a(i,n):"function"!=typeof console.log&&"object"!==r(console.log)||console.log(i)}}function Q(t,e,n,r){var i=!1
try{"function"==typeof e&&(i=!0,"rejectionHandled"===t?e(r):e(n,r))}catch(t){c.throwLater(t)}"unhandledRejection"===t?R(t,n,r)||i||V(n,"Unhandled rejection "):R(t,r)}function q(t){var e
if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]"
else{e=t&&"function"==typeof t.toString?t.toString():u.toString(t)
if(/\[object [a-zA-Z0-9$_]+\]/.test(e))try{e=JSON.stringify(t)}catch(t){}0===e.length&&(e="(empty array)")}return"(<"+It(e)+">, no stack trace)"}function M(){return"function"==typeof qt}var G=Lt,W=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/
function $(t){var e=t.match(W)
if(e)return{fileName:e[1],line:parseInt(e[2],10)}}function z(t){this._parent=t,this._promisesCreated=0
var e=this._length=1+(void 0===t?0:t._length)
qt(this,z),e>32&&this.uncycle()}function X(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():q(e)}function K(t){return h.test(t)}function Qt(t,e){return"string"==typeof t?t:"object"!==r(e)&&"function"!=typeof e||void 0===e.name||void 0===e.message?q(e):e.toString()}u.inherits(z,Error),n.CapturedTrace=z,z.prototype.uncycle=Nt,z.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle()
for(var e=D(t),n=e.message,r=[e.stack],i=this;void 0!==i;)r.push(H(i.stack.split("\n"))),i=i._parent
At(r),Ot(r),u.notEnumerableProp(t,"stack",Rt(n,r)),u.notEnumerableProp(t,"__stackCleaned__",!0)}}
var qt=function(){var t=/^\s*at\s*/,e=X
if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,v=t,y=e
var n=Error.captureStackTrace
return G=K,function(t,e){Error.stackTraceLimit+=6,n(t,e),Error.stackTraceLimit-=6}}var r,i=new Error
if("string"==typeof i.stack&&i.stack.split("\n")[0].indexOf("stackDetection@")>=0)return v=/@/,y=e,g=!0,Ut
try{throw new Error}catch(t){r="stack"in t}return"stack"in i||!r||"number"!=typeof Error.stackTraceLimit?(y=Qt,null):(v=t,y=e,Bt)}()
"undefined"!=typeof console&&void 0!==console.warn&&(a=Ht,u.isNode&&process.stderr.isTTY?a=Dt:u.isNode||"string"!=typeof(new Error).stack||(a=Vt))
var Mt={warnings:b,longStackTraces:!1,cancellation:!1,monitoring:!1}
return C&&e.longStackTraces(),{longStackTraces:function(){return Mt.longStackTraces},warnings:function(){return Mt.warnings},cancellation:function(){return Mt.cancellation},monitoring:function(){return Mt.monitoring},propagateFromFunction:function(){return I},boundValueFunction:function(){return L},checkForgottenReturns:function(t,e,n,r,i){if(void 0===t&&null!==e&&w){if(void 0!==i&&i._returnedNonUndefined())return
if(0==(65535&r._bitField))return
n&&(n+=" ")
var o="",a=""
if(e._trace){for(var s=e._trace.stack.split("\n"),c=H(s),l=c.length-1;l>=0;--l){var u=c[l]
if(!_.test(u)){var p=u.match(d)
p&&(o="at "+p[1]+":"+p[2]+":"+p[3]+" ")
break}}if(c.length>0){var f=c[0]
for(l=0;l<s.length;++l)if(s[l]===f){l>0&&(a="\n"+s[l-1])
break}}}var h="a promise was created in a "+n+"handler "+o+"but was not returned from it, see http://goo.gl/rRqMUw"+a
r._warn(h,!0,e)}},setBounds:function(t,e){if(M()){for(var n,r,i=t.stack.split("\n"),o=e.stack.split("\n"),a=-1,s=-1,c=0;c<i.length;++c)if(l=$(i[c])){n=l.fileName,a=l.line
break}for(c=0;c<o.length;++c){var l
if(l=$(o[c])){r=l.fileName,s=l.line
break}}a<0||s<0||!n||!r||n!==r||a>=s||(G=function(t){if(h.test(t))return!0
var e=$(t)
return!!(e&&e.fileName===n&&a<=e.line&&e.line<=s)})}},warn:B,deprecated:function(t,e){var n=t+" is deprecated and will be removed in a future version."
return e&&(n+=" Use "+e+" instead."),B(n)},CapturedTrace:z,fireDomEvent:T,fireGlobalEvent:S}}}function qt(){return this.value}function Mt(){throw this.reason}function Gt(t){return this._then(Mt,void 0,void 0,{reason:t},void 0)}function Wt(t){if(arguments.length<=1)return this._then(void 0,Mt,void 0,{reason:t},void 0)
var e=arguments[1],n=function(){throw e}
return this.caught(t,n)}function $t(t){t.prototype.return=t.prototype.thenReturn=function(e){return e instanceof t&&e.suppressUnhandledRejections(),this._then(qt,void 0,void 0,{value:e},void 0)},t.prototype.throw=t.prototype.thenThrow=Gt,t.prototype.catchThrow=Wt,t.prototype.catchReturn=function(e){if(arguments.length<=1)return e instanceof t&&e.suppressUnhandledRejections(),this._then(void 0,qt,void 0,{value:e},void 0)
var n=arguments[1]
n instanceof t&&n.suppressUnhandledRejections()
var r=function(){return n}
return this.caught(e,r)}}function zt(t,e,n){"use strict"
e.exports=$t}function Xt(t,e,n){"use strict"
var r,i,o=t("./es5"),a=o.freeze,s=t("./util"),c=s.inherits,l=s.notEnumerableProp
function u(t,e){function n(r){if(!(this instanceof n))return new n(r)
l(this,"message","string"==typeof r?r:e),l(this,"name",t),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return c(n,Error),n}var p=u("Warning","warning"),f=u("CancellationError","cancellation error"),h=u("TimeoutError","timeout error"),_=u("AggregateError","aggregate error")
try{r=TypeError,i=RangeError}catch(t){r=u("TypeError","type error"),i=u("RangeError","range error")}for(var d="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),v=0;v<d.length;++v)"function"==typeof Array.prototype[d[v]]&&(_.prototype[d[v]]=Array.prototype[d[v]])
o.defineProperty(_.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),_.prototype.isOperational=!0
var y=0
function g(t){if(!(this instanceof g))return new g(t)
l(this,"name","OperationalError"),l(this,"message",t),this.cause=t,this.isOperational=!0,t instanceof Error?(l(this,"message",t.message),l(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}_.prototype.toString=function(){var t=Array(4*y+1).join(" "),e="\n"+t+"AggregateError of:\n"
y++,t=Array(4*y+1).join(" ")
for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",i=r.split("\n"),o=0;o<i.length;++o)i[o]=t+i[o]
e+=(r=i.join("\n"))+"\n"}return y--,e},c(g,Error)
var m=Error.__BluebirdErrorTypes__
m||(m=a({CancellationError:f,TimeoutError:h,OperationalError:g,RejectionError:g,AggregateError:_}),o.defineProperty(Error,"__BluebirdErrorTypes__",{value:m,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:r,RangeError:i,CancellationError:m.CancellationError,OperationalError:m.OperationalError,TimeoutError:m.TimeoutError,AggregateError:m.AggregateError,Warning:p}}function Kt(){"use strict"
return void 0===this}function Jt(t,e){var n=Object.getOwnPropertyDescriptor(t,e)
return!(n&&!n.writable&&!n.set)}function Yt(t,e){return{value:t[e]}}function Zt(t,e,n){return t[e]=n.value,t}function te(t){return t}function ee(){return!0}function ne(t,e,n){var r=Kt()
if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:Jt}
else{var i={}.hasOwnProperty,o={}.toString,a={}.constructor.prototype,s=function(t){var e=[]
for(var n in t)i.call(t,n)&&e.push(n)
return e},c=Yt,l=Zt,u=te,p=function(t){try{return Object(t).constructor.prototype}catch(t){return a}},f=function(t){try{return"[object Array]"===o.call(t)}catch(t){return!1}}
e.exports={isArray:f,keys:s,names:s,defineProperty:l,getDescriptor:c,freeze:u,getPrototypeOf:p,isES5:r,propertyIsWritable:ee}}}function re(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null}function ie(){return 0===this.type}function oe(t){this.finallyHandler=t}function ae(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0)}function se(t,e,n,r){return"function"!=typeof t?this.then():this._then(n,r,void 0,new re(this,e,t),void 0)}function ce(){ae(this.finallyHandler)}function le(t,e,n){"use strict"
e.exports=function(e,n,r){var i=t("./util"),o=e.CancellationError,a=i.errorObj,s=t("./catch_filter")(r)
function c(){return u.call(this,this.promise._target()._settledValue())}function l(t){if(!ae(this,t))return a.e=t,a}function u(t){var i=this.promise,s=this.handler
if(!this.called){this.called=!0
var u=this.isFinallyHandler()?s.call(i._boundValue()):s.call(i._boundValue(),t)
if(u===r)return u
if(void 0!==u){i._setReturnedNonUndefined()
var p=n(u,i)
if(p instanceof e){if(null!=this.cancelPromise){if(p._isCancelled()){var f=new o("late cancellation observer")
return i._attachExtraTrace(f),a.e=f,a}p.isPending()&&p._attachCancellationCallback(new oe(this))}return p._then(c,l,void 0,this,void 0)}}}return i.isRejected()?(ae(this),a.e=t,a):(ae(this),t)}return re.prototype.isFinallyHandler=ie,oe.prototype._resultCancelled=ce,e.prototype._passThrough=se,e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,u,u)},e.prototype.tap=function(t){return this._passThrough(t,1,u)},e.prototype.tapCatch=function(t){var n=arguments.length
if(1===n)return this._passThrough(t,1,void 0,u)
var r,o=new Array(n-1),a=0
for(r=0;r<n-1;++r){var c=arguments[r]
if(!i.isObject(c))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+i.classString(c)))
o[a++]=c}o.length=a
var l=arguments[r]
return this._passThrough(s(o,l,this),1,void 0,u)},re}}function ue(t){return new Function("value","holder","                             \n            'use strict';                                                    \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g,t))}function pe(t){return new Function("promise","holder","                           \n            'use strict';                                                    \n            holder.pIndex = promise;                                         \n            ".replace(/Index/g,t))}function fe(t){return"                                                         \n                promise = "+t+";                                      \n                if (promise instanceof Promise) {                            \n                    promise.cancel();                                        \n                }                                                            \n            "}function he(t){this._reject(t)}function _e(t,e,n){"use strict"
e.exports=function(e,n,r,i,o,a){var s=t("./util")
s.canEvaluate,s.tryCatch,s.errorObj
e.join=function(){var t,e=arguments.length-1
e>0&&"function"==typeof arguments[e]&&(t=arguments[e])
var r=[].slice.call(arguments)
t&&r.pop()
var i=new n(r).promise()
return void 0!==t?i.spread(t):i}}}function de(t,e,n){"use strict"
e.exports=function(e,n,r,i,o){var a=t("./util"),s=a.tryCatch
e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+a.classString(t))
return function(){var r=new e(n)
r._captureStackTrace(),r._pushContext()
var i=s(t).apply(this,arguments),a=r._popContext()
return o.checkForgottenReturns(i,a,"Promise.method",r),r._resolveFromSyncValue(i),r}},e.attempt=e.try=function(t){if("function"!=typeof t)return i("expecting a function but got "+a.classString(t))
var r,c=new e(n)
if(c._captureStackTrace(),c._pushContext(),arguments.length>1){o.deprecated("calling Promise.try with more than 1 argument")
var l=arguments[1],u=arguments[2]
r=a.isArray(l)?s(t).apply(u,l):s(t).call(u,l)}else r=s(t)()
var p=c._popContext()
return o.checkForgottenReturns(r,p,"Promise.try",c),c._resolveFromSyncValue(r),c},e.prototype._resolveFromSyncValue=function(t){t===a.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}}function ve(t,e,n){"use strict"
var r=t("./util"),i=r.maybeWrapAsError,o=t("./errors").OperationalError,a=t("./es5")
var s=/^(?:name|message|stack|cause)$/
function c(t){var e
if(function(t){return t instanceof Error&&a.getPrototypeOf(t)===Error.prototype}(t)){(e=new o(t)).name=t.name,e.message=t.message,e.stack=t.stack
for(var n=a.keys(t),i=0;i<n.length;++i){var c=n[i]
s.test(c)||(e[c]=t[c])}return e}return r.markAsOriginatingFromRejection(t),t}e.exports=function(t,e){return function(n,r){if(null!==t){if(n){var o=c(i(n))
t._attachExtraTrace(o),t._reject(o)}else if(e){var a=[].slice.call(arguments,1)
t._fulfill(a)}else t._fulfill(r)
t=null}}}}function ye(){}function ge(){var t=process.domain
return void 0===t&&(t=null),t}function me(){return null}function be(){}function Ce(){return"[object Promise]"}function we(t,e){this._then(t,e,void 0,void 0,void 0)._setIsFinal()}function Ee(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0}
return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t}function ke(){return 65535&this._bitField}function je(){return 0!=(117506048&this._bitField)}function Fe(){return 67108864==(67108864&this._bitField)}function Te(t){this._bitField=-65536&this._bitField|65535&t}function Pe(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)}function Se(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)}function xe(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)}function Re(){this._bitField=4194304|this._bitField}function Oe(){return(4194304&this._bitField)>0}function Ae(){this._bitField=-65537&this._bitField}function Ie(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)}function Le(){this._bitField=8388608|this._bitField}function Ne(t){return this[4*t-4+2]}function Ue(t){return this[4*t-4+0]}function Be(t){return this[4*t-4+1]}function He(){}function De(t,e){this._addCallbacks(void 0,void 0,e,t,null)}function Ve(){for(var t=this;t._isFollowing();)t=t._followee()
return t}function Qe(){return this._rejectionHandler0}function qe(t){this._rejectionHandler0=t}function Me(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)}function Ge(t,e,n){var r=this._promise0,i=this._receiverAt(0)
this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,i,e)}function We(t){var e=4*t-4
this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0}function $e(t,e){for(var n=1;n<t;n++){var r=this._fulfillmentHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n)
this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}}function ze(t,e){for(var n=1;n<t;n++){var r=this._rejectionHandlerAt(n),i=this._promiseAt(n),o=this._receiverAt(n)
this._clearCallbackDataAtIndex(n),this._settlePromise(i,r,o,e)}}function Xe(){var t=this._bitField,e=65535&t
if(e>0){if(0!=(16842752&t)){var n=this._fulfillmentHandler0
this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n)}else{var r=this._rejectionHandler0
this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r)}this._setLength(0)}this._clearCancellationData()}function Ke(){var t=this._bitField
return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0}function Je(t){this.promise._resolveCallback(t)}function Ye(t){this.promise._rejectCallback(t,!1)}function Ze(){}function tn(t,e,n){"use strict"
e.exports=function(){var n,r=function(){return new f("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},i=function(){return new F.PromiseInspection(this._target())},o=function(t){return F.reject(new f(t))},a={},s=t("./util")
n=s.isNode?ge:me,s.notEnumerableProp(F,"_getDomain",n)
var c=t("./es5"),l=t("./async"),u=new l
c.defineProperty(F,"_async",{value:u})
var p=t("./errors"),f=F.TypeError=p.TypeError
F.RangeError=p.RangeError
var h=F.CancellationError=p.CancellationError
F.TimeoutError=p.TimeoutError,F.OperationalError=p.OperationalError,F.RejectionError=p.OperationalError,F.AggregateError=p.AggregateError
var _=be,d={},v={},y=t("./thenables")(F,_),g=t("./promise_array")(F,_,y,o,ye),m=t("./context")(F),b=(m.create,t("./debuggability")(F,m)),C=(b.CapturedTrace,t("./finally")(F,y,v)),w=t("./catch_filter")(v),E=t("./nodeback"),k=s.errorObj,j=s.tryCatch
function F(t){t!==_&&function(t,e){if(null==t||t.constructor!==F)throw new f("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")
if("function"!=typeof e)throw new f("expecting a function but got "+s.classString(e))}(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function T(t){var e=new F(_)
e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}return F.prototype.toString=Ce,F.prototype.caught=F.prototype.catch=function(t){var e=arguments.length
if(e>1){var n,r=new Array(e-1),i=0
for(n=0;n<e-1;++n){var a=arguments[n]
if(!s.isObject(a))return o("Catch statement predicate: expecting an object but got "+s.classString(a))
r[i++]=a}return r.length=i,t=arguments[n],this.then(void 0,w(r,t,this))}return this.then(void 0,t)},F.prototype.reflect=function(){return this._then(i,i,void 0,this,void 0)},F.prototype.then=function(t,e){if(b.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+s.classString(t)
arguments.length>1&&(n+=", "+s.classString(e)),this._warn(n)}return this._then(t,e,void 0,void 0,void 0)},F.prototype.done=we,F.prototype.spread=function(t){return"function"!=typeof t?o("expecting a function but got "+s.classString(t)):this.all()._then(t,void 0,void 0,d,void 0)},F.prototype.toJSON=Ee,F.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new g(this).promise()},F.prototype.error=function(t){return this.caught(s.originatesFromRejection,t)},F.getNewLibraryCopy=e.exports,F.is=function(t){return t instanceof F},F.fromNode=F.fromCallback=function(t){var e=new F(_)
e._captureStackTrace()
var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=j(t)(E(e,n))
return r===k&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},F.all=function(t){return new g(t).promise()},F.cast=function(t){var e=y(t)
return e instanceof F||((e=new F(_))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},F.resolve=F.fulfilled=F.cast,F.reject=F.rejected=function(t){var e=new F(_)
return e._captureStackTrace(),e._rejectCallback(t,!0),e},F.setScheduler=function(t){if("function"!=typeof t)throw new f("expecting a function but got "+s.classString(t))
return u.setScheduler(t)},F.prototype._then=function(t,e,r,i,o){var a=void 0!==o,c=a?o:new F(_),l=this._target(),p=l._bitField
a||(c._propagateFrom(this,3),c._captureStackTrace(),void 0===i&&0!=(2097152&this._bitField)&&(i=0!=(50397184&p)?this._boundValue():l===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,c))
var f=n()
if(0!=(50397184&p)){var d,v,y=l._settlePromiseCtx
0!=(33554432&p)?(v=l._rejectionHandler0,d=t):0!=(16777216&p)?(v=l._fulfillmentHandler0,d=e,l._unsetRejectionIsUnhandled()):(y=l._settlePromiseLateCancellationObserver,v=new h("late cancellation observer"),l._attachExtraTrace(v),d=e),u.invoke(y,l,{handler:null===f?d:"function"==typeof d&&s.domainBind(f,d),promise:c,receiver:i,value:v})}else l._addCallbacks(t,e,c,i,f)
return c},F.prototype._length=ke,F.prototype._isFateSealed=je,F.prototype._isFollowing=Fe,F.prototype._setLength=Te,F.prototype._setFulfilled=Pe,F.prototype._setRejected=Se,F.prototype._setFollowing=xe,F.prototype._setIsFinal=Re,F.prototype._isFinal=Oe,F.prototype._unsetCancelled=Ae,F.prototype._setCancelled=Ie,F.prototype._setWillBeCancelled=Le,F.prototype._setAsyncGuaranteed=function(){u.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},F.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3]
if(e!==a)return void 0===e&&this._isBound()?this._boundValue():e},F.prototype._promiseAt=Ne,F.prototype._fulfillmentHandlerAt=Ue,F.prototype._rejectionHandlerAt=Be,F.prototype._boundValue=He,F.prototype._migrateCallback0=function(t){t._bitField
var e=t._fulfillmentHandler0,n=t._rejectionHandler0,r=t._promise0,i=t._receiverAt(0)
void 0===i&&(i=a),this._addCallbacks(e,n,r,i,null)},F.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),i=t._promiseAt(e),o=t._receiverAt(e)
void 0===o&&(o=a),this._addCallbacks(n,r,i,o,null)},F.prototype._addCallbacks=function(t,e,n,r,i){var o=this._length()
if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===i?t:s.domainBind(i,t)),"function"==typeof e&&(this._rejectionHandler0=null===i?e:s.domainBind(i,e))
else{var a=4*o-4
this[a+2]=n,this[a+3]=r,"function"==typeof t&&(this[a+0]=null===i?t:s.domainBind(i,t)),"function"==typeof e&&(this[a+1]=null===i?e:s.domainBind(i,e))}return this._setLength(o+1),o},F.prototype._proxy=De,F.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(r(),!1)
var n=y(t,this)
if(!(n instanceof F))return this._fulfill(t)
e&&this._propagateFrom(n,2)
var i=n._target()
if(i!==this){var o=i._bitField
if(0==(50397184&o)){var a=this._length()
a>0&&i._migrateCallback0(this)
for(var s=1;s<a;++s)i._migrateCallbackAt(this,s)
this._setFollowing(),this._setLength(0),this._setFollowee(i)}else if(0!=(33554432&o))this._fulfill(i._value())
else if(0!=(16777216&o))this._reject(i._reason())
else{var c=new h("late cancellation observer")
i._attachExtraTrace(c),this._reject(c)}}else this._reject(r())}},F.prototype._rejectCallback=function(t,e,n){var r=s.ensureErrorObject(t),i=r===t
if(!i&&!n&&b.warnings()){var o="a promise was rejected with a non-error: "+s.classString(t)
this._warn(o,!0)}this._attachExtraTrace(r,!!e&&i),this._reject(t)},F.prototype._resolveFromExecutor=function(t){if(t!==_){var e=this
this._captureStackTrace(),this._pushContext()
var n=!0,r=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,n)})
n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0)}},F.prototype._settlePromiseFromHandler=function(t,e,n,r){var i=r._bitField
if(0==(65536&i)){var o
r._pushContext(),e===d?n&&"number"==typeof n.length?o=j(t).apply(this._boundValue(),n):(o=k).e=new f("cannot .spread() a non-array: "+s.classString(n)):o=j(t).call(e,n)
var a=r._popContext()
0==(65536&(i=r._bitField))&&(o===v?r._reject(n):o===k?r._rejectCallback(o.e,!1):(b.checkForgottenReturns(o,a,"",r,this),r._resolveCallback(o)))}},F.prototype._target=Ve,F.prototype._followee=Qe,F.prototype._setFollowee=qe,F.prototype._settlePromise=function(t,e,n,r){var o=t instanceof F,a=this._bitField,s=0!=(134217728&a)
0!=(65536&a)?(o&&t._invokeInternalOnCancel(),n instanceof C&&n.isFinallyHandler()?(n.cancelPromise=t,j(e).call(n,r)===k&&t._reject(k.e)):e===i?t._fulfill(i.call(n)):n instanceof ye?n._promiseCancelled(t):o||t instanceof g?t._cancel():n.cancel()):"function"==typeof e?o?(s&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,n,r,t)):e.call(n,r,t):n instanceof ye?n._isResolved()||(0!=(33554432&a)?n._promiseFulfilled(r,t):n._promiseRejected(r,t)):o&&(s&&t._setAsyncGuaranteed(),0!=(33554432&a)?t._fulfill(r):t._reject(r))},F.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,i=t.value
"function"==typeof e?n instanceof F?this._settlePromiseFromHandler(e,r,i,n):e.call(r,i,n):n instanceof F&&n._reject(i)},F.prototype._settlePromiseCtx=Me,F.prototype._settlePromise0=Ge,F.prototype._clearCallbackDataAtIndex=We,F.prototype._fulfill=function(t){var e=this._bitField
if(!((117506048&e)>>>16)){if(t===this){var n=r()
return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():u.settlePromises(this),this._dereferenceTrace())}},F.prototype._reject=function(t){var e=this._bitField
if(!((117506048&e)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=t,this._isFinal())return u.fatalError(t,s.isNode);(65535&e)>0?u.settlePromises(this):this._ensurePossibleRejectionHandled()}},F.prototype._fulfillPromises=$e,F.prototype._rejectPromises=ze,F.prototype._settlePromises=Xe,F.prototype._settledValue=Ke,F.defer=F.pending=function(){return b.deprecated("Promise.defer","new Promise"),{promise:new F(_),resolve:Je,reject:Ye}},s.notEnumerableProp(F,"_makeSelfResolutionError",r),t("./method")(F,_,y,o,b),t("./bind")(F,_,y,b),t("./cancel")(F,g,o,b),t("./direct_resolve")(F),t("./synchronous_inspection")(F),t("./join")(F,g,y,_,u,n),F.Promise=F,F.version="3.5.3",s.toFastProperties(F),s.toFastProperties(F.prototype),T({a:1}),T({b:2}),T({c:3}),T(1),T(Ze),T(void 0),T(!1),T(new F(_)),b.setBounds(l.firstLineError,s.lastLineError),F}}function en(t){switch(t){case-2:return[]
case-3:return{}
case-6:return new Map}}function nn(){return this._length}function rn(){return this._promise}function on(){return null===this._values}function an(t){this._values=null,this._promise._fulfill(t)}function sn(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())}function cn(t){this._values=null,this._promise._rejectCallback(t,!1)}function ln(t,e){return this._values[e]=t,++this._totalResolved>=this._length&&(this._resolve(this._values),!0)}function un(){return this._cancel(),!0}function pn(t){return this._totalResolved++,this._reject(t),!0}function fn(){return!0}function hn(t){return t}function _n(t,e,n){"use strict"
e.exports=function(e,n,r,i,o){var a=t("./util")
a.isArray
function s(t){var r=this._promise=new e(n)
t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return a.inherits(s,o),s.prototype.length=nn,s.prototype.promise=rn,s.prototype._init=function t(n,o){var s=r(this._values,this._promise)
if(s instanceof e){var c=(s=s._target())._bitField
if(this._values=s,0==(50397184&c))return this._promise._setAsyncGuaranteed(),s._then(t,this._reject,void 0,this,o)
if(0==(33554432&c))return 0!=(16777216&c)?this._reject(s._reason()):this._cancel()
s=s._value()}if(null!==(s=a.asArray(s)))0!==s.length?this._iterate(s):-5===o?this._resolveEmptyArray():this._resolve(en(o))
else{var l=i("expecting an array or an iterable object but got "+a.classString(s)).reason()
this._promise._rejectCallback(l,!1)}},s.prototype._iterate=function(t){var n=this.getActualLength(t.length)
this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values
for(var i=this._promise,o=!1,a=null,s=0;s<n;++s){var c=r(t[s],i)
a=c instanceof e?(c=c._target())._bitField:null,o?null!==a&&c.suppressUnhandledRejections():null!==a?0==(50397184&a)?(c._proxy(this,s),this._values[s]=c):o=0!=(33554432&a)?this._promiseFulfilled(c._value(),s):0!=(16777216&a)?this._promiseRejected(c._reason(),s):this._promiseCancelled(s):o=this._promiseFulfilled(c,s)}o||i._setAsyncGuaranteed()},s.prototype._isResolved=on,s.prototype._resolve=an,s.prototype._cancel=sn,s.prototype._reject=cn,s.prototype._promiseFulfilled=ln,s.prototype._promiseCancelled=un,s.prototype._promiseRejected=pn,s.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values
if(this._cancel(),t instanceof e)t.cancel()
else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},s.prototype.shouldCopyValues=fn,s.prototype.getActualLength=hn,s}}function dn(t,e,n,r,i){for(var o=0;o<i;++o)n[o+r]=t[o+e],t[o+e]=void 0}function vn(t){this._capacity=t,this._length=0,this._front=0}function yn(t){return this._capacity<t}function gn(t){var e=this.length()
this._checkCapacity(e+1),this[this._front+e&this._capacity-1]=t,this._length=e+1}function mn(t,e,n){var r=this.length()+3
if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n)
var i=this._front+r-3
this._checkCapacity(r)
var o=this._capacity-1
this[i+0&o]=t,this[i+1&o]=e,this[i+2&o]=n,this._length=r}function bn(){var t=this._front,e=this[t]
return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e}function Cn(){return this._length}function wn(t){this._capacity<t&&this._resizeTo(this._capacity<<1)}function En(t){var e=this._capacity
this._capacity=t,dn(this,0,this,e,this._front+this._length&e-1)}function kn(t,e,n){"use strict"
vn.prototype._willBeOverCapacity=yn,vn.prototype._pushOne=gn,vn.prototype.push=mn,vn.prototype.shift=bn,vn.prototype.length=Cn,vn.prototype._checkCapacity=wn,vn.prototype._resizeTo=En,e.exports=vn}function jn(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}function Fn(){var t=document.createElement("div"),e={attributes:!0},n=!1,r=document.createElement("div")
new MutationObserver(function(){t.classList.toggle("foo"),n=!1}).observe(r,e)
return function(i){var o=new MutationObserver(function(){o.disconnect(),i()})
o.observe(t,e),n||(n=!0,r.classList.toggle("foo"))}}function Tn(t){setImmediate(t)}function Pn(t){setTimeout(t,0)}function Sn(t,e,n){"use strict"
var r,i=t("./util"),o=jn,a=i.getNativePromise()
if(i.isNode&&"undefined"==typeof MutationObserver){var s=global.setImmediate,c=process.nextTick
r=i.isRecentNode?function(t){s.call(global,t)}:function(t){c.call(process,t)}}else if("function"==typeof a&&"function"==typeof a.resolve){var l=a.resolve()
r=function(t){l.then(t)}}else r="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?"undefined"!=typeof setImmediate?Tn:"undefined"!=typeof setTimeout?Pn:o:Fn()
e.exports=r}function xn(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}function Rn(){return this._settledValueField}function On(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n")
return this._settledValue()}function An(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n")
return this._settledValue()}function In(){return 0!=(33554432&this._bitField)}function Ln(){return 0!=(16777216&this._bitField)}function Nn(){return 0==(50397184&this._bitField)}function Un(){return 0!=(50331648&this._bitField)}function Bn(){return 0!=(8454144&this._bitField)}function Hn(){return 65536==(65536&this._bitField)}function Dn(){return this._target().__isCancelled()}function Vn(){return 0!=(8454144&this._target()._bitField)}function Qn(){return this._settledValue()}function qn(){return this._unsetRejectionIsUnhandled(),this._settledValue()}function Mn(t){xn.prototype._settledValue=Rn
var e=xn.prototype.value=On,n=xn.prototype.error=xn.prototype.reason=An,r=xn.prototype.isFulfilled=In,i=xn.prototype.isRejected=Ln,o=xn.prototype.isPending=Nn,a=xn.prototype.isResolved=Un
xn.prototype.isCancelled=Bn,t.prototype.__isCancelled=Hn,t.prototype._isCancelled=Dn,t.prototype.isCancelled=Vn,t.prototype.isPending=function(){return o.call(this._target())},t.prototype.isRejected=function(){return i.call(this._target())},t.prototype.isFulfilled=function(){return r.call(this._target())},t.prototype.isResolved=function(){return a.call(this._target())},t.prototype.value=function(){return e.call(this._target())},t.prototype.reason=function(){var t=this._target()
return t._unsetRejectionIsUnhandled(),n.call(t)},t.prototype._value=Qn,t.prototype._reason=qn,t.PromiseInspection=xn}function Gn(t,e,n){"use strict"
e.exports=Mn}function Wn(t){return t.then}function $n(t,e,n){"use strict"
e.exports=function(e,n){var r=t("./util"),i=r.errorObj,o=r.isObject
var a={}.hasOwnProperty
return function(t,s){if(o(t)){if(t instanceof e)return t
var c=function(t){try{return Wn(t)}catch(t){return i.e=t,i}}(t)
if(c===i){s&&s._pushContext()
var l=e.reject(c.e)
return s&&s._popContext(),l}if("function"==typeof c)return function(t){try{return a.call(t,"_promise0")}catch(t){return!1}}(t)?(l=new e(n),t._then(l._fulfill,l._reject,void 0,l,null),l):function(t,o,a){var s=new e(n),c=s
a&&a._pushContext(),s._captureStackTrace(),a&&a._popContext()
var l=!0,u=r.tryCatch(o).call(t,function(t){s&&(s._resolveCallback(t),s=null)},function(t){s&&(s._rejectCallback(t,l,!0),s=null)})
return l=!1,s&&u===i&&(s._rejectCallback(u.e,!0,!0),s=null),c}(t,c,s)}return t}}}function zn(t,e){var n={}.hasOwnProperty
function r(){for(var r in this.constructor=t,this.constructor$=e,e.prototype)n.call(e.prototype,r)&&"$"!==r.charAt(r.length-1)&&(this[r+"$"]=e.prototype[r])}return r.prototype=e.prototype,t.prototype=new r,t.prototype}function Xn(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t}function Kn(t){return"function"==typeof t||"object"===r(t)&&null!==t}function Jn(t,e){var n,r=t.length,i=new Array(r+1)
for(n=0;n<r;++n)i[n]=t[n]
return i[n]=e,i}function Mt(t){throw t}function Yn(){}function Zn(t,e,n){for(var r=new Array(t),i=0;i<t;++i)r[i]=e+i+n
return r}function tr(t){try{return t+""}catch(t){return"[no string representation]"}}function er(t){return t instanceof Error||null!==t&&"object"===r(t)&&"string"==typeof t.message&&"string"==typeof t.name}function nr(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational)}function rr(t){return{}.toString.call(t)}function ir(t){return Array.from(t)}function or(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;)n.push(e.value)
return n}function ar(){}function sr(){if("function"==typeof Promise)try{var t=new Promise(ar)
if("[object Promise]"==={}.toString.call(t))return Promise}catch(t){}}function cr(t,e){return t.bind(e)}function lr(){var t=process.versions.node.split(".").map(Number)
return 0===t[0]&&t[1]>10||t[0]>0}!function(e){if("object"==(void 0===t?"undefined":r(t))&&void 0!==n)n.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var i
"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self&&(i=self),i.Promise=e()}}(function(){var t,e,n
return i({1:[w,{"./queue":17,"./schedule":18,"./util":21}],2:[S,{}],3:[x,{"./promise":15}],4:[V,{"./util":21}],5:[Q,{"./es5":10,"./util":21}],6:[K,{}],7:[Qt,{"./errors":9,"./es5":10,"./util":21}],8:[zt,{}],9:[Xt,{"./es5":10,"./util":21}],10:[ne,{}],11:[le,{"./catch_filter":5,"./util":21}],12:[_e,{"./util":21}],13:[de,{"./util":21}],14:[ve,{"./errors":9,"./es5":10,"./util":21}],15:[tn,{"./async":1,"./bind":2,"./cancel":4,"./catch_filter":5,"./context":6,"./debuggability":7,"./direct_resolve":8,"./errors":9,"./es5":10,"./finally":11,"./join":12,"./method":13,"./nodeback":14,"./promise_array":16,"./synchronous_inspection":19,"./thenables":20,"./util":21}],16:[_n,{"./util":21}],17:[kn,{}],18:[Sn,{"./util":21}],19:[Gn,{}],20:[$n,{"./util":21}],21:[function(t,e,n){"use strict"
var i=t("./es5"),o="undefined"==typeof navigator,a={e:{}},s,c="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==this?this:null
function l(){try{var t=s
return s=null,t.apply(this,arguments)}catch(t){return a.e=t,a}}function u(t){return s=t,l}var p=zn
function f(t){return Xn(t)?new Error(tr(t)):t}function h(t,e,n){if(!i.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0
var r=Object.getOwnPropertyDescriptor(t,e)
return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function _(t,e,n){if(Xn(t))return t
var r={value:n,configurable:!0,enumerable:!1,writable:!0}
return i.defineProperty(t,e,r),t}var d=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0
return!1}
if(i.isES5){var n=Object.getOwnPropertyNames
return function(t){for(var r=[],o=Object.create(null);null!=t&&!e(t);){var a
try{a=n(t)}catch(t){return r}for(var s=0;s<a.length;++s){var c=a[s]
if(!o[c]){o[c]=!0
var l=Object.getOwnPropertyDescriptor(t,c)
null!=l&&null==l.get&&null==l.set&&r.push(c)}}t=i.getPrototypeOf(t)}return r}}var r={}.hasOwnProperty
return function(n){if(e(n))return[]
var i=[]
t:for(var o in n)if(r.call(n,o))i.push(o)
else{for(var a=0;a<t.length;++a)if(r.call(t[a],o))continue t
i.push(o)}return i}}(),v=/this\s*\.\s*\S+\s*=/
function y(t){try{if("function"==typeof t){var e=i.names(t.prototype),n=i.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),o=v.test(t+"")&&i.names(t).length>0
if(n||r||o)return!0}return!1}catch(t){return!1}}function g(t){Yn.prototype=t
var e=new Yn
function n(){return r(e.foo)}return n(),n(),t}var m=/^[a-z$_][a-z$_0-9]*$/i
function b(t){return m.test(t)}function C(t){try{_(t,"isOperational",!0)}catch(t){}}function w(t){return er(t)&&i.propertyIsWritable(t,"stack")}function E(t){if(w(t))return t
try{throw new Error(tr(t))}catch(t){return t}}function k(t){return w(t)?t:new Error(tr(t))}var j="stack"in new Error?k:E
function F(t,e,n){for(var r=i.names(t),o=0;o<r.length;++o){var a=r[o]
if(n(a))try{i.defineProperty(e,a,i.getDescriptor(t,a))}catch(t){}}}var T=function(t){return i.isArray(t)?t:null}
function P(t){return i.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?S(t):null}if("undefined"!=typeof Symbol&&Symbol.iterator){var S="function"==typeof Array.from?ir:or
T=P}var x="undefined"!=typeof process&&"[object process]"===rr(process).toLowerCase(),R="undefined"!=typeof process&&void 0!==process.env
function O(t){return R?process.env[t]:void 0}var A={isClass:y,isIdentifier:b,inheritedDataKeys:d,getDataPropertyOrDefault:h,thrower:Mt,isArray:i.isArray,asArray:T,notEnumerableProp:_,isPrimitive:Xn,isObject:Kn,isError:er,canEvaluate:o,errorObj:a,tryCatch:u,inherits:p,withAppended:Jn,maybeWrapAsError:f,toFastProperties:g,filledRange:Zn,toString:tr,canAttachTrace:w,ensureErrorObject:j,originatesFromRejection:nr,markAsOriginatingFromRejection:C,classString:rr,copyDescriptors:F,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:x,hasEnvVariables:R,env:O,global:c,getNativePromise:sr,domainBind:cr}
A.isRecentNode=A.isNode&&lr(),A.isNode&&A.toFastProperties(process)
try{throw new Error}catch(t){A.lastLineError=t}e.exports=A},{"./es5":10}]},{},[3])(3)}),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)})
,(function(n,e,t){function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var i=e(0),a=window.location.origin,c="".concat(i.origin)+"/e/application-sha256-608f66e3fad57aa15b5576a76f33fb0a6b17a842e54ad21616683213a5173f91"+"#".concat(encodeURIComponent(a))
function u(n){return r({},n,function(t){for(var o=arguments.length,r=new Array(o>1?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i]
return e(1).get(t).then(function(e){var o,i=e.options
return(o=i.methods)[n].apply(o,[t,i].concat(r))})})}t.exports=e(2)(function(n){i.bodyPromise.then(function(t){var r=i.div(t,{width:0,height:0,position:"fixed",left:0,top:0,overflow:"hidden"}),a=i.iframe(r,{src:c,name:"runkit-application",style:{width:0,height:"100vh"}}).iframe,f=u,l=e(3)({name:"main",targetOrigin:i.origin,targetWindow:a.contentWindow,methods:o({ready:function(){n(l)}},f("onURLChanged"),f("onEvaluate"),f("onSave"),f("onResize"))})})})})
,(function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t(0)
var a,c=document.currentScript||(a=document.getElementsByTagName("script"))[a.length-1]
n.exports.enclosingScript=c,n.exports.div=function(e,t){return u("div",e,{style:t})}
var i={padding:0,margin:0,border:0,height:0,width:0,background:"transparent"},d={frameBorder:0,allowTransparency:"true"}
function u(e,t,n){var r=document.createElement(e)
if(n)for(var o=Object.keys(n),a=0;a<o.length;a++){var c=o[a],i=n[c]
if("style"!==c)r[c]=i
else for(var d=Object.keys(i),u=0;u<d.length;u++){var l=d[u]
r.style[l]=i[l]}}return t.appendChild(r),r}n.exports.iframe=function(e,n){var o=r({},i,n.style),a=u("iframe",e,r({},d,n,{style:o})),c=t(0)(function(e){return a.addEventListener("load",function t(){a.removeEventListener("load",t),e()})})
return{iframe:a,loaded:c}}
var l=function(){return"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState}
n.exports.onDOMContentLoaded=function(e){return l()?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function(){return e()}):void document.attachEvent("onreadystatechange",function t(){l()&&(document.detachEvent("onreadystatechange",t),e())})},n.exports.removeSiblings=function(e){for(var t=e.parentNode,n=t.childNodes,r=n.length-1;r>=0;--r)n[r]!==e&&t.removeChild(n[r])},n.exports.bodyPromise=t(0)(function e(t){if(document.body)return t(document.body)
requestAnimationFrame(function(){return e(t)})}),n.exports.origin="https://runkit.com"})
,(function(n,e,t){function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e]
return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=e(3),u=e(1),i=e(0)
function c(n){var e=n.iframe.parentNode
e.parentNode.removeChild(e),e.innerHTML=""}var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v,t={next:0,pop:function(n){return[t[n],delete t[n]][0]}}
return{create:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o]
return[t.next,t[t.next]=n.apply(void 0,[t.next++].concat(r))]},pop:function(n){return e(t.pop(n))},get:function(n){return t[n]}}}(h,function(n){return n.then(c)}),f={spent:0,allowed:1/0,queue:[]}
function p(n){return console.error(n)}function l(n){return h.apply(void 0,r(n))}function s(){var n=f.queue
f.spent=0,f.queue=[],n.forEach(l)}function h(n,t,r,o,c){if(!o)return e(2)(function(e,o){return h(n,t,r,e,o)})
if(f.spent<=f.allowed){var a=Date.now(),l="".concat(u.origin,"/e/iframe-sha256-05b5afa65c60a7b7d1f8199ca9189941d81bdcb76a1bd171bce786edfdf4f8cc"),d="runkit-embed-".concat(n),v=r.element,g=r.style,y=u.iframe(v,{src:l,name:d,style:g})
function m(e){return e.invoke("create",n,d,t).catch(p)}y.options=r,y.loaded.then(function(){return i.then(m)}),f.spent+=Date.now()-a,o(y)}else{if(f.queue.push([n,t,r,o,c]),1!==f.queue.length)return
requestAnimationFrame(s)}}function d(n,e){return e}function v(){}t.exports.get=function(n){return a.get(n)},t.exports.create=function(n,e){return a.create(n,e)[0]},t.exports.invoke=function(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u]
return new o(function(t,o){function u(u){return u.invoke.apply(u,[e,n].concat(r)).then(t,o)}function c(){return i.then(u)}return a.get(n).then(function(n){n.iframe
return n.loaded.then(c)})})},t.exports.destroy=function(n){a.get(n).then(function(){return a.pop(n)})}})
,(function(t,n,e){e.exports=function t(n){if(!(this instanceof t))return new t(n)
var e={status:"pending",then:[],catch:[]}
this.then=function(t){e.then.push(t)},this.catch=function(t){e.catch.push(t)}
n(r("resolved","then",this),r("rejected","catch",this))
return this
function r(t,n,r){return function(i){if("pending"!==e.status)return console.error("ipromise settled twice.")
function c(t){return t(i)}for(e.status=t,e.value=i;e[n].length>0;){var s=e[n]
e[n]=[],s.forEach(c)}r[n]=function(t){return t(i)}}}}})
,(function(t,e,n){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0
try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e]
return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c,u=e(2),l=e(1),s=e(3),f=s.events,h=s.deprecationWarning,d=s.toDefaultProperties,p=s.methods,m=e(0),v={width:"calc(100% + 200px)",marginLeft:"calc(-100px)"},y=(i({},v,{height:"100%"}),f.map(function(t){return t.handlerName})),b=function(t,e){try{for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o]
t[e]&&t[e].apply(t,[t].concat(r))}catch(t){console.error(t)}},g=Object.assign.apply(Object,o((c={onURLChanged:function(t,e,n){var r=e.notebook
r.URL=n.shareableURL,r.endpointURL=n.endpointURL},onResize:function(t,e,n){if(l.get(t).then(function(t){var e=t.iframe
return"100%"!==e.style.height&&(e.style.height=n.height+"px")}),e.loaded)return
e.clearParentContents&&m.removeSiblings(e.element)
e.loaded=!0,e.element.firstChild.setAttribute("data-loaded",!0),e.element.style.height="",b(e.notebook,"onLoad")}},y.map(function(t){return a({},t,function(t,e){return function(n,r){for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a]
return e&&e.apply(void 0,[n,r].concat(i)),b.apply(void 0,[r.notebook,t].concat(i))}}(t,c[t]))})))),w="runkit.com"===window.location.hostname
n.exports=function(t){var e=i({},d(t),L(t),U(t),{hostURL:w&&hasOwnProperty.call(t,"hostURL")?t.hostURL:window.location.href}),n=!0,r=!1,o=void 0
try{for(var a,c=f[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var u=a.value.handlerName
this[u]=t[u]||void 0}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}var s=t.element
if(!(s instanceof Element))throw Error("You must provide a valid parent element for the embedded  notebook.\nSee https://runkit.com/docs/embed for documentation.")
this.UUID=l.create(e,{loaded:!1,methods:g,element:m.div(s,{height:0,padding:0,margin:0,border:0}),style:v,clearParentContents:!!t.clearParentContents,notebook:this}),this.name="runkit-embed-".concat(this.UUID),this.URL=null,this.endpointURL=null,window.RunKit["$".concat(this.name)]=this}
var U=function(){var t=Object.hasOwnProperty,e=/^[+-]?(?:\d+|\d*\.\d+)(?:e\d+)?$/
return function(n){if(!t.call(n,"minHeight")||"0"===n.minHeight)return{}
var r=n.minHeight
return"number"==typeof r||e.test(r)?(console.error("Unitless minHeight is deprecated, please use a "+'pixel value in the future: "'.concat(r,'px" instead ')+"of ".concat(JSON.stringify(r),".")),{minHeight:"".concat(r,"px")}):{}}}()
function O(t){return[t,t.indexOf("=")]}function A(t){var e=r(t,2)
e[0]
return e[1]>-1}function R(t){var e=r(t,2),n=e[0],o=e[1]
return[n.substr(0,o),n.substr(o+1)]}function j(t){var e=r(t,2)
return{name:e[0],value:e[1]}}var L=function(){var t=Object.hasOwnProperty
return function(e){return t.call(e,"env")&&Array.isArray(e.env)&&!t.call(e,"environment")?{environment:e.env.map(O).filter(A).map(R).map(j)}:{}}}()
n.exports.prototype=Object.assign.apply(Object,o(function(t,e){return t.map(function(t){return!t.static&&a({},t.name,function(){var n=this.UUID
if(void 0===n)throw Error("Attempt to call a method on a destroyed notebook.")
for(var r=t.name,i=t.parameterSchemas,a=i.length-1,c=arguments.length,s=new Array(c),f=0;f<c;f++)s[f]=arguments[f]
var d=s[a],p=s.slice(0,a),m=h("method",t)&&u.resolve()||e[r]&&u.resolve(e[r].apply(this,p))||l.invoke.apply(l,[n,r].concat(o(p)))
return"function"==typeof d&&m.then(function(t){return d(t)}),m})})}(p,{destroy:function(){var t=this.UUID,e=this.name
return delete window.RunKit["$".concat(e)],this.name=void 0,this.UUID=void 0,this.URL=void 0,this.endpointURL=void 0,l.invoke(t,"destroy").then(function(){return l.destroy(t)})}})))})
,(function(e,t,r){function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t]
return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0
try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e,t){if(null==e)return{}
var r,n,a=function(e,t){if(null==e)return{}
var r,n,a={},o=Object.keys(e)
for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r)
"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=Object.prototype.hasOwnProperty,f=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},p=t(0)
function l(e){return!e.disabled}var s=function(e){return Object.keys(e).map(function(t){return c({name:t},e[t])}).filter(l)}
function m(e,t){return e[t]=!0,e}var d=function(e){return e.reduce(m,{})},y=s(p.events).map(function(e){var t=e.name,r=e.deprecatedDatasetKey
return c({name:t,handlerName:"on".concat(f(t)),datasetAttribute:"data-on".concat(t.toLowerCase())},r&&{deprecatedDatasetAttribute:"data-".concat(r)})}),b=d(["boolean","integer","null","number","string"]),v=function e(t){return b[t.type]||"#/definitions/SemVerRange"===t.$ref||"#/definitions/CSSLengthPixels"===t.$ref||t.oneOf&&t.oneOf.every(e)},g=s(p.properties).map(function(e){var t=e.generate,r=o(e,["generate"])
return c({},r,{scalar:v(r.schema),generate:d(t)})}),h=g.filter(function(e){return e.generate.init})
function O(e){return e}var j=function(e,t){var r=t.name,n=t.deprecated,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O
return!!n&&!console.error("The ".concat(e,' "').concat(a(r),'" has been deprecated. Please use ')+'"'.concat(a(n.replacement),'" instead. Find out more at ')+"".concat(n.reference))}
function S(e){return[e.name,e]}function w(e,t){var r=a(t,2),n=r[0],o=r[1]
return e[n]=o,e}var P={type:"object",properties:Object.assign.apply(Object,n(h.filter(function(e){return!e.deprecated}).map(function(e){return i({},e.name,e.schema)}))),required:h.map(function(e){return e.name}),additionalProperties:!1},A={$ref:"#/definitions/ExistingEmbedUUID"},x=function(e){return g.filter(function(t){return t.generate[e]}).map(function(t){var r,n=t.name,a=t.deprecated,u=t.schema
return i(r={name:"".concat(e).concat(f(n))},"".concat(e,"terOf"),n),i(r,"deprecated",a&&function(e,t){var r=t.replacement,n=o(t,["replacement"])
return c({replacement:"".concat(e).concat(f(r))},n)}(e,a)),i(r,"parameterSchemas","get"===e?[A]:[A,u]),r})},E=x("set"),D=x("get"),I=s(p.methods).map(function(e){return e.static?e:(r=(t=e).parameterSchemas,c({},o(t,["parameterSchemas"]),{parameterSchemas:[A].concat(n(r))}))
var t,r})
r.exports={events:y,methods:[].concat(n(E),n(D),n(I)),properties:g,initializationProperties:h,initializationPropertiesSchema:P,toDefaultProperties:function(e){return h.map(S).filter(function(t){var r=a(t,2),n=r[0],o=r[1]
return!o.deprecated||u.call(e,n)&&!j("property",o)}).map(function(t){var r=a(t,2),n=r[0],o=r[1]
return[n,void 0!==e[n]?e[n]:o.default]}).reduce(w,{})},deprecationWarning:j}})
,(function(r,t,e){function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=[],n=!0,i=!1,a=void 0
try{for(var u,o=r[Symbol.iterator]();!(n=(u=o.next()).done)&&(e.push(u.value),!t||e.length!==t);n=!0);}catch(r){i=!0,a=r}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return e}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=t(0),u=a.deprecationWarning,o=a.events,f=a.initializationProperties,c=Array.prototype.filter
function l(r){return"".concat(r.toLowerCase())}function s(r){return"-".concat(r.toLowerCase())}var p=function(r){return"data-".concat(r.replace(/^(UI|HTML|XML|[A-Z])/g,l).replace(/[A-Z]/g,s))},v={}
function y(r){var t=r.name
return/^data-env-.*/.test(t)}function h(r){var t=r.name,e=r.value
return[t.replace("data-env-","").toLowerCase(),e]}function m(r){var t=i(r,2)
return{name:t[0],value:t[1]}}function d(r){var t=i(r,2)
t[0]
return t[1]!==v}function g(r,t){var e=i(t,2),a=e[0],u=e[1]
return Object.assign(r,n({},a,u))}function b(r){return r.scalar}function w(r){var t=i(r,2)
t[0]
return t[1]!==v}function O(r,t){var e=i(t,2),a=e[0],u=e[1]
return Object.assign(r,n({},a,u))}function T(r,t){var e=r.datasetAttribute,n=r.deprecatedDatasetAttribute,i=n?u(n):v
i!==v&&console.error("".concat(n," is deprecated, use ")+"".concat(e," instead."))
var a=u(e)
return a===v?i:a
function u(r){if(!t.hasAttribute(r))return v
var e=t.getAttribute(r)
return function(){var r
return(r=window)[e].apply(r,arguments)}}}function A(r,t){var e=r.name,n=r.schema,i=p(e)
return!t.hasAttribute(i)||u("attribute",r,p)?v:function(r,t,e){if("string"===r.type||"#/definitions/SemVerRange"===r.$ref||"#/definitions/CSSLengthPixels"===r.$ref)return e
if("null"===r.type)return function(r,t,e){if(""===e)return null
throw TypeError("".concat(t," must be null (empty string)."))}(0,t,e)
if("boolean"===r.type)return function(r,t,e){if(void 0===e)return r.default
if("true"===e)return!0
if("false"===e)return!1
throw TypeError("".concat(t,' must be either "true" or "false".'))}(r,t,e)
if("integer"===r.type)return function(r,t,e){var n=parseFloat(e)
if(n!=n||n!==Math.floor(n))throw TypeError("".concat(t," must be an integer."))
return n}(0,t,e)
if(r.oneOf){var n=r.oneOf.map(function(r){return function(){return S(r,t,e)}}).map(E),i=(n.filter(L),n.length)
if(i.length<0)throw n[0][1]
if(i.length>1)throw TypeError("".concat(t," matched to many valid types."))
return n[0][1]}throw Error("DONT KNOW "+r.type)}(n,e,t.getAttribute(i))}e.exports=function(r){var t=c.call(r.attributes,y).map(h).map(m),e=o.map(function(t){return[t.handlerName,T(t,r)]}).filter(d).reduce(g,{}),n=Object.assign({},e,{environment:t})
return f.filter(b).map(function(t){return[t.name,A(t,r)]}).filter(w).reduce(O,n)}
var E=function(r){try{return[!0,r()]}catch(r){return[!1,r]}}
function L(r){var t=i(r,2),e=t[0]
t[1]
return e}function S(r,t,e){if(r.type==="string"||r.$ref==="#/definitions/SemVerRange"||r.$ref==="#/definitions/CSSLengthPixels")return e
if(r.type==="null")return C(r,t,e)
if(r.type==="boolean")return j(r,t,e)
if(r.type==="integer")return N(r,t,e)
function n(r){return function(){return S(r,t,e)}}if(!!r.oneOf){var i=r.oneOf.map(n).map(E)
var a=i.filter(L)
var u=i.length
if(u.length<0)throw i[0][1]
if(u.length>1)throw TypeError("".concat(t," matched to many valid types."))
return i[0][1]}throw Error("DONT KNOW "+r.type)}function C(r,t,e){if(e==="")return null
throw TypeError("".concat(t," must be null (empty string)."))}function N(r,t,e){var n=parseFloat(e)
if(n!==n||n!==Math.floor(n))throw TypeError("".concat(t," must be an integer."))
return n}function j(r,t,e){if(e===void 0)return r.default
if(e==="true")return true
if(e==="false")return false
throw TypeError("".concat(t,' must be either "true" or "false".'))}})
,function(exports, require, module) { module.exports = {
    "events": {

        "evaluate": {
            "description": "Called when a cell is evaluated."
        },

        "load": {
            "description": "Called when the Embed has fully loaded. The function will be passed a reference to the Embed.",
            "deprecatedDatasetKey": "load-callback",
            "dataSchema": {
                "type": "NotebookEmbed"
            }
        },

        "resize": {
            "description": "Called when the embed cell is resized.",
            "dataSchema": {
                "type": "object",
                "properties": {
                    "height": {
                        "type": "integer",
                        "minimum": 0
                    }
                },
                "additionalProperties": false
            }
        },

        "save": {
            "description": "Called when the embed is saved."
        },

        "URLChanged": {
            "description": "Called when the shareable URL or endpoint URL changes.",
            "dataSchema": {
                "type": "object",
                "properties": {
                    "shareableURL": {
                        "type": "string"
                    },
                    "endpointURL": {
                        "type": "string"
                    }
                },
                "additionalProperties": false
            }
        }
    },

    "properties": {

        "autoGrow": {
            "schema": { "type": "boolean" },
            "default": true,
            "generate": ["get", "set", "init"],
            "disabled": true
        },

        "endpointURL": {
            "description": "In Endpoint mode, this is the url that will run this code when visited. See https://runkit.com/docs/endpoint.",
            "schema": { "type": "string" },
            "generate": ["get"]
        },

        "env": {
            "deprecated": {
                "replacement": "environment",
                "reference": "https://runkit.com/docs/embed"
            },
            "schema": {
                "type": "array",
                "items": { "type": "string" }
            },
            "generate": ["init"]
        },

        "environment": {
            "description": "Environment variables for the execution environment. Available under `process.env`.",
            "schema": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": { "type": "string" },
                        "value": { "type": "string" }
                    },
                    "additionalProperties": false
                }
            },
            "default": [],
            "generate": ["get", "set", "init"]
        },

        "evaluateOnLoad": {
            "description": "Evaluate the Embed when it finishes loading.",
            "schema": { "type": "boolean" },
            "default": false,
            "generate": ["get", "init"]
        },

        "gutterStyle": {
            "description": "Where the line numbers should appear.",
            "schema": {
                "type": "string",
                "enum": ["inside", "none", "outside"]
            },
            "default": "outside",
            "generate": ["get", "set", "init"]
        },

        "hidesActionButton": {
            "description": "Hides the \"▶ Run\" button. In Endpoint mode, Hides the endpoint URL.",
            "schema": { "type": "boolean" },
            "default": false,
            "generate": ["get", "set", "init"]
        },

        "hidesEndpointLogs": {
            "description": "In Endpoint mode, Hides the logs that would appear when hitting the Endpoint. See https://runkit.com/docs/endpoint.",
            "schema": { "type": "boolean" },
            "default": false,
            "generate": ["get", "set", "init"]
        },

        "hostURL": {
            "private": true,
            "schema": { "type": "string" },
            "default": "",
            "generate": ["init"]
        },

        "minHeight": {
            "description": "Minimum height of the embed in pixels. E.g. \"100px\".",
            "schema": { "$ref": "#/definitions/CSSLengthPixels" },
            "default": "73px",
            "generate": ["get", "set", "init"]
        },

        "mode": {
            "description": "When in default mode RunKit Embeds behave like a regular notebook and display outputs after each evaluation. When the Embed is in endpoint mode the outputs are replaced by endpoint logs and a URL is provided to run the Embed code. See https://runkit.com/docs/endpoint.",
            "schema": {
                "type": "string",
                "enum": ["endpoint", "default"]
            },
            "default": "default",
            "generate": ["get", "set", "init"]
        },

        "nodeVersion": {
            "description": "A semver range that the node engine should satisfy, e.g. \"4.0.x\" or \"> 6.9.2\".",
            "schema": { "$ref": "#/definitions/SemVerRange" },
            "default": "10.x.x",
            "generate": ["get", "set", "init"]
        },

        "source": {
            "description": "The source code of the Embed.",
            "schema": { "type": "string" },
            "default": "",
            "generate": ["get", "set", "init"]
        },


        "packageTimestamp": {
            "description": "The timestamp in UTC milliseconds to recreate the state of package availability. No packages published to npm after this time are available in this embed. Useful for reproducing bugs, or guaranteeing dependency versions. By default the timestamp is set to the time the embed is created.",
            "schema": {
                "oneOf": [
                    { "type": "integer", "minimum": 0 },
                    { "type": "null" }
                ]
            },
            "default": null,
            "generate": ["get", "set", "init"]
        },

        "preamble": {
            "description": "Code in the preamble field will not be displayed in the embed, but will be executed before running the code in the embed. For example, libraries that use RunKit for documentation often require their package in the preamble to avoid clutter in the embed code.",
            "schema": { "type": "string" },
            "default": "",
            "generate": ["get", "set", "init"]
        },

        "readOnly": {
            "schema": { "type": "boolean" },
            "default": false,
            "generate": ["get", "set", "init"]
        },

        "shareableURL": {
            "description": "A URL that can be used to share the Embed with other users.",
            "schema": { "type": "string" },
            "generate": ["get"]
        },

        "requirePath": {
            "description": "A path that can be used to require this Embed as a module in other Embeds or RunKit Notebook.",
            "schema": { "type": "string" },
            "generate": ["get"]
        },

        "styles": {
            "deprecated":
            {
                "replacement": "theme",
                "reference": "https://runkit.com/docs/embed"
            },
            "schema": {
                "oneOf": [
                    { "type": "object" },
                    { "type": "null" }
                ]
            },
            "default": null,
            "generate": ["get", "set", "init"]
        },

        "syntaxTheme": {
            "deprecated":
            {
                "replacement": "theme",
                "reference": "https://runkit.com/docs/embed"
            },
            "schema": { "type": "string" },
            "default": "runkit-light",
            "generate": ["get", "set", "init"]
        },

        "tabSize": {
            "schema": { "type": "integer", "minimum": 0 },
            "default": 4,
            "generate": ["get", "set", "init"]
        },

        "theme": {
            "schema": { "type": "string" },
            "private": true,
            "default": "runkit-light",
            "generate": ["get", "set", "init"]
        },

        "title": {
            "description": "The title of the RunKit Notebook when it is saved on RunKit.",
            "schema": { "type": "string" },
            "default": "",
            "generate": ["get", "set", "init"]
        },

        "UITheme": {
            "deprecated":
            {
                "replacement": "theme",
                "reference": "https://runkit.com/docs/embed"
            },
            "schema": { "type": "string" },
            "default": "runkit-light",
            "generate": ["get", "set", "init"]
        },

        "UIStyles": {
            "deprecated":
            {
                "replacement": "theme",
                "reference": "https://runkit.com/docs/embed"
            },
            "schema": {
                "oneOf": [
                    { "type": "object", "additionalProperties": false },
                    { "type": "null" }
                ]
            },
            "default": null,
            "generate": ["get", "set", "init"]
        }
    },

    "methods": {
        "create": {
            "static": true,
            "parameterSchemas": [
                { "$ref": "#/definitions/NonExistingEmbedUUID" },
                { "type": "string" },
                { "$ref": "#/definitions/InitializationProperties" }
            ]
        },

        "destroy": {
            "parameterSchemas": []
        },

        "evaluate": {
            "description": "Force the Embed to evaluate.",
            "parameterSchemas": []
        }
    }
}
},(function(e,n,t){var r=n(1),o=n(0).onDOMContentLoaded
function a(e){return new r(e)}function c(e){var n=e.textContent||e.innerText||""
if(""===n)return!1
var t=n.replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/^(( )*\n)+/,"").split("\n"),r=t.length>0&&t[0],o=r?r.length-r.replace(/^\s+/,"").length:0,a=o>0&&new RegExp("^ {".concat(o,"}"))
return t.map(function(e){return a?e.replace(a,""):e}).join("\n").trim()}t.exports={createNotebook:a,sourceFromElement:c,createFromScriptTag:function(e){o(function(){var t=e.getAttribute("data-element-id")
if(t){var r=document.getElementById(t),o=c(r),i=Object.assign({},n(2)(e),{element:r,clearParentContents:!0},!1!==o&&{source:o})
return a(i)}})},version:"2.0.0"}})
,(function(i,n){window.RunKit=window.RunKit||n(1),window.Tonic=window.Tonic||window.RunKit,window.RunKit.createFromScriptTag(n(0).enclosingScript)})
,(function(e,r,n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var u=r(1),a=r(0),c=Object.prototype.hasOwnProperty,i=[Error,ReferenceError,SyntaxError,TypeError],l={type:-1},f=function(e){return e()}
function s(e,r,n,t,o){t.queue.length<=0&&a(function(){n({name:"invoke",invocations:t.queue.slice()}),t.queue=[]})
var c=t.nextUUID++
if(t.queue.push({UUID:c,oneWay:e,method:r,args:o}),!e)return new u(function(e,r){return t.callbacks[c]={resolve:e,reject:r}})}function y(e){return!v(e)}function v(e){if(!c.call(e,"value"))return!1
var r=e.value
return null!==r&&"object"===t(r)&&"function"==typeof r.then}function p(e,r){try{if(!(r instanceof Error))return{UUID:e,error:l}
var n=Object.getPrototypeOf(r).constructor
return{UUID:e,error:{type:i.indexOf(n),message:r.message+""}}}catch(r){return{UUID:e,error:l}}}n.exports=function(e){var r=e.name,n=e.targetOrigin,t=e.targetWindow,u=e.methods,a=e.handle,l=function(e){return t.postMessage(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){o(e,r,n[r])})}return e}({__channel:r},e),n)},m={nextUUID:0,queue:[],callbacks:Object.create(null)},b={disconnect:function(){return window.removeEventListener("message",h)},invoke:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t]
return s(!1,e,l,m,n)},invokeOneWay:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t]
return s(!0,e,l,m,n)}}
return window.addEventListener("message",h),b
function h(e){var o=e.origin,s=e.source,b=e.data
if(o===n&&s===t&&b&&b.__channel===r)return"results"===b.name?function(e,r){var n=!0,t=!1,o=void 0
try{for(var u,a=r[Symbol.iterator]();!(n=(u=a.next()).done);n=!0){var l=u.value,f=l.UUID
try{if(c.call(l,"value"))e[f].resolve(l.value)
else{var s=l.error,y=s.type,v=s.message,p=-1===y?new Error("Unknown Error"):new i[y](v)
e[f].reject(p)}}catch(e){}delete e[f]}}catch(e){t=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(t)throw o}}}(m.callbacks,b.results):"invoke"===b.name?(a||f)(function(){return function(e,r,n,t){var o=t.map(function(n){return function(e,r,n){var t=n.UUID,o=n.method,u=n.args
try{if(!r[o])throw TypeError('"'.concat(o,'" is not defined on "').concat(e,'"'))
return{UUID:t,value:r[o].apply(null,u)}}catch(e){return p(t,e)}}(e,r,n)}).filter(function(e,r){return!t[r].oneWay}),u=o.filter(v),a=o.filter(y),c=function(e){return e.length>0&&n({name:"results",results:e})},i=!0,l=!1,f=void 0
try{for(var s,m=function(){var e=s.value,r=e.UUID
e.value.then(function(e){return[{UUID:r,value:e}]}).catch(function(e){return[p(r,e)]}).then(c)},b=u[Symbol.iterator]();!(i=(s=b.next()).done);i=!0)m()}catch(e){l=!0,f=e}finally{try{i||null==b.return||b.return()}finally{if(l)throw f}}c(a)}(r,u,l,b.invocations)}):void 0}}})
,(function(t,e,n){var r,o,i=n.exports={}
function u(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0)
if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0)
try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(t){r=u}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(t){o=c}}()
var l,a=[],f=!1,h=-1
function m(){f&&l&&(f=!1,l.length?a=l.concat(a):h=-1,a.length&&p())}function p(){if(!f){var t=s(m)
f=!0
for(var e=a.length;e;){for(l=a,a=[];++h<e;)l&&l[h].run()
h=-1,e=a.length}l=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t)
if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t)
try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function T(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n]
a.push(new T(t,e)),1!==a.length||f||s(p)},T.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})
,], function (require) {process = require(14);}) })(window)