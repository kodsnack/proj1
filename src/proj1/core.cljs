(ns proj1.core
  (:require ["three" :as THREE]))

(def camera (THREE/PerspectiveCamera. 70, (/ (.. js/window -innerWidth) (.. js/window -innerHeight), 1, 1000)))
(set! (.. camera -position -z) 400)
(def scene (THREE/Scene.))
(def geometry (THREE/BoxBufferGeometry. 200 200 200))
(def material (THREE/MeshBasicMaterial. #js {:color (THREE/Color. 0 100 100)}))
(def mesh (THREE/Mesh. geometry material))
(.add scene mesh)
(def renderer (THREE/WebGLRenderer. #js {:antialias true}))
(.setPixelRatio renderer (.. js/window -devicePixelRatio))
(.setSize renderer (.. js/window -innerWidth) (.. js/window -innerHeight))
(.. js/document -body (appendChild (.. renderer -domElement)))
(.. renderer (render scene camera))

(def init (fn [] (println "Hej")))

(extend-type THREE/Vector3
  IPrintWithWriter
  (-pr-writer [a writer opts]
    (-write writer "#Vector3[")
    (-write writer (str (.-x a) " " (.-y a) " " (.-z a)))
    (-write writer "]")))

(comment
  (defn init
    []
    (println "Hej!"))
  1

  (def v (THREE/Vector3. 1 2 3))

  (.-name (.-x v))
  (.. v -x -name)

  "2"
  :keyword
  Hej
  (def Hej "Grattis")
  init
  'init
  (init))