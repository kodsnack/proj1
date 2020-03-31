goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29600 = arguments.length;
switch (G__29600) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29601 = (function (f,blockable,meta29602){
this.f = f;
this.blockable = blockable;
this.meta29602 = meta29602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29603,meta29602__$1){
var self__ = this;
var _29603__$1 = this;
return (new cljs.core.async.t_cljs$core$async29601(self__.f,self__.blockable,meta29602__$1));
}));

(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29603){
var self__ = this;
var _29603__$1 = this;
return self__.meta29602;
}));

(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29602","meta29602",-411788951,null)], null);
}));

(cljs.core.async.t_cljs$core$async29601.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29601");

(cljs.core.async.t_cljs$core$async29601.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29601");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29601.
 */
cljs.core.async.__GT_t_cljs$core$async29601 = (function cljs$core$async$__GT_t_cljs$core$async29601(f__$1,blockable__$1,meta29602){
return (new cljs.core.async.t_cljs$core$async29601(f__$1,blockable__$1,meta29602));
});

}

return (new cljs.core.async.t_cljs$core$async29601(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29620 = arguments.length;
switch (G__29620) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29630 = arguments.length;
switch (G__29630) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29633 = arguments.length;
switch (G__29633) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31936 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31936) : fn1.call(null,val_31936));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31936) : fn1.call(null,val_31936));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29636 = arguments.length;
switch (G__29636) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___31961 = n;
var x_31962 = (0);
while(true){
if((x_31962 < n__4666__auto___31961)){
(a[x_31962] = x_31962);

var G__31964 = (x_31962 + (1));
x_31962 = G__31964;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29654 = (function (flag,meta29655){
this.flag = flag;
this.meta29655 = meta29655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29656,meta29655__$1){
var self__ = this;
var _29656__$1 = this;
return (new cljs.core.async.t_cljs$core$async29654(self__.flag,meta29655__$1));
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29656){
var self__ = this;
var _29656__$1 = this;
return self__.meta29655;
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29655","meta29655",-1097781518,null)], null);
}));

(cljs.core.async.t_cljs$core$async29654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29654");

(cljs.core.async.t_cljs$core$async29654.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29654.
 */
cljs.core.async.__GT_t_cljs$core$async29654 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29654(flag__$1,meta29655){
return (new cljs.core.async.t_cljs$core$async29654(flag__$1,meta29655));
});

}

return (new cljs.core.async.t_cljs$core$async29654(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29665 = (function (flag,cb,meta29666){
this.flag = flag;
this.cb = cb;
this.meta29666 = meta29666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29667,meta29666__$1){
var self__ = this;
var _29667__$1 = this;
return (new cljs.core.async.t_cljs$core$async29665(self__.flag,self__.cb,meta29666__$1));
}));

(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29667){
var self__ = this;
var _29667__$1 = this;
return self__.meta29666;
}));

(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29666","meta29666",1966530887,null)], null);
}));

(cljs.core.async.t_cljs$core$async29665.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29665");

(cljs.core.async.t_cljs$core$async29665.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29665");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29665.
 */
cljs.core.async.__GT_t_cljs$core$async29665 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29665(flag__$1,cb__$1,meta29666){
return (new cljs.core.async.t_cljs$core$async29665(flag__$1,cb__$1,meta29666));
});

}

