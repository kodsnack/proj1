goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34725 = arguments.length;
var i__4790__auto___34726 = (0);
while(true){
if((i__4790__auto___34726 < len__4789__auto___34725)){
args__4795__auto__.push((arguments[i__4790__auto___34726]));

var G__34727 = (i__4790__auto___34726 + (1));
i__4790__auto___34726 = G__34727;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34533){
var G__34534 = cljs.core.first(seq34533);
var seq34533__$1 = cljs.core.next(seq34533);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34534,seq34533__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34548 = cljs.core.seq(sources);
var chunk__34549 = null;
var count__34550 = (0);
var i__34551 = (0);
while(true){
if((i__34551 < count__34550)){
var map__34569 = chunk__34549.cljs$core$IIndexed$_nth$arity$2(null,i__34551);
var map__34569__$1 = (((((!((map__34569 == null))))?(((((map__34569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34569):map__34569);
var src = map__34569__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34573){var e_34732 = e34573;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34732);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34732.message)].join('')));
}

var G__34733 = seq__34548;
var G__34734 = chunk__34549;
var G__34735 = count__34550;
var G__34736 = (i__34551 + (1));
seq__34548 = G__34733;
chunk__34549 = G__34734;
count__34550 = G__34735;
i__34551 = G__34736;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34548);
if(temp__5735__auto__){
var seq__34548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34548__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34548__$1);
var G__34737 = cljs.core.chunk_rest(seq__34548__$1);
var G__34738 = c__4609__auto__;
var G__34739 = cljs.core.count(c__4609__auto__);
var G__34740 = (0);
seq__34548 = G__34737;
chunk__34549 = G__34738;
count__34550 = G__34739;
i__34551 = G__34740;
continue;
} else {
var map__34575 = cljs.core.first(seq__34548__$1);
var map__34575__$1 = (((((!((map__34575 == null))))?(((((map__34575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34575):map__34575);
var src = map__34575__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34575__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34577){var e_34742 = e34577;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34742);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34742.message)].join('')));
}

var G__34744 = cljs.core.next(seq__34548__$1);
var G__34745 = null;
var G__34746 = (0);
var G__34747 = (0);
seq__34548 = G__34744;
chunk__34549 = G__34745;
count__34550 = G__34746;
i__34551 = G__34747;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34579 = cljs.core.seq(js_requires);
var chunk__34580 = null;
var count__34581 = (0);
var i__34582 = (0);
while(true){
if((i__34582 < count__34581)){
var js_ns = chunk__34580.cljs$core$IIndexed$_nth$arity$2(null,i__34582);
var require_str_34751 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34751);


var G__34753 = seq__34579;
var G__34754 = chunk__34580;
var G__34755 = count__34581;
var G__34756 = (i__34582 + (1));
seq__34579 = G__34753;
chunk__34580 = G__34754;
count__34581 = G__34755;
i__34582 = G__34756;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34579);
if(temp__5735__auto__){
var seq__34579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34579__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34579__$1);
var G__34759 = cljs.core.chunk_rest(seq__34579__$1);
var G__34760 = c__4609__auto__;
var G__34761 = cljs.core.count(c__4609__auto__);
var G__34762 = (0);
seq__34579 = G__34759;
chunk__34580 = G__34760;
count__34581 = G__34761;
i__34582 = G__34762;
continue;
} else {
var js_ns = cljs.core.first(seq__34579__$1);
var require_str_34763 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34763);


var G__34764 = cljs.core.next(seq__34579__$1);
var G__34765 = null;
var G__34766 = (0);
var G__34767 = (0);
seq__34579 = G__34764;
chunk__34580 = G__34765;
count__34581 = G__34766;
i__34582 = G__34767;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__34587 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34587) : callback.call(null,G__34587));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34589){
var map__34590 = p__34589;
var map__34590__$1 = (((((!((map__34590 == null))))?(((((map__34590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34590):map__34590);
var msg = map__34590__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34590__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34590__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594(s__34595){
return (new cljs.core.LazySeq(null,(function (){
var s__34595__$1 = s__34595;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34595__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34601 = cljs.core.first(xs__6292__auto__);
var map__34601__$1 = (((((!((map__34601 == null))))?(((((map__34601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34601):map__34601);
var src = map__34601__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34601__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34601__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34595__$1,map__34601,map__34601__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34590,map__34590__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(s__34597){
return (new cljs.core.LazySeq(null,((function (s__34595__$1,map__34601,map__34601__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34590,map__34590__$1,msg,info,reload_info){
return (function (){
var s__34597__$1 = s__34597;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34597__$1);
if(temp__5735__auto____$1){
var s__34597__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34597__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34597__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34599 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34598 = (0);
while(true){
if((i__34598 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34598);
cljs.core.chunk_append(b__34599,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34780 = (i__34598 + (1));
i__34598 = G__34780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34599),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(cljs.core.chunk_rest(s__34597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34599),null);
}
} else {
var warning = cljs.core.first(s__34597__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594_$_iter__34596(cljs.core.rest(s__34597__$2)));
}
} else {
return null;
}
break;
}
});})(s__34595__$1,map__34601,map__34601__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34590,map__34590__$1,msg,info,reload_info))
,null,null));
});})(s__34595__$1,map__34601,map__34601__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34590,map__34590__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34594(cljs.core.rest(s__34595__$1)));
} else {
var G__34784 = cljs.core.rest(s__34595__$1);
s__34595__$1 = G__34784;
continue;
}
} else {
var G__34785 = cljs.core.rest(s__34595__$1);
s__34595__$1 = G__34785;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__34604_34786 = cljs.core.seq(warnings);
var chunk__34605_34787 = null;
var count__34606_34788 = (0);
var i__34607_34789 = (0);
while(true){
if((i__34607_34789 < count__34606_34788)){
var map__34613_34790 = chunk__34605_34787.cljs$core$IIndexed$_nth$arity$2(null,i__34607_34789);
var map__34613_34791__$1 = (((((!((map__34613_34790 == null))))?(((((map__34613_34790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34613_34790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34613_34790):map__34613_34790);
var w_34792 = map__34613_34791__$1;
var msg_34793__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613_34791__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613_34791__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613_34791__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613_34791__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34796)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34794),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34795),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34793__$1)].join(''));


var G__34798 = seq__34604_34786;
var G__34799 = chunk__34605_34787;
var G__34800 = count__34606_34788;
var G__34801 = (i__34607_34789 + (1));
seq__34604_34786 = G__34798;
chunk__34605_34787 = G__34799;
count__34606_34788 = G__34800;
i__34607_34789 = G__34801;
continue;
} else {
var temp__5735__auto___34802 = cljs.core.seq(seq__34604_34786);
if(temp__5735__auto___34802){
var seq__34604_34803__$1 = temp__5735__auto___34802;
if(cljs.core.chunked_seq_QMARK_(seq__34604_34803__$1)){
var c__4609__auto___34806 = cljs.core.chunk_first(seq__34604_34803__$1);
var G__34807 = cljs.core.chunk_rest(seq__34604_34803__$1);
var G__34808 = c__4609__auto___34806;
var G__34809 = cljs.core.count(c__4609__auto___34806);
var G__34811 = (0);
seq__34604_34786 = G__34807;
chunk__34605_34787 = G__34808;
count__34606_34788 = G__34809;
i__34607_34789 = G__34811;
continue;
} else {
var map__34615_34812 = cljs.core.first(seq__34604_34803__$1);
var map__34615_34813__$1 = (((((!((map__34615_34812 == null))))?(((((map__34615_34812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34615_34812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34615_34812):map__34615_34812);
var w_34814 = map__34615_34813__$1;
var msg_34815__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34813__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34813__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34813__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615_34813__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34818)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34816),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34817),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34815__$1)].join(''));


var G__34821 = cljs.core.next(seq__34604_34803__$1);
var G__34822 = null;
var G__34823 = (0);
var G__34824 = (0);
seq__34604_34786 = G__34821;
chunk__34605_34787 = G__34822;
count__34606_34788 = G__34823;
i__34607_34789 = G__34824;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34588_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34588_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34620){
var map__34621 = p__34620;
var map__34621__$1 = (((((!((map__34621 == null))))?(((((map__34621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34621):map__34621);
var msg = map__34621__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34621__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34623 = cljs.core.seq(updates);
var chunk__34625 = null;
var count__34626 = (0);
var i__34627 = (0);
while(true){
if((i__34627 < count__34626)){
var path = chunk__34625.cljs$core$IIndexed$_nth$arity$2(null,i__34627);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34658_34838 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34661_34839 = null;
var count__34662_34840 = (0);
var i__34663_34841 = (0);
while(true){
if((i__34663_34841 < count__34662_34840)){
var node_34844 = chunk__34661_34839.cljs$core$IIndexed$_nth$arity$2(null,i__34663_34841);
var path_match_34845 = shadow.cljs.devtools.client.browser.match_paths(node_34844.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34845)){
var new_link_34846 = (function (){var G__34669 = node_34844.cloneNode(true);
G__34669.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34845),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34669;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34845], 0));

goog.dom.insertSiblingAfter(new_link_34846,node_34844);

goog.dom.removeNode(node_34844);


var G__34848 = seq__34658_34838;
var G__34849 = chunk__34661_34839;
var G__34850 = count__34662_34840;
var G__34851 = (i__34663_34841 + (1));
seq__34658_34838 = G__34848;
chunk__34661_34839 = G__34849;
count__34662_34840 = G__34850;
i__34663_34841 = G__34851;
continue;
} else {
var G__34852 = seq__34658_34838;
var G__34853 = chunk__34661_34839;
var G__34854 = count__34662_34840;
var G__34855 = (i__34663_34841 + (1));
seq__34658_34838 = G__34852;
chunk__34661_34839 = G__34853;
count__34662_34840 = G__34854;
i__34663_34841 = G__34855;
continue;
}
} else {
var temp__5735__auto___34857 = cljs.core.seq(seq__34658_34838);
if(temp__5735__auto___34857){
var seq__34658_34858__$1 = temp__5735__auto___34857;
if(cljs.core.chunked_seq_QMARK_(seq__34658_34858__$1)){
var c__4609__auto___34859 = cljs.core.chunk_first(seq__34658_34858__$1);
var G__34860 = cljs.core.chunk_rest(seq__34658_34858__$1);
var G__34861 = c__4609__auto___34859;
var G__34862 = cljs.core.count(c__4609__auto___34859);
var G__34863 = (0);
seq__34658_34838 = G__34860;
chunk__34661_34839 = G__34861;
count__34662_34840 = G__34862;
i__34663_34841 = G__34863;
continue;
} else {
var node_34864 = cljs.core.first(seq__34658_34858__$1);
var path_match_34865 = shadow.cljs.devtools.client.browser.match_paths(node_34864.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34865)){
var new_link_34868 = (function (){var G__34671 = node_34864.cloneNode(true);
G__34671.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34865),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34671;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34865], 0));

goog.dom.insertSiblingAfter(new_link_34868,node_34864);

goog.dom.removeNode(node_34864);


var G__34870 = cljs.core.next(seq__34658_34858__$1);
var G__34871 = null;
var G__34872 = (0);
var G__34873 = (0);
seq__34658_34838 = G__34870;
chunk__34661_34839 = G__34871;
count__34662_34840 = G__34872;
i__34663_34841 = G__34873;
continue;
} else {
var G__34874 = cljs.core.next(seq__34658_34858__$1);
var G__34875 = null;
var G__34876 = (0);
var G__34877 = (0);
seq__34658_34838 = G__34874;
chunk__34661_34839 = G__34875;
count__34662_34840 = G__34876;
i__34663_34841 = G__34877;
continue;
}
}
} else {
}
}
break;
}


var G__34878 = seq__34623;
var G__34879 = chunk__34625;
var G__34880 = count__34626;
var G__34881 = (i__34627 + (1));
seq__34623 = G__34878;
chunk__34625 = G__34879;
count__34626 = G__34880;
i__34627 = G__34881;
continue;
} else {
var G__34882 = seq__34623;
var G__34883 = chunk__34625;
var G__34884 = count__34626;
var G__34885 = (i__34627 + (1));
seq__34623 = G__34882;
chunk__34625 = G__34883;
count__34626 = G__34884;
i__34627 = G__34885;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34623);
if(temp__5735__auto__){
var seq__34623__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34623__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34623__$1);
var G__34887 = cljs.core.chunk_rest(seq__34623__$1);
var G__34888 = c__4609__auto__;
var G__34889 = cljs.core.count(c__4609__auto__);
var G__34890 = (0);
seq__34623 = G__34887;
chunk__34625 = G__34888;
count__34626 = G__34889;
i__34627 = G__34890;
continue;
} else {
var path = cljs.core.first(seq__34623__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34672_34893 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34675_34894 = null;
var count__34676_34895 = (0);
var i__34677_34896 = (0);
while(true){
if((i__34677_34896 < count__34676_34895)){
var node_34898 = chunk__34675_34894.cljs$core$IIndexed$_nth$arity$2(null,i__34677_34896);
var path_match_34899 = shadow.cljs.devtools.client.browser.match_paths(node_34898.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34899)){
var new_link_34900 = (function (){var G__34683 = node_34898.cloneNode(true);
G__34683.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34899),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34683;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34899], 0));

goog.dom.insertSiblingAfter(new_link_34900,node_34898);

goog.dom.removeNode(node_34898);


var G__34901 = seq__34672_34893;
var G__34902 = chunk__34675_34894;
var G__34903 = count__34676_34895;
var G__34904 = (i__34677_34896 + (1));
seq__34672_34893 = G__34901;
chunk__34675_34894 = G__34902;
count__34676_34895 = G__34903;
i__34677_34896 = G__34904;
continue;
} else {
var G__34906 = seq__34672_34893;
var G__34907 = chunk__34675_34894;
var G__34908 = count__34676_34895;
var G__34909 = (i__34677_34896 + (1));
seq__34672_34893 = G__34906;
chunk__34675_34894 = G__34907;
count__34676_34895 = G__34908;
i__34677_34896 = G__34909;
continue;
}
} else {
var temp__5735__auto___34910__$1 = cljs.core.seq(seq__34672_34893);
if(temp__5735__auto___34910__$1){
var seq__34672_34911__$1 = temp__5735__auto___34910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34672_34911__$1)){
var c__4609__auto___34912 = cljs.core.chunk_first(seq__34672_34911__$1);
var G__34913 = cljs.core.chunk_rest(seq__34672_34911__$1);
var G__34914 = c__4609__auto___34912;
var G__34915 = cljs.core.count(c__4609__auto___34912);
var G__34916 = (0);
seq__34672_34893 = G__34913;
chunk__34675_34894 = G__34914;
count__34676_34895 = G__34915;
i__34677_34896 = G__34916;
continue;
} else {
var node_34919 = cljs.core.first(seq__34672_34911__$1);
var path_match_34920 = shadow.cljs.devtools.client.browser.match_paths(node_34919.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34920)){
var new_link_34922 = (function (){var G__34685 = node_34919.cloneNode(true);
G__34685.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34920),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34685;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34920], 0));

goog.dom.insertSiblingAfter(new_link_34922,node_34919);

goog.dom.removeNode(node_34919);


var G__34923 = cljs.core.next(seq__34672_34911__$1);
var G__34924 = null;
var G__34925 = (0);
var G__34926 = (0);
seq__34672_34893 = G__34923;
chunk__34675_34894 = G__34924;
count__34676_34895 = G__34925;
i__34677_34896 = G__34926;
continue;
} else {
var G__34927 = cljs.core.next(seq__34672_34911__$1);
var G__34928 = null;
var G__34929 = (0);
var G__34930 = (0);
seq__34672_34893 = G__34927;
chunk__34675_34894 = G__34928;
count__34676_34895 = G__34929;
i__34677_34896 = G__34930;
continue;
}
}
} else {
}
}
break;
}


var G__34932 = cljs.core.next(seq__34623__$1);
var G__34933 = null;
var G__34934 = (0);
var G__34935 = (0);
seq__34623 = G__34932;
chunk__34625 = G__34933;
count__34626 = G__34934;
i__34627 = G__34935;
continue;
} else {
var G__34936 = cljs.core.next(seq__34623__$1);
var G__34937 = null;
var G__34938 = (0);
var G__34939 = (0);
seq__34623 = G__34936;
chunk__34625 = G__34937;
count__34626 = G__34938;
i__34627 = G__34939;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34687){
var map__34688 = p__34687;
var map__34688__$1 = (((((!((map__34688 == null))))?(((((map__34688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34688):map__34688);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34688__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34688__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34691,done){
var map__34692 = p__34691;
var map__34692__$1 = (((((!((map__34692 == null))))?(((((map__34692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34692):map__34692);
var msg = map__34692__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34692__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34692__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34692__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34696){
var map__34697 = p__34696;
var map__34697__$1 = (((((!((map__34697 == null))))?(((((map__34697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34697):map__34697);
var src = map__34697__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34697__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34699){var e = e34699;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34701,done){
var map__34703 = p__34701;
var map__34703__$1 = (((((!((map__34703 == null))))?(((((map__34703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34703):map__34703);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34705){
var map__34706 = p__34705;
var map__34706__$1 = (((((!((map__34706 == null))))?(((((map__34706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34706):map__34706);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34706__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34708,done){
var map__34709 = p__34708;
var map__34709__$1 = (((((!((map__34709 == null))))?(((((map__34709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34709):map__34709);
var msg = map__34709__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34709__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34711_34961 = type;
var G__34711_34962__$1 = (((G__34711_34961 instanceof cljs.core.Keyword))?G__34711_34961.fqn:null);
switch (G__34711_34962__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34714 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34714.cljs$core$IFn$_invoke$arity$1 ? fexpr__34714.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34714.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34717){var e = e34717;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34992 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34992)){
var s_34993 = temp__5735__auto___34992;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34993.onclose = (function (e){
return null;
}));

s_34993.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
