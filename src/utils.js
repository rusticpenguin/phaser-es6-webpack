const centerGameObjects = objects => {
  objects.forEach(function(object) {
    object.anchor.setTo(0.5);
  });
};

const parallaxObject = (game, sprite, scroll, optFollow) => ({
  game: game,
  x: 0,
  y: 0,
  width: game.width,
  height: game.height,
  asset: sprite,
  follow: optFollow,
  scroll: scroll
});

export { centerGameObjects, parallaxObject };
