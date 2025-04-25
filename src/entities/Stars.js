/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';

class Stars {
  constructor(scene, starKeys, platforms) {
    this.scene = scene;
    this.starKeys = starKeys;

    this.stars = this.scene.physics.add.group({
      key: 'star',
      repeat: 35,
      setXY: { x: 100, y: -100, stepX: 90 }
    });

    this.stars.children.iterate(child => {
      const starKey = Phaser.Math.RND.pick(this.starKeys); // Randomly select a star key
      child.setTexture(starKey); // Set the texture of the star
      child.setBounceY(Phaser.Math.FloatBetween(0.5, 0.8));    
      // 随机设置是否飞走
      const flyAway = Math.random() < 0.5;
      child.setData('flyAway', flyAway);
      console.log(`Setting flyAway: ${flyAway} for star at (${child.x}, ${child.y})`);      
    });

  }

  getStars() {
    return this.stars;
  }
}

export default Stars;