import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeDSquare() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create a box geometry and material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    // Create a mesh and add it to the scene
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set the camera position
    camera.position.z = 5;

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={canvasRef} />
  );
}

export default ThreeDSquare;
