
/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';
class Hero extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'hero-run-sheet', 0);
    //Adding characters to the scene and assigning physical properties
    scene.add.existing(this);
    scene.physics.add.existing(this);

    //Makes the character not leave the screen when hitting the world border
    this.body.setCollideWorldBounds(true);

    //Set the size of the character's collision volume
    this.body.setSize(25, 55);

    //Set the offset of the collision volume relative to the character image
    //usually used to adjust the position of the collision box
    this.body.setOffset(30, 5);

    //Set the maximum speed of the character
    this.body.setMaxVelocity(250, 400);

    //Set the horizontal drag force of the character
    //So that the character slows down when the key is stopped
    this.body.setDragX(750);

    this.keys = scene.cursors;
  }
 
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    
    if (this.keys.left.isDown) {
      this.body.setAccelerationX(-800);
      this.setFlipX(true);
      this.body.offset.x = 8;
      this.anims.play('hero-running', true);
    } else if (this.keys.right.isDown) {
      this.body.setAccelerationX(800);
      this.setFlipX(false);
      this.body.offset.x = 12;
      this.anims.play('hero-running', true);
    } else if (this.body.onFloor()) {
      this.canDoubleJump = false; 
      this.body.setAccelerationX(0);
      this.anims.play('hero-idle', true);
    } else  {
      this.anims.play('hero-jumping', true);
    }

    if (this.body.velocity.y > 0) {
      this.isJumping = false;
    }

    const didPressJump = Phaser.Input.Keyboard.JustDown(this.keys.up);

    if (didPressJump) {
      if (this.body.onFloor()) {
        this.isJumping = true;
        this.canDoubleJump = true;
        this.body.setVelocityY(-350); 
        this.scene.sound.play('jump', { volume: 1.5 });      
      } else if (this.canDoubleJump) {
        this.isJumping = true;
        this.canDoubleJump = false;
        this.body.setVelocityY(-320);    
        this.scene.sound.play('jump', { volume: 1.5});
      }
    }
 
    if (!this.keys.up.isDown && this.body.velocity.y < -150 && this.isJumping) {
      this.body.setVelocityY(-150);
    }
  }
}
export default Hero;
