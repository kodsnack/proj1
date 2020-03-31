goog.provide('proj1.core');
goog.require('cljs.core');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
proj1.core.camera = (new module$node_modules$three$build$three.PerspectiveCamera((70),(((window.innerWidth / window.innerHeight) / (1)) / (1000))));
(proj1.core.camera.position.z = (400));
proj1.core.scene = (new module$node_modules$three$build$three.Scene());
proj1.core.geometry = (new module$node_modules$three$build$three.BoxBufferGeometry((200),(200),(200)));
proj1.core.material = (new module$node_modules$three$build$three.MeshBasicMaterial(({"color": (new module$node_modules$three$build$three.Color((0),(100),(100)))})));
proj1.core.mesh = (new module$node_modules$three$build$three.Mesh(proj1.core.geometry,proj1.core.material));
proj1.core.scene.add(proj1.core.mesh);
proj1.core.renderer = (new module$node_modules$three$build$three.WebGLRenderer(({"antialias": true})));
proj1.core.renderer.setPixelRatio(window.devicePixelRatio);
proj1.core.renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(proj1.core.renderer.domElement);
proj1.core.renderer.render(proj1.core.scene,proj1.core.camera);
proj1.core.init = (function proj1$core$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hej"], 0));
});
(module$node_modules$three$build$three.Vector3.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$three$build$three.Vector3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#Vector3[");

cljs.core._write(writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1.x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1.y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__$1.z)].join(''));

return cljs.core._write(writer,"]");
}));

//# sourceMappingURL=proj1.core.js.map
