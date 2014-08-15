Atlas.ts
==========

[![Build Status](https://travis-ci.org/pine613/Atlas.ts.svg?branch=master)](https://travis-ci.org/pine613/Atlas.ts)

<img src="https://raw.github.com/steelydylan/Atlas.js/master/logo.png"></img>

TypeScript Game Engine (Forked from [Atlas.js](https://github.com/steelydylan/Atlas.js))

## Download

### Atlas.js
- [Atlas.js](https://raw.githubusercontent.com/pine613/Atlas.ts/master/bin/Atlas.js)
- [Atlas.min.js](https://raw.githubusercontent.com/pine613/Atlas.ts/master/bin/Atlas.min.js) (compressed)

### Atlas.ts
- [AtlasTS.ts](https://raw.githubusercontent.com/pine613/Atlas.ts/master/bin/AtlasTS.ts)
- [AtlasTS.js](https://raw.githubusercontent.com/pine613/Atlas.ts/master/bin/AtlasTS.js)
- [AtlasTS.min.js](https://raw.githubusercontent.com/pine613/Atlas.ts/master/bin/AtlasTS.min.js) (Compressed)

## Documentation

### Atlas.js
- Japanese
    - <http://steelydylan.github.io/Atlas.js/>


## Platform

- Chrome
- Safari
- Firefox
- IE9 
- iOS
- Android 2.1+

## Build

```
$ npm install
$ bower install
$ grunt build
```

### Test

```
$ grunt test
```

## Usage
They don't work now.

### Easy sample
```ts
/// <reference path="AtlasTS.ts" />

AtlasTS();

window.onload = () => {
  var game = new App("app");
  
  game.load("chara.png");
  game.setQuality(500, 500);
  game.setSize(500, 500);
    
  var sprite = new Sprite("chara.png", 32, 32);
  
  sprite
    .setPosition(220, 220)
    .animate([0,  1,  2], 5).and().moveBy(  0,  50, 30)
    .animate([6,  7,  8], 5).and().moveBy( 50,   0, 30)
    .animate([9, 10, 11], 5).and().moveBy(  0, -50, 30)
    .animate([3,  4,  5], 5).and().moveBy(-50,   0, 30)
    .loop();
    
  game.addChild(sprite);
  game.start();
};
```

### Extends

```ts
/// <reference path="AtlasTS.ts" />

class Enemy extends AtlasTS.Sprite<Enemy> {
  private sx: number;
  private sy: number;
  
  constructor(image: string, numX: number, numY: number) {
    super(image, numX, numY);
    
    this.sx = this.getRand(5, 10);
    this.sy = this.getRand(5, 10);
    
    this.setPosition(0, this.getRand(100, 300));
  }

  enterFrame(): void {
    this.x += this.sx;
    this.y += this.sy;
    		
    if (this.x > 500) {
      this.remove();
    }
  }
}

AtlasTS();

window.onload = () => {
  var game = new App("game");
  game.load("teki2.png");
  
  var enemy = new Enemy("teki2.png", 100, 95);
  game.addChild(enemy);
  game.start();
};
```

## License
MIT License

- Copyright (C) steelydylan
- Copyright (C) 2014 MIZUNE Pine