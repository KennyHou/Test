/**
 * Created by tkenny1013 on 2017/8/31.
 */
game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {init: init, preload: preload,
    create: create, update: update});


function init()
{
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
}

function preload()
{
    game.load.atlasJSONHash('symbolH1W', 'images/symbols/symbol_h1w.png',
        'images/symbols/symbol_h1w.json');
}

var bgGrp,midGrp,frontGrp;
var frames = [];

function create() {
    bgGrp = game.add.group();
    midGrp = game.add.group();
    frontGrp = game.add.group();

    const frameCount = this.game.cache.getFrameCount('symbolH1W');
    const fps = frameCount / 3; // 秒
    const frameAry = Phaser.Animation.generateFrameNames('clip_symbol_h1w_', 1, frameCount, '.png');

    const symbolH1W = game.add.sprite(game.world.x, game.world.y, "symbolH1W");
    symbolH1W.animations.add("play", frameAry);
    symbolH1W.animations.play("play", fps, true);
}

function update() {
}