return (new cljs.core.async.t_cljs$core$async29665(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29682_SHARP_){
var G__29688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29682_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29688) : fret.call(null,G__29688));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29683_SHARP_){
var G__29689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29683_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29689) : fret.call(null,G__29689));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31993 = (i + (1));
i = G__31993;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32006 = arguments.length;
var i__4790__auto___32007 = (0);
while(true){
if((i__4790__auto___32007 < len__4789__auto___32006)){
args__4795__auto__.push((arguments[i__4790__auto___32007]));

var G__32008 = (i__4790__auto___32007 + (1));
i__4790__auto___32007 = G__32008;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29695){
var map__29697 = p__29695;
var map__29697__$1 = (((((!((map__29697 == null))))?(((((map__29697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29697):map__29697);
var opts = map__29697__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29690){
var G__29691 = cljs.core.first(seq29690);
var seq29690__$1 = cljs.core.next(seq29690);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29691,seq29690__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29720 = arguments.length;
switch (G__29720) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29513__auto___32010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_29778){
var state_val_29780 = (state_29778[(1)]);
if((state_val_29780 === (7))){
var inst_29769 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29795_32011 = state_29778__$1;
(statearr_29795_32011[(2)] = inst_29769);

(statearr_29795_32011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (1))){
var state_29778__$1 = state_29778;
var statearr_29796_32012 = state_29778__$1;
(statearr_29796_32012[(2)] = null);

(statearr_29796_32012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (4))){
var inst_29745 = (state_29778[(7)]);
var inst_29745__$1 = (state_29778[(2)]);
var inst_29746 = (inst_29745__$1 == null);
var state_29778__$1 = (function (){var statearr_29798 = state_29778;
(statearr_29798[(7)] = inst_29745__$1);

return statearr_29798;
})();
if(cljs.core.truth_(inst_29746)){
var statearr_29799_32013 = state_29778__$1;
(statearr_29799_32013[(1)] = (5));

} else {
var statearr_29801_32014 = state_29778__$1;
(statearr_29801_32014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (13))){
var state_29778__$1 = state_29778;
var statearr_29808_32017 = state_29778__$1;
(statearr_29808_32017[(2)] = null);

(statearr_29808_32017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (6))){
var inst_29745 = (state_29778[(7)]);
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29778__$1,(11),to,inst_29745);
} else {
if((state_val_29780 === (3))){
var inst_29773 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29778__$1,inst_29773);
} else {
if((state_val_29780 === (12))){
var state_29778__$1 = state_29778;
var statearr_29817_32021 = state_29778__$1;
(statearr_29817_32021[(2)] = null);

(statearr_29817_32021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (2))){
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29778__$1,(4),from);
} else {
if((state_val_29780 === (11))){
var inst_29760 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
if(cljs.core.truth_(inst_29760)){
var statearr_29819_32022 = state_29778__$1;
(statearr_29819_32022[(1)] = (12));

} else {
var statearr_29820_32024 = state_29778__$1;
(statearr_29820_32024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (9))){
var state_29778__$1 = state_29778;
var statearr_29823_32029 = state_29778__$1;
(statearr_29823_32029[(2)] = null);

(statearr_29823_32029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (5))){
var state_29778__$1 = state_29778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29826_32032 = state_29778__$1;
(statearr_29826_32032[(1)] = (8));

} else {
var statearr_29827_32034 = state_29778__$1;
(statearr_29827_32034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (14))){
var inst_29767 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29829_32035 = state_29778__$1;
(statearr_29829_32035[(2)] = inst_29767);

(statearr_29829_32035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (10))){
var inst_29757 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29830_32036 = state_29778__$1;
(statearr_29830_32036[(2)] = inst_29757);

(statearr_29830_32036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (8))){
var inst_29753 = cljs.core.async.close_BANG_(to);
var state_29778__$1 = state_29778;
var statearr_29833_32039 = state_29778__$1;
(statearr_29833_32039[(2)] = inst_29753);

(statearr_29833_32039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_29835 = [null,null,null,null,null,null,null,null];
(statearr_29835[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_29835[(1)] = (1));

return statearr_29835;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_29778){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_29778);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e29840){if((e29840 instanceof Object)){
var ex__29338__auto__ = e29840;
var statearr_29841_32044 = state_29778;
(statearr_29841_32044[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32047 = state_29778;
state_29778 = G__32047;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_29778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_29778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_29844 = f__29514__auto__();
(statearr_29844[(6)] = c__29513__auto___32010);

return statearr_29844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29854){
var vec__29855 = p__29854;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29855,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29855,(1),null);
var job = vec__29855;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29513__auto___32053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_29863){
var state_val_29864 = (state_29863[(1)]);
if((state_val_29864 === (1))){
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29863__$1,(2),res,v);
} else {
if((state_val_29864 === (2))){
var inst_29860 = (state_29863[(2)]);
var inst_29861 = cljs.core.async.close_BANG_(res);
var state_29863__$1 = (function (){var statearr_29870 = state_29863;
(statearr_29870[(7)] = inst_29860);

return statearr_29870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29863__$1,inst_29861);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_29873 = [null,null,null,null,null,null,null,null];
(statearr_29873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__);

(statearr_29873[(1)] = (1));

return statearr_29873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1 = (function (state_29863){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_29863);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e29876){if((e29876 instanceof Object)){
var ex__29338__auto__ = e29876;
var statearr_29877_32060 = state_29863;
(statearr_29877_32060[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32061 = state_29863;
state_29863 = G__32061;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = function(state_29863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1.call(this,state_29863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_29879 = f__29514__auto__();
(statearr_29879[(6)] = c__29513__auto___32053);

return statearr_29879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29881){
var vec__29882 = p__29881;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29882,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29882,(1),null);
var job = vec__29882;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32067 = n;
var __32068 = (0);
while(true){
if((__32068 < n__4666__auto___32067)){
var G__29889_32069 = type;
var G__29889_32070__$1 = (((G__29889_32069 instanceof cljs.core.Keyword))?G__29889_32069.fqn:null);
switch (G__29889_32070__$1) {
case "compute":
var c__29513__auto___32074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32068,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = ((function (__32068,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function (state_29906){
var state_val_29907 = (state_29906[(1)]);
if((state_val_29907 === (1))){
var state_29906__$1 = state_29906;
var statearr_29909_32081 = state_29906__$1;
(statearr_29909_32081[(2)] = null);

(statearr_29909_32081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (2))){
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29906__$1,(4),jobs);
} else {
if((state_val_29907 === (3))){
var inst_29904 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29906__$1,inst_29904);
} else {
if((state_val_29907 === (4))){
var inst_29894 = (state_29906[(2)]);
var inst_29896 = process(inst_29894);
var state_29906__$1 = state_29906;
if(cljs.core.truth_(inst_29896)){
var statearr_29911_32082 = state_29906__$1;
(statearr_29911_32082[(1)] = (5));

} else {
var statearr_29913_32083 = state_29906__$1;
(statearr_29913_32083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (5))){
var state_29906__$1 = state_29906;
var statearr_29915_32084 = state_29906__$1;
(statearr_29915_32084[(2)] = null);

(statearr_29915_32084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (6))){
var state_29906__$1 = state_29906;
var statearr_29916_32085 = state_29906__$1;
(statearr_29916_32085[(2)] = null);

(statearr_29916_32085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29907 === (7))){
var inst_29902 = (state_29906[(2)]);
var state_29906__$1 = state_29906;
var statearr_29919_32088 = state_29906__$1;
(statearr_29919_32088[(2)] = inst_29902);

(statearr_29919_32088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32068,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
;
return ((function (__32068,switch__29334__auto__,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_29921 = [null,null,null,null,null,null,null];
(statearr_29921[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__);

(statearr_29921[(1)] = (1));

return statearr_29921;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1 = (function (state_29906){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_29906);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e29922){if((e29922 instanceof Object)){
var ex__29338__auto__ = e29922;
var statearr_29924_32089 = state_29906;
(statearr_29924_32089[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32090 = state_29906;
state_29906 = G__32090;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = function(state_29906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1.call(this,state_29906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__;
})()
;})(__32068,switch__29334__auto__,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
})();
var state__29515__auto__ = (function (){var statearr_29926 = f__29514__auto__();
(statearr_29926[(6)] = c__29513__auto___32074);

return statearr_29926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
});})(__32068,c__29513__auto___32074,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
);


break;
case "async":
var c__29513__auto___32093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32068,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = ((function (__32068,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function (state_29939){
var state_val_29940 = (state_29939[(1)]);
if((state_val_29940 === (1))){
var state_29939__$1 = state_29939;
var statearr_29944_32094 = state_29939__$1;
(statearr_29944_32094[(2)] = null);

(statearr_29944_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (2))){
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29939__$1,(4),jobs);
} else {
if((state_val_29940 === (3))){
var inst_29937 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29939__$1,inst_29937);
} else {
if((state_val_29940 === (4))){
var inst_29929 = (state_29939[(2)]);
var inst_29930 = async(inst_29929);
var state_29939__$1 = state_29939;
if(cljs.core.truth_(inst_29930)){
var statearr_29950_32095 = state_29939__$1;
(statearr_29950_32095[(1)] = (5));

} else {
var statearr_29953_32096 = state_29939__$1;
(statearr_29953_32096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (5))){
var state_29939__$1 = state_29939;
var statearr_29954_32097 = state_29939__$1;
(statearr_29954_32097[(2)] = null);

(statearr_29954_32097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (6))){
var state_29939__$1 = state_29939;
var statearr_29955_32098 = state_29939__$1;
(statearr_29955_32098[(2)] = null);

(statearr_29955_32098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29940 === (7))){
var inst_29935 = (state_29939[(2)]);
var state_29939__$1 = state_29939;
var statearr_29956_32099 = state_29939__$1;
(statearr_29956_32099[(2)] = inst_29935);

(statearr_29956_32099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32068,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
;
return ((function (__32068,switch__29334__auto__,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_29957 = [null,null,null,null,null,null,null];
(statearr_29957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__);

(statearr_29957[(1)] = (1));

return statearr_29957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1 = (function (state_29939){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_29939);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e29960){if((e29960 instanceof Object)){
var ex__29338__auto__ = e29960;
var statearr_29962_32102 = state_29939;
(statearr_29962_32102[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32103 = state_29939;
state_29939 = G__32103;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = function(state_29939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1.call(this,state_29939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__;
})()
;})(__32068,switch__29334__auto__,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
})();
var state__29515__auto__ = (function (){var statearr_29968 = f__29514__auto__();
(statearr_29968[(6)] = c__29513__auto___32093);

return statearr_29968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
});})(__32068,c__29513__auto___32093,G__29889_32069,G__29889_32070__$1,n__4666__auto___32067,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29889_32070__$1)].join('')));

}

var G__32110 = (__32068 + (1));
__32068 = G__32110;
continue;
} else {
}
break;
}

var c__29513__auto___32111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_29996){
var state_val_29997 = (state_29996[(1)]);
if((state_val_29997 === (7))){
var inst_29992 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30017_32112 = state_29996__$1;
(statearr_30017_32112[(2)] = inst_29992);

(statearr_30017_32112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (1))){
var state_29996__$1 = state_29996;
var statearr_30018_32113 = state_29996__$1;
(statearr_30018_32113[(2)] = null);

(statearr_30018_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (4))){
var inst_29974 = (state_29996[(7)]);
var inst_29974__$1 = (state_29996[(2)]);
var inst_29975 = (inst_29974__$1 == null);
var state_29996__$1 = (function (){var statearr_30022 = state_29996;
(statearr_30022[(7)] = inst_29974__$1);

return statearr_30022;
})();
if(cljs.core.truth_(inst_29975)){
var statearr_30023_32115 = state_29996__$1;
(statearr_30023_32115[(1)] = (5));

} else {
var statearr_30024_32116 = state_29996__$1;
(statearr_30024_32116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (6))){
var inst_29979 = (state_29996[(8)]);
var inst_29974 = (state_29996[(7)]);
var inst_29979__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29984 = [inst_29974,inst_29979__$1];
var inst_29985 = (new cljs.core.PersistentVector(null,2,(5),inst_29983,inst_29984,null));
var state_29996__$1 = (function (){var statearr_30029 = state_29996;
(statearr_30029[(8)] = inst_29979__$1);

return statearr_30029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29996__$1,(8),jobs,inst_29985);
} else {
if((state_val_29997 === (3))){
var inst_29994 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29996__$1,inst_29994);
} else {
if((state_val_29997 === (2))){
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29996__$1,(4),from);
} else {
if((state_val_29997 === (9))){
var inst_29989 = (state_29996[(2)]);
var state_29996__$1 = (function (){var statearr_30034 = state_29996;
(statearr_30034[(9)] = inst_29989);

return statearr_30034;
})();
var statearr_30035_32117 = state_29996__$1;
(statearr_30035_32117[(2)] = null);

(statearr_30035_32117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (5))){
var inst_29977 = cljs.core.async.close_BANG_(jobs);
var state_29996__$1 = state_29996;
var statearr_30036_32118 = state_29996__$1;
(statearr_30036_32118[(2)] = inst_29977);

(statearr_30036_32118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (8))){
var inst_29979 = (state_29996[(8)]);
var inst_29987 = (state_29996[(2)]);
var state_29996__$1 = (function (){var statearr_30037 = state_29996;
(statearr_30037[(10)] = inst_29987);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29996__$1,(9),results,inst_29979);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_30038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__);

(statearr_30038[(1)] = (1));

return statearr_30038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1 = (function (state_29996){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_29996);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30039){if((e30039 instanceof Object)){
var ex__29338__auto__ = e30039;
var statearr_30040_32127 = state_29996;
(statearr_30040_32127[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32128 = state_29996;
state_29996 = G__32128;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = function(state_29996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1.call(this,state_29996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30041 = f__29514__auto__();
(statearr_30041[(6)] = c__29513__auto___32111);

return statearr_30041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


var c__29513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30080){
var state_val_30081 = (state_30080[(1)]);
if((state_val_30081 === (7))){
var inst_30076 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30085_32129 = state_30080__$1;
(statearr_30085_32129[(2)] = inst_30076);

(statearr_30085_32129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (20))){
var state_30080__$1 = state_30080;
var statearr_30086_32130 = state_30080__$1;
(statearr_30086_32130[(2)] = null);

(statearr_30086_32130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (1))){
var state_30080__$1 = state_30080;
var statearr_30087_32131 = state_30080__$1;
(statearr_30087_32131[(2)] = null);

(statearr_30087_32131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (4))){
var inst_30044 = (state_30080[(7)]);
var inst_30044__$1 = (state_30080[(2)]);
var inst_30045 = (inst_30044__$1 == null);
var state_30080__$1 = (function (){var statearr_30088 = state_30080;
(statearr_30088[(7)] = inst_30044__$1);

return statearr_30088;
})();
if(cljs.core.truth_(inst_30045)){
var statearr_30089_32133 = state_30080__$1;
(statearr_30089_32133[(1)] = (5));

} else {
var statearr_30090_32134 = state_30080__$1;
(statearr_30090_32134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (15))){
var inst_30057 = (state_30080[(8)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30080__$1,(18),to,inst_30057);
} else {
if((state_val_30081 === (21))){
var inst_30071 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30091_32136 = state_30080__$1;
(statearr_30091_32136[(2)] = inst_30071);

(statearr_30091_32136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (13))){
var inst_30073 = (state_30080[(2)]);
var state_30080__$1 = (function (){var statearr_30092 = state_30080;
(statearr_30092[(9)] = inst_30073);

return statearr_30092;
})();
var statearr_30093_32137 = state_30080__$1;
(statearr_30093_32137[(2)] = null);

(statearr_30093_32137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (6))){
var inst_30044 = (state_30080[(7)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30080__$1,(11),inst_30044);
} else {
if((state_val_30081 === (17))){
var inst_30066 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
if(cljs.core.truth_(inst_30066)){
var statearr_30094_32138 = state_30080__$1;
(statearr_30094_32138[(1)] = (19));

} else {
var statearr_30095_32139 = state_30080__$1;
(statearr_30095_32139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (3))){
var inst_30078 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30080__$1,inst_30078);
} else {
if((state_val_30081 === (12))){
var inst_30054 = (state_30080[(10)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30080__$1,(14),inst_30054);
} else {
if((state_val_30081 === (2))){
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30080__$1,(4),results);
} else {
if((state_val_30081 === (19))){
var state_30080__$1 = state_30080;
var statearr_30096_32140 = state_30080__$1;
(statearr_30096_32140[(2)] = null);

(statearr_30096_32140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (11))){
var inst_30054 = (state_30080[(2)]);
var state_30080__$1 = (function (){var statearr_30097 = state_30080;
(statearr_30097[(10)] = inst_30054);

return statearr_30097;
})();
var statearr_30098_32146 = state_30080__$1;
(statearr_30098_32146[(2)] = null);

(statearr_30098_32146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (9))){
var state_30080__$1 = state_30080;
var statearr_30099_32150 = state_30080__$1;
(statearr_30099_32150[(2)] = null);

(statearr_30099_32150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (5))){
var state_30080__$1 = state_30080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30101_32151 = state_30080__$1;
(statearr_30101_32151[(1)] = (8));

} else {
var statearr_30102_32152 = state_30080__$1;
(statearr_30102_32152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (14))){
var inst_30057 = (state_30080[(8)]);
var inst_30057__$1 = (state_30080[(2)]);
var inst_30058 = (inst_30057__$1 == null);
var inst_30059 = cljs.core.not(inst_30058);
var state_30080__$1 = (function (){var statearr_30103 = state_30080;
(statearr_30103[(8)] = inst_30057__$1);

return statearr_30103;
})();
if(inst_30059){
var statearr_30105_32154 = state_30080__$1;
(statearr_30105_32154[(1)] = (15));

} else {
var statearr_30107_32158 = state_30080__$1;
(statearr_30107_32158[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (16))){
var state_30080__$1 = state_30080;
var statearr_30109_32159 = state_30080__$1;
(statearr_30109_32159[(2)] = false);

(statearr_30109_32159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (10))){
var inst_30051 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30110_32163 = state_30080__$1;
(statearr_30110_32163[(2)] = inst_30051);

(statearr_30110_32163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (18))){
var inst_30063 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30111_32164 = state_30080__$1;
(statearr_30111_32164[(2)] = inst_30063);

(statearr_30111_32164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (8))){
var inst_30048 = cljs.core.async.close_BANG_(to);
var state_30080__$1 = state_30080;
var statearr_30112_32165 = state_30080__$1;
(statearr_30112_32165[(2)] = inst_30048);

(statearr_30112_32165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1 = (function (state_30080){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30080);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30120){if((e30120 instanceof Object)){
var ex__29338__auto__ = e30120;
var statearr_30122_32169 = state_30080;
(statearr_30122_32169[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32170 = state_30080;
state_30080 = G__32170;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__ = function(state_30080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1.call(this,state_30080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30123 = f__29514__auto__();
(statearr_30123[(6)] = c__29513__auto__);

return statearr_30123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

return c__29513__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30129 = arguments.length;
switch (G__30129) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30133 = arguments.length;
switch (G__30133) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30141 = arguments.length;
switch (G__30141) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29513__auto___32191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30171){
var state_val_30172 = (state_30171[(1)]);
if((state_val_30172 === (7))){
var inst_30167 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
var statearr_30178_32192 = state_30171__$1;
(statearr_30178_32192[(2)] = inst_30167);

(statearr_30178_32192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (1))){
var state_30171__$1 = state_30171;
var statearr_30181_32193 = state_30171__$1;
(statearr_30181_32193[(2)] = null);

(statearr_30181_32193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (4))){
var inst_30148 = (state_30171[(7)]);
var inst_30148__$1 = (state_30171[(2)]);
var inst_30149 = (inst_30148__$1 == null);
var state_30171__$1 = (function (){var statearr_30185 = state_30171;
(statearr_30185[(7)] = inst_30148__$1);

return statearr_30185;
})();
if(cljs.core.truth_(inst_30149)){
var statearr_30186_32194 = state_30171__$1;
(statearr_30186_32194[(1)] = (5));

} else {
var statearr_30187_32195 = state_30171__$1;
(statearr_30187_32195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (13))){
var state_30171__$1 = state_30171;
var statearr_30191_32197 = state_30171__$1;
(statearr_30191_32197[(2)] = null);

(statearr_30191_32197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (6))){
var inst_30148 = (state_30171[(7)]);
var inst_30154 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30148) : p.call(null,inst_30148));
var state_30171__$1 = state_30171;
if(cljs.core.truth_(inst_30154)){
var statearr_30200_32198 = state_30171__$1;
(statearr_30200_32198[(1)] = (9));

} else {
var statearr_30201_32199 = state_30171__$1;
(statearr_30201_32199[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (3))){
var inst_30169 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30171__$1,inst_30169);
} else {
if((state_val_30172 === (12))){
var state_30171__$1 = state_30171;
var statearr_30205_32200 = state_30171__$1;
(statearr_30205_32200[(2)] = null);

(statearr_30205_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (2))){
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30171__$1,(4),ch);
} else {
if((state_val_30172 === (11))){
var inst_30148 = (state_30171[(7)]);
var inst_30158 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30171__$1,(8),inst_30158,inst_30148);
} else {
if((state_val_30172 === (9))){
var state_30171__$1 = state_30171;
var statearr_30208_32201 = state_30171__$1;
(statearr_30208_32201[(2)] = tc);

(statearr_30208_32201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (5))){
var inst_30151 = cljs.core.async.close_BANG_(tc);
var inst_30152 = cljs.core.async.close_BANG_(fc);
var state_30171__$1 = (function (){var statearr_30211 = state_30171;
(statearr_30211[(8)] = inst_30151);

return statearr_30211;
})();
var statearr_30213_32202 = state_30171__$1;
(statearr_30213_32202[(2)] = inst_30152);

(statearr_30213_32202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (14))){
var inst_30165 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
var statearr_30214_32203 = state_30171__$1;
(statearr_30214_32203[(2)] = inst_30165);

(statearr_30214_32203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (10))){
var state_30171__$1 = state_30171;
var statearr_30218_32204 = state_30171__$1;
(statearr_30218_32204[(2)] = fc);

(statearr_30218_32204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (8))){
var inst_30160 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
if(cljs.core.truth_(inst_30160)){
var statearr_30222_32206 = state_30171__$1;
(statearr_30222_32206[(1)] = (12));

} else {
var statearr_30223_32207 = state_30171__$1;
(statearr_30223_32207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null,null,null];
(statearr_30226[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_30171){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30171);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30227){if((e30227 instanceof Object)){
var ex__29338__auto__ = e30227;
var statearr_30231_32209 = state_30171;
(statearr_30231_32209[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32210 = state_30171;
state_30171 = G__32210;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_30171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_30171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30233 = f__29514__auto__();
(statearr_30233[(6)] = c__29513__auto___32191);

return statearr_30233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30257){
var state_val_30259 = (state_30257[(1)]);
if((state_val_30259 === (7))){
var inst_30252 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30266_32215 = state_30257__$1;
(statearr_30266_32215[(2)] = inst_30252);

(statearr_30266_32215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (1))){
var inst_30236 = init;
var state_30257__$1 = (function (){var statearr_30267 = state_30257;
(statearr_30267[(7)] = inst_30236);

return statearr_30267;
})();
var statearr_30268_32220 = state_30257__$1;
(statearr_30268_32220[(2)] = null);

(statearr_30268_32220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (4))){
var inst_30239 = (state_30257[(8)]);
var inst_30239__$1 = (state_30257[(2)]);
var inst_30240 = (inst_30239__$1 == null);
var state_30257__$1 = (function (){var statearr_30270 = state_30257;
(statearr_30270[(8)] = inst_30239__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30240)){
var statearr_30271_32222 = state_30257__$1;
(statearr_30271_32222[(1)] = (5));

} else {
var statearr_30272_32223 = state_30257__$1;
(statearr_30272_32223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (6))){
var inst_30243 = (state_30257[(9)]);
var inst_30236 = (state_30257[(7)]);
var inst_30239 = (state_30257[(8)]);
var inst_30243__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30236,inst_30239) : f.call(null,inst_30236,inst_30239));
var inst_30244 = cljs.core.reduced_QMARK_(inst_30243__$1);
var state_30257__$1 = (function (){var statearr_30274 = state_30257;
(statearr_30274[(9)] = inst_30243__$1);

return statearr_30274;
})();
if(inst_30244){
var statearr_30275_32226 = state_30257__$1;
(statearr_30275_32226[(1)] = (8));

} else {
var statearr_30276_32227 = state_30257__$1;
(statearr_30276_32227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (3))){
var inst_30255 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30257__$1,inst_30255);
} else {
if((state_val_30259 === (2))){
var state_30257__$1 = state_30257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30257__$1,(4),ch);
} else {
if((state_val_30259 === (9))){
var inst_30243 = (state_30257[(9)]);
var inst_30236 = inst_30243;
var state_30257__$1 = (function (){var statearr_30281 = state_30257;
(statearr_30281[(7)] = inst_30236);

return statearr_30281;
})();
var statearr_30282_32228 = state_30257__$1;
(statearr_30282_32228[(2)] = null);

(statearr_30282_32228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (5))){
var inst_30236 = (state_30257[(7)]);
var state_30257__$1 = state_30257;
var statearr_30287_32230 = state_30257__$1;
(statearr_30287_32230[(2)] = inst_30236);

(statearr_30287_32230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (10))){
var inst_30250 = (state_30257[(2)]);
var state_30257__$1 = state_30257;
var statearr_30288_32231 = state_30257__$1;
(statearr_30288_32231[(2)] = inst_30250);

(statearr_30288_32231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (8))){
var inst_30243 = (state_30257[(9)]);
var inst_30246 = cljs.core.deref(inst_30243);
var state_30257__$1 = state_30257;
var statearr_30289_32236 = state_30257__$1;
(statearr_30289_32236[(2)] = inst_30246);

(statearr_30289_32236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29335__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29335__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = cljs$core$async$reduce_$_state_machine__29335__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var cljs$core$async$reduce_$_state_machine__29335__auto____1 = (function (state_30257){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30257);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__29338__auto__ = e30292;
var statearr_30293_32250 = state_30257;
(statearr_30293_32250[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32253 = state_30257;
state_30257 = G__32253;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29335__auto__ = function(state_30257){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29335__auto____1.call(this,state_30257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29335__auto____0;
cljs$core$async$reduce_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29335__auto____1;
return cljs$core$async$reduce_$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30294 = f__29514__auto__();
(statearr_30294[(6)] = c__29513__auto__);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

return c__29513__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30305){
var state_val_30306 = (state_30305[(1)]);
if((state_val_30306 === (1))){
var inst_30300 = cljs.core.async.reduce(f__$1,init,ch);
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30305__$1,(2),inst_30300);
} else {
if((state_val_30306 === (2))){
var inst_30302 = (state_30305[(2)]);
var inst_30303 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30302) : f__$1.call(null,inst_30302));
var state_30305__$1 = state_30305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30305__$1,inst_30303);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29335__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29335__auto____0 = (function (){
var statearr_30315 = [null,null,null,null,null,null,null];
(statearr_30315[(0)] = cljs$core$async$transduce_$_state_machine__29335__auto__);

(statearr_30315[(1)] = (1));

return statearr_30315;
});
var cljs$core$async$transduce_$_state_machine__29335__auto____1 = (function (state_30305){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30305);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30316){if((e30316 instanceof Object)){
var ex__29338__auto__ = e30316;
var statearr_30317_32279 = state_30305;
(statearr_30317_32279[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32280 = state_30305;
state_30305 = G__32280;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29335__auto__ = function(state_30305){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29335__auto____1.call(this,state_30305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29335__auto____0;
cljs$core$async$transduce_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29335__auto____1;
return cljs$core$async$transduce_$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30323 = f__29514__auto__();
(statearr_30323[(6)] = c__29513__auto__);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

return c__29513__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30333 = arguments.length;
switch (G__30333) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30362){
var state_val_30363 = (state_30362[(1)]);
if((state_val_30363 === (7))){
var inst_30344 = (state_30362[(2)]);
var state_30362__$1 = state_30362;
var statearr_30368_32293 = state_30362__$1;
(statearr_30368_32293[(2)] = inst_30344);

(statearr_30368_32293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (1))){
var inst_30338 = cljs.core.seq(coll);
var inst_30339 = inst_30338;
var state_30362__$1 = (function (){var statearr_30371 = state_30362;
(statearr_30371[(7)] = inst_30339);

return statearr_30371;
})();
var statearr_30373_32302 = state_30362__$1;
(statearr_30373_32302[(2)] = null);

(statearr_30373_32302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (4))){
var inst_30339 = (state_30362[(7)]);
var inst_30342 = cljs.core.first(inst_30339);
var state_30362__$1 = state_30362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30362__$1,(7),ch,inst_30342);
} else {
if((state_val_30363 === (13))){
var inst_30356 = (state_30362[(2)]);
var state_30362__$1 = state_30362;
var statearr_30374_32305 = state_30362__$1;
(statearr_30374_32305[(2)] = inst_30356);

(statearr_30374_32305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (6))){
var inst_30347 = (state_30362[(2)]);
var state_30362__$1 = state_30362;
if(cljs.core.truth_(inst_30347)){
var statearr_30378_32307 = state_30362__$1;
(statearr_30378_32307[(1)] = (8));

} else {
var statearr_30380_32309 = state_30362__$1;
(statearr_30380_32309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (3))){
var inst_30360 = (state_30362[(2)]);
var state_30362__$1 = state_30362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30362__$1,inst_30360);
} else {
if((state_val_30363 === (12))){
var state_30362__$1 = state_30362;
var statearr_30382_32311 = state_30362__$1;
(statearr_30382_32311[(2)] = null);

(statearr_30382_32311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (2))){
var inst_30339 = (state_30362[(7)]);
var state_30362__$1 = state_30362;
if(cljs.core.truth_(inst_30339)){
var statearr_30388_32316 = state_30362__$1;
(statearr_30388_32316[(1)] = (4));

} else {
var statearr_30389_32317 = state_30362__$1;
(statearr_30389_32317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (11))){
var inst_30353 = cljs.core.async.close_BANG_(ch);
var state_30362__$1 = state_30362;
var statearr_30390_32318 = state_30362__$1;
(statearr_30390_32318[(2)] = inst_30353);

(statearr_30390_32318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (9))){
var state_30362__$1 = state_30362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30393_32319 = state_30362__$1;
(statearr_30393_32319[(1)] = (11));

} else {
var statearr_30394_32320 = state_30362__$1;
(statearr_30394_32320[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (5))){
var inst_30339 = (state_30362[(7)]);
var state_30362__$1 = state_30362;
var statearr_30398_32321 = state_30362__$1;
(statearr_30398_32321[(2)] = inst_30339);

(statearr_30398_32321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (10))){
var inst_30358 = (state_30362[(2)]);
var state_30362__$1 = state_30362;
var statearr_30399_32324 = state_30362__$1;
(statearr_30399_32324[(2)] = inst_30358);

(statearr_30399_32324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30363 === (8))){
var inst_30339 = (state_30362[(7)]);
var inst_30349 = cljs.core.next(inst_30339);
var inst_30339__$1 = inst_30349;
var state_30362__$1 = (function (){var statearr_30400 = state_30362;
(statearr_30400[(7)] = inst_30339__$1);

return statearr_30400;
})();
var statearr_30402_32332 = state_30362__$1;
(statearr_30402_32332[(2)] = null);

(statearr_30402_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_30405 = [null,null,null,null,null,null,null,null];
(statearr_30405[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_30405[(1)] = (1));

return statearr_30405;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_30362){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30362);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30406){if((e30406 instanceof Object)){
var ex__29338__auto__ = e30406;
var statearr_30407_32333 = state_30362;
(statearr_30407_32333[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_30362;
state_30362 = G__32334;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_30362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_30362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30409 = f__29514__auto__();
(statearr_30409[(6)] = c__29513__auto__);

return statearr_30409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

return c__29513__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30439 = (function (ch,cs,meta30440){
this.ch = ch;
this.cs = cs;
this.meta30440 = meta30440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30441,meta30440__$1){
var self__ = this;
var _30441__$1 = this;
return (new cljs.core.async.t_cljs$core$async30439(self__.ch,self__.cs,meta30440__$1));
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30441){
var self__ = this;
var _30441__$1 = this;
return self__.meta30440;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30440","meta30440",940484674,null)], null);
}));

(cljs.core.async.t_cljs$core$async30439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30439");

(cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30439.
 */
cljs.core.async.__GT_t_cljs$core$async30439 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30439(ch__$1,cs__$1,meta30440){
return (new cljs.core.async.t_cljs$core$async30439(ch__$1,cs__$1,meta30440));
});

}

return (new cljs.core.async.t_cljs$core$async30439(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29513__auto___32377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30594){
var state_val_30595 = (state_30594[(1)]);
if((state_val_30595 === (7))){
var inst_30590 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30600_32380 = state_30594__$1;
(statearr_30600_32380[(2)] = inst_30590);

(statearr_30600_32380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (20))){
var inst_30494 = (state_30594[(7)]);
var inst_30507 = cljs.core.first(inst_30494);
var inst_30508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30507,(0),null);
var inst_30509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30507,(1),null);
var state_30594__$1 = (function (){var statearr_30601 = state_30594;
(statearr_30601[(8)] = inst_30508);

return statearr_30601;
})();
if(cljs.core.truth_(inst_30509)){
var statearr_30602_32382 = state_30594__$1;
(statearr_30602_32382[(1)] = (22));

} else {
var statearr_30603_32383 = state_30594__$1;
(statearr_30603_32383[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (27))){
var inst_30460 = (state_30594[(9)]);
var inst_30537 = (state_30594[(10)]);
var inst_30544 = (state_30594[(11)]);
var inst_30539 = (state_30594[(12)]);
var inst_30544__$1 = cljs.core._nth(inst_30537,inst_30539);
var inst_30545 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30544__$1,inst_30460,done);
var state_30594__$1 = (function (){var statearr_30605 = state_30594;
(statearr_30605[(11)] = inst_30544__$1);

return statearr_30605;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30607_32389 = state_30594__$1;
(statearr_30607_32389[(1)] = (30));

} else {
var statearr_30608_32391 = state_30594__$1;
(statearr_30608_32391[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (1))){
var state_30594__$1 = state_30594;
var statearr_30609_32392 = state_30594__$1;
(statearr_30609_32392[(2)] = null);

(statearr_30609_32392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (24))){
var inst_30494 = (state_30594[(7)]);
var inst_30514 = (state_30594[(2)]);
var inst_30515 = cljs.core.next(inst_30494);
var inst_30469 = inst_30515;
var inst_30470 = null;
var inst_30471 = (0);
var inst_30472 = (0);
var state_30594__$1 = (function (){var statearr_30610 = state_30594;
(statearr_30610[(13)] = inst_30472);

(statearr_30610[(14)] = inst_30514);

(statearr_30610[(15)] = inst_30471);

(statearr_30610[(16)] = inst_30470);

(statearr_30610[(17)] = inst_30469);

return statearr_30610;
})();
var statearr_30611_32402 = state_30594__$1;
(statearr_30611_32402[(2)] = null);

(statearr_30611_32402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (39))){
var state_30594__$1 = state_30594;
var statearr_30616_32404 = state_30594__$1;
(statearr_30616_32404[(2)] = null);

(statearr_30616_32404[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (4))){
var inst_30460 = (state_30594[(9)]);
var inst_30460__$1 = (state_30594[(2)]);
var inst_30461 = (inst_30460__$1 == null);
var state_30594__$1 = (function (){var statearr_30619 = state_30594;
(statearr_30619[(9)] = inst_30460__$1);

return statearr_30619;
})();
if(cljs.core.truth_(inst_30461)){
var statearr_30621_32410 = state_30594__$1;
(statearr_30621_32410[(1)] = (5));

} else {
var statearr_30622_32412 = state_30594__$1;
(statearr_30622_32412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (15))){
var inst_30472 = (state_30594[(13)]);
var inst_30471 = (state_30594[(15)]);
var inst_30470 = (state_30594[(16)]);
var inst_30469 = (state_30594[(17)]);
var inst_30490 = (state_30594[(2)]);
var inst_30491 = (inst_30472 + (1));
var tmp30612 = inst_30471;
var tmp30613 = inst_30470;
var tmp30614 = inst_30469;
var inst_30469__$1 = tmp30614;
var inst_30470__$1 = tmp30613;
var inst_30471__$1 = tmp30612;
var inst_30472__$1 = inst_30491;
var state_30594__$1 = (function (){var statearr_30625 = state_30594;
(statearr_30625[(13)] = inst_30472__$1);

(statearr_30625[(15)] = inst_30471__$1);

(statearr_30625[(18)] = inst_30490);

(statearr_30625[(16)] = inst_30470__$1);

(statearr_30625[(17)] = inst_30469__$1);

return statearr_30625;
})();
var statearr_30630_32418 = state_30594__$1;
(statearr_30630_32418[(2)] = null);

(statearr_30630_32418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (21))){
var inst_30518 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30635_32424 = state_30594__$1;
(statearr_30635_32424[(2)] = inst_30518);

(statearr_30635_32424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (31))){
var inst_30544 = (state_30594[(11)]);
var inst_30548 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30544);
var state_30594__$1 = state_30594;
var statearr_30636_32426 = state_30594__$1;
(statearr_30636_32426[(2)] = inst_30548);

(statearr_30636_32426[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (32))){
var inst_30537 = (state_30594[(10)]);
var inst_30536 = (state_30594[(19)]);
var inst_30538 = (state_30594[(20)]);
var inst_30539 = (state_30594[(12)]);
var inst_30550 = (state_30594[(2)]);
var inst_30551 = (inst_30539 + (1));
var tmp30631 = inst_30537;
var tmp30632 = inst_30536;
var tmp30633 = inst_30538;
var inst_30536__$1 = tmp30632;
var inst_30537__$1 = tmp30631;
var inst_30538__$1 = tmp30633;
var inst_30539__$1 = inst_30551;
var state_30594__$1 = (function (){var statearr_30639 = state_30594;
(statearr_30639[(10)] = inst_30537__$1);

(statearr_30639[(21)] = inst_30550);

(statearr_30639[(19)] = inst_30536__$1);

(statearr_30639[(20)] = inst_30538__$1);

(statearr_30639[(12)] = inst_30539__$1);

return statearr_30639;
})();
var statearr_30640_32434 = state_30594__$1;
(statearr_30640_32434[(2)] = null);

(statearr_30640_32434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (40))){
var inst_30563 = (state_30594[(22)]);
var inst_30567 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30563);
var state_30594__$1 = state_30594;
var statearr_30643_32437 = state_30594__$1;
(statearr_30643_32437[(2)] = inst_30567);

(statearr_30643_32437[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (33))){
var inst_30554 = (state_30594[(23)]);
var inst_30556 = cljs.core.chunked_seq_QMARK_(inst_30554);
var state_30594__$1 = state_30594;
if(inst_30556){
var statearr_30645_32440 = state_30594__$1;
(statearr_30645_32440[(1)] = (36));

} else {
var statearr_30646_32441 = state_30594__$1;
(statearr_30646_32441[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (13))){
var inst_30483 = (state_30594[(24)]);
var inst_30487 = cljs.core.async.close_BANG_(inst_30483);
var state_30594__$1 = state_30594;
var statearr_30648_32444 = state_30594__$1;
(statearr_30648_32444[(2)] = inst_30487);

(statearr_30648_32444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (22))){
var inst_30508 = (state_30594[(8)]);
var inst_30511 = cljs.core.async.close_BANG_(inst_30508);
var state_30594__$1 = state_30594;
var statearr_30649_32448 = state_30594__$1;
(statearr_30649_32448[(2)] = inst_30511);

(statearr_30649_32448[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (36))){
var inst_30554 = (state_30594[(23)]);
var inst_30558 = cljs.core.chunk_first(inst_30554);
var inst_30559 = cljs.core.chunk_rest(inst_30554);
var inst_30560 = cljs.core.count(inst_30558);
var inst_30536 = inst_30559;
var inst_30537 = inst_30558;
var inst_30538 = inst_30560;
var inst_30539 = (0);
var state_30594__$1 = (function (){var statearr_30652 = state_30594;
(statearr_30652[(10)] = inst_30537);

(statearr_30652[(19)] = inst_30536);

(statearr_30652[(20)] = inst_30538);

(statearr_30652[(12)] = inst_30539);

return statearr_30652;
})();
var statearr_30653_32453 = state_30594__$1;
(statearr_30653_32453[(2)] = null);

(statearr_30653_32453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (41))){
var inst_30554 = (state_30594[(23)]);
var inst_30569 = (state_30594[(2)]);
var inst_30570 = cljs.core.next(inst_30554);
var inst_30536 = inst_30570;
var inst_30537 = null;
var inst_30538 = (0);
var inst_30539 = (0);
var state_30594__$1 = (function (){var statearr_30654 = state_30594;
(statearr_30654[(10)] = inst_30537);

(statearr_30654[(25)] = inst_30569);

(statearr_30654[(19)] = inst_30536);

(statearr_30654[(20)] = inst_30538);

(statearr_30654[(12)] = inst_30539);

return statearr_30654;
})();
var statearr_30655_32463 = state_30594__$1;
(statearr_30655_32463[(2)] = null);

(statearr_30655_32463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (43))){
var state_30594__$1 = state_30594;
var statearr_30658_32466 = state_30594__$1;
(statearr_30658_32466[(2)] = null);

(statearr_30658_32466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (29))){
var inst_30578 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30659_32468 = state_30594__$1;
(statearr_30659_32468[(2)] = inst_30578);

(statearr_30659_32468[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (44))){
var inst_30587 = (state_30594[(2)]);
var state_30594__$1 = (function (){var statearr_30660 = state_30594;
(statearr_30660[(26)] = inst_30587);

return statearr_30660;
})();
var statearr_30662_32471 = state_30594__$1;
(statearr_30662_32471[(2)] = null);

(statearr_30662_32471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (6))){
var inst_30528 = (state_30594[(27)]);
var inst_30527 = cljs.core.deref(cs);
var inst_30528__$1 = cljs.core.keys(inst_30527);
var inst_30529 = cljs.core.count(inst_30528__$1);
var inst_30530 = cljs.core.reset_BANG_(dctr,inst_30529);
var inst_30535 = cljs.core.seq(inst_30528__$1);
var inst_30536 = inst_30535;
var inst_30537 = null;
var inst_30538 = (0);
var inst_30539 = (0);
var state_30594__$1 = (function (){var statearr_30665 = state_30594;
(statearr_30665[(10)] = inst_30537);

(statearr_30665[(27)] = inst_30528__$1);

(statearr_30665[(28)] = inst_30530);

(statearr_30665[(19)] = inst_30536);

(statearr_30665[(20)] = inst_30538);

(statearr_30665[(12)] = inst_30539);

return statearr_30665;
})();
var statearr_30666_32474 = state_30594__$1;
(statearr_30666_32474[(2)] = null);

(statearr_30666_32474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (28))){
var inst_30554 = (state_30594[(23)]);
var inst_30536 = (state_30594[(19)]);
var inst_30554__$1 = cljs.core.seq(inst_30536);
var state_30594__$1 = (function (){var statearr_30669 = state_30594;
(statearr_30669[(23)] = inst_30554__$1);

return statearr_30669;
})();
if(inst_30554__$1){
var statearr_30670_32479 = state_30594__$1;
(statearr_30670_32479[(1)] = (33));

} else {
var statearr_30671_32481 = state_30594__$1;
(statearr_30671_32481[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (25))){
var inst_30538 = (state_30594[(20)]);
var inst_30539 = (state_30594[(12)]);
var inst_30541 = (inst_30539 < inst_30538);
var inst_30542 = inst_30541;
var state_30594__$1 = state_30594;
if(cljs.core.truth_(inst_30542)){
var statearr_30672_32487 = state_30594__$1;
(statearr_30672_32487[(1)] = (27));

} else {
var statearr_30673_32489 = state_30594__$1;
(statearr_30673_32489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (34))){
var state_30594__$1 = state_30594;
var statearr_30674_32491 = state_30594__$1;
(statearr_30674_32491[(2)] = null);

(statearr_30674_32491[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (17))){
var state_30594__$1 = state_30594;
var statearr_30675_32494 = state_30594__$1;
(statearr_30675_32494[(2)] = null);

(statearr_30675_32494[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (3))){
var inst_30592 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30594__$1,inst_30592);
} else {
if((state_val_30595 === (12))){
var inst_30523 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30676_32497 = state_30594__$1;
(statearr_30676_32497[(2)] = inst_30523);

(statearr_30676_32497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (2))){
var state_30594__$1 = state_30594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30594__$1,(4),ch);
} else {
if((state_val_30595 === (23))){
var state_30594__$1 = state_30594;
var statearr_30681_32498 = state_30594__$1;
(statearr_30681_32498[(2)] = null);

(statearr_30681_32498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (35))){
var inst_30576 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30682_32507 = state_30594__$1;
(statearr_30682_32507[(2)] = inst_30576);

(statearr_30682_32507[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (19))){
var inst_30494 = (state_30594[(7)]);
var inst_30498 = cljs.core.chunk_first(inst_30494);
var inst_30499 = cljs.core.chunk_rest(inst_30494);
var inst_30501 = cljs.core.count(inst_30498);
var inst_30469 = inst_30499;
var inst_30470 = inst_30498;
var inst_30471 = inst_30501;
var inst_30472 = (0);
var state_30594__$1 = (function (){var statearr_30691 = state_30594;
(statearr_30691[(13)] = inst_30472);

(statearr_30691[(15)] = inst_30471);

(statearr_30691[(16)] = inst_30470);

(statearr_30691[(17)] = inst_30469);

return statearr_30691;
})();
var statearr_30692_32514 = state_30594__$1;
(statearr_30692_32514[(2)] = null);

(statearr_30692_32514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (11))){
var inst_30494 = (state_30594[(7)]);
var inst_30469 = (state_30594[(17)]);
var inst_30494__$1 = cljs.core.seq(inst_30469);
var state_30594__$1 = (function (){var statearr_30694 = state_30594;
(statearr_30694[(7)] = inst_30494__$1);

return statearr_30694;
})();
if(inst_30494__$1){
var statearr_30695_32517 = state_30594__$1;
(statearr_30695_32517[(1)] = (16));

} else {
var statearr_30696_32518 = state_30594__$1;
(statearr_30696_32518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (9))){
var inst_30525 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30698_32519 = state_30594__$1;
(statearr_30698_32519[(2)] = inst_30525);

(statearr_30698_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (5))){
var inst_30467 = cljs.core.deref(cs);
var inst_30468 = cljs.core.seq(inst_30467);
var inst_30469 = inst_30468;
var inst_30470 = null;
var inst_30471 = (0);
var inst_30472 = (0);
var state_30594__$1 = (function (){var statearr_30704 = state_30594;
(statearr_30704[(13)] = inst_30472);

(statearr_30704[(15)] = inst_30471);

(statearr_30704[(16)] = inst_30470);

(statearr_30704[(17)] = inst_30469);

return statearr_30704;
})();
var statearr_30705_32524 = state_30594__$1;
(statearr_30705_32524[(2)] = null);

(statearr_30705_32524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (14))){
var state_30594__$1 = state_30594;
var statearr_30710_32531 = state_30594__$1;
(statearr_30710_32531[(2)] = null);

(statearr_30710_32531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (45))){
var inst_30584 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30711_32536 = state_30594__$1;
(statearr_30711_32536[(2)] = inst_30584);

(statearr_30711_32536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (26))){
var inst_30528 = (state_30594[(27)]);
var inst_30580 = (state_30594[(2)]);
var inst_30581 = cljs.core.seq(inst_30528);
var state_30594__$1 = (function (){var statearr_30717 = state_30594;
(statearr_30717[(29)] = inst_30580);

return statearr_30717;
})();
if(inst_30581){
var statearr_30718_32539 = state_30594__$1;
(statearr_30718_32539[(1)] = (42));

} else {
var statearr_30720_32541 = state_30594__$1;
(statearr_30720_32541[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (16))){
var inst_30494 = (state_30594[(7)]);
var inst_30496 = cljs.core.chunked_seq_QMARK_(inst_30494);
var state_30594__$1 = state_30594;
if(inst_30496){
var statearr_30723_32545 = state_30594__$1;
(statearr_30723_32545[(1)] = (19));

} else {
var statearr_30724_32546 = state_30594__$1;
(statearr_30724_32546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (38))){
var inst_30573 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30726_32549 = state_30594__$1;
(statearr_30726_32549[(2)] = inst_30573);

(statearr_30726_32549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (30))){
var state_30594__$1 = state_30594;
var statearr_30728_32554 = state_30594__$1;
(statearr_30728_32554[(2)] = null);

(statearr_30728_32554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (10))){
var inst_30472 = (state_30594[(13)]);
var inst_30470 = (state_30594[(16)]);
var inst_30482 = cljs.core._nth(inst_30470,inst_30472);
var inst_30483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30482,(0),null);
var inst_30484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30482,(1),null);
var state_30594__$1 = (function (){var statearr_30731 = state_30594;
(statearr_30731[(24)] = inst_30483);

return statearr_30731;
})();
if(cljs.core.truth_(inst_30484)){
var statearr_30732_32561 = state_30594__$1;
(statearr_30732_32561[(1)] = (13));

} else {
var statearr_30733_32565 = state_30594__$1;
(statearr_30733_32565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (18))){
var inst_30521 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30734_32570 = state_30594__$1;
(statearr_30734_32570[(2)] = inst_30521);

(statearr_30734_32570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (42))){
var state_30594__$1 = state_30594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30594__$1,(45),dchan);
} else {
if((state_val_30595 === (37))){
var inst_30460 = (state_30594[(9)]);
var inst_30563 = (state_30594[(22)]);
var inst_30554 = (state_30594[(23)]);
var inst_30563__$1 = cljs.core.first(inst_30554);
var inst_30564 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30563__$1,inst_30460,done);
var state_30594__$1 = (function (){var statearr_30735 = state_30594;
(statearr_30735[(22)] = inst_30563__$1);

return statearr_30735;
})();
if(cljs.core.truth_(inst_30564)){
var statearr_30736_32577 = state_30594__$1;
(statearr_30736_32577[(1)] = (39));

} else {
var statearr_30737_32578 = state_30594__$1;
(statearr_30737_32578[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (8))){
var inst_30472 = (state_30594[(13)]);
var inst_30471 = (state_30594[(15)]);
var inst_30476 = (inst_30472 < inst_30471);
var inst_30477 = inst_30476;
var state_30594__$1 = state_30594;
if(cljs.core.truth_(inst_30477)){
var statearr_30738_32579 = state_30594__$1;
(statearr_30738_32579[(1)] = (10));

} else {
var statearr_30740_32584 = state_30594__$1;
(statearr_30740_32584[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29335__auto__ = null;
var cljs$core$async$mult_$_state_machine__29335__auto____0 = (function (){
var statearr_30741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30741[(0)] = cljs$core$async$mult_$_state_machine__29335__auto__);

(statearr_30741[(1)] = (1));

return statearr_30741;
});
var cljs$core$async$mult_$_state_machine__29335__auto____1 = (function (state_30594){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30594);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30742){if((e30742 instanceof Object)){
var ex__29338__auto__ = e30742;
var statearr_30743_32592 = state_30594;
(statearr_30743_32592[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32597 = state_30594;
state_30594 = G__32597;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29335__auto__ = function(state_30594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29335__auto____1.call(this,state_30594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29335__auto____0;
cljs$core$async$mult_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29335__auto____1;
return cljs$core$async$mult_$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30745 = f__29514__auto__();
(statearr_30745[(6)] = c__29513__auto___32377);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30753 = arguments.length;
switch (G__30753) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32620 = arguments.length;
var i__4790__auto___32621 = (0);
while(true){
if((i__4790__auto___32621 < len__4789__auto___32620)){
args__4795__auto__.push((arguments[i__4790__auto___32621]));

var G__32624 = (i__4790__auto___32621 + (1));
i__4790__auto___32621 = G__32624;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30769){
var map__30770 = p__30769;
var map__30770__$1 = (((((!((map__30770 == null))))?(((((map__30770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30770):map__30770);
var opts = map__30770__$1;
var statearr_30773_32628 = state;
(statearr_30773_32628[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30777_32629 = state;
(statearr_30777_32629[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30778_32631 = state;
(statearr_30778_32631[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30764){
var G__30765 = cljs.core.first(seq30764);
var seq30764__$1 = cljs.core.next(seq30764);
var G__30766 = cljs.core.first(seq30764__$1);
var seq30764__$2 = cljs.core.next(seq30764__$1);
var G__30767 = cljs.core.first(seq30764__$2);
var seq30764__$3 = cljs.core.next(seq30764__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30765,G__30766,G__30767,seq30764__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30785 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30786){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30786 = meta30786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30787,meta30786__$1){
var self__ = this;
var _30787__$1 = this;
return (new cljs.core.async.t_cljs$core$async30785(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30786__$1));
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30787){
var self__ = this;
var _30787__$1 = this;
return self__.meta30786;
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30786","meta30786",-1953710771,null)], null);
}));

(cljs.core.async.t_cljs$core$async30785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30785");

(cljs.core.async.t_cljs$core$async30785.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30785.
 */
cljs.core.async.__GT_t_cljs$core$async30785 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30785(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30786){
return (new cljs.core.async.t_cljs$core$async30785(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30786));
});

}

return (new cljs.core.async.t_cljs$core$async30785(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29513__auto___32645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_30895){
var state_val_30896 = (state_30895[(1)]);
if((state_val_30896 === (7))){
var inst_30810 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30898_32650 = state_30895__$1;
(statearr_30898_32650[(2)] = inst_30810);

(statearr_30898_32650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (20))){
var inst_30822 = (state_30895[(7)]);
var state_30895__$1 = state_30895;
var statearr_30899_32655 = state_30895__$1;
(statearr_30899_32655[(2)] = inst_30822);

(statearr_30899_32655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (27))){
var state_30895__$1 = state_30895;
var statearr_30900_32660 = state_30895__$1;
(statearr_30900_32660[(2)] = null);

(statearr_30900_32660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (1))){
var inst_30794 = (state_30895[(8)]);
var inst_30794__$1 = calc_state();
var inst_30798 = (inst_30794__$1 == null);
var inst_30800 = cljs.core.not(inst_30798);
var state_30895__$1 = (function (){var statearr_30901 = state_30895;
(statearr_30901[(8)] = inst_30794__$1);

return statearr_30901;
})();
if(inst_30800){
var statearr_30902_32661 = state_30895__$1;
(statearr_30902_32661[(1)] = (2));

} else {
var statearr_30903_32662 = state_30895__$1;
(statearr_30903_32662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (24))){
var inst_30855 = (state_30895[(9)]);
var inst_30846 = (state_30895[(10)]);
var inst_30869 = (state_30895[(11)]);
var inst_30869__$1 = (inst_30846.cljs$core$IFn$_invoke$arity$1 ? inst_30846.cljs$core$IFn$_invoke$arity$1(inst_30855) : inst_30846.call(null,inst_30855));
var state_30895__$1 = (function (){var statearr_30904 = state_30895;
(statearr_30904[(11)] = inst_30869__$1);

return statearr_30904;
})();
if(cljs.core.truth_(inst_30869__$1)){
var statearr_30906_32664 = state_30895__$1;
(statearr_30906_32664[(1)] = (29));

} else {
var statearr_30907_32665 = state_30895__$1;
(statearr_30907_32665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (4))){
var inst_30813 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30813)){
var statearr_30908_32666 = state_30895__$1;
(statearr_30908_32666[(1)] = (8));

} else {
var statearr_30909_32667 = state_30895__$1;
(statearr_30909_32667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (15))){
var inst_30840 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30840)){
var statearr_30910_32668 = state_30895__$1;
(statearr_30910_32668[(1)] = (19));

} else {
var statearr_30911_32669 = state_30895__$1;
(statearr_30911_32669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (21))){
var inst_30845 = (state_30895[(12)]);
var inst_30845__$1 = (state_30895[(2)]);
var inst_30846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30845__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30845__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30845__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30895__$1 = (function (){var statearr_30915 = state_30895;
(statearr_30915[(10)] = inst_30846);

(statearr_30915[(13)] = inst_30847);

(statearr_30915[(12)] = inst_30845__$1);

return statearr_30915;
})();
return cljs.core.async.ioc_alts_BANG_(state_30895__$1,(22),inst_30848);
} else {
if((state_val_30896 === (31))){
var inst_30877 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30877)){
var statearr_30918_32670 = state_30895__$1;
(statearr_30918_32670[(1)] = (32));

} else {
var statearr_30919_32671 = state_30895__$1;
(statearr_30919_32671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (32))){
var inst_30854 = (state_30895[(14)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30895__$1,(35),out,inst_30854);
} else {
if((state_val_30896 === (33))){
var inst_30845 = (state_30895[(12)]);
var inst_30822 = inst_30845;
var state_30895__$1 = (function (){var statearr_30922 = state_30895;
(statearr_30922[(7)] = inst_30822);

return statearr_30922;
})();
var statearr_30924_32678 = state_30895__$1;
(statearr_30924_32678[(2)] = null);

(statearr_30924_32678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (13))){
var inst_30822 = (state_30895[(7)]);
var inst_30829 = inst_30822.cljs$lang$protocol_mask$partition0$;
var inst_30830 = (inst_30829 & (64));
var inst_30831 = inst_30822.cljs$core$ISeq$;
var inst_30832 = (cljs.core.PROTOCOL_SENTINEL === inst_30831);
var inst_30833 = ((inst_30830) || (inst_30832));
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30833)){
var statearr_30927_32679 = state_30895__$1;
(statearr_30927_32679[(1)] = (16));

} else {
var statearr_30928_32680 = state_30895__$1;
(statearr_30928_32680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (22))){
var inst_30855 = (state_30895[(9)]);
var inst_30854 = (state_30895[(14)]);
var inst_30853 = (state_30895[(2)]);
var inst_30854__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30853,(0),null);
var inst_30855__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30853,(1),null);
var inst_30856 = (inst_30854__$1 == null);
var inst_30857 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30855__$1,change);
var inst_30858 = ((inst_30856) || (inst_30857));
var state_30895__$1 = (function (){var statearr_30932 = state_30895;
(statearr_30932[(9)] = inst_30855__$1);

(statearr_30932[(14)] = inst_30854__$1);

return statearr_30932;
})();
if(cljs.core.truth_(inst_30858)){
var statearr_30933_32682 = state_30895__$1;
(statearr_30933_32682[(1)] = (23));

} else {
var statearr_30934_32683 = state_30895__$1;
(statearr_30934_32683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (36))){
var inst_30845 = (state_30895[(12)]);
var inst_30822 = inst_30845;
var state_30895__$1 = (function (){var statearr_30935 = state_30895;
(statearr_30935[(7)] = inst_30822);

return statearr_30935;
})();
var statearr_30936_32688 = state_30895__$1;
(statearr_30936_32688[(2)] = null);

(statearr_30936_32688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (29))){
var inst_30869 = (state_30895[(11)]);
var state_30895__$1 = state_30895;
var statearr_30937_32689 = state_30895__$1;
(statearr_30937_32689[(2)] = inst_30869);

(statearr_30937_32689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (6))){
var state_30895__$1 = state_30895;
var statearr_30938_32690 = state_30895__$1;
(statearr_30938_32690[(2)] = false);

(statearr_30938_32690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (28))){
var inst_30865 = (state_30895[(2)]);
var inst_30866 = calc_state();
var inst_30822 = inst_30866;
var state_30895__$1 = (function (){var statearr_30939 = state_30895;
(statearr_30939[(7)] = inst_30822);

(statearr_30939[(15)] = inst_30865);

return statearr_30939;
})();
var statearr_30940_32691 = state_30895__$1;
(statearr_30940_32691[(2)] = null);

(statearr_30940_32691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (25))){
var inst_30891 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30941_32692 = state_30895__$1;
(statearr_30941_32692[(2)] = inst_30891);

(statearr_30941_32692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (34))){
var inst_30889 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30944_32693 = state_30895__$1;
(statearr_30944_32693[(2)] = inst_30889);

(statearr_30944_32693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (17))){
var state_30895__$1 = state_30895;
var statearr_30945_32694 = state_30895__$1;
(statearr_30945_32694[(2)] = false);

(statearr_30945_32694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (3))){
var state_30895__$1 = state_30895;
var statearr_30947_32695 = state_30895__$1;
(statearr_30947_32695[(2)] = false);

(statearr_30947_32695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (12))){
var inst_30893 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30895__$1,inst_30893);
} else {
if((state_val_30896 === (2))){
var inst_30794 = (state_30895[(8)]);
var inst_30802 = inst_30794.cljs$lang$protocol_mask$partition0$;
var inst_30803 = (inst_30802 & (64));
var inst_30804 = inst_30794.cljs$core$ISeq$;
var inst_30805 = (cljs.core.PROTOCOL_SENTINEL === inst_30804);
var inst_30806 = ((inst_30803) || (inst_30805));
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30806)){
var statearr_30949_32696 = state_30895__$1;
(statearr_30949_32696[(1)] = (5));

} else {
var statearr_30951_32697 = state_30895__$1;
(statearr_30951_32697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (23))){
var inst_30854 = (state_30895[(14)]);
var inst_30860 = (inst_30854 == null);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30860)){
var statearr_30952_32698 = state_30895__$1;
(statearr_30952_32698[(1)] = (26));

} else {
var statearr_30953_32699 = state_30895__$1;
(statearr_30953_32699[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (35))){
var inst_30880 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30880)){
var statearr_30958_32700 = state_30895__$1;
(statearr_30958_32700[(1)] = (36));

} else {
var statearr_30959_32701 = state_30895__$1;
(statearr_30959_32701[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (19))){
var inst_30822 = (state_30895[(7)]);
var inst_30842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30822);
var state_30895__$1 = state_30895;
var statearr_30964_32702 = state_30895__$1;
(statearr_30964_32702[(2)] = inst_30842);

(statearr_30964_32702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (11))){
var inst_30822 = (state_30895[(7)]);
var inst_30826 = (inst_30822 == null);
var inst_30827 = cljs.core.not(inst_30826);
var state_30895__$1 = state_30895;
if(inst_30827){
var statearr_30967_32703 = state_30895__$1;
(statearr_30967_32703[(1)] = (13));

} else {
var statearr_30968_32704 = state_30895__$1;
(statearr_30968_32704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (9))){
var inst_30794 = (state_30895[(8)]);
var state_30895__$1 = state_30895;
var statearr_30970_32705 = state_30895__$1;
(statearr_30970_32705[(2)] = inst_30794);

(statearr_30970_32705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (5))){
var state_30895__$1 = state_30895;
var statearr_30972_32706 = state_30895__$1;
(statearr_30972_32706[(2)] = true);

(statearr_30972_32706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (14))){
var state_30895__$1 = state_30895;
var statearr_30977_32707 = state_30895__$1;
(statearr_30977_32707[(2)] = false);

(statearr_30977_32707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (26))){
var inst_30855 = (state_30895[(9)]);
var inst_30862 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30855);
var state_30895__$1 = state_30895;
var statearr_30980_32711 = state_30895__$1;
(statearr_30980_32711[(2)] = inst_30862);

(statearr_30980_32711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (16))){
var state_30895__$1 = state_30895;
var statearr_30982_32712 = state_30895__$1;
(statearr_30982_32712[(2)] = true);

(statearr_30982_32712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (38))){
var inst_30885 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30983_32713 = state_30895__$1;
(statearr_30983_32713[(2)] = inst_30885);

(statearr_30983_32713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (30))){
var inst_30855 = (state_30895[(9)]);
var inst_30846 = (state_30895[(10)]);
var inst_30847 = (state_30895[(13)]);
var inst_30872 = cljs.core.empty_QMARK_(inst_30846);
var inst_30873 = (inst_30847.cljs$core$IFn$_invoke$arity$1 ? inst_30847.cljs$core$IFn$_invoke$arity$1(inst_30855) : inst_30847.call(null,inst_30855));
var inst_30874 = cljs.core.not(inst_30873);
var inst_30875 = ((inst_30872) && (inst_30874));
var state_30895__$1 = state_30895;
var statearr_30984_32714 = state_30895__$1;
(statearr_30984_32714[(2)] = inst_30875);

(statearr_30984_32714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (10))){
var inst_30794 = (state_30895[(8)]);
var inst_30818 = (state_30895[(2)]);
var inst_30819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30818,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30822 = inst_30794;
var state_30895__$1 = (function (){var statearr_30985 = state_30895;
(statearr_30985[(16)] = inst_30819);

(statearr_30985[(17)] = inst_30821);

(statearr_30985[(18)] = inst_30820);

(statearr_30985[(7)] = inst_30822);

return statearr_30985;
})();
var statearr_30986_32715 = state_30895__$1;
(statearr_30986_32715[(2)] = null);

(statearr_30986_32715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (18))){
var inst_30837 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30987_32716 = state_30895__$1;
(statearr_30987_32716[(2)] = inst_30837);

(statearr_30987_32716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (37))){
var state_30895__$1 = state_30895;
var statearr_30988_32721 = state_30895__$1;
(statearr_30988_32721[(2)] = null);

(statearr_30988_32721[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (8))){
var inst_30794 = (state_30895[(8)]);
var inst_30815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30794);
var state_30895__$1 = state_30895;
var statearr_30989_32727 = state_30895__$1;
(statearr_30989_32727[(2)] = inst_30815);

(statearr_30989_32727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29335__auto__ = null;
var cljs$core$async$mix_$_state_machine__29335__auto____0 = (function (){
var statearr_30990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30990[(0)] = cljs$core$async$mix_$_state_machine__29335__auto__);

(statearr_30990[(1)] = (1));

return statearr_30990;
});
var cljs$core$async$mix_$_state_machine__29335__auto____1 = (function (state_30895){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_30895);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e30991){if((e30991 instanceof Object)){
var ex__29338__auto__ = e30991;
var statearr_30992_32732 = state_30895;
(statearr_30992_32732[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32733 = state_30895;
state_30895 = G__32733;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29335__auto__ = function(state_30895){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29335__auto____1.call(this,state_30895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29335__auto____0;
cljs$core$async$mix_$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29335__auto____1;
return cljs$core$async$mix_$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_30993 = f__29514__auto__();
(statearr_30993[(6)] = c__29513__auto___32645);

return statearr_30993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31004 = arguments.length;
switch (G__31004) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31014 = arguments.length;
switch (G__31014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31007_SHARP_){
if(cljs.core.truth_((p1__31007_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31007_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31007_SHARP_.call(null,topic)))){
return p1__31007_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31007_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31028 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31029){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31029 = meta31029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31030,meta31029__$1){
var self__ = this;
var _31030__$1 = this;
return (new cljs.core.async.t_cljs$core$async31028(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31029__$1));
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31030){
var self__ = this;
var _31030__$1 = this;
return self__.meta31029;
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31029","meta31029",883923407,null)], null);
}));

(cljs.core.async.t_cljs$core$async31028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31028");

(cljs.core.async.t_cljs$core$async31028.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31028.
 */
cljs.core.async.__GT_t_cljs$core$async31028 = (function cljs$core$async$__GT_t_cljs$core$async31028(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31029){
return (new cljs.core.async.t_cljs$core$async31028(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31029));
});

}

return (new cljs.core.async.t_cljs$core$async31028(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29513__auto___32753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (7))){
var inst_31111 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31117_32758 = state_31115__$1;
(statearr_31117_32758[(2)] = inst_31111);

(statearr_31117_32758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (20))){
var state_31115__$1 = state_31115;
var statearr_31118_32761 = state_31115__$1;
(statearr_31118_32761[(2)] = null);

(statearr_31118_32761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (1))){
var state_31115__$1 = state_31115;
var statearr_31119_32762 = state_31115__$1;
(statearr_31119_32762[(2)] = null);

(statearr_31119_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (24))){
var inst_31094 = (state_31115[(7)]);
var inst_31103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31094);
var state_31115__$1 = state_31115;
var statearr_31120_32763 = state_31115__$1;
(statearr_31120_32763[(2)] = inst_31103);

(statearr_31120_32763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (4))){
var inst_31042 = (state_31115[(8)]);
var inst_31042__$1 = (state_31115[(2)]);
var inst_31043 = (inst_31042__$1 == null);
var state_31115__$1 = (function (){var statearr_31121 = state_31115;
(statearr_31121[(8)] = inst_31042__$1);

return statearr_31121;
})();
if(cljs.core.truth_(inst_31043)){
var statearr_31122_32764 = state_31115__$1;
(statearr_31122_32764[(1)] = (5));

} else {
var statearr_31123_32765 = state_31115__$1;
(statearr_31123_32765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (15))){
var inst_31088 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31124_32766 = state_31115__$1;
(statearr_31124_32766[(2)] = inst_31088);

(statearr_31124_32766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (21))){
var inst_31108 = (state_31115[(2)]);
var state_31115__$1 = (function (){var statearr_31125 = state_31115;
(statearr_31125[(9)] = inst_31108);

return statearr_31125;
})();
var statearr_31126_32767 = state_31115__$1;
(statearr_31126_32767[(2)] = null);

(statearr_31126_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (13))){
var inst_31066 = (state_31115[(10)]);
var inst_31068 = cljs.core.chunked_seq_QMARK_(inst_31066);
var state_31115__$1 = state_31115;
if(inst_31068){
var statearr_31129_32770 = state_31115__$1;
(statearr_31129_32770[(1)] = (16));

} else {
var statearr_31130_32772 = state_31115__$1;
(statearr_31130_32772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (22))){
var inst_31100 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31100)){
var statearr_31131_32776 = state_31115__$1;
(statearr_31131_32776[(1)] = (23));

} else {
var statearr_31132_32777 = state_31115__$1;
(statearr_31132_32777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31096 = (state_31115[(11)]);
var inst_31094 = (state_31115[(7)]);
var inst_31042 = (state_31115[(8)]);
var inst_31094__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31042) : topic_fn.call(null,inst_31042));
var inst_31095 = cljs.core.deref(mults);
var inst_31096__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31095,inst_31094__$1);
var state_31115__$1 = (function (){var statearr_31133 = state_31115;
(statearr_31133[(11)] = inst_31096__$1);

(statearr_31133[(7)] = inst_31094__$1);

return statearr_31133;
})();
if(cljs.core.truth_(inst_31096__$1)){
var statearr_31134_32789 = state_31115__$1;
(statearr_31134_32789[(1)] = (19));

} else {
var statearr_31135_32791 = state_31115__$1;
(statearr_31135_32791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (25))){
var inst_31105 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31138_32792 = state_31115__$1;
(statearr_31138_32792[(2)] = inst_31105);

(statearr_31138_32792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (17))){
var inst_31066 = (state_31115[(10)]);
var inst_31077 = cljs.core.first(inst_31066);
var inst_31080 = cljs.core.async.muxch_STAR_(inst_31077);
var inst_31081 = cljs.core.async.close_BANG_(inst_31080);
var inst_31082 = cljs.core.next(inst_31066);
var inst_31052 = inst_31082;
var inst_31053 = null;
var inst_31054 = (0);
var inst_31055 = (0);
var state_31115__$1 = (function (){var statearr_31141 = state_31115;
(statearr_31141[(12)] = inst_31081);

(statearr_31141[(13)] = inst_31053);

(statearr_31141[(14)] = inst_31052);

(statearr_31141[(15)] = inst_31055);

(statearr_31141[(16)] = inst_31054);

return statearr_31141;
})();
var statearr_31142_32799 = state_31115__$1;
(statearr_31142_32799[(2)] = null);

(statearr_31142_32799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (3))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (12))){
var inst_31090 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31143_32803 = state_31115__$1;
(statearr_31143_32803[(2)] = inst_31090);

(statearr_31143_32803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (2))){
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31115__$1,(4),ch);
} else {
if((state_val_31116 === (23))){
var state_31115__$1 = state_31115;
var statearr_31144_32805 = state_31115__$1;
(statearr_31144_32805[(2)] = null);

(statearr_31144_32805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (19))){
var inst_31096 = (state_31115[(11)]);
var inst_31042 = (state_31115[(8)]);
var inst_31098 = cljs.core.async.muxch_STAR_(inst_31096);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31115__$1,(22),inst_31098,inst_31042);
} else {
if((state_val_31116 === (11))){
var inst_31052 = (state_31115[(14)]);
var inst_31066 = (state_31115[(10)]);
var inst_31066__$1 = cljs.core.seq(inst_31052);
var state_31115__$1 = (function (){var statearr_31149 = state_31115;
(statearr_31149[(10)] = inst_31066__$1);

return statearr_31149;
})();
if(inst_31066__$1){
var statearr_31150_32814 = state_31115__$1;
(statearr_31150_32814[(1)] = (13));

} else {
var statearr_31151_32815 = state_31115__$1;
(statearr_31151_32815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (9))){
var inst_31092 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31152_32816 = state_31115__$1;
(statearr_31152_32816[(2)] = inst_31092);

(statearr_31152_32816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (5))){
var inst_31049 = cljs.core.deref(mults);
var inst_31050 = cljs.core.vals(inst_31049);
var inst_31051 = cljs.core.seq(inst_31050);
var inst_31052 = inst_31051;
var inst_31053 = null;
var inst_31054 = (0);
var inst_31055 = (0);
var state_31115__$1 = (function (){var statearr_31153 = state_31115;
(statearr_31153[(13)] = inst_31053);

(statearr_31153[(14)] = inst_31052);

(statearr_31153[(15)] = inst_31055);

(statearr_31153[(16)] = inst_31054);

return statearr_31153;
})();
var statearr_31154_32821 = state_31115__$1;
(statearr_31154_32821[(2)] = null);

(statearr_31154_32821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (14))){
var state_31115__$1 = state_31115;
var statearr_31158_32824 = state_31115__$1;
(statearr_31158_32824[(2)] = null);

(statearr_31158_32824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (16))){
var inst_31066 = (state_31115[(10)]);
var inst_31072 = cljs.core.chunk_first(inst_31066);
var inst_31073 = cljs.core.chunk_rest(inst_31066);
var inst_31074 = cljs.core.count(inst_31072);
var inst_31052 = inst_31073;
var inst_31053 = inst_31072;
var inst_31054 = inst_31074;
var inst_31055 = (0);
var state_31115__$1 = (function (){var statearr_31161 = state_31115;
(statearr_31161[(13)] = inst_31053);

(statearr_31161[(14)] = inst_31052);

(statearr_31161[(15)] = inst_31055);

(statearr_31161[(16)] = inst_31054);

return statearr_31161;
})();
var statearr_31163_32834 = state_31115__$1;
(statearr_31163_32834[(2)] = null);

(statearr_31163_32834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (10))){
var inst_31053 = (state_31115[(13)]);
var inst_31052 = (state_31115[(14)]);
var inst_31055 = (state_31115[(15)]);
var inst_31054 = (state_31115[(16)]);
var inst_31060 = cljs.core._nth(inst_31053,inst_31055);
var inst_31061 = cljs.core.async.muxch_STAR_(inst_31060);
var inst_31062 = cljs.core.async.close_BANG_(inst_31061);
var inst_31063 = (inst_31055 + (1));
var tmp31155 = inst_31053;
var tmp31156 = inst_31052;
var tmp31157 = inst_31054;
var inst_31052__$1 = tmp31156;
var inst_31053__$1 = tmp31155;
var inst_31054__$1 = tmp31157;
var inst_31055__$1 = inst_31063;
var state_31115__$1 = (function (){var statearr_31165 = state_31115;
(statearr_31165[(13)] = inst_31053__$1);

(statearr_31165[(14)] = inst_31052__$1);

(statearr_31165[(17)] = inst_31062);

(statearr_31165[(15)] = inst_31055__$1);

(statearr_31165[(16)] = inst_31054__$1);

return statearr_31165;
})();
var statearr_31168_32843 = state_31115__$1;
(statearr_31168_32843[(2)] = null);

(statearr_31168_32843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (18))){
var inst_31085 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31169_32844 = state_31115__$1;
(statearr_31169_32844[(2)] = inst_31085);

(statearr_31169_32844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (8))){
var inst_31055 = (state_31115[(15)]);
var inst_31054 = (state_31115[(16)]);
var inst_31057 = (inst_31055 < inst_31054);
var inst_31058 = inst_31057;
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31058)){
var statearr_31171_32845 = state_31115__$1;
(statearr_31171_32845[(1)] = (10));

} else {
var statearr_31172_32846 = state_31115__$1;
(statearr_31172_32846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31173[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31173[(1)] = (1));

return statearr_31173;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31115){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31115);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31174){if((e31174 instanceof Object)){
var ex__29338__auto__ = e31174;
var statearr_31175_32847 = state_31115;
(statearr_31175_32847[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32854 = state_31115;
state_31115 = G__32854;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31176 = f__29514__auto__();
(statearr_31176[(6)] = c__29513__auto___32753);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31178 = arguments.length;
switch (G__31178) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31188 = arguments.length;
switch (G__31188) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31194 = arguments.length;
switch (G__31194) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29513__auto___32866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31240){
var state_val_31241 = (state_31240[(1)]);
if((state_val_31241 === (7))){
var state_31240__$1 = state_31240;
var statearr_31242_32867 = state_31240__$1;
(statearr_31242_32867[(2)] = null);

(statearr_31242_32867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (1))){
var state_31240__$1 = state_31240;
var statearr_31243_32868 = state_31240__$1;
(statearr_31243_32868[(2)] = null);

(statearr_31243_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (4))){
var inst_31201 = (state_31240[(7)]);
var inst_31203 = (inst_31201 < cnt);
var state_31240__$1 = state_31240;
if(cljs.core.truth_(inst_31203)){
var statearr_31244_32869 = state_31240__$1;
(statearr_31244_32869[(1)] = (6));

} else {
var statearr_31245_32870 = state_31240__$1;
(statearr_31245_32870[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (15))){
var inst_31236 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
var statearr_31246_32871 = state_31240__$1;
(statearr_31246_32871[(2)] = inst_31236);

(statearr_31246_32871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (13))){
var inst_31229 = cljs.core.async.close_BANG_(out);
var state_31240__$1 = state_31240;
var statearr_31248_32872 = state_31240__$1;
(statearr_31248_32872[(2)] = inst_31229);

(statearr_31248_32872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (6))){
var state_31240__$1 = state_31240;
var statearr_31249_32873 = state_31240__$1;
(statearr_31249_32873[(2)] = null);

(statearr_31249_32873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (3))){
var inst_31238 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31240__$1,inst_31238);
} else {
if((state_val_31241 === (12))){
var inst_31226 = (state_31240[(8)]);
var inst_31226__$1 = (state_31240[(2)]);
var inst_31227 = cljs.core.some(cljs.core.nil_QMARK_,inst_31226__$1);
var state_31240__$1 = (function (){var statearr_31251 = state_31240;
(statearr_31251[(8)] = inst_31226__$1);

return statearr_31251;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31252_32874 = state_31240__$1;
(statearr_31252_32874[(1)] = (13));

} else {
var statearr_31253_32875 = state_31240__$1;
(statearr_31253_32875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (2))){
var inst_31200 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31201 = (0);
var state_31240__$1 = (function (){var statearr_31254 = state_31240;
(statearr_31254[(9)] = inst_31200);

(statearr_31254[(7)] = inst_31201);

return statearr_31254;
})();
var statearr_31255_32882 = state_31240__$1;
(statearr_31255_32882[(2)] = null);

(statearr_31255_32882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (11))){
var inst_31201 = (state_31240[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31240,(10),Object,null,(9));
var inst_31212 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31201) : chs__$1.call(null,inst_31201));
var inst_31213 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31201) : done.call(null,inst_31201));
var inst_31214 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31212,inst_31213);
var state_31240__$1 = state_31240;
var statearr_31256_32883 = state_31240__$1;
(statearr_31256_32883[(2)] = inst_31214);


cljs.core.async.impl.ioc_helpers.process_exception(state_31240__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (9))){
var inst_31201 = (state_31240[(7)]);
var inst_31216 = (state_31240[(2)]);
var inst_31218 = (inst_31201 + (1));
var inst_31201__$1 = inst_31218;
var state_31240__$1 = (function (){var statearr_31257 = state_31240;
(statearr_31257[(10)] = inst_31216);

(statearr_31257[(7)] = inst_31201__$1);

return statearr_31257;
})();
var statearr_31258_32887 = state_31240__$1;
(statearr_31258_32887[(2)] = null);

(statearr_31258_32887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (5))){
var inst_31224 = (state_31240[(2)]);
var state_31240__$1 = (function (){var statearr_31260 = state_31240;
(statearr_31260[(11)] = inst_31224);

return statearr_31260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31240__$1,(12),dchan);
} else {
if((state_val_31241 === (14))){
var inst_31226 = (state_31240[(8)]);
var inst_31231 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31226);
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31240__$1,(16),out,inst_31231);
} else {
if((state_val_31241 === (16))){
var inst_31233 = (state_31240[(2)]);
var state_31240__$1 = (function (){var statearr_31262 = state_31240;
(statearr_31262[(12)] = inst_31233);

return statearr_31262;
})();
var statearr_31263_32891 = state_31240__$1;
(statearr_31263_32891[(2)] = null);

(statearr_31263_32891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (10))){
var inst_31205 = (state_31240[(2)]);
var inst_31207 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31240__$1 = (function (){var statearr_31264 = state_31240;
(statearr_31264[(13)] = inst_31205);

return statearr_31264;
})();
var statearr_31265_32892 = state_31240__$1;
(statearr_31265_32892[(2)] = inst_31207);


cljs.core.async.impl.ioc_helpers.process_exception(state_31240__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (8))){
var inst_31222 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
var statearr_31266_32893 = state_31240__$1;
(statearr_31266_32893[(2)] = inst_31222);

(statearr_31266_32893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31240){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31240);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31268){if((e31268 instanceof Object)){
var ex__29338__auto__ = e31268;
var statearr_31269_32894 = state_31240;
(statearr_31269_32894[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32899 = state_31240;
state_31240 = G__32899;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31273 = f__29514__auto__();
(statearr_31273[(6)] = c__29513__auto___32866);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31276 = arguments.length;
switch (G__31276) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___32901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (7))){
var inst_31288 = (state_31308[(7)]);
var inst_31287 = (state_31308[(8)]);
var inst_31287__$1 = (state_31308[(2)]);
var inst_31288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31287__$1,(0),null);
var inst_31289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31287__$1,(1),null);
var inst_31290 = (inst_31288__$1 == null);
var state_31308__$1 = (function (){var statearr_31310 = state_31308;
(statearr_31310[(7)] = inst_31288__$1);

(statearr_31310[(9)] = inst_31289);

(statearr_31310[(8)] = inst_31287__$1);

return statearr_31310;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31311_32903 = state_31308__$1;
(statearr_31311_32903[(1)] = (8));

} else {
var statearr_31312_32905 = state_31308__$1;
(statearr_31312_32905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (1))){
var inst_31277 = cljs.core.vec(chs);
var inst_31278 = inst_31277;
var state_31308__$1 = (function (){var statearr_31313 = state_31308;
(statearr_31313[(10)] = inst_31278);

return statearr_31313;
})();
var statearr_31314_32906 = state_31308__$1;
(statearr_31314_32906[(2)] = null);

(statearr_31314_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (4))){
var inst_31278 = (state_31308[(10)]);
var state_31308__$1 = state_31308;
return cljs.core.async.ioc_alts_BANG_(state_31308__$1,(7),inst_31278);
} else {
if((state_val_31309 === (6))){
var inst_31304 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31316_32915 = state_31308__$1;
(statearr_31316_32915[(2)] = inst_31304);

(statearr_31316_32915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (3))){
var inst_31306 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (2))){
var inst_31278 = (state_31308[(10)]);
var inst_31280 = cljs.core.count(inst_31278);
var inst_31281 = (inst_31280 > (0));
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31281)){
var statearr_31318_32920 = state_31308__$1;
(statearr_31318_32920[(1)] = (4));

} else {
var statearr_31319_32921 = state_31308__$1;
(statearr_31319_32921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (11))){
var inst_31278 = (state_31308[(10)]);
var inst_31297 = (state_31308[(2)]);
var tmp31317 = inst_31278;
var inst_31278__$1 = tmp31317;
var state_31308__$1 = (function (){var statearr_31320 = state_31308;
(statearr_31320[(10)] = inst_31278__$1);

(statearr_31320[(11)] = inst_31297);

return statearr_31320;
})();
var statearr_31321_32922 = state_31308__$1;
(statearr_31321_32922[(2)] = null);

(statearr_31321_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (9))){
var inst_31288 = (state_31308[(7)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31308__$1,(11),out,inst_31288);
} else {
if((state_val_31309 === (5))){
var inst_31302 = cljs.core.async.close_BANG_(out);
var state_31308__$1 = state_31308;
var statearr_31322_32929 = state_31308__$1;
(statearr_31322_32929[(2)] = inst_31302);

(statearr_31322_32929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (10))){
var inst_31300 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31323_32930 = state_31308__$1;
(statearr_31323_32930[(2)] = inst_31300);

(statearr_31323_32930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (8))){
var inst_31278 = (state_31308[(10)]);
var inst_31288 = (state_31308[(7)]);
var inst_31289 = (state_31308[(9)]);
var inst_31287 = (state_31308[(8)]);
var inst_31292 = (function (){var cs = inst_31278;
var vec__31283 = inst_31287;
var v = inst_31288;
var c = inst_31289;
return (function (p1__31274_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31274_SHARP_);
});
})();
var inst_31293 = cljs.core.filterv(inst_31292,inst_31278);
var inst_31278__$1 = inst_31293;
var state_31308__$1 = (function (){var statearr_31325 = state_31308;
(statearr_31325[(10)] = inst_31278__$1);

return statearr_31325;
})();
var statearr_31326_32935 = state_31308__$1;
(statearr_31326_32935[(2)] = null);

(statearr_31326_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31327[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31327[(1)] = (1));

return statearr_31327;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31308){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31308);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31328){if((e31328 instanceof Object)){
var ex__29338__auto__ = e31328;
var statearr_31329_32937 = state_31308;
(statearr_31329_32937[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_31308;
state_31308 = G__32939;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31330 = f__29514__auto__();
(statearr_31330[(6)] = c__29513__auto___32901);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31338 = arguments.length;
switch (G__31338) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___32941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31362){
var state_val_31363 = (state_31362[(1)]);
if((state_val_31363 === (7))){
var inst_31344 = (state_31362[(7)]);
var inst_31344__$1 = (state_31362[(2)]);
var inst_31345 = (inst_31344__$1 == null);
var inst_31346 = cljs.core.not(inst_31345);
var state_31362__$1 = (function (){var statearr_31364 = state_31362;
(statearr_31364[(7)] = inst_31344__$1);

return statearr_31364;
})();
if(inst_31346){
var statearr_31365_32944 = state_31362__$1;
(statearr_31365_32944[(1)] = (8));

} else {
var statearr_31366_32945 = state_31362__$1;
(statearr_31366_32945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (1))){
var inst_31339 = (0);
var state_31362__$1 = (function (){var statearr_31367 = state_31362;
(statearr_31367[(8)] = inst_31339);

return statearr_31367;
})();
var statearr_31368_32948 = state_31362__$1;
(statearr_31368_32948[(2)] = null);

(statearr_31368_32948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (4))){
var state_31362__$1 = state_31362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31362__$1,(7),ch);
} else {
if((state_val_31363 === (6))){
var inst_31357 = (state_31362[(2)]);
var state_31362__$1 = state_31362;
var statearr_31369_32951 = state_31362__$1;
(statearr_31369_32951[(2)] = inst_31357);

(statearr_31369_32951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (3))){
var inst_31359 = (state_31362[(2)]);
var inst_31360 = cljs.core.async.close_BANG_(out);
var state_31362__$1 = (function (){var statearr_31370 = state_31362;
(statearr_31370[(9)] = inst_31359);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31362__$1,inst_31360);
} else {
if((state_val_31363 === (2))){
var inst_31339 = (state_31362[(8)]);
var inst_31341 = (inst_31339 < n);
var state_31362__$1 = state_31362;
if(cljs.core.truth_(inst_31341)){
var statearr_31371_32954 = state_31362__$1;
(statearr_31371_32954[(1)] = (4));

} else {
var statearr_31374_32956 = state_31362__$1;
(statearr_31374_32956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (11))){
var inst_31339 = (state_31362[(8)]);
var inst_31349 = (state_31362[(2)]);
var inst_31350 = (inst_31339 + (1));
var inst_31339__$1 = inst_31350;
var state_31362__$1 = (function (){var statearr_31375 = state_31362;
(statearr_31375[(8)] = inst_31339__$1);

(statearr_31375[(10)] = inst_31349);

return statearr_31375;
})();
var statearr_31376_32958 = state_31362__$1;
(statearr_31376_32958[(2)] = null);

(statearr_31376_32958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (9))){
var state_31362__$1 = state_31362;
var statearr_31377_32959 = state_31362__$1;
(statearr_31377_32959[(2)] = null);

(statearr_31377_32959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (5))){
var state_31362__$1 = state_31362;
var statearr_31378_32960 = state_31362__$1;
(statearr_31378_32960[(2)] = null);

(statearr_31378_32960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (10))){
var inst_31354 = (state_31362[(2)]);
var state_31362__$1 = state_31362;
var statearr_31379_32961 = state_31362__$1;
(statearr_31379_32961[(2)] = inst_31354);

(statearr_31379_32961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31363 === (8))){
var inst_31344 = (state_31362[(7)]);
var state_31362__$1 = state_31362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31362__$1,(11),out,inst_31344);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31380[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31380[(1)] = (1));

return statearr_31380;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31362){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31362);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31381){if((e31381 instanceof Object)){
var ex__29338__auto__ = e31381;
var statearr_31382_32963 = state_31362;
(statearr_31382_32963[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32964 = state_31362;
state_31362 = G__32964;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31383 = f__29514__auto__();
(statearr_31383[(6)] = c__29513__auto___32941);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31385 = (function (f,ch,meta31386){
this.f = f;
this.ch = ch;
this.meta31386 = meta31386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31387,meta31386__$1){
var self__ = this;
var _31387__$1 = this;
return (new cljs.core.async.t_cljs$core$async31385(self__.f,self__.ch,meta31386__$1));
}));

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31387){
var self__ = this;
var _31387__$1 = this;
return self__.meta31386;
}));

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31394 = (function (f,ch,meta31386,_,fn1,meta31395){
this.f = f;
this.ch = ch;
this.meta31386 = meta31386;
this._ = _;
this.fn1 = fn1;
this.meta31395 = meta31395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31396,meta31395__$1){
var self__ = this;
var _31396__$1 = this;
return (new cljs.core.async.t_cljs$core$async31394(self__.f,self__.ch,self__.meta31386,self__._,self__.fn1,meta31395__$1));
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31396){
var self__ = this;
var _31396__$1 = this;
return self__.meta31395;
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31384_SHARP_){
var G__31397 = (((p1__31384_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31384_SHARP_) : self__.f.call(null,p1__31384_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31397) : f1.call(null,G__31397));
});
}));

(cljs.core.async.t_cljs$core$async31394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31386","meta31386",-1185649752,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31385","cljs.core.async/t_cljs$core$async31385",-1902444993,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31395","meta31395",-385901930,null)], null);
}));

(cljs.core.async.t_cljs$core$async31394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31394");

(cljs.core.async.t_cljs$core$async31394.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31394.
 */
cljs.core.async.__GT_t_cljs$core$async31394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31394(f__$1,ch__$1,meta31386__$1,___$2,fn1__$1,meta31395){
return (new cljs.core.async.t_cljs$core$async31394(f__$1,ch__$1,meta31386__$1,___$2,fn1__$1,meta31395));
});

}

return (new cljs.core.async.t_cljs$core$async31394(self__.f,self__.ch,self__.meta31386,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31398 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31398) : self__.f.call(null,G__31398));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31385.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31386","meta31386",-1185649752,null)], null);
}));

(cljs.core.async.t_cljs$core$async31385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31385");

(cljs.core.async.t_cljs$core$async31385.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31385.
 */
cljs.core.async.__GT_t_cljs$core$async31385 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31385(f__$1,ch__$1,meta31386){
return (new cljs.core.async.t_cljs$core$async31385(f__$1,ch__$1,meta31386));
});

}

return (new cljs.core.async.t_cljs$core$async31385(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31408 = (function (f,ch,meta31409){
this.f = f;
this.ch = ch;
this.meta31409 = meta31409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31410,meta31409__$1){
var self__ = this;
var _31410__$1 = this;
return (new cljs.core.async.t_cljs$core$async31408(self__.f,self__.ch,meta31409__$1));
}));

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31410){
var self__ = this;
var _31410__$1 = this;
return self__.meta31409;
}));

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31409","meta31409",-902076874,null)], null);
}));

(cljs.core.async.t_cljs$core$async31408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31408");

(cljs.core.async.t_cljs$core$async31408.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31408.
 */
cljs.core.async.__GT_t_cljs$core$async31408 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31408(f__$1,ch__$1,meta31409){
return (new cljs.core.async.t_cljs$core$async31408(f__$1,ch__$1,meta31409));
});

}

return (new cljs.core.async.t_cljs$core$async31408(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31418 = (function (p,ch,meta31419){
this.p = p;
this.ch = ch;
this.meta31419 = meta31419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31420,meta31419__$1){
var self__ = this;
var _31420__$1 = this;
return (new cljs.core.async.t_cljs$core$async31418(self__.p,self__.ch,meta31419__$1));
}));

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31420){
var self__ = this;
var _31420__$1 = this;
return self__.meta31419;
}));

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31419","meta31419",-183405585,null)], null);
}));

(cljs.core.async.t_cljs$core$async31418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31418");

(cljs.core.async.t_cljs$core$async31418.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31418.
 */
cljs.core.async.__GT_t_cljs$core$async31418 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31418(p__$1,ch__$1,meta31419){
return (new cljs.core.async.t_cljs$core$async31418(p__$1,ch__$1,meta31419));
});

}

return (new cljs.core.async.t_cljs$core$async31418(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31435 = arguments.length;
switch (G__31435) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___33010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31456){
var state_val_31457 = (state_31456[(1)]);
if((state_val_31457 === (7))){
var inst_31452 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
var statearr_31458_33018 = state_31456__$1;
(statearr_31458_33018[(2)] = inst_31452);

(statearr_31458_33018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (1))){
var state_31456__$1 = state_31456;
var statearr_31459_33024 = state_31456__$1;
(statearr_31459_33024[(2)] = null);

(statearr_31459_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (4))){
var inst_31438 = (state_31456[(7)]);
var inst_31438__$1 = (state_31456[(2)]);
var inst_31439 = (inst_31438__$1 == null);
var state_31456__$1 = (function (){var statearr_31462 = state_31456;
(statearr_31462[(7)] = inst_31438__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31439)){
var statearr_31463_33028 = state_31456__$1;
(statearr_31463_33028[(1)] = (5));

} else {
var statearr_31464_33030 = state_31456__$1;
(statearr_31464_33030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (6))){
var inst_31438 = (state_31456[(7)]);
var inst_31443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31438) : p.call(null,inst_31438));
var state_31456__$1 = state_31456;
if(cljs.core.truth_(inst_31443)){
var statearr_31465_33036 = state_31456__$1;
(statearr_31465_33036[(1)] = (8));

} else {
var statearr_31466_33037 = state_31456__$1;
(statearr_31466_33037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (3))){
var inst_31454 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31456__$1,inst_31454);
} else {
if((state_val_31457 === (2))){
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31456__$1,(4),ch);
} else {
if((state_val_31457 === (11))){
var inst_31446 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
var statearr_31467_33045 = state_31456__$1;
(statearr_31467_33045[(2)] = inst_31446);

(statearr_31467_33045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (9))){
var state_31456__$1 = state_31456;
var statearr_31468_33046 = state_31456__$1;
(statearr_31468_33046[(2)] = null);

(statearr_31468_33046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (5))){
var inst_31441 = cljs.core.async.close_BANG_(out);
var state_31456__$1 = state_31456;
var statearr_31469_33054 = state_31456__$1;
(statearr_31469_33054[(2)] = inst_31441);

(statearr_31469_33054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (10))){
var inst_31449 = (state_31456[(2)]);
var state_31456__$1 = (function (){var statearr_31470 = state_31456;
(statearr_31470[(8)] = inst_31449);

return statearr_31470;
})();
var statearr_31471_33057 = state_31456__$1;
(statearr_31471_33057[(2)] = null);

(statearr_31471_33057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (8))){
var inst_31438 = (state_31456[(7)]);
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31456__$1,(11),out,inst_31438);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31472 = [null,null,null,null,null,null,null,null,null];
(statearr_31472[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31472[(1)] = (1));

return statearr_31472;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31456){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31456);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31473){if((e31473 instanceof Object)){
var ex__29338__auto__ = e31473;
var statearr_31474_33059 = state_31456;
(statearr_31474_33059[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33061 = state_31456;
state_31456 = G__33061;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31475 = f__29514__auto__();
(statearr_31475[(6)] = c__29513__auto___33010);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31478 = arguments.length;
switch (G__31478) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29513__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31548){
var state_val_31549 = (state_31548[(1)]);
if((state_val_31549 === (7))){
var inst_31542 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31550_33066 = state_31548__$1;
(statearr_31550_33066[(2)] = inst_31542);

(statearr_31550_33066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (20))){
var inst_31512 = (state_31548[(7)]);
var inst_31523 = (state_31548[(2)]);
var inst_31524 = cljs.core.next(inst_31512);
var inst_31498 = inst_31524;
var inst_31499 = null;
var inst_31500 = (0);
var inst_31501 = (0);
var state_31548__$1 = (function (){var statearr_31551 = state_31548;
(statearr_31551[(8)] = inst_31500);

(statearr_31551[(9)] = inst_31523);

(statearr_31551[(10)] = inst_31499);

(statearr_31551[(11)] = inst_31501);

(statearr_31551[(12)] = inst_31498);

return statearr_31551;
})();
var statearr_31552_33069 = state_31548__$1;
(statearr_31552_33069[(2)] = null);

(statearr_31552_33069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (1))){
var state_31548__$1 = state_31548;
var statearr_31553_33072 = state_31548__$1;
(statearr_31553_33072[(2)] = null);

(statearr_31553_33072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (4))){
var inst_31487 = (state_31548[(13)]);
var inst_31487__$1 = (state_31548[(2)]);
var inst_31488 = (inst_31487__$1 == null);
var state_31548__$1 = (function (){var statearr_31554 = state_31548;
(statearr_31554[(13)] = inst_31487__$1);

return statearr_31554;
})();
if(cljs.core.truth_(inst_31488)){
var statearr_31555_33075 = state_31548__$1;
(statearr_31555_33075[(1)] = (5));

} else {
var statearr_31556_33076 = state_31548__$1;
(statearr_31556_33076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (15))){
var state_31548__$1 = state_31548;
var statearr_31560_33078 = state_31548__$1;
(statearr_31560_33078[(2)] = null);

(statearr_31560_33078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (21))){
var state_31548__$1 = state_31548;
var statearr_31561_33080 = state_31548__$1;
(statearr_31561_33080[(2)] = null);

(statearr_31561_33080[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (13))){
var inst_31500 = (state_31548[(8)]);
var inst_31499 = (state_31548[(10)]);
var inst_31501 = (state_31548[(11)]);
var inst_31498 = (state_31548[(12)]);
var inst_31508 = (state_31548[(2)]);
var inst_31509 = (inst_31501 + (1));
var tmp31557 = inst_31500;
var tmp31558 = inst_31499;
var tmp31559 = inst_31498;
var inst_31498__$1 = tmp31559;
var inst_31499__$1 = tmp31558;
var inst_31500__$1 = tmp31557;
var inst_31501__$1 = inst_31509;
var state_31548__$1 = (function (){var statearr_31562 = state_31548;
(statearr_31562[(14)] = inst_31508);

(statearr_31562[(8)] = inst_31500__$1);

(statearr_31562[(10)] = inst_31499__$1);

(statearr_31562[(11)] = inst_31501__$1);

(statearr_31562[(12)] = inst_31498__$1);

return statearr_31562;
})();
var statearr_31563_33087 = state_31548__$1;
(statearr_31563_33087[(2)] = null);

(statearr_31563_33087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (22))){
var state_31548__$1 = state_31548;
var statearr_31564_33090 = state_31548__$1;
(statearr_31564_33090[(2)] = null);

(statearr_31564_33090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (6))){
var inst_31487 = (state_31548[(13)]);
var inst_31496 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31487) : f.call(null,inst_31487));
var inst_31497 = cljs.core.seq(inst_31496);
var inst_31498 = inst_31497;
var inst_31499 = null;
var inst_31500 = (0);
var inst_31501 = (0);
var state_31548__$1 = (function (){var statearr_31565 = state_31548;
(statearr_31565[(8)] = inst_31500);

(statearr_31565[(10)] = inst_31499);

(statearr_31565[(11)] = inst_31501);

(statearr_31565[(12)] = inst_31498);

return statearr_31565;
})();
var statearr_31566_33093 = state_31548__$1;
(statearr_31566_33093[(2)] = null);

(statearr_31566_33093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (17))){
var inst_31512 = (state_31548[(7)]);
var inst_31516 = cljs.core.chunk_first(inst_31512);
var inst_31517 = cljs.core.chunk_rest(inst_31512);
var inst_31518 = cljs.core.count(inst_31516);
var inst_31498 = inst_31517;
var inst_31499 = inst_31516;
var inst_31500 = inst_31518;
var inst_31501 = (0);
var state_31548__$1 = (function (){var statearr_31573 = state_31548;
(statearr_31573[(8)] = inst_31500);

(statearr_31573[(10)] = inst_31499);

(statearr_31573[(11)] = inst_31501);

(statearr_31573[(12)] = inst_31498);

return statearr_31573;
})();
var statearr_31574_33102 = state_31548__$1;
(statearr_31574_33102[(2)] = null);

(statearr_31574_33102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (3))){
var inst_31544 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31548__$1,inst_31544);
} else {
if((state_val_31549 === (12))){
var inst_31532 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31575_33112 = state_31548__$1;
(statearr_31575_33112[(2)] = inst_31532);

(statearr_31575_33112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (2))){
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31548__$1,(4),in$);
} else {
if((state_val_31549 === (23))){
var inst_31540 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31576_33123 = state_31548__$1;
(statearr_31576_33123[(2)] = inst_31540);

(statearr_31576_33123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (19))){
var inst_31527 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31581_33131 = state_31548__$1;
(statearr_31581_33131[(2)] = inst_31527);

(statearr_31581_33131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (11))){
var inst_31512 = (state_31548[(7)]);
var inst_31498 = (state_31548[(12)]);
var inst_31512__$1 = cljs.core.seq(inst_31498);
var state_31548__$1 = (function (){var statearr_31582 = state_31548;
(statearr_31582[(7)] = inst_31512__$1);

return statearr_31582;
})();
if(inst_31512__$1){
var statearr_31584_33144 = state_31548__$1;
(statearr_31584_33144[(1)] = (14));

} else {
var statearr_31588_33145 = state_31548__$1;
(statearr_31588_33145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (9))){
var inst_31534 = (state_31548[(2)]);
var inst_31535 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31548__$1 = (function (){var statearr_31609 = state_31548;
(statearr_31609[(15)] = inst_31534);

return statearr_31609;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31610_33153 = state_31548__$1;
(statearr_31610_33153[(1)] = (21));

} else {
var statearr_31611_33155 = state_31548__$1;
(statearr_31611_33155[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (5))){
var inst_31490 = cljs.core.async.close_BANG_(out);
var state_31548__$1 = state_31548;
var statearr_31612_33161 = state_31548__$1;
(statearr_31612_33161[(2)] = inst_31490);

(statearr_31612_33161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (14))){
var inst_31512 = (state_31548[(7)]);
var inst_31514 = cljs.core.chunked_seq_QMARK_(inst_31512);
var state_31548__$1 = state_31548;
if(inst_31514){
var statearr_31613_33166 = state_31548__$1;
(statearr_31613_33166[(1)] = (17));

} else {
var statearr_31614_33167 = state_31548__$1;
(statearr_31614_33167[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (16))){
var inst_31530 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31615_33172 = state_31548__$1;
(statearr_31615_33172[(2)] = inst_31530);

(statearr_31615_33172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (10))){
var inst_31499 = (state_31548[(10)]);
var inst_31501 = (state_31548[(11)]);
var inst_31506 = cljs.core._nth(inst_31499,inst_31501);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31548__$1,(13),out,inst_31506);
} else {
if((state_val_31549 === (18))){
var inst_31512 = (state_31548[(7)]);
var inst_31521 = cljs.core.first(inst_31512);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31548__$1,(20),out,inst_31521);
} else {
if((state_val_31549 === (8))){
var inst_31500 = (state_31548[(8)]);
var inst_31501 = (state_31548[(11)]);
var inst_31503 = (inst_31501 < inst_31500);
var inst_31504 = inst_31503;
var state_31548__$1 = state_31548;
if(cljs.core.truth_(inst_31504)){
var statearr_31616_33194 = state_31548__$1;
(statearr_31616_33194[(1)] = (10));

} else {
var statearr_31617_33199 = state_31548__$1;
(statearr_31617_33199[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____0 = (function (){
var statearr_31618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31618[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__);

(statearr_31618[(1)] = (1));

return statearr_31618;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____1 = (function (state_31548){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31548);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31619){if((e31619 instanceof Object)){
var ex__29338__auto__ = e31619;
var statearr_31620_33205 = state_31548;
(statearr_31620_33205[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33206 = state_31548;
state_31548 = G__33206;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29335__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31626 = f__29514__auto__();
(statearr_31626[(6)] = c__29513__auto__);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

return c__29513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31628 = arguments.length;
switch (G__31628) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31634 = arguments.length;
switch (G__31634) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31639 = arguments.length;
switch (G__31639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___33230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31667){
var state_val_31668 = (state_31667[(1)]);
if((state_val_31668 === (7))){
var inst_31661 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31669_33231 = state_31667__$1;
(statearr_31669_33231[(2)] = inst_31661);

(statearr_31669_33231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (1))){
var inst_31642 = null;
var state_31667__$1 = (function (){var statearr_31670 = state_31667;
(statearr_31670[(7)] = inst_31642);

return statearr_31670;
})();
var statearr_31671_33232 = state_31667__$1;
(statearr_31671_33232[(2)] = null);

(statearr_31671_33232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (4))){
var inst_31646 = (state_31667[(8)]);
var inst_31646__$1 = (state_31667[(2)]);
var inst_31647 = (inst_31646__$1 == null);
var inst_31648 = cljs.core.not(inst_31647);
var state_31667__$1 = (function (){var statearr_31672 = state_31667;
(statearr_31672[(8)] = inst_31646__$1);

return statearr_31672;
})();
if(inst_31648){
var statearr_31673_33235 = state_31667__$1;
(statearr_31673_33235[(1)] = (5));

} else {
var statearr_31674_33236 = state_31667__$1;
(statearr_31674_33236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (6))){
var state_31667__$1 = state_31667;
var statearr_31675_33237 = state_31667__$1;
(statearr_31675_33237[(2)] = null);

(statearr_31675_33237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (3))){
var inst_31663 = (state_31667[(2)]);
var inst_31664 = cljs.core.async.close_BANG_(out);
var state_31667__$1 = (function (){var statearr_31676 = state_31667;
(statearr_31676[(9)] = inst_31663);

return statearr_31676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31667__$1,inst_31664);
} else {
if((state_val_31668 === (2))){
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31667__$1,(4),ch);
} else {
if((state_val_31668 === (11))){
var inst_31646 = (state_31667[(8)]);
var inst_31655 = (state_31667[(2)]);
var inst_31642 = inst_31646;
var state_31667__$1 = (function (){var statearr_31677 = state_31667;
(statearr_31677[(10)] = inst_31655);

(statearr_31677[(7)] = inst_31642);

return statearr_31677;
})();
var statearr_31678_33242 = state_31667__$1;
(statearr_31678_33242[(2)] = null);

(statearr_31678_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (9))){
var inst_31646 = (state_31667[(8)]);
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31667__$1,(11),out,inst_31646);
} else {
if((state_val_31668 === (5))){
var inst_31646 = (state_31667[(8)]);
var inst_31642 = (state_31667[(7)]);
var inst_31650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31646,inst_31642);
var state_31667__$1 = state_31667;
if(inst_31650){
var statearr_31680_33250 = state_31667__$1;
(statearr_31680_33250[(1)] = (8));

} else {
var statearr_31681_33252 = state_31667__$1;
(statearr_31681_33252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (10))){
var inst_31658 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31682_33259 = state_31667__$1;
(statearr_31682_33259[(2)] = inst_31658);

(statearr_31682_33259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (8))){
var inst_31642 = (state_31667[(7)]);
var tmp31679 = inst_31642;
var inst_31642__$1 = tmp31679;
var state_31667__$1 = (function (){var statearr_31683 = state_31667;
(statearr_31683[(7)] = inst_31642__$1);

return statearr_31683;
})();
var statearr_31684_33273 = state_31667__$1;
(statearr_31684_33273[(2)] = null);

(statearr_31684_33273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31685[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31667){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31667);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31686){if((e31686 instanceof Object)){
var ex__29338__auto__ = e31686;
var statearr_31687_33281 = state_31667;
(statearr_31687_33281[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33286 = state_31667;
state_31667 = G__33286;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31692 = f__29514__auto__();
(statearr_31692[(6)] = c__29513__auto___33230);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31694 = arguments.length;
switch (G__31694) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___33302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31736){
var state_val_31737 = (state_31736[(1)]);
if((state_val_31737 === (7))){
var inst_31731 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31738_33306 = state_31736__$1;
(statearr_31738_33306[(2)] = inst_31731);

(statearr_31738_33306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (1))){
var inst_31697 = (new Array(n));
var inst_31698 = inst_31697;
var inst_31699 = (0);
var state_31736__$1 = (function (){var statearr_31739 = state_31736;
(statearr_31739[(7)] = inst_31699);

(statearr_31739[(8)] = inst_31698);

return statearr_31739;
})();
var statearr_31740_33308 = state_31736__$1;
(statearr_31740_33308[(2)] = null);

(statearr_31740_33308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (4))){
var inst_31703 = (state_31736[(9)]);
var inst_31703__$1 = (state_31736[(2)]);
var inst_31704 = (inst_31703__$1 == null);
var inst_31705 = cljs.core.not(inst_31704);
var state_31736__$1 = (function (){var statearr_31744 = state_31736;
(statearr_31744[(9)] = inst_31703__$1);

return statearr_31744;
})();
if(inst_31705){
var statearr_31745_33309 = state_31736__$1;
(statearr_31745_33309[(1)] = (5));

} else {
var statearr_31746_33310 = state_31736__$1;
(statearr_31746_33310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (15))){
var inst_31725 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31747_33311 = state_31736__$1;
(statearr_31747_33311[(2)] = inst_31725);

(statearr_31747_33311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (13))){
var state_31736__$1 = state_31736;
var statearr_31748_33312 = state_31736__$1;
(statearr_31748_33312[(2)] = null);

(statearr_31748_33312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (6))){
var inst_31699 = (state_31736[(7)]);
var inst_31721 = (inst_31699 > (0));
var state_31736__$1 = state_31736;
if(cljs.core.truth_(inst_31721)){
var statearr_31749_33318 = state_31736__$1;
(statearr_31749_33318[(1)] = (12));

} else {
var statearr_31750_33319 = state_31736__$1;
(statearr_31750_33319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (3))){
var inst_31733 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31736__$1,inst_31733);
} else {
if((state_val_31737 === (12))){
var inst_31698 = (state_31736[(8)]);
var inst_31723 = cljs.core.vec(inst_31698);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31736__$1,(15),out,inst_31723);
} else {
if((state_val_31737 === (2))){
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31736__$1,(4),ch);
} else {
if((state_val_31737 === (11))){
var inst_31715 = (state_31736[(2)]);
var inst_31716 = (new Array(n));
var inst_31698 = inst_31716;
var inst_31699 = (0);
var state_31736__$1 = (function (){var statearr_31753 = state_31736;
(statearr_31753[(7)] = inst_31699);

(statearr_31753[(8)] = inst_31698);

(statearr_31753[(10)] = inst_31715);

return statearr_31753;
})();
var statearr_31754_33330 = state_31736__$1;
(statearr_31754_33330[(2)] = null);

(statearr_31754_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (9))){
var inst_31698 = (state_31736[(8)]);
var inst_31713 = cljs.core.vec(inst_31698);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31736__$1,(11),out,inst_31713);
} else {
if((state_val_31737 === (5))){
var inst_31699 = (state_31736[(7)]);
var inst_31708 = (state_31736[(11)]);
var inst_31698 = (state_31736[(8)]);
var inst_31703 = (state_31736[(9)]);
var inst_31707 = (inst_31698[inst_31699] = inst_31703);
var inst_31708__$1 = (inst_31699 + (1));
var inst_31709 = (inst_31708__$1 < n);
var state_31736__$1 = (function (){var statearr_31755 = state_31736;
(statearr_31755[(12)] = inst_31707);

(statearr_31755[(11)] = inst_31708__$1);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31759_33335 = state_31736__$1;
(statearr_31759_33335[(1)] = (8));

} else {
var statearr_31760_33336 = state_31736__$1;
(statearr_31760_33336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (14))){
var inst_31728 = (state_31736[(2)]);
var inst_31729 = cljs.core.async.close_BANG_(out);
var state_31736__$1 = (function (){var statearr_31762 = state_31736;
(statearr_31762[(13)] = inst_31728);

return statearr_31762;
})();
var statearr_31763_33337 = state_31736__$1;
(statearr_31763_33337[(2)] = inst_31729);

(statearr_31763_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (10))){
var inst_31719 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31764_33338 = state_31736__$1;
(statearr_31764_33338[(2)] = inst_31719);

(statearr_31764_33338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (8))){
var inst_31708 = (state_31736[(11)]);
var inst_31698 = (state_31736[(8)]);
var tmp31761 = inst_31698;
var inst_31698__$1 = tmp31761;
var inst_31699 = inst_31708;
var state_31736__$1 = (function (){var statearr_31765 = state_31736;
(statearr_31765[(7)] = inst_31699);

(statearr_31765[(8)] = inst_31698__$1);

return statearr_31765;
})();
var statearr_31766_33339 = state_31736__$1;
(statearr_31766_33339[(2)] = null);

(statearr_31766_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31767[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31767[(1)] = (1));

return statearr_31767;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31736){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31736);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31768){if((e31768 instanceof Object)){
var ex__29338__auto__ = e31768;
var statearr_31769_33344 = state_31736;
(statearr_31769_33344[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33350 = state_31736;
state_31736 = G__33350;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31770 = f__29514__auto__();
(statearr_31770[(6)] = c__29513__auto___33302);

return statearr_31770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31772 = arguments.length;
switch (G__31772) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29513__auto___33352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_31834){
var state_val_31835 = (state_31834[(1)]);
if((state_val_31835 === (7))){
var inst_31830 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31836_33353 = state_31834__$1;
(statearr_31836_33353[(2)] = inst_31830);

(statearr_31836_33353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (1))){
var inst_31785 = [];
var inst_31786 = inst_31785;
var inst_31787 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31834__$1 = (function (){var statearr_31839 = state_31834;
(statearr_31839[(7)] = inst_31786);

(statearr_31839[(8)] = inst_31787);

return statearr_31839;
})();
var statearr_31840_33357 = state_31834__$1;
(statearr_31840_33357[(2)] = null);

(statearr_31840_33357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (4))){
var inst_31790 = (state_31834[(9)]);
var inst_31790__$1 = (state_31834[(2)]);
var inst_31791 = (inst_31790__$1 == null);
var inst_31792 = cljs.core.not(inst_31791);
var state_31834__$1 = (function (){var statearr_31841 = state_31834;
(statearr_31841[(9)] = inst_31790__$1);

return statearr_31841;
})();
if(inst_31792){
var statearr_31842_33359 = state_31834__$1;
(statearr_31842_33359[(1)] = (5));

} else {
var statearr_31843_33360 = state_31834__$1;
(statearr_31843_33360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (15))){
var inst_31824 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31844_33361 = state_31834__$1;
(statearr_31844_33361[(2)] = inst_31824);

(statearr_31844_33361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (13))){
var state_31834__$1 = state_31834;
var statearr_31845_33365 = state_31834__$1;
(statearr_31845_33365[(2)] = null);

(statearr_31845_33365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (6))){
var inst_31786 = (state_31834[(7)]);
var inst_31819 = inst_31786.length;
var inst_31820 = (inst_31819 > (0));
var state_31834__$1 = state_31834;
if(cljs.core.truth_(inst_31820)){
var statearr_31846_33366 = state_31834__$1;
(statearr_31846_33366[(1)] = (12));

} else {
var statearr_31847_33367 = state_31834__$1;
(statearr_31847_33367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (3))){
var inst_31832 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31834__$1,inst_31832);
} else {
if((state_val_31835 === (12))){
var inst_31786 = (state_31834[(7)]);
var inst_31822 = cljs.core.vec(inst_31786);
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31834__$1,(15),out,inst_31822);
} else {
if((state_val_31835 === (2))){
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31834__$1,(4),ch);
} else {
if((state_val_31835 === (11))){
var inst_31794 = (state_31834[(10)]);
var inst_31790 = (state_31834[(9)]);
var inst_31808 = (state_31834[(2)]);
var inst_31809 = [];
var inst_31814 = inst_31809.push(inst_31790);
var inst_31786 = inst_31809;
var inst_31787 = inst_31794;
var state_31834__$1 = (function (){var statearr_31849 = state_31834;
(statearr_31849[(7)] = inst_31786);

(statearr_31849[(11)] = inst_31814);

(statearr_31849[(12)] = inst_31808);

(statearr_31849[(8)] = inst_31787);

return statearr_31849;
})();
var statearr_31850_33374 = state_31834__$1;
(statearr_31850_33374[(2)] = null);

(statearr_31850_33374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (9))){
var inst_31786 = (state_31834[(7)]);
var inst_31806 = cljs.core.vec(inst_31786);
var state_31834__$1 = state_31834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31834__$1,(11),out,inst_31806);
} else {
if((state_val_31835 === (5))){
var inst_31794 = (state_31834[(10)]);
var inst_31790 = (state_31834[(9)]);
var inst_31787 = (state_31834[(8)]);
var inst_31794__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31790) : f.call(null,inst_31790));
var inst_31799 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31794__$1,inst_31787);
var inst_31800 = cljs.core.keyword_identical_QMARK_(inst_31787,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31801 = ((inst_31799) || (inst_31800));
var state_31834__$1 = (function (){var statearr_31851 = state_31834;
(statearr_31851[(10)] = inst_31794__$1);

return statearr_31851;
})();
if(cljs.core.truth_(inst_31801)){
var statearr_31852_33375 = state_31834__$1;
(statearr_31852_33375[(1)] = (8));

} else {
var statearr_31853_33377 = state_31834__$1;
(statearr_31853_33377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (14))){
var inst_31827 = (state_31834[(2)]);
var inst_31828 = cljs.core.async.close_BANG_(out);
var state_31834__$1 = (function (){var statearr_31857 = state_31834;
(statearr_31857[(13)] = inst_31827);

return statearr_31857;
})();
var statearr_31858_33378 = state_31834__$1;
(statearr_31858_33378[(2)] = inst_31828);

(statearr_31858_33378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (10))){
var inst_31817 = (state_31834[(2)]);
var state_31834__$1 = state_31834;
var statearr_31861_33384 = state_31834__$1;
(statearr_31861_33384[(2)] = inst_31817);

(statearr_31861_33384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31835 === (8))){
var inst_31786 = (state_31834[(7)]);
var inst_31794 = (state_31834[(10)]);
var inst_31790 = (state_31834[(9)]);
var inst_31803 = inst_31786.push(inst_31790);
var tmp31854 = inst_31786;
var inst_31786__$1 = tmp31854;
var inst_31787 = inst_31794;
var state_31834__$1 = (function (){var statearr_31862 = state_31834;
(statearr_31862[(7)] = inst_31786__$1);

(statearr_31862[(14)] = inst_31803);

(statearr_31862[(8)] = inst_31787);

return statearr_31862;
})();
var statearr_31863_33385 = state_31834__$1;
(statearr_31863_33385[(2)] = null);

(statearr_31863_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29335__auto__ = null;
var cljs$core$async$state_machine__29335__auto____0 = (function (){
var statearr_31864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31864[(0)] = cljs$core$async$state_machine__29335__auto__);

(statearr_31864[(1)] = (1));

return statearr_31864;
});
var cljs$core$async$state_machine__29335__auto____1 = (function (state_31834){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_31834);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e31865){if((e31865 instanceof Object)){
var ex__29338__auto__ = e31865;
var statearr_31866_33386 = state_31834;
(statearr_31866_33386[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33387 = state_31834;
state_31834 = G__33387;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
cljs$core$async$state_machine__29335__auto__ = function(state_31834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29335__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29335__auto____1.call(this,state_31834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29335__auto____0;
cljs$core$async$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29335__auto____1;
return cljs$core$async$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_31867 = f__29514__auto__();
(statearr_31867[(6)] = c__29513__auto___33352);

return statearr_31867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
