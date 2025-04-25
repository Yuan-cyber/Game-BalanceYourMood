
/// <reference path="../typings/phaser.d.ts" />
import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#50AFF0',
  scale: {
    width: 800,
    height: 500,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  render: {
    pixelArt: true,
  },
  physics:{
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },
      debug: false,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true,
    }
  },
};
