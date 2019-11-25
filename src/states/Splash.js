import Phaser from 'phaser';
import { centerGameObjects } from '../utils';

export default class extends Phaser.State {
  init() {}

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    // Backgrounds
    this.loadMountains();
  }

  create() {
    this.state.start('Title');
  }

  loadMountains() {
    this.load.image('bgMountains01', 'assets/images/backgrounds/mountains/parallax-mountain-bg.png');
    this.load.image('bgMountains02', 'assets/images/backgrounds/mountains/parallax-mountain-montain-far.png');
    this.load.image('bgMountains03', 'assets/images/backgrounds/mountains/parallax-mountain-mountains.png');
    this.load.image('bgMountains04', 'assets/images/backgrounds/mountains/parallax-mountain-trees.png');
    this.load.image('bgMountains05', 'assets/images/backgrounds/mountains/parallax-mountain-foreground-trees.png');
  }
}
