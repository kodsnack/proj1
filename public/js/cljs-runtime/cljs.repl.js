goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35605){
var map__35606 = p__35605;
var map__35606__$1 = (((((!((map__35606 == null))))?(((((map__35606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35606):map__35606);
var m = map__35606__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35606__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35608_35811 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35609_35812 = null;
var count__35610_35813 = (0);
var i__35611_35814 = (0);
while(true){
if((i__35611_35814 < count__35610_35813)){
var f_35816 = chunk__35609_35812.cljs$core$IIndexed$_nth$arity$2(null,i__35611_35814);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35816], 0));


var G__35817 = seq__35608_35811;
var G__35818 = chunk__35609_35812;
var G__35819 = count__35610_35813;
var G__35820 = (i__35611_35814 + (1));
seq__35608_35811 = G__35817;
chunk__35609_35812 = G__35818;
count__35610_35813 = G__35819;
i__35611_35814 = G__35820;
continue;
} else {
var temp__5735__auto___35821 = cljs.core.seq(seq__35608_35811);
if(temp__5735__auto___35821){
var seq__35608_35822__$1 = temp__5735__auto___35821;
if(cljs.core.chunked_seq_QMARK_(seq__35608_35822__$1)){
var c__4609__auto___35823 = cljs.core.chunk_first(seq__35608_35822__$1);
var G__35824 = cljs.core.chunk_rest(seq__35608_35822__$1);
var G__35825 = c__4609__auto___35823;
var G__35826 = cljs.core.count(c__4609__auto___35823);
var G__35827 = (0);
seq__35608_35811 = G__35824;
chunk__35609_35812 = G__35825;
count__35610_35813 = G__35826;
i__35611_35814 = G__35827;
continue;
} else {
var f_35829 = cljs.core.first(seq__35608_35822__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35829], 0));


var G__35830 = cljs.core.next(seq__35608_35822__$1);
var G__35831 = null;
var G__35832 = (0);
var G__35833 = (0);
seq__35608_35811 = G__35830;
chunk__35609_35812 = G__35831;
count__35610_35813 = G__35832;
i__35611_35814 = G__35833;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35834 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35834], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35834)))?cljs.core.second(arglists_35834):arglists_35834)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35612_35835 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35613_35836 = null;
var count__35614_35837 = (0);
var i__35615_35838 = (0);
while(true){
if((i__35615_35838 < count__35614_35837)){
var vec__35627_35839 = chunk__35613_35836.cljs$core$IIndexed$_nth$arity$2(null,i__35615_35838);
var name_35840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35627_35839,(0),null);
var map__35630_35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35627_35839,(1),null);
var map__35630_35842__$1 = (((((!((map__35630_35841 == null))))?(((((map__35630_35841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35630_35841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35630_35841):map__35630_35841);
var doc_35843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630_35842__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35630_35842__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35840], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35844], 0));

if(cljs.core.truth_(doc_35843)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35843], 0));
} else {
}


var G__35846 = seq__35612_35835;
var G__35847 = chunk__35613_35836;
var G__35848 = count__35614_35837;
var G__35849 = (i__35615_35838 + (1));
seq__35612_35835 = G__35846;
chunk__35613_35836 = G__35847;
count__35614_35837 = G__35848;
i__35615_35838 = G__35849;
continue;
} else {
var temp__5735__auto___35850 = cljs.core.seq(seq__35612_35835);
if(temp__5735__auto___35850){
var seq__35612_35851__$1 = temp__5735__auto___35850;
if(cljs.core.chunked_seq_QMARK_(seq__35612_35851__$1)){
var c__4609__auto___35852 = cljs.core.chunk_first(seq__35612_35851__$1);
var G__35853 = cljs.core.chunk_rest(seq__35612_35851__$1);
var G__35854 = c__4609__auto___35852;
var G__35855 = cljs.core.count(c__4609__auto___35852);
var G__35856 = (0);
seq__35612_35835 = G__35853;
chunk__35613_35836 = G__35854;
count__35614_35837 = G__35855;
i__35615_35838 = G__35856;
continue;
} else {
var vec__35632_35857 = cljs.core.first(seq__35612_35851__$1);
var name_35858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35632_35857,(0),null);
var map__35635_35859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35632_35857,(1),null);
var map__35635_35860__$1 = (((((!((map__35635_35859 == null))))?(((((map__35635_35859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35635_35859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35635_35859):map__35635_35859);
var doc_35861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35860__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35635_35860__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35858], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35862], 0));

if(cljs.core.truth_(doc_35861)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35861], 0));
} else {
}


var G__35863 = cljs.core.next(seq__35612_35851__$1);
var G__35864 = null;
var G__35865 = (0);
var G__35866 = (0);
seq__35612_35835 = G__35863;
chunk__35613_35836 = G__35864;
count__35614_35837 = G__35865;
i__35615_35838 = G__35866;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35637 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35638 = null;
var count__35639 = (0);
var i__35640 = (0);
while(true){
if((i__35640 < count__35639)){
var role = chunk__35638.cljs$core$IIndexed$_nth$arity$2(null,i__35640);
var temp__5735__auto___35867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35867__$1)){
var spec_35868 = temp__5735__auto___35867__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35868)], 0));
} else {
}


