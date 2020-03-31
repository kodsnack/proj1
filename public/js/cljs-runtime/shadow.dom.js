goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32015 = coll;
var G__32016 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32015,G__32016) : shadow.dom.lazy_native_coll_seq.call(null,G__32015,G__32016));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32058 = arguments.length;
switch (G__32058) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32063 = arguments.length;
switch (G__32063) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32078 = arguments.length;
switch (G__32078) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32087 = arguments.length;
switch (G__32087) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32092 = arguments.length;
switch (G__32092) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32101 = arguments.length;
switch (G__32101) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32114){if((e32114 instanceof Object)){
var e = e32114;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32114;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32119 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32120 = null;
var count__32121 = (0);
var i__32122 = (0);
while(true){
if((i__32122 < count__32121)){
var el = chunk__32120.cljs$core$IIndexed$_nth$arity$2(null,i__32122);
var handler_32984__$1 = ((function (seq__32119,chunk__32120,count__32121,i__32122,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32119,chunk__32120,count__32121,i__32122,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32984__$1);


var G__32985 = seq__32119;
var G__32986 = chunk__32120;
var G__32987 = count__32121;
var G__32988 = (i__32122 + (1));
seq__32119 = G__32985;
chunk__32120 = G__32986;
count__32121 = G__32987;
i__32122 = G__32988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32119);
if(temp__5735__auto__){
var seq__32119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32119__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32119__$1);
var G__32990 = cljs.core.chunk_rest(seq__32119__$1);
var G__32991 = c__4609__auto__;
var G__32992 = cljs.core.count(c__4609__auto__);
var G__32993 = (0);
seq__32119 = G__32990;
chunk__32120 = G__32991;
count__32121 = G__32992;
i__32122 = G__32993;
continue;
} else {
var el = cljs.core.first(seq__32119__$1);
var handler_32995__$1 = ((function (seq__32119,chunk__32120,count__32121,i__32122,el,seq__32119__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32119,chunk__32120,count__32121,i__32122,el,seq__32119__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32995__$1);


var G__32996 = cljs.core.next(seq__32119__$1);
var G__32997 = null;
var G__32998 = (0);
var G__32999 = (0);
seq__32119 = G__32996;
chunk__32120 = G__32997;
count__32121 = G__32998;
i__32122 = G__32999;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32135 = arguments.length;
switch (G__32135) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32142 = cljs.core.seq(events);
var chunk__32143 = null;
var count__32144 = (0);
var i__32145 = (0);
while(true){
if((i__32145 < count__32144)){
var vec__32160 = chunk__32143.cljs$core$IIndexed$_nth$arity$2(null,i__32145);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32160,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33004 = seq__32142;
var G__33006 = chunk__32143;
var G__33007 = count__32144;
var G__33008 = (i__32145 + (1));
seq__32142 = G__33004;
chunk__32143 = G__33006;
count__32144 = G__33007;
i__32145 = G__33008;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32142);
if(temp__5735__auto__){
var seq__32142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32142__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32142__$1);
var G__33011 = cljs.core.chunk_rest(seq__32142__$1);
var G__33012 = c__4609__auto__;
var G__33013 = cljs.core.count(c__4609__auto__);
var G__33014 = (0);
seq__32142 = G__33011;
chunk__32143 = G__33012;
count__32144 = G__33013;
i__32145 = G__33014;
continue;
} else {
var vec__32166 = cljs.core.first(seq__32142__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32166,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33020 = cljs.core.next(seq__32142__$1);
var G__33021 = null;
var G__33022 = (0);
var G__33023 = (0);
seq__32142 = G__33020;
chunk__32143 = G__33021;
count__32144 = G__33022;
i__32145 = G__33023;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32171 = cljs.core.seq(styles);
var chunk__32172 = null;
var count__32173 = (0);
var i__32174 = (0);
while(true){
if((i__32174 < count__32173)){
var vec__32183 = chunk__32172.cljs$core$IIndexed$_nth$arity$2(null,i__32174);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32183,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33031 = seq__32171;
var G__33032 = chunk__32172;
var G__33033 = count__32173;
var G__33034 = (i__32174 + (1));
seq__32171 = G__33031;
chunk__32172 = G__33032;
count__32173 = G__33033;
i__32174 = G__33034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32171);
if(temp__5735__auto__){
var seq__32171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32171__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32171__$1);
var G__33038 = cljs.core.chunk_rest(seq__32171__$1);
var G__33039 = c__4609__auto__;
var G__33040 = cljs.core.count(c__4609__auto__);
var G__33041 = (0);
seq__32171 = G__33038;
chunk__32172 = G__33039;
count__32173 = G__33040;
i__32174 = G__33041;
continue;
} else {
var vec__32186 = cljs.core.first(seq__32171__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32186,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33047 = cljs.core.next(seq__32171__$1);
var G__33048 = null;
var G__33049 = (0);
var G__33050 = (0);
seq__32171 = G__33047;
chunk__32172 = G__33048;
count__32173 = G__33049;
i__32174 = G__33050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32190_33052 = key;
var G__32190_33053__$1 = (((G__32190_33052 instanceof cljs.core.Keyword))?G__32190_33052.fqn:null);
switch (G__32190_33053__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33060 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33060,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33060,"aria-");
}
})())){
el.setAttribute(ks_33060,value);
} else {
(el[ks_33060] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32211){
var map__32212 = p__32211;
var map__32212__$1 = (((((!((map__32212 == null))))?(((((map__32212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32212):map__32212);
var props = map__32212__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32212__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32217 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32217,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32221 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32221,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32221;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32225 = arguments.length;
switch (G__32225) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32232){
var vec__32233 = p__32232;
var seq__32234 = cljs.core.seq(vec__32233);
var first__32235 = cljs.core.first(seq__32234);
var seq__32234__$1 = cljs.core.next(seq__32234);
var nn = first__32235;
var first__32235__$1 = cljs.core.first(seq__32234__$1);
var seq__32234__$2 = cljs.core.next(seq__32234__$1);
var np = first__32235__$1;
var nc = seq__32234__$2;
var node = vec__32233;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32239 = nn;
var G__32240 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32239,G__32240) : create_fn.call(null,G__32239,G__32240));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32247 = nn;
var G__32248 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32247,G__32248) : create_fn.call(null,G__32247,G__32248));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32255 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32255,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32255,(1),null);
var seq__32258_33098 = cljs.core.seq(node_children);
var chunk__32259_33099 = null;
var count__32260_33100 = (0);
var i__32261_33101 = (0);
while(true){
if((i__32261_33101 < count__32260_33100)){
var child_struct_33104 = chunk__32259_33099.cljs$core$IIndexed$_nth$arity$2(null,i__32261_33101);
var children_33106 = shadow.dom.dom_node(child_struct_33104);
if(cljs.core.seq_QMARK_(children_33106)){
var seq__32326_33108 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33106));
var chunk__32328_33109 = null;
var count__32329_33110 = (0);
var i__32330_33111 = (0);
while(true){
if((i__32330_33111 < count__32329_33110)){
var child_33113 = chunk__32328_33109.cljs$core$IIndexed$_nth$arity$2(null,i__32330_33111);
if(cljs.core.truth_(child_33113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33113);


var G__33114 = seq__32326_33108;
var G__33115 = chunk__32328_33109;
var G__33116 = count__32329_33110;
var G__33117 = (i__32330_33111 + (1));
seq__32326_33108 = G__33114;
chunk__32328_33109 = G__33115;
count__32329_33110 = G__33116;
i__32330_33111 = G__33117;
continue;
} else {
var G__33118 = seq__32326_33108;
var G__33119 = chunk__32328_33109;
var G__33120 = count__32329_33110;
var G__33121 = (i__32330_33111 + (1));
seq__32326_33108 = G__33118;
chunk__32328_33109 = G__33119;
count__32329_33110 = G__33120;
i__32330_33111 = G__33121;
continue;
}
} else {
var temp__5735__auto___33122 = cljs.core.seq(seq__32326_33108);
if(temp__5735__auto___33122){
var seq__32326_33124__$1 = temp__5735__auto___33122;
if(cljs.core.chunked_seq_QMARK_(seq__32326_33124__$1)){
var c__4609__auto___33125 = cljs.core.chunk_first(seq__32326_33124__$1);
var G__33126 = cljs.core.chunk_rest(seq__32326_33124__$1);
var G__33127 = c__4609__auto___33125;
var G__33128 = cljs.core.count(c__4609__auto___33125);
var G__33129 = (0);
seq__32326_33108 = G__33126;
chunk__32328_33109 = G__33127;
count__32329_33110 = G__33128;
i__32330_33111 = G__33129;
continue;
} else {
var child_33130 = cljs.core.first(seq__32326_33124__$1);
if(cljs.core.truth_(child_33130)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33130);


var G__33132 = cljs.core.next(seq__32326_33124__$1);
var G__33133 = null;
var G__33134 = (0);
var G__33135 = (0);
seq__32326_33108 = G__33132;
chunk__32328_33109 = G__33133;
count__32329_33110 = G__33134;
i__32330_33111 = G__33135;
continue;
} else {
var G__33136 = cljs.core.next(seq__32326_33124__$1);
var G__33137 = null;
var G__33138 = (0);
var G__33139 = (0);
seq__32326_33108 = G__33136;
chunk__32328_33109 = G__33137;
count__32329_33110 = G__33138;
i__32330_33111 = G__33139;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33106);
}


var G__33140 = seq__32258_33098;
var G__33141 = chunk__32259_33099;
var G__33142 = count__32260_33100;
var G__33143 = (i__32261_33101 + (1));
seq__32258_33098 = G__33140;
chunk__32259_33099 = G__33141;
count__32260_33100 = G__33142;
i__32261_33101 = G__33143;
continue;
} else {
var temp__5735__auto___33146 = cljs.core.seq(seq__32258_33098);
if(temp__5735__auto___33146){
var seq__32258_33147__$1 = temp__5735__auto___33146;
if(cljs.core.chunked_seq_QMARK_(seq__32258_33147__$1)){
var c__4609__auto___33148 = cljs.core.chunk_first(seq__32258_33147__$1);
var G__33149 = cljs.core.chunk_rest(seq__32258_33147__$1);
var G__33150 = c__4609__auto___33148;
var G__33151 = cljs.core.count(c__4609__auto___33148);
var G__33152 = (0);
seq__32258_33098 = G__33149;
chunk__32259_33099 = G__33150;
count__32260_33100 = G__33151;
i__32261_33101 = G__33152;
continue;
} else {
var child_struct_33154 = cljs.core.first(seq__32258_33147__$1);
var children_33156 = shadow.dom.dom_node(child_struct_33154);
if(cljs.core.seq_QMARK_(children_33156)){
var seq__32343_33158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33156));
var chunk__32345_33159 = null;
var count__32346_33160 = (0);
var i__32347_33162 = (0);
while(true){
if((i__32347_33162 < count__32346_33160)){
var child_33165 = chunk__32345_33159.cljs$core$IIndexed$_nth$arity$2(null,i__32347_33162);
if(cljs.core.truth_(child_33165)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33165);


var G__33168 = seq__32343_33158;
var G__33169 = chunk__32345_33159;
var G__33170 = count__32346_33160;
var G__33171 = (i__32347_33162 + (1));
seq__32343_33158 = G__33168;
chunk__32345_33159 = G__33169;
count__32346_33160 = G__33170;
i__32347_33162 = G__33171;
continue;
} else {
var G__33173 = seq__32343_33158;
var G__33174 = chunk__32345_33159;
var G__33175 = count__32346_33160;
var G__33176 = (i__32347_33162 + (1));
seq__32343_33158 = G__33173;
chunk__32345_33159 = G__33174;
count__32346_33160 = G__33175;
i__32347_33162 = G__33176;
continue;
}
} else {
var temp__5735__auto___33177__$1 = cljs.core.seq(seq__32343_33158);
if(temp__5735__auto___33177__$1){
var seq__32343_33178__$1 = temp__5735__auto___33177__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32343_33178__$1)){
var c__4609__auto___33179 = cljs.core.chunk_first(seq__32343_33178__$1);
var G__33180 = cljs.core.chunk_rest(seq__32343_33178__$1);
var G__33181 = c__4609__auto___33179;
var G__33182 = cljs.core.count(c__4609__auto___33179);
var G__33183 = (0);
seq__32343_33158 = G__33180;
chunk__32345_33159 = G__33181;
count__32346_33160 = G__33182;
i__32347_33162 = G__33183;
continue;
} else {
var child_33184 = cljs.core.first(seq__32343_33178__$1);
if(cljs.core.truth_(child_33184)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33184);


var G__33186 = cljs.core.next(seq__32343_33178__$1);
var G__33187 = null;
var G__33188 = (0);
var G__33189 = (0);
seq__32343_33158 = G__33186;
chunk__32345_33159 = G__33187;
count__32346_33160 = G__33188;
i__32347_33162 = G__33189;
continue;
} else {
var G__33190 = cljs.core.next(seq__32343_33178__$1);
var G__33191 = null;
var G__33192 = (0);
var G__33193 = (0);
seq__32343_33158 = G__33190;
chunk__32345_33159 = G__33191;
count__32346_33160 = G__33192;
i__32347_33162 = G__33193;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33156);
}


var G__33195 = cljs.core.next(seq__32258_33147__$1);
var G__33196 = null;
var G__33197 = (0);
var G__33198 = (0);
seq__32258_33098 = G__33195;
chunk__32259_33099 = G__33196;
count__32260_33100 = G__33197;
i__32261_33101 = G__33198;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32396 = cljs.core.seq(node);
var chunk__32397 = null;
var count__32398 = (0);
var i__32399 = (0);
while(true){
if((i__32399 < count__32398)){
var n = chunk__32397.cljs$core$IIndexed$_nth$arity$2(null,i__32399);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33208 = seq__32396;
var G__33209 = chunk__32397;
var G__33210 = count__32398;
var G__33211 = (i__32399 + (1));
seq__32396 = G__33208;
chunk__32397 = G__33209;
count__32398 = G__33210;
i__32399 = G__33211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32396);
if(temp__5735__auto__){
var seq__32396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32396__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32396__$1);
var G__33212 = cljs.core.chunk_rest(seq__32396__$1);
var G__33213 = c__4609__auto__;
var G__33214 = cljs.core.count(c__4609__auto__);
var G__33215 = (0);
seq__32396 = G__33212;
chunk__32397 = G__33213;
count__32398 = G__33214;
i__32399 = G__33215;
continue;
} else {
var n = cljs.core.first(seq__32396__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33218 = cljs.core.next(seq__32396__$1);
var G__33219 = null;
var G__33220 = (0);
var G__33221 = (0);
seq__32396 = G__33218;
chunk__32397 = G__33219;
count__32398 = G__33220;
i__32399 = G__33221;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32419 = arguments.length;
switch (G__32419) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32433 = arguments.length;
switch (G__32433) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32462 = arguments.length;
switch (G__32462) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33241 = arguments.length;
var i__4790__auto___33243 = (0);
while(true){
if((i__4790__auto___33243 < len__4789__auto___33241)){
args__4795__auto__.push((arguments[i__4790__auto___33243]));

var G__33244 = (i__4790__auto___33243 + (1));
i__4790__auto___33243 = G__33244;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32499_33245 = cljs.core.seq(nodes);
var chunk__32500_33246 = null;
var count__32501_33247 = (0);
var i__32502_33248 = (0);
while(true){
if((i__32502_33248 < count__32501_33247)){
var node_33251 = chunk__32500_33246.cljs$core$IIndexed$_nth$arity$2(null,i__32502_33248);
fragment.appendChild(shadow.dom._to_dom(node_33251));


var G__33253 = seq__32499_33245;
var G__33254 = chunk__32500_33246;
var G__33255 = count__32501_33247;
var G__33256 = (i__32502_33248 + (1));
seq__32499_33245 = G__33253;
chunk__32500_33246 = G__33254;
count__32501_33247 = G__33255;
i__32502_33248 = G__33256;
continue;
} else {
var temp__5735__auto___33257 = cljs.core.seq(seq__32499_33245);
if(temp__5735__auto___33257){
var seq__32499_33258__$1 = temp__5735__auto___33257;
if(cljs.core.chunked_seq_QMARK_(seq__32499_33258__$1)){
var c__4609__auto___33260 = cljs.core.chunk_first(seq__32499_33258__$1);
var G__33261 = cljs.core.chunk_rest(seq__32499_33258__$1);
var G__33262 = c__4609__auto___33260;
var G__33263 = cljs.core.count(c__4609__auto___33260);
var G__33264 = (0);
seq__32499_33245 = G__33261;
chunk__32500_33246 = G__33262;
count__32501_33247 = G__33263;
i__32502_33248 = G__33264;
continue;
} else {
var node_33265 = cljs.core.first(seq__32499_33258__$1);
fragment.appendChild(shadow.dom._to_dom(node_33265));


var G__33269 = cljs.core.next(seq__32499_33258__$1);
var G__33270 = null;
var G__33271 = (0);
var G__33272 = (0);
seq__32499_33245 = G__33269;
chunk__32500_33246 = G__33270;
count__32501_33247 = G__33271;
i__32502_33248 = G__33272;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32492){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32492));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32527_33274 = cljs.core.seq(scripts);
var chunk__32528_33275 = null;
var count__32529_33276 = (0);
var i__32530_33277 = (0);
while(true){
if((i__32530_33277 < count__32529_33276)){
var vec__32551_33278 = chunk__32528_33275.cljs$core$IIndexed$_nth$arity$2(null,i__32530_33277);
var script_tag_33279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551_33278,(0),null);
var script_body_33280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551_33278,(1),null);
eval(script_body_33280);


var G__33282 = seq__32527_33274;
var G__33283 = chunk__32528_33275;
var G__33284 = count__32529_33276;
var G__33285 = (i__32530_33277 + (1));
seq__32527_33274 = G__33282;
chunk__32528_33275 = G__33283;
count__32529_33276 = G__33284;
i__32530_33277 = G__33285;
continue;
} else {
var temp__5735__auto___33287 = cljs.core.seq(seq__32527_33274);
if(temp__5735__auto___33287){
var seq__32527_33288__$1 = temp__5735__auto___33287;
if(cljs.core.chunked_seq_QMARK_(seq__32527_33288__$1)){
var c__4609__auto___33289 = cljs.core.chunk_first(seq__32527_33288__$1);
var G__33290 = cljs.core.chunk_rest(seq__32527_33288__$1);
var G__33291 = c__4609__auto___33289;
var G__33292 = cljs.core.count(c__4609__auto___33289);
var G__33293 = (0);
seq__32527_33274 = G__33290;
chunk__32528_33275 = G__33291;
count__32529_33276 = G__33292;
i__32530_33277 = G__33293;
continue;
} else {
var vec__32562_33294 = cljs.core.first(seq__32527_33288__$1);
var script_tag_33295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32562_33294,(0),null);
var script_body_33296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32562_33294,(1),null);
eval(script_body_33296);


var G__33298 = cljs.core.next(seq__32527_33288__$1);
var G__33299 = null;
var G__33300 = (0);
var G__33301 = (0);
seq__32527_33274 = G__33298;
chunk__32528_33275 = G__33299;
count__32529_33276 = G__33300;
i__32530_33277 = G__33301;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32571){
var vec__32572 = p__32571;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32572,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32572,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32591 = arguments.length;
switch (G__32591) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32615 = cljs.core.seq(style_keys);
var chunk__32616 = null;
var count__32617 = (0);
var i__32618 = (0);
while(true){
if((i__32618 < count__32617)){
var it = chunk__32616.cljs$core$IIndexed$_nth$arity$2(null,i__32618);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33314 = seq__32615;
var G__33315 = chunk__32616;
var G__33316 = count__32617;
var G__33317 = (i__32618 + (1));
seq__32615 = G__33314;
chunk__32616 = G__33315;
count__32617 = G__33316;
i__32618 = G__33317;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32615);
if(temp__5735__auto__){
var seq__32615__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32615__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32615__$1);
var G__33321 = cljs.core.chunk_rest(seq__32615__$1);
var G__33322 = c__4609__auto__;
var G__33323 = cljs.core.count(c__4609__auto__);
var G__33324 = (0);
seq__32615 = G__33321;
chunk__32616 = G__33322;
count__32617 = G__33323;
i__32618 = G__33324;
continue;
} else {
var it = cljs.core.first(seq__32615__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33325 = cljs.core.next(seq__32615__$1);
var G__33326 = null;
var G__33327 = (0);
var G__33328 = (0);
seq__32615 = G__33325;
chunk__32616 = G__33326;
count__32617 = G__33327;
i__32618 = G__33328;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32623,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32630 = k32623;
var G__32630__$1 = (((G__32630 instanceof cljs.core.Keyword))?G__32630.fqn:null);
switch (G__32630__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32623,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32633){
var vec__32634 = p__32633;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32634,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32634,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32622){
var self__ = this;
var G__32622__$1 = this;
return (new cljs.core.RecordIter((0),G__32622__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32625,other32626){
var self__ = this;
var this32625__$1 = this;
return (((!((other32626 == null)))) && ((this32625__$1.constructor === other32626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32625__$1.x,other32626.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32625__$1.y,other32626.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32625__$1.__extmap,other32626.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32622){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32642 = cljs.core.keyword_identical_QMARK_;
var expr__32643 = k__4447__auto__;
if(cljs.core.truth_((pred__32642.cljs$core$IFn$_invoke$arity$2 ? pred__32642.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32643) : pred__32642.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32643)))){
return (new shadow.dom.Coordinate(G__32622,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32642.cljs$core$IFn$_invoke$arity$2 ? pred__32642.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32643) : pred__32642.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32643)))){
return (new shadow.dom.Coordinate(self__.x,G__32622,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32622),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32622){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32622,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32627){
var extmap__4478__auto__ = (function (){var G__32663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32627,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32663);
} else {
return G__32663;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32627),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32627),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32674,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32681 = k32674;
var G__32681__$1 = (((G__32681 instanceof cljs.core.Keyword))?G__32681.fqn:null);
switch (G__32681__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32674,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32684){
var vec__32685 = p__32684;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32685,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32673){
var self__ = this;
var G__32673__$1 = this;
return (new cljs.core.RecordIter((0),G__32673__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32675,other32676){
var self__ = this;
var this32675__$1 = this;
return (((!((other32676 == null)))) && ((this32675__$1.constructor === other32676.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32675__$1.w,other32676.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32675__$1.h,other32676.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32675__$1.__extmap,other32676.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32673){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32708 = cljs.core.keyword_identical_QMARK_;
var expr__32709 = k__4447__auto__;
if(cljs.core.truth_((pred__32708.cljs$core$IFn$_invoke$arity$2 ? pred__32708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32709) : pred__32708.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32709)))){
return (new shadow.dom.Size(G__32673,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32708.cljs$core$IFn$_invoke$arity$2 ? pred__32708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32709) : pred__32708.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32709)))){
return (new shadow.dom.Size(self__.w,G__32673,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32673),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32673){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32673,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32677){
var extmap__4478__auto__ = (function (){var G__32722 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32677,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32677)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32722);
} else {
return G__32722;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32677),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32677),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33391 = (i + (1));
var G__33392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33391;
ret = G__33392;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32741){
var vec__32742 = p__32741;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32742,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32746 = arguments.length;
switch (G__32746) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33402 = ps;
var G__33403 = (i + (1));
el__$1 = G__33402;
i = G__33403;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32773 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32780_33411 = cljs.core.seq(props);
var chunk__32781_33412 = null;
var count__32782_33413 = (0);
var i__32783_33414 = (0);
while(true){
if((i__32783_33414 < count__32782_33413)){
var vec__32800_33416 = chunk__32781_33412.cljs$core$IIndexed$_nth$arity$2(null,i__32783_33414);
var k_33417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800_33416,(0),null);
var v_33418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800_33416,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33417);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33417),v_33418);


var G__33422 = seq__32780_33411;
var G__33423 = chunk__32781_33412;
var G__33424 = count__32782_33413;
var G__33425 = (i__32783_33414 + (1));
seq__32780_33411 = G__33422;
chunk__32781_33412 = G__33423;
count__32782_33413 = G__33424;
i__32783_33414 = G__33425;
continue;
} else {
var temp__5735__auto___33427 = cljs.core.seq(seq__32780_33411);
if(temp__5735__auto___33427){
var seq__32780_33429__$1 = temp__5735__auto___33427;
if(cljs.core.chunked_seq_QMARK_(seq__32780_33429__$1)){
var c__4609__auto___33430 = cljs.core.chunk_first(seq__32780_33429__$1);
var G__33431 = cljs.core.chunk_rest(seq__32780_33429__$1);
var G__33432 = c__4609__auto___33430;
var G__33433 = cljs.core.count(c__4609__auto___33430);
var G__33434 = (0);
seq__32780_33411 = G__33431;
chunk__32781_33412 = G__33432;
count__32782_33413 = G__33433;
i__32783_33414 = G__33434;
continue;
} else {
var vec__32809_33435 = cljs.core.first(seq__32780_33429__$1);
var k_33436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32809_33435,(0),null);
var v_33437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32809_33435,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33436);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33436),v_33437);


var G__33443 = cljs.core.next(seq__32780_33429__$1);
var G__33444 = null;
var G__33445 = (0);
var G__33446 = (0);
seq__32780_33411 = G__33443;
chunk__32781_33412 = G__33444;
count__32782_33413 = G__33445;
i__32783_33414 = G__33446;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32825 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32825,(1),null);
var seq__32828_33449 = cljs.core.seq(node_children);
var chunk__32830_33450 = null;
var count__32831_33451 = (0);
var i__32832_33452 = (0);
while(true){
if((i__32832_33452 < count__32831_33451)){
var child_struct_33454 = chunk__32830_33450.cljs$core$IIndexed$_nth$arity$2(null,i__32832_33452);
if((!((child_struct_33454 == null)))){
if(typeof child_struct_33454 === 'string'){
var text_33456 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33456),child_struct_33454].join(''));
} else {
var children_33459 = shadow.dom.svg_node(child_struct_33454);
if(cljs.core.seq_QMARK_(children_33459)){
var seq__32860_33460 = cljs.core.seq(children_33459);
var chunk__32862_33461 = null;
var count__32863_33462 = (0);
var i__32864_33463 = (0);
while(true){
if((i__32864_33463 < count__32863_33462)){
var child_33464 = chunk__32862_33461.cljs$core$IIndexed$_nth$arity$2(null,i__32864_33463);
if(cljs.core.truth_(child_33464)){
node.appendChild(child_33464);


var G__33466 = seq__32860_33460;
var G__33467 = chunk__32862_33461;
var G__33468 = count__32863_33462;
var G__33469 = (i__32864_33463 + (1));
seq__32860_33460 = G__33466;
chunk__32862_33461 = G__33467;
count__32863_33462 = G__33468;
i__32864_33463 = G__33469;
continue;
} else {
var G__33474 = seq__32860_33460;
var G__33475 = chunk__32862_33461;
var G__33476 = count__32863_33462;
var G__33477 = (i__32864_33463 + (1));
seq__32860_33460 = G__33474;
chunk__32862_33461 = G__33475;
count__32863_33462 = G__33476;
i__32864_33463 = G__33477;
continue;
}
} else {
var temp__5735__auto___33478 = cljs.core.seq(seq__32860_33460);
if(temp__5735__auto___33478){
var seq__32860_33479__$1 = temp__5735__auto___33478;
if(cljs.core.chunked_seq_QMARK_(seq__32860_33479__$1)){
var c__4609__auto___33480 = cljs.core.chunk_first(seq__32860_33479__$1);
var G__33481 = cljs.core.chunk_rest(seq__32860_33479__$1);
var G__33482 = c__4609__auto___33480;
var G__33483 = cljs.core.count(c__4609__auto___33480);
var G__33484 = (0);
seq__32860_33460 = G__33481;
chunk__32862_33461 = G__33482;
count__32863_33462 = G__33483;
i__32864_33463 = G__33484;
continue;
} else {
var child_33485 = cljs.core.first(seq__32860_33479__$1);
if(cljs.core.truth_(child_33485)){
node.appendChild(child_33485);


var G__33486 = cljs.core.next(seq__32860_33479__$1);
var G__33487 = null;
var G__33488 = (0);
var G__33489 = (0);
seq__32860_33460 = G__33486;
chunk__32862_33461 = G__33487;
count__32863_33462 = G__33488;
i__32864_33463 = G__33489;
continue;
} else {
var G__33490 = cljs.core.next(seq__32860_33479__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__32860_33460 = G__33490;
chunk__32862_33461 = G__33491;
count__32863_33462 = G__33492;
i__32864_33463 = G__33493;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33459);
}
}


var G__33494 = seq__32828_33449;
var G__33495 = chunk__32830_33450;
var G__33496 = count__32831_33451;
var G__33497 = (i__32832_33452 + (1));
seq__32828_33449 = G__33494;
chunk__32830_33450 = G__33495;
count__32831_33451 = G__33496;
i__32832_33452 = G__33497;
continue;
} else {
var G__33499 = seq__32828_33449;
var G__33500 = chunk__32830_33450;
var G__33501 = count__32831_33451;
var G__33502 = (i__32832_33452 + (1));
seq__32828_33449 = G__33499;
chunk__32830_33450 = G__33500;
count__32831_33451 = G__33501;
i__32832_33452 = G__33502;
continue;
}
} else {
var temp__5735__auto___33503 = cljs.core.seq(seq__32828_33449);
if(temp__5735__auto___33503){
var seq__32828_33504__$1 = temp__5735__auto___33503;
if(cljs.core.chunked_seq_QMARK_(seq__32828_33504__$1)){
var c__4609__auto___33506 = cljs.core.chunk_first(seq__32828_33504__$1);
var G__33508 = cljs.core.chunk_rest(seq__32828_33504__$1);
var G__33509 = c__4609__auto___33506;
var G__33510 = cljs.core.count(c__4609__auto___33506);
var G__33511 = (0);
seq__32828_33449 = G__33508;
chunk__32830_33450 = G__33509;
count__32831_33451 = G__33510;
i__32832_33452 = G__33511;
continue;
} else {
var child_struct_33512 = cljs.core.first(seq__32828_33504__$1);
if((!((child_struct_33512 == null)))){
if(typeof child_struct_33512 === 'string'){
var text_33513 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33513),child_struct_33512].join(''));
} else {
var children_33516 = shadow.dom.svg_node(child_struct_33512);
if(cljs.core.seq_QMARK_(children_33516)){
var seq__32876_33517 = cljs.core.seq(children_33516);
var chunk__32878_33518 = null;
var count__32879_33519 = (0);
var i__32880_33520 = (0);
while(true){
if((i__32880_33520 < count__32879_33519)){
var child_33521 = chunk__32878_33518.cljs$core$IIndexed$_nth$arity$2(null,i__32880_33520);
if(cljs.core.truth_(child_33521)){
node.appendChild(child_33521);


var G__33522 = seq__32876_33517;
var G__33523 = chunk__32878_33518;
var G__33524 = count__32879_33519;
var G__33525 = (i__32880_33520 + (1));
seq__32876_33517 = G__33522;
chunk__32878_33518 = G__33523;
count__32879_33519 = G__33524;
i__32880_33520 = G__33525;
continue;
} else {
var G__33526 = seq__32876_33517;
var G__33527 = chunk__32878_33518;
var G__33528 = count__32879_33519;
var G__33529 = (i__32880_33520 + (1));
seq__32876_33517 = G__33526;
chunk__32878_33518 = G__33527;
count__32879_33519 = G__33528;
i__32880_33520 = G__33529;
continue;
}
} else {
var temp__5735__auto___33530__$1 = cljs.core.seq(seq__32876_33517);
if(temp__5735__auto___33530__$1){
var seq__32876_33531__$1 = temp__5735__auto___33530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32876_33531__$1)){
var c__4609__auto___33533 = cljs.core.chunk_first(seq__32876_33531__$1);
var G__33534 = cljs.core.chunk_rest(seq__32876_33531__$1);
var G__33535 = c__4609__auto___33533;
var G__33536 = cljs.core.count(c__4609__auto___33533);
var G__33537 = (0);
seq__32876_33517 = G__33534;
chunk__32878_33518 = G__33535;
count__32879_33519 = G__33536;
i__32880_33520 = G__33537;
continue;
} else {
var child_33538 = cljs.core.first(seq__32876_33531__$1);
if(cljs.core.truth_(child_33538)){
node.appendChild(child_33538);


var G__33539 = cljs.core.next(seq__32876_33531__$1);
var G__33540 = null;
var G__33541 = (0);
var G__33542 = (0);
seq__32876_33517 = G__33539;
chunk__32878_33518 = G__33540;
count__32879_33519 = G__33541;
i__32880_33520 = G__33542;
continue;
} else {
var G__33544 = cljs.core.next(seq__32876_33531__$1);
var G__33545 = null;
var G__33546 = (0);
var G__33547 = (0);
seq__32876_33517 = G__33544;
chunk__32878_33518 = G__33545;
count__32879_33519 = G__33546;
i__32880_33520 = G__33547;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33516);
}
}


var G__33548 = cljs.core.next(seq__32828_33504__$1);
var G__33549 = null;
var G__33550 = (0);
var G__33551 = (0);
seq__32828_33449 = G__33548;
chunk__32830_33450 = G__33549;
count__32831_33451 = G__33550;
i__32832_33452 = G__33551;
continue;
} else {
var G__33554 = cljs.core.next(seq__32828_33504__$1);
var G__33555 = null;
var G__33556 = (0);
var G__33557 = (0);
seq__32828_33449 = G__33554;
chunk__32830_33450 = G__33555;
count__32831_33451 = G__33556;
i__32832_33452 = G__33557;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33562 = arguments.length;
var i__4790__auto___33563 = (0);
while(true){
if((i__4790__auto___33563 < len__4789__auto___33562)){
args__4795__auto__.push((arguments[i__4790__auto___33563]));

var G__33564 = (i__4790__auto___33563 + (1));
i__4790__auto___33563 = G__33564;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32897){
var G__32898 = cljs.core.first(seq32897);
var seq32897__$1 = cljs.core.next(seq32897);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32898,seq32897__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32904 = arguments.length;
switch (G__32904) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29513__auto___33566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29514__auto__ = (function (){var switch__29334__auto__ = (function (state_32927){
var state_val_32928 = (state_32927[(1)]);
if((state_val_32928 === (1))){
var state_32927__$1 = state_32927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32927__$1,(2),once_or_cleanup);
} else {
if((state_val_32928 === (2))){
var inst_32924 = (state_32927[(2)]);
var inst_32925 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32927__$1 = (function (){var statearr_32931 = state_32927;
(statearr_32931[(7)] = inst_32924);

return statearr_32931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32927__$1,inst_32925);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29335__auto__ = null;
var shadow$dom$state_machine__29335__auto____0 = (function (){
var statearr_32932 = [null,null,null,null,null,null,null,null];
(statearr_32932[(0)] = shadow$dom$state_machine__29335__auto__);

(statearr_32932[(1)] = (1));

return statearr_32932;
});
var shadow$dom$state_machine__29335__auto____1 = (function (state_32927){
while(true){
var ret_value__29336__auto__ = (function (){try{while(true){
var result__29337__auto__ = switch__29334__auto__(state_32927);
if(cljs.core.keyword_identical_QMARK_(result__29337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29337__auto__;
}
break;
}
}catch (e32933){if((e32933 instanceof Object)){
var ex__29338__auto__ = e32933;
var statearr_32934_33569 = state_32927;
(statearr_32934_33569[(5)] = ex__29338__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33573 = state_32927;
state_32927 = G__33573;
continue;
} else {
return ret_value__29336__auto__;
}
break;
}
});
shadow$dom$state_machine__29335__auto__ = function(state_32927){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29335__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29335__auto____1.call(this,state_32927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29335__auto____0;
shadow$dom$state_machine__29335__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29335__auto____1;
return shadow$dom$state_machine__29335__auto__;
})()
})();
var state__29515__auto__ = (function (){var statearr_32936 = f__29514__auto__();
(statearr_32936[(6)] = c__29513__auto___33566);

return statearr_32936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29515__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
