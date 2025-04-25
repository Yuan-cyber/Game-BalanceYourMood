
/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';
import Hero from '../entities/Hero';
import levels from '../Levels';

/**
 * This file serves as the primary script for the game project. 
 * It is responsible for initializing the game scene,
 * loading assets, setting up animations, handling user input, 
 * and managing the core game logic.
 * 
*/
class Game extends Phaser.Scene {
  
  constructor() {   
    super({ key: 'GameScene' });  
  }

  preload() {
    
    this.load.audio('background-music', 'assets/bgm.mp3');
    this.load.image('button', 'assets/button.png');

    this.load.spritesheet('hero-idle-sheet', 'assets/combined_idle.png', {
      frameWidth: 48,
      frameHeight: 64,
    });

    this.load.spritesheet('hero-run-sheet',"assets/combined_resized_run_2x.png",{
      frameWidth: 48,
      frameHeight: 64,
    });

    this.load.spritesheet('hero-jump-sheet', 'assets/combined_jump.png', {
      frameWidth: 48,
      frameHeight: 64,
    });
    //load stars(mood monsters) for player to collect
    this.load.image('star1', 'assets/monster1.png');
    this.load.image('star2', 'assets/monster2.png');
    this.load.image('star3', 'assets/monster3.png');
    this.load.image('starN', 'assets/alien_lightgray.png');
    this.load.image('starN2', 'assets/alien_darkgray.png');

    this.load.image('ground', 'assets/platform.png');
    this.load.image('ground2', 'assets/platform2.png');
    this.load.image('ground3', 'assets/platform3.png');

    this.load.image('cherry', 'assets/cherry.png');
    this.load.image('cherry2', 'assets/cherry2.png');
    this.load.image('wood', 'assets/枯木.png');
    this.load.image('redtree', 'assets/redtree.png');
    this.load.image('end', 'assets/flag.png');
    this.load.image('bench', 'assets/bench.png');
    this.load.image('cactus', 'assets/cactus.png');
    this.load.image('sadflower', 'assets/sadflower.png');

    this.load.audio('dead','assets/dead.ogg');
    this.load.audio('jump','assets/swoosh.wav');
    this.load.audio('collect','assets/collect.wav');
    this.load.audio('success','assets/success.wav');
    this.load.audio('fail','assets/fail.mp3');


  // Load the star collect animation frames
  this.load.spritesheet('star-collect1', 'assets/cloud.png', {
    frameWidth: 72,
    frameHeight: 36,
  });

  this.load.spritesheet('star-collect2', 'assets/bstar.png', {
    frameWidth: 26,
    frameHeight: 26,
  });

  this.load.spritesheet('star-collect3', 'assets/sstar.png', {
    frameWidth: 26,
    frameHeight: 28,
  });

  this.load.spritesheet('star-collect4', 'assets/balloonr.png', {
    frameWidth: 28,
    frameHeight: 44,
  });

  this.load.spritesheet('star-collect5', 'assets/balloonp.png', {
    frameWidth: 28,
    frameHeight: 44,
  });

  this.load.spritesheet('star-collect6', 'assets/firework1.png', {
    frameWidth: 28,
    frameHeight: 44,
  });

  this.load.spritesheet('star-collect7', 'assets/firework2.png', {
    frameWidth: 30,
    frameHeight: 32,
  });

  this.load.spritesheet('star-collect8', 'assets/firework4.png', {
    frameWidth: 30,
    frameHeight: 32,
  });

  this.load.spritesheet('star-collect9', 'assets/tree.png', {
    frameWidth: 30,
    frameHeight: 42,
  });

  this.load.spritesheet('star-collect10', 'assets/tree2.png', {
    frameWidth: 40,
    frameHeight: 40,
  });

  this.load.spritesheet('star-collect11', 'assets/flower.png', {
    frameWidth: 30,
    frameHeight: 30,
  });

  this.load.image('background1','assets/sky1.png');
  this.load.image('background2','assets/sky2.png');
  this.load.image('background3','assets/sky3.png');

  this.load.image('background2a','assets/background2a.png');
  this.load.image('background2b','assets/background2b.png');
  this.load.image('background2c','assets/background2c.png');

  this.load.image('background3a','assets/background3a.png');
  this.load.image('background3b','assets/background3b.png');
  this.load.image('background3c','assets/background3c.png');

  this.load.image('enemy1','assets/enemy1.png');
  this.load.image('enemy2','assets/enemy2.png');
  
}

init(data) {
  this.levelIndex = data.levelIndex || 0;
}

create(data) {
  this.anims.create({
    key: 'hero-idle',
    frames: this.anims.generateFrameNumbers('hero-idle-sheet'),
    frameRate: 10,
    repeat: -1,
  });
  
  this.anims.create({
    key: 'hero-running',
    frames:this.anims.generateFrameNumbers('hero-run-sheet',{ start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'hero-jumping',
    frames: this.anims.generateFrameNumbers('hero-jump-sheet'),
    frameRate: 10,
    repeat: -1,
  });

// Define the star collect animation
this.anims.create({
  key: 'star-collect-animation1',
  frames: this.anims.generateFrameNumbers('star-collect1'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation2',
  frames: this.anims.generateFrameNumbers('star-collect2'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation3',
  frames: this.anims.generateFrameNumbers('star-collect3'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation4',
  frames: this.anims.generateFrameNumbers('star-collect4'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation5',
  frames: this.anims.generateFrameNumbers('star-collect5'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation6',
  frames: this.anims.generateFrameNumbers('star-collect6'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation7',
  frames: this.anims.generateFrameNumbers('star-collect7'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation8',
  frames: this.anims.generateFrameNumbers('star-collect8'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation9',
  frames: this.anims.generateFrameNumbers('star-collect9'),
  frameRate: 10,
  hideOnComplete: true,
});

this.anims.create({
  key: 'star-collect-animation10',
  frames: this.anims.generateFrameNumbers('star-collect10'),
  frameRate: 10,
  hideOnComplete: true,
 
});

this.anims.create({
  key: 'star-collect-animation11',
  frames: this.anims.generateFrameNumbers('star-collect11'),
  frameRate: 10,
  hideOnComplete: true,
  
});
  
  this.backgroundMusic = this.sound.add('background-music', { loop: true, volume: 0.5 });
  this.successSound = this.sound.add('success');

  if (data && data.skipIntro) {
    this.startGame();
  }else{
  this.showIntroScreen();
  this.isGameStarted = false;
}
}

startGame() {
  this.isGameStarted = true;

  // this.是全局变量global variables, const是局部变量local variables
  this.config = levels[this.levelIndex];
  this.timeLeft = this.config.timeLimit;

  // 设置延迟,否则渲染不出来
  this.time.delayedCall(200, () => {
  this.timerText = this.add.text(670, 0, `Time Left: ${this.timeLeft}`, {
    fontSize: '34px', fill: '#ffffff', fontFamily: 'Pixels',stroke: 'grey',       // 描边颜色
    strokeThickness: 1.5
  }).setScrollFactor(0); 
});

  console.log('timerText created:', this.timerText);

  // 计时器
  this.timerEvent = this.time.addEvent({
    delay: 1000, // 每1000ms触发一次
    callback: this.updateTimer,
    callbackScope: this,
    loop: true
  });

  this.isPaused = false;
  this.time.delayedCall(200, () => {
  this.pauseButton = this.add.text(700, 35, '⏸ Pause', { fontSize: '24px', fill: '#fff',fontFamily: 'Pixels',stroke: 'grey',       // 描边颜色
  strokeThickness: 1.5 })
  .setDepth(10).setInteractive().setScrollFactor(0)
  .on('pointerdown',()=>{
    if(!this.isPaused){
      this.physics.pause();
      this.timerEvent.paused = true; 
      this.backgroundMusic.pause();
      this.isPaused=true;
      this.pauseButton.setText('▶ Resume');
    }
    else{
      this.physics.resume();
      this.timerEvent.paused = false; 
      this.backgroundMusic.resume();
      this.isPaused = false;
      this.pauseButton.setText('⏸ Pause');
    }
  })
});

if(this.levelIndex==0){
  this.time.delayedCall(200, () =>{
  
  this.arrow = this.add.text(392, 200, '➡️  ⬅️  ⬆️', 
  {
      fontSize: '16px',
      fontFamily: 'Arial', // emoji 支持好一点
      align: 'center',
      color: '#ffffff'
  }).setOrigin(0.5).setScrollFactor(0).setDepth(10);

  this.instructionText = this.add.text(400, 240, 
  'to control; \n Collect emotion monsters!', 
  {
    fontSize: '32px',
    fill: '#ffffff',
    align: 'center',
    fontFamily: 'Pixels',
    stroke: 'grey',
    strokeThickness: 1.5
  }
).setOrigin(0.5).setScrollFactor(0).setDepth(10); // 固定在画面中间

this.roundText = this.add.text(394, 284, 
  'Level 1', 
  {
    fontSize: '32px',
    fill: 'white',
    align: 'center',
    fontFamily: 'Pixels',
    stroke: 'grey',
    strokeThickness: 1.5
  }
).setOrigin(0.5).setScrollFactor(0).setDepth(10);

this.tweens.add({
  targets: [this.arrow, this.instructionText,this.roundText],
  alpha: 0,
  duration: 1000,
  delay: 3000,
  onComplete: () => {
    this.instructionText.destroy();
  }
});});}

if(this.levelIndex!=0){
  this.time.delayedCall(200, () =>{

  this.roundText = this.add.text(394, 284, 
  `Level ${this.levelIndex + 1}`, 
  {
    fontSize: '32px',
    fill: 'white',
    align: 'center',
    fontFamily: 'Pixels',
    stroke: 'grey',   // 描边颜色
    strokeThickness: 1.5
  }
).setOrigin(0.5).setScrollFactor(0).setDepth(10);

this.tweens.add({
  targets: [this.arrow, this.instructionText,this.roundText],
  alpha: 0,
  duration: 1000,
  delay: 3000,
  onComplete: () => {
    this.instructionText.destroy();
  }
});});}
   
  if (this.config.hasObstacles) {
    this.spawnObstacles(); 
    console.log("has obstacle: ",this.config.hasObstacles);
  }

  if (this.config.hasEnemy) {
    this.spawnEnemys();
  }
   
   this.backgroundMusic.play();

   this.config.backgrounds.forEach(bg => {
    this.add.image(bg.x, bg.y, bg.key);
   });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.scorePositive = 0; 
    this.scoreTextPositive = this.add.text(10, 0,` `,
                     { fontSize: '32px', color:'#E93964', fontFamily: 'Pixels',stroke: 'grey',       // 描边颜色
                     strokeThickness: 1.5});
    this.scoreNegative = 0; 
    this.scoreTextNegative = this.add.text(10, 20,` `,
                     { fontSize: '32px', color:'#666666', fontFamily: 'Pixels',stroke: 'grey',       // 描边颜色
                     strokeThickness: 1.5});


    

    this.hero=new Hero(this,10, 160);

    // Set world bounds
    this.physics.world.setBounds(0, 0, 3000, 500); // Example: 3000px wide, 600px tall
    this.cameras.main.setBounds(0, 0, 3000, 500);
    this.cameras.main.startFollow(this.hero); 

    const platforms = this.physics.add.staticGroup();

    const starPlatforms = [];

    this.config.platforms.forEach(p => {
      const plat = platforms.create(p.x, p.y, p.key);
      if (p.scaleX || p.scaleY) {
        plat.setScale(p.scaleX, p.scaleY).refreshBody();
      }

      if (p.starSupport) {
        starPlatforms.push(plat);
      }
    });

    /*const p1=platforms.create(170, 420, 'ground2').setScale(0.28, 0.04).refreshBody();
    */
    this.add.image(2980, 485, 'end').setScale(0.075);
    this.add.image(2480, 485, 'bench');

   // this.physics.add.existing(platforms, true);
    this.physics.add.collider(this.hero, platforms);

    const starKeys = ['star1', 'star2','star3','starN','starN2']; // Array of star keys

    // Array of stars
    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 35,
      setXY: { x: 200, y: -100, stepX: 80 }
    });

    this.stars.children.iterate(function (child) {
      const starKey = Phaser.Math.RND.pick(starKeys); // Randomly select a star key
      child.setTexture(starKey); // Set the texture of the star
      child.setBounceY(Phaser.Math.FloatBetween(0.5, 0.8));    
      //缩小碰撞框
      child.body.setSize(child.width * 0.9, child.height * 0.9);
      //居中一下碰撞体积（不居中会偏一边）
      child.body.setOffset(child.width * 0.2, child.height * 0.2);
      
      // randomly set whether to fly away 
      const flyAway = Math.random() < 0.5;
      child.setData('flyAway', flyAway);
      console.log(`Setting flyAway: ${flyAway} for star at (${child.x}, ${child.y})`);      
    });
 
    //randomly set stars to collider with platforms
    this.physics.add.collider(this.stars, starPlatforms);
   
    this.physics.add.overlap(this.hero, this.stars, this.collectStar, null, this);
  }
  
  showIntroScreen(){
    this.backgroundMusic.play();
    this.introBg = this.add.rectangle(400, 250, 800, 500, 0x769adea).setScrollFactor(0).setDepth(100);
  
    this.me = this.add.sprite(100, 435, 'hero-idle-sheet', 0).setScale(2.2).setDepth(105).play('hero-idle'); 

    // game introduction text
    Promise.all([
    document.fonts.load('28px "Pixels2"'),document.fonts.load('28px "Pixelify Sans"')]).then(() =>{
    
    this.introText1 = this.add.text(400, 85,
        'In this world, every emotion you have \n shifts your mood up or down. Just like real life.',
      {
        fontSize: '18px',
        fill: 'pink',
        align: 'center',
        fontFamily: 'Pixelify Sans',
        stroke: 'grey',
        strokeThickness: 1,
        wordWrap: { width: 700 }
      }
    ).setOrigin(0.5).setDepth(101);
    
    this.introText = this.add.text(400, 160,
      'WELCOME TO \n BALANCE YOUR MOOD!!',
    {
      fontSize: '26px',
      fill: '#F9A1B0',
      align: 'center',
      fontFamily: 'Pixels2',
      stroke: 'grey',
      strokeThickness: 2,
      wordWrap: { width: 700 }
    }
  ).setOrigin(0.5).setDepth(101);

  this.introText2 = this.add.text(400, 275,
    'move, jump, avoid obstacles \n collect different emotions \n keep your positive and negative moods \n in balance',
  {
    fontSize: '18px',
    fill: '#fff',
    align: 'center',
    fontFamily: 'Pixelify Sans',
    fontWeight:500,
    lineSpacing: 10,
    stroke: 'grey',
    strokeThickness: 1,
    wordWrap: { width: 700 }
  }
).setOrigin(0.5).setDepth(101);
  

  this.startBtn = this.add.image(400, 370, 'button')
  .setScale(2)
  .setInteractive()
  .setDepth(101);

  this.startBtn.setInteractive({ useHandCursor: true });
  this.introText2.setInteractive({ useHandCursor: false });

  this.startBtn.on('pointerover', () => {
    this.startBtn.setTint(0xfad9df);
    this.startBtn.setScale(2.3);
  });
  this.startBtn.on('pointerout', () => {
    this.startBtn.clearTint(); 
    this.startBtn.setScale(2);
  });

  this.introText2.on('pointerover', () => {
    this.introText2.setTint(0xfad9df);
    this.introText2.setScale(1);
  });
  this.introText2.on('pointerout', () => {
    this.introText2.clearTint(); 
    this.introText2.setScale(1);
  });

  this.startBtn.on('pointerdown', () => {
    // 淡出intro层
    this.tweens.add({
      targets: [this.introBg, this.introText1, this.introText2, this.introText, this.startBtn],
      alpha: 0,
      duration: 300,
      onComplete: () => {
        this.introBg.destroy();
        this.introText.destroy();
        this.introText1.destroy();
        this.introText2.destroy();
        this.startBtn.destroy();  
        this.me.destroy();
        this.backgroundMusic.stop();
        this.startGame();  
      }
    });})
    
  });}  
    
  //randomly get the animation of collection
  getRandomCollectTexture1() {
      const textures = ['star-collect1', 'star-collect2','star-collect3','star-collect4','star-collect5','star-collect6','star-collect7','star-collect8'];
      return Phaser.Math.RND.pick(textures);
  }

  getRandomCollectTexture2() {
      const textures = ['star-collect9','star-collect10','star-collect11'];
      return Phaser.Math.RND.pick(textures);
  }


  collectStar (hero,star)
    {
      const starKey = star.texture.key;
      star.disableBody(true, true);

        if (starKey === 'starN'||starKey === 'starN2') {
          this.scoreNegative -= 10;
          this.scoreTextNegative.setText('Mood Down: ' + this.scoreNegative).setScrollFactor(0);

          const hitAnimation = this.add.sprite(star.x, star.y, starKey)
          .setScale(star.scaleX, star.scaleY);

          this.tweens.add({
            targets: hitAnimation,
            alpha: 0,
            scale: 0.1,
            duration: 500,
            onComplete: () => {
              hitAnimation.destroy();
            }
          });
        }

        else{
          this.sound.play('collect', { volume: 0.5 });

        // Get 'flyaway'
        const flyAway = star.getData('flyAway');
        console.log(`Collecting star at (${star.x}, ${star.y}) flyAway: ${flyAway}`);
  
        if(flyAway)
        {    
         
          const collectTexture = this.getRandomCollectTexture1();  
          
          // Create a temporary sprite at the star's position to play the animation
          const collectAnimation = this.add.sprite(star.x, star.y,collectTexture); 
          // Create a tween to make the star fly to the top right corner
          this.tweens.add({
          targets: collectAnimation,
          x: {
            getStart: () => collectAnimation.x,
            getEnd: () => Phaser.Math.Between(this.cameras.main.scrollX + 10, this.cameras.main.scrollX + this.cameras.main.width - 10)
          },
          y: {
            getStart: () => collectAnimation.y,
            getEnd: () => Phaser.Math.Between(this.cameras.main.scrollY + 10, this.cameras.main.scrollY + this.cameras.main.height / 2)
          },
          duration: 1000,
          ease: 'Power1',
          onComplete: () => {
            // Create a floating effect at the target position
            this.tweens.add({
              targets: collectAnimation,
              y: collectAnimation.y - 5,
              x: collectAnimation.x - 5,
              duration: 1000,
              ease: 'Sine.easeInOut',
              yoyo: true,
              repeat: -1
            });
          }
});}
else{
      const collectTexture = this.getRandomCollectTexture2();  
      // Create a temporary sprite at the star's position to play the animation
      const collectAnimation = this.add.sprite(star.x, star.y,collectTexture);
          
}
    // Update score
    this.scorePositive += 10;
    this.scoreTextPositive.setText('Mood Up: ' + this.scorePositive).setScrollFactor(0);}

    /* 收集完所有的星星，group 中 active = true的星星就为0
    if(this.stars.countActive(true) === 0){
      this.backgroundMusic.stop(); 
      this.timerEvent.remove();  // 停止计时器
      this.physics.pause();
      if(this.scoreNegative + this.scorePositive < 0){
        this.showTip2();
      }
      else{
      this.nextLevel();  
    }
    }*/
}

// this声明的变量是当前类的属性
spawnObstacles() {
  this.deadlyObstacles = this.physics.add.staticGroup();
  this.config.deadlyObstacles.forEach(d => {
    const deadOb = this.deadlyObstacles.create(d.x, d.y, d.key);
    if (d.scaleX || d.scaleY) {
      deadOb.setScale(d.scaleX, d.scaleY).refreshBody().setDepth(10);
    }
  });

  // 添加碰撞检测
  this.time.delayedCall(50, () => {this.physics.add.overlap(this.hero, this.deadlyObstacles, this.hitObstacle, null, this);});

}

hitObstacle() {
  console.log('💥Hit obstacle!');
  this.sound.play('dead');
  this.backgroundMusic.stop(); 
  this.physics.pause(); 
  this.timerEvent.remove();
  this.showTip();
  //this.scene.restart({ levelIndex: this.levelIndex });  // 重启当前关卡
}

spawnEnemys() {
  this.enemys = this.physics.add.group();

  this.config.enemys.forEach(e=> {
    const enemy = this.enemys.create(e.x, e.y, e.key)
      .setScale(e.scaleX, e.scaleY)
      .setDepth(10)
      .setCollideWorldBounds(true)
      .setBounce(1); // 碰撞反弹（来回移动）
    
    enemy.body.allowGravity = false; // 不受重力影响
    enemy.setVelocityX(e.velocityX); 
    enemy.minX = e.minX; // 设置最小 x
    enemy.maxX = e.maxX; // 设置最大 x
  });

  // 碰撞检测
  this.time.delayedCall(50, () => {this.physics.add.collider(this.hero, this.enemys, this.hitObstacle, null, this);});
}

  update(time, delta) {
    if (!this.isGameStarted) return;

    if (this.enemys) {
    this.enemys.children.iterate(enemy => {
      if (enemy.x <= enemy.minX) {
        enemy.setVelocityX(Math.abs(enemy.body.velocity.x)); // 向右
      } else if (enemy.x >= enemy.maxX) {
        enemy.setVelocityX(-Math.abs(enemy.body.velocity.x)); // 向左
      }
    });}
    
    if (this.hero.x >= 2970) {
      this.backgroundMusic.stop(); 
      this.timerEvent.remove(); 
      this.physics.pause();
      if(this.scoreNegative + this.scorePositive <0){     
        this.showTip2();
      }
      else{
        this.nextLevel();  
        console.log('go to the next level');
      }
      
      }
  }

  nextLevel() {
    
    const next = this.levelIndex + 1;
    if (next < levels.length) {    
      this.successSound.play();
      this.backgroundMusic.stop(); 
      this.scene.restart({ levelIndex: next, skipIntro: true });  // 进入下一关
    } else {    
      this.showEndDialog();
    }
  }

  updateTimer() {
    this.timeLeft--;
    this.timerText.setText(`Time Left: ${this.timeLeft}`);
  
    if (this.timeLeft <= 0) {
      console.log('timeLeft:', this.timeLeft);
      this.timerEvent.remove();
      this.backgroundMusic.stop(); 
      this.sound.play('fail');
      this.scene.restart({ levelIndex: this.levelIndex, skipIntro: true })
    }
  }

  showTip(){
    document.getElementById('tip').style.display = 'block';
  }

  showTip2(){
    document.getElementById('tip2').style.display = 'block';
  }

  showEndDialog() {
      document.getElementById('endDialog').style.display = 'block';
  }

}

export default Game;
