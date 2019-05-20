'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroSphere,
  ViroConstants,
  Viro3DObject,
  ViroMaterials,
  ViroAmbientLight
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    ViroMaterials.createMaterials({
      tank: {
        lightingModel: "Blinn",
        diffuseTexture: require('./res/train_cart_diffuse.png'),
        specularTexture: require('./res/train_cart_specular.png'),
      },
    });

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroAmbientLight color="#ffffff" />
        <Viro3DObject source={require('./res/tanker.obj')}
          position={[500, 0, 0]}
          materials={['tank']}
          type="OBJ" />
      </ViroARScene>
    );
  }


  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "giopruhgjehdkpeuejr[upwkowiol"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
