/* globals __DEV__ */
import Phaser from 'phaser';
import lang from '../lang';
import Parallax from '../sprites/backgrounds/Parallax';
import { parallaxObject } from '../utils';

export default class extends Phaser.State {
  init() {}
  preload() {}

  create() {
    this.addMountains();
    this.createText(this.world.centerX, 35, lang.text('menuTitle'), '40px Bangers', '#93C0D5');
    this.createText(this.world.centerX, this.world.centerY + 60, lang.text('menuStart'), '20px Bangers', '#93C0D5');
  }

  render() {
    if (__DEV__) {
      this.createText(this.world.centerX, 10, 'DEVELOPER MODE', '14px Arial', 'white');
    }
  }

  update() {}

  createText(x, y, text, font, color) {
    let newText = this.add.text(x, y, text, {
      font: font,
      fill: color,
      smoothed: false
    });

    newText.padding.set(10, 16);
    newText.anchor.setTo(0.5);
  }

  addMountains() {
    let mountains = [];
    for (let i = 0; i < 5; i++) {
      const baseSpeed = i ? 0.08 : 0;
      mountains.push(new Parallax(parallaxObject(this.game, `bgMountains0${i + 1}`, (baseSpeed + i * 0.1) * -1)));
    }
    this.addMultipleExisting(mountains);
  }

  addMultipleExisting(gameObjects) {
    gameObjects.forEach(gameObject => this.game.add.existing(gameObject));
  }
}
