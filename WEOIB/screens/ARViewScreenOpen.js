import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo, { AR } from 'expo';
import ExpoTHREE, { AR as ThreeAR, THREE } from 'expo-three';
import { View as GraphicsView } from 'expo-graphics';

import TouchableView from './TouchableView';
let safeModel = null;
// https://blog.expo.io/arkit-in-react-native-tutorial-the-basics-9f839539f0b9

export default class ARViewScreenOpen extends React.Component {

    async componentDidMount() {
        THREE.suppressExpoWarnings(true)
    }
    render() {
        return (
            <TouchableView
                style={{ flex: 1, backgroundColor: 'orange' }}

                shouldCancelWhenOutside={false}
                onTouchesBegan={this.onTouchesBegan}>
                <GraphicsView
                    style={{ flex: 1 }}
                    onContextCreate={this.onContextCreate}
                    onRender={this.onRender}
                    onResize={this.onResize}
                    isArEnabled
                    isArRunningStateEnabled
                    isArCameraStateEnabled
                    arTrackingConfiguration={AR.TrackingConfiguration.World}
                />
            </TouchableView>
        );
    }

    getSafeMesh = async (open) => {

        const openVar = this.props.navigation.getParam('open');
        const safe = {
            'obj': require('../assets/kluis.obj'),
            'mtl': require('../assets/kluis.mtl'),
        };


        const safeOpen = {
            'obj': require('../assets/kluisopen.obj'),
            'mtl': require('../assets/kluisopen.mtl'),
        };


        const materials = await ExpoTHREE.loadMtlAsync({
            asset: safe['mtl'],
            onAssetRequested: null,
        });


        const materialsOpen = await ExpoTHREE.loadMtlAsync({
            asset: safeOpen['mtl'],
            onAssetRequested: null,
        });

        const mesh = await ExpoTHREE.loadObjAsync({
            asset: safe['obj'],
            materials,
        });

        const meshOpen = await ExpoTHREE.loadObjAsync({
            asset: safeOpen['obj'],
            materialsOpen,
        });

        if (openVar == true)
            return meshOpen;
        return mesh;
    }

    onContextCreate = async ({ gl, scale: pixelRatio, width, height }) => {
        AR.setPlaneDetection('horizontal')

        // Create a 3D renderer
        this.renderer = new ExpoTHREE.Renderer({
            gl,
            pixelRatio,
            width,
            height,
        });

        // We will add all of our meshes to this scene.
        this.scene = new THREE.Scene();
        // A generic camera
        this.camera = new ThreeAR.Camera(width, height, 0.01, 1000);

        const mesh = await this.getSafeMesh(true);

        // Make a cube - notice that each unit is 1 meter in real life, we will make our box 0.1 meters
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        // Simple color material
        const material = new THREE.MeshPhongMaterial({
            color: 0xff00ff,
        });

        // Combine our geometry and material
        this.cube = new THREE.Mesh(geometry, material);
        // Place the box 0.4 meters in front of us.
        this.cube.position.z = -0.4
        // Add the cube to the scene
        // this.scene.add(this.cube);

        /// Update size and position
        ExpoTHREE.utils.scaleLongestSideToSize(mesh, 0.5)
        ExpoTHREE.utils.alignMesh(mesh, { y: 1 })
        /// Smooth mesh
        // ExpoTHREE.utils.computeMeshNormals(mesh)

        /// Add the mesh to the scene
        mesh.position.set(0, 0, -1)
        mesh.rotation.y = -1.3;

        this.scene.add(mesh);

        const shadowLight = new THREE.DirectionalLight();

        const arPointLight = new ExpoTHREE.AR.Light();
        arPointLight.position.y = 1;
        this.scene.add(arPointLight);

        this.scene.add(shadowLight);

        this.scene.background = new ThreeAR.BackgroundTexture(this.renderer);
    }

    onRender = () => {
        this.renderer.render(this.scene, this.camera);
    };

    onTouchesBegan = async ({ locationX: x, locationY: y }) => {
        // 1.
        if (!this.renderer) {
            return;
        }
        this.props.navigation.navigate('Map');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
