"use client";

import React, {useRef, useLayoutEffect} from 'react';
import {Canvas, useFrame, extend, useThree} from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import countries from './globe-data-min.json';
import {Suspense} from "react";
import {Color, DirectionalLight, PointLight, NoToneMapping} from "three";
import Loading from "@/app/loading";

extend({ThreeGlobe})

const CameraPosition = () => {
    const { camera } = useThree();
    camera.position.z = 250;
    camera.fov = 50
    return null;
};


const GlobeObj = () => {

    const globeRef = useRef();


    // data for arcs
    const N = 50;

    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: ['#7b2080', 'white', '#4fa1e1', '#c21bcb'][Math.round(Math.random() * 3)]
    }));

    useFrame( () => {
            if (globeRef.current) {
                globeRef.current.rotation.y += 0.003;
            }
        }
    );

    useLayoutEffect(()=> {
        const globeMaterial = globeRef.current.globeMaterial()
        globeMaterial.color = new Color(0x3a228a)
        globeMaterial.emissive = new Color(0x220038);
        globeMaterial.emissiveIntensity = 0.1;
        globeMaterial.shininess = 0.7;


        globeRef.current.showAtmosphere(true)
        globeRef.current.atmosphereColor("#3a228a")
        globeRef.current.atmosphereAltitude(0.25)

        globeRef.current.hexPolygonsData(countries.features)
        globeRef.current.hexPolygonResolution(3)
        globeRef.current.hexPolygonMargin(0.7)
        globeRef.current.hexPolygonColor((e) => {
            if (
                ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
                    e.properties.ISO_A3
                )
            ) {
                return "rgba(255,255,255, 1)";
            } else return "rgba(255,255,255, 0.7)";
        })

        globeRef.current.rotation.x = .5
        globeRef.current.rotation.z = .3

        globeRef.current.arcsData(arcsData)
        globeRef.current.arcColor('color')
        globeRef.current.arcDashLength(0.4)
        globeRef.current.arcDashGap(4)
        globeRef.current.arcDashInitialGap(() => Math.random() * 5)
        globeRef.current.arcDashAnimateTime(2000)

    })

    return (
        <threeGlobe
            ref={globeRef}
        />
    )
}

const Globe = () => {
    const meshRef = useRef();

    return (
        <Canvas
            gl={{ antialias: true, toneMapping: NoToneMapping }}
            resize={{scroll: false}}
        >

            <Suspense fallback={<Loading/>}>
                <ambientLight intensity={0.01} color={0xbbbbbb}/>
                <fog attach={'fog'} color={0x535ef3} near={1} far={2000}/>
                <directionalLight color={0xffffff} intensity={0.5} position={[-800, 1500, 300]}/>
                <directionalLight color={0x7982f6} intensity={0.8} position={[-300, 400, 50]}/>
                <spotLight color={'802959'} intensity={0.8} position={[50, 500, -40]} angle={0.5}/>
                <directionalLight color={'#bff7ff'} intensity={3} position={[-300, 400, -300]}/>
                <directionalLight color={'#bff7ff'} intensity={2} position={[-300, 400, -150]}/>
                <directionalLight color={'#bff7ff'} intensity={50} position={[-250, 250, -450]}/>
                <directionalLight color={'#bff7ff'} intensity={50} position={[-270, 0, -470]}/>
                <directionalLight color={'#bff7ff'} intensity={50} position={[0, 250, -500]}/>
                <pointLight color={0x8566cc} intensity={0.8} position={[-200, 500, 450]}/>
                <CameraPosition/>
                <GlobeObj/>
            </Suspense>

        </Canvas>
    );
};

export default Globe;
