import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Title';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

    super({
      width: width,
      height: height,
      type: Phaser.CANVAS,
      parent: 'content',
      pixelArt: true
    });

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Title', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
