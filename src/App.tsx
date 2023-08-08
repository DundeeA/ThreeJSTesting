import './App.css'
import { useEffect } from 'react'
import * as THREE from 'three' 

function App(){ 

 

  useEffect(() => {
   

    //initalize scene
    const scene = new THREE.Scene();

   //create camera
    const camera = new THREE.PerspectiveCamera(
     50,
     window.innerWidth / window.innerHeight,
     1,
     1000
    ); 
    //position camera
    camera.position.z = 110;

    const canvas = document.getElementById('myThreeJsCanvas')

    //create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setClearColor( 0xffffff, 0);

    //canvas size
    renderer.setSize(500,500);

    document.body.appendChild(renderer.domElement);


    //lighting 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff,1);
    spotLight.castShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);
     
    //Adding Box
    const boxG = new THREE.BoxGeometry(50,50,30);
    const boxMat = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxG, boxMat);
    scene.add(boxMesh);


    boxMesh.rotation.x = 5;
    boxMesh.rotation.y = 0;
    //rotating animation 
    const animate = () => {
      boxMesh.rotation.z += 0.002; 
      renderer.render(scene,camera);
      window.requestAnimationFrame(animate);
    };
    animate(); 
  },[])


  return(
   <div id='app'> 
    <h1>Three JS</h1>
   <canvas id='myThreeJsCanvas'/>
   </div>
  )
} 



export default App