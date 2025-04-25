/// <reference path="../typings/phaser.d.ts" />
import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';

const game=new Phaser.Game(Object.assign(config, {
  scene: [GameScene],
}));

window.game = game; // 把game实例暴露给全局

/*function initGame(container) {
  console.log('initGame called with container:', container);
  const gameConfig = Object.assign({}, config, {
      scene: [GameScene],
      parent: container
  });
  new Phaser.Game(gameConfig);
}

// 将 initGame 函数挂载到 window 对象上
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  window.initGame = initGame;
  console.log('window.initGame is set');
});*/