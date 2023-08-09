import './App.css'
import { useEffect } from 'react'
import * as THREE from 'three'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
function App() {
  useEffect(() => {
    //initalize scene
    const scene = new THREE.Scene()

    //create camera
    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    )
    //position camera
    camera.position.z = 3
    camera.position.y = 2

    const canvas = document.getElementById('myThreeJsCanvas')

    //create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })

    //canvas size
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    //lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xffffff, 1)
    spotLight.castShadow = true
    spotLight.position.set(0, 64, 32)
    scene.add(spotLight)

    const loader = new GLTFLoader()

    const textureLoader = new THREE.TextureLoader()
    const alphaMap = textureLoader.load('./src/assets/opacitymap.png')

    let earth1 = null

    loader.load(
      './src/assets/earth101.glb',
      function (gltf: any) {
        scene.add(gltf.scene)
        earth1 = gltf.scene

        gltf.scene.children[0].material.alphaMap = alphaMap

        console.log(gltf.scene.children[0].material)
      },
      undefined,
      function (error: any) {
        console.error(error)
      },
    )

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)

      earth1.rotation.y += 0.002
    }

    animate()
  }, [])

  return (
    <div id="app">
      <h1>Three JS</h1>
      <canvas id="myThreeJsCanvas" />
    </div>
  )
}

export default App
