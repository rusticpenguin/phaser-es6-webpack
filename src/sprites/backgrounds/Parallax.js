import Phaser from 'phaser';

export default class extends Phaser.TileSprite {
  constructor({ game, x, y, width, height, asset, follow, scroll }) {
    super(game, x, y, width, height, asset);
    this.scroll = scroll;
    this.follow = follow;
  }

  create() {
    this.setOrigin(0, 0);
    this.setScrollFactor(0);
  }

  update() {
    if (!this.follow) {
      this.tilePosition.x += this.scroll;
    }
  }
}