var G__35869 = seq__35637;
var G__35870 = chunk__35638;
var G__35871 = count__35639;
var G__35872 = (i__35640 + (1));
seq__35637 = G__35869;
chunk__35638 = G__35870;
count__35639 = G__35871;
i__35640 = G__35872;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35637);
if(temp__5735__auto____$1){
var seq__35637__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35637__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35637__$1);
var G__35873 = cljs.core.chunk_rest(seq__35637__$1);
var G__35874 = c__4609__auto__;
var G__35875 = cljs.core.count(c__4609__auto__);
var G__35876 = (0);
seq__35637 = G__35873;
chunk__35638 = G__35874;
count__35639 = G__35875;
i__35640 = G__35876;
continue;
} else {
var role = cljs.core.first(seq__35637__$1);
var temp__5735__auto___35877__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35877__$2)){
var spec_35878 = temp__5735__auto___35877__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35878)], 0));
} else {
}


var G__35879 = cljs.core.next(seq__35637__$1);
var G__35880 = null;
var G__35881 = (0);
var G__35882 = (0);
seq__35637 = G__35879;
chunk__35638 = G__35880;
count__35639 = G__35881;
i__35640 = G__35882;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35884 = cljs.core.ex_cause(t);
via = G__35883;
t = G__35884;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35646 = datafied_throwable;
var map__35646__$1 = (((((!((map__35646 == null))))?(((((map__35646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35646):map__35646);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35646__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35646__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35646__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35647 = cljs.core.last(via);
var map__35647__$1 = (((((!((map__35647 == null))))?(((((map__35647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35647):map__35647);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35648 = data;
var map__35648__$1 = (((((!((map__35648 == null))))?(((((map__35648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35648):map__35648);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35648__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35649 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35649__$1 = (((((!((map__35649 == null))))?(((((map__35649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35649):map__35649);
var top_data = map__35649__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35649__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35671 = phase;
var G__35671__$1 = (((G__35671 instanceof cljs.core.Keyword))?G__35671.fqn:null);
switch (G__35671__$1) {
case "read-source":
var map__35672 = data;
var map__35672__$1 = (((((!((map__35672 == null))))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35672):map__35672);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35672__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35672__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35674 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35674__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35674,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35674);
var G__35674__$2 = (cljs.core.truth_((function (){var fexpr__35682 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35682.cljs$core$IFn$_invoke$arity$1 ? fexpr__35682.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35682.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35674__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35674__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35674__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35674__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35683 = top_data;
var G__35683__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35683,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35683);
var G__35683__$2 = (cljs.core.truth_((function (){var fexpr__35684 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35684.cljs$core$IFn$_invoke$arity$1 ? fexpr__35684.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35684.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35683__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35683__$1);
var G__35683__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35683__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35683__$2);
var G__35683__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35683__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35683__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35683__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35683__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35696 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35696,(3),null);
var G__35702 = top_data;
var G__35702__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35702,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35702);
var G__35702__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35702__$1);
var G__35702__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35702__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35702__$2);
var G__35702__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35702__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35702__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35702__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35702__$4;
}

break;
case "execution":
var vec__35712 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35645_SHARP_){
var or__4185__auto__ = (p1__35645_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35731 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35731.cljs$core$IFn$_invoke$arity$1 ? fexpr__35731.cljs$core$IFn$_invoke$arity$1(p1__35645_SHARP_) : fexpr__35731.call(null,p1__35645_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35732 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35732__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35732,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35732);
var G__35732__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35732__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35732__$1);
var G__35732__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35732__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35732__$2);
var G__35732__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35732__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35732__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35732__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35732__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35671__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35756){
var map__35757 = p__35756;
var map__35757__$1 = (((((!((map__35757 == null))))?(((((map__35757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35757):map__35757);
var triage_data = map__35757__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35771 = phase;
var G__35771__$1 = (((G__35771 instanceof cljs.core.Keyword))?G__35771.fqn:null);
switch (G__35771__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35772 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35773 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35774 = loc;
var G__35775 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35776_35896 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35777_35897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35778_35898 = true;
var _STAR_print_fn_STAR__temp_val__35779_35899 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35778_35898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35779_35899);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35745_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35745_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35777_35897);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35776_35896);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35772,G__35773,G__35774,G__35775) : format.call(null,G__35772,G__35773,G__35774,G__35775));

break;
case "macroexpansion":
var G__35781 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35782 = cause_type;
var G__35783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35784 = loc;
var G__35785 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35781,G__35782,G__35783,G__35784,G__35785) : format.call(null,G__35781,G__35782,G__35783,G__35784,G__35785));

break;
case "compile-syntax-check":
var G__35786 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35787 = cause_type;
var G__35788 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35789 = loc;
var G__35790 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35786,G__35787,G__35788,G__35789,G__35790) : format.call(null,G__35786,G__35787,G__35788,G__35789,G__35790));

break;
case "compilation":
var G__35791 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35792 = cause_type;
var G__35793 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35794 = loc;
var G__35795 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35791,G__35792,G__35793,G__35794,G__35795) : format.call(null,G__35791,G__35792,G__35793,G__35794,G__35795));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35796 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35797 = symbol;
var G__35798 = loc;
var G__35799 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35801_35900 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35802_35901 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35803_35902 = true;
var _STAR_print_fn_STAR__temp_val__35804_35903 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35803_35902);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35804_35903);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35752_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35752_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35802_35901);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35801_35900);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35796,G__35797,G__35798,G__35799) : format.call(null,G__35796,G__35797,G__35798,G__35799));
} else {
var G__35805 = "Execution error%s at %s(%s).\n%s\n";
var G__35806 = cause_type;
var G__35807 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35808 = loc;
var G__35809 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35805,G__35806,G__35807,G__35808,G__35809) : format.call(null,G__35805,G__35806,G__35807,G__35808,G__35809));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35771__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
