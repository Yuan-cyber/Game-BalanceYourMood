import Phaser from 'phaser'

const levels = [
    {
      backgrounds:[
        { x: 500, y: 250, key: 'background1' },
        { x: 1500, y: 250, key: 'background2' },
        { x: 2500, y: 250, key: 'background3' }
      ],

      platforms:[
      { x: 170,  y: 420, key: 'ground2', scaleX: 0.28, scaleY: 0.04, starSupport: true },
      { x: 320,  y: 340, key: 'ground2', scaleX: 0.35, scaleY: 0.1, starSupport: true },
      { x: 450,  y: 450, key: 'ground2', scaleX: 0.25, scaleY: 0.5, starSupport: true },
      { x: 600,  y: 330, key: 'ground2', scaleX: 0.3,  scaleY: 0.06, starSupport: true },
      { x: 300,  y: 485, key: 'wood', starSupport: false},
      { x: 750,  y: 290, key: 'ground2', scaleX: 0.2,  scaleY: 0.1, starSupport: true },
      { x: 900,  y: 410, key: 'ground',  scaleX: 0.47, scaleY: 0.06, starSupport: true },
      { x: 1140, y: 350, key: 'ground',  scaleX: 0.35, scaleY: 0.1, starSupport: true },
      { x: 1350, y: 420, key: 'ground',  scaleX: 0.22, scaleY: 0.06, starSupport: true },
      { x: 1350, y: 395, key: 'cherry', starSupport: false },
      { x: 1500, y: 450, key: 'ground',  scaleX: 0.2,  scaleY: 0.3, starSupport: true },
      { x: 1700, y: 400, key: 'ground',  scaleX: 0.3,  scaleY: 0.06, starSupport: true },
      { x: 1920, y: 380, key: 'ground3', scaleX: 0.18, scaleY: 0.4, starSupport: true },
      { x: 2100, y: 310, key: 'ground3', scaleX: 0.4,  scaleY: 0.06, starSupport: true },
      { x: 2250, y: 440, key: 'ground3', scaleX: 0.25, scaleY: 0.2, starSupport: true },
      { x: 2410, y: 465, key: 'cherry',  scaleX: 1.5, starSupport: false },
      { x: 1870, y: 480, key: 'cherry2', scaleX: 1.1, starSupport: false },
      { x: 2600, y: 400, key: 'ground3', scaleX: 0.15, scaleY: 0.08, starSupport: true },
      { x: 2760, y: 450, key: 'ground3', scaleX: 0.25, scaleY: 0.1, starSupport: true }
      ],
      timeLimit: 60,
      hasObstacles: false,
      hasEnemy: false,
    },
    {
      backgrounds:[
        { x: 500, y: 250, key: 'background2a' },
        { x: 1500, y: 250, key: 'background2b' },
        { x: 2500, y: 250, key: 'background2c' }
      ],

      platforms:[
      { x: 200,  y: 420, key: 'ground2', scaleX: 0.2, scaleY: 0.08, starSupport: true },
      { x: 320,  y: 340, key: 'ground2', scaleX: 0.2, scaleY: 0.1, starSupport: true },
      { x: 600,  y: 450, key: 'ground2', scaleX: 0.6, scaleY: 0.2, starSupport: true },
      { x: 700,  y: 350, key: 'ground2', scaleX: 0.25, scaleY: 0.3, starSupport: true },
      { x: 100,  y: 485, key: 'redtree', scaleX: 0.08, starSupport: false},
      { x: 850,  y: 310, key: 'ground2', scaleX: 0.2,  scaleY: 0.1, starSupport: true },
      { x: 1000,  y: 430, key: 'ground',  scaleX: 0.6, scaleY: 0.06, starSupport: true },
      { x: 1160, y: 325, key: 'ground',  scaleX: 0.35, scaleY: 0.1, starSupport: true },
      { x: 1160, y: 300, key: 'cherry', starSupport: true },
      { x: 1350, y: 420, key: 'ground',  scaleX: 0.22, scaleY: 0.06, starSupport: false }, 
      { x: 1500, y: 450, key: 'ground',  scaleX: 0.2,  scaleY: 0.15, starSupport: true },
      { x: 1700, y: 400, key: 'ground',  scaleX: 0.3,  scaleY: 0.06, starSupport: true },
      { x: 1920, y: 380, key: 'ground3', scaleX: 0.18, scaleY: 0.3, starSupport: true },
      { x: 2100, y: 350, key: 'ground3', scaleX: 0.4,  scaleY: 0.06, starSupport: true },
      { x: 2250, y: 440, key: 'ground3', scaleX: 0.25, scaleY: 0.2, starSupport: true },
      { x: 2410, y: 465, key: 'redtree',  scaleX: 0.16, starSupport: false },
      { x: 1870, y: 480, key: 'cherry', scaleX: 1.1, starSupport: false },
      { x: 2600, y: 400, key: 'ground3', scaleX: 0.15, scaleY: 0.08, starSupport: true },
      { x: 2860, y: 400, key: 'ground3', scaleX: 0.25, scaleY: 0.08, starSupport: true }
      ],
      timeLimit: 50,
      hasObstacles: true,
      deadlyObstacles: [
        { x: 350, y: 490, key: 'cactus', scaleX: 0.9 },
        { x: 1195, y: 490, key: 'cactus', scaleX: 1.3 },
        { x: 2100, y: 490, key: 'cactus', scaleX: 1 },
      ],
      hasNegativeStars: false,
    },
    {
      backgrounds:[
        { x: 500, y: 250, key: 'background3a' },
        { x: 1500, y: 250, key: 'background3b' },
        { x: 2500, y: 250, key: 'background3c' }
      ],

      platforms:[
      { x: 200,  y: 420, key: 'ground2', scaleX: 0.2, scaleY: 0.08, starSupport: true },
      { x: 320,  y: 340, key: 'ground2', scaleX: 0.2, scaleY: 0.1, starSupport: true },
      { x: 600,  y: 450, key: 'ground2', scaleX: 0.6, scaleY: 0.2, starSupport: true },
      { x: 700,  y: 350, key: 'ground2', scaleX: 0.25, scaleY: 0.3, starSupport: true },
      { x: 100,  y: 485, key: 'redtree', scaleX: 0.08, starSupport: false},
      { x: 850,  y: 310, key: 'ground2', scaleX: 0.2,  scaleY: 0.1, starSupport: true },
      { x: 1000,  y: 430, key: 'ground',  scaleX: 0.6, scaleY: 0.06, starSupport: true },
      { x: 1160, y: 325, key: 'ground',  scaleX: 0.35, scaleY: 0.1, starSupport: true },

      { x: 1350, y: 420, key: 'ground',  scaleX: 0.22, scaleY: 0.06, starSupport: false }, 
      { x: 1500, y: 450, key: 'ground',  scaleX: 0.2,  scaleY: 0.15, starSupport: true },
      { x: 1700, y: 400, key: 'ground',  scaleX: 0.3,  scaleY: 0.06, starSupport: true },
      { x: 1920, y: 380, key: 'ground3', scaleX: 0.18, scaleY: 0.3, starSupport: true },
      { x: 2100, y: 350, key: 'ground3', scaleX: 0.4,  scaleY: 0.06, starSupport: true },
      { x: 2250, y: 440, key: 'ground3', scaleX: 0.25, scaleY: 0.2, starSupport: true },
      { x: 2410, y: 465, key: 'redtree',  scaleX: 0.16, starSupport: false },
      { x: 1870, y: 480, key: 'cherry', scaleX: 1.1, starSupport: false },
      { x: 2600, y: 400, key: 'ground3', scaleX: 0.15, scaleY: 0.08, starSupport: true },
      { x: 2860, y: 400, key: 'ground3', scaleX: 0.25, scaleY: 0.08, starSupport: true }
      ],
      timeLimit: 40,
      hasObstacles: true,
      deadlyObstacles: [
        { x: 350, y: 490, key: 'sadflower', scaleX: 0.1 },
        { x: 1350, y: 405, key: 'sadflower', scaleX: 0.05 },
        { x: 2100, y: 490, key: 'sadflower', scaleX: 0.08 },
      ],
      hasEnemy: true,
      enemys: [
        {
          x: 200,
          y: 400,
          key: 'enemy1',
          scaleX: 0.07,
          scaleY: 0.07,
          velocityX: 100,
          minX: 100,
          maxX: 400
        },
        {
          x: 1000,
          y: 300,
          key: 'enemy2',
          scaleX: 0.07,
          scaleY: 0.07,
          velocityX: 100,
          minX: 800,
          maxX: 1200
        },
        {
          x: 2400,
          y: 270,
          key: 'enemy1',
          scaleX: 0.1,
          scaleY: 0.1,
          velocityX: 100,
          minX: 2300,
          maxX: 2500
        },
      ],
    },
    
  ];
  
  export default levels;