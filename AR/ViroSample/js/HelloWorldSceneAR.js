'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

// import {
//   ViroARScene,
//   ViroSphere,
//   ViroConstants,
//   Viro3DObject,
//   ViroMaterials,
//   ViroAmbientLight
// } from 'react-viro';

// export default class HelloWorldSceneAR extends Component {

//   constructor() {
//     super();

//     // Set initial state here
//     this.state = {
//       text: "Initializing AR..."
//     };

//     // bind 'this' to functions
//     this._onInitialized = this._onInitialized.bind(this);
//   }

//   render() {
//     ViroMaterials.createMaterials({
//       tank: {
//         lightingModel: "Blinn",
//         diffuseTexture: require('./res/train_cart_diffuse.png'),
//         specularTexture: require('./res/train_cart_specular.png'),
//       },
//     });

//     return (
//       <ViroARScene onTrackingUpdated={this._onInitialized} >
//         <ViroAmbientLight color="#ffffff" />
//         <Viro3DObject source={require('./res/tanker.obj')}
//           position={[500, 0, 0]}
//           materials={['tank']}
//           type="OBJ" />
//       </ViroARScene>
//     );
//   }


//   _onInitialized(state, reason) {
//     if (state == ViroConstants.TRACKING_NORMAL) {
//       this.setState({
//         text: "giopruhgjehdkpeuejr[upwkowiol"
//       });
//     } else if (state == ViroConstants.TRACKING_NONE) {
//       // Handle loss of tracking
//     }
//   }
// }

// var styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     fontFamily: 'Arial',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//   },
// });

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  ViroARPlane,
  ViroText,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroSpotLight,
  ViroMaterials,
  ViroSkyBox,
  ViroNode,
  ViroController,
  ViroARPlaneSelector,
  Viro3DObject,
  ViroBox
} from 'react-viro';

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./res/xpicture.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
});

ViroMaterials.createMaterials({
  tank: {
   lightingModel: "Blinn",
 diffuseTexture: require('./res/train_cart_diffuse.png'),
    specularTexture: require('./res/train_cart_specular.png'),
  },
});

export default class HelloWorldSceneAR extends Component{
  constructor(props){
      super(props)
      this.state = {
        plane: [0,0,0],
        paused: false
      }
      this._planeSelected = this._planeSelected.bind(this);
  }
  _renderScene() {
    return (
      <Viro3DObject source={require('./res/tanker.obj')}
          scale={[.001, .001, .001]}
           position={[0, .1, 0]}
           dragType={'FixedToPlane'}
           materials={['tank']}
           type="OBJ" />
    )
  }
  _planeSelected(anchor) {
    this.setState({
      paused : true,
    })
  }
  render() {

    return (
      <ViroARScene>
        <ViroAmbientLight color="#FFFFFF" intensity={400}/>
        {/* <ViroSpotLight position={[2, -0.5, -0.5]}
                 color="#111"
                 direction={[0, 0, -1]}
                 attenuationStartDistance={5}
                 attenuationEndDistance={10}
                 innerAngle={5}
                 outerAngle={20}/>
          <ViroARPlaneSelector minHeight={.1} minWidth={.1} pauseUpdates={this.state.paused} onPlaneSelected={this._planeSelected}>
            {this._renderScene()}
          </ViroARPlaneSelector> */}

<ViroARImageMarker target={"targetOne"} >
{this._renderScene()}
</ViroARImageMarker>

      </ViroARScene>
    )
  }
}

module.exports = HelloWorldSceneAR;
