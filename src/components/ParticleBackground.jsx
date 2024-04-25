import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import '../styles/ParticleBackground.css';
const ParticleBackground = () => {
    const scene = useRef(null);
    const camera = useRef(null);
    const renderer = useRef(null);
    const particles = useRef(null);
    const rotationSpeed = useRef(0.001); // Adjust the rotation speed here

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        

        // Create scene
        scene.current = new THREE.Scene();

        // Create camera
        camera.current = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
        camera.current.position.z = 100;

        // Create renderer
        renderer.current = new THREE.WebGLRenderer();
        renderer.current.setSize(width, height);
        renderer.current.setClearColor(0x000000); // Set background color to black
        document.body.appendChild(renderer.current.domElement);

        // Create particles
        const particleCount = 10000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        // Update the logic for generating y positions for the particles
        for (let i = 0; i < particleCount * 3; i += 3) {
            // Generate random x, y, z positions within a larger range
            positions[i] = (Math.random() - 0.5) * 2000; // Random x positions (-1000 to 1000)
            positions[i + 1] = (Math.random() - 0.83) * 2000; // Random y positions (-1000 to 1000)
            positions[i + 2] = (Math.random() - 0.5) * 2000; // Random z positions (-1000 to 1000)
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({ color: 0xE7FEFE }); 
        particles.current = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.current.add(particles.current);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate particles
            particles.current.rotation.y += rotationSpeed.current;

            renderer.current.render(scene.current, camera.current);
        };

        animate();

        // Clean up
        return () => {
            document.body.removeChild(renderer.current.domElement);
        };
    }, []);

    return null;
};

export default ParticleBackground;



