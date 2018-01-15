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
    game.load.image("bg", 'images/bg.jpg');
    game.load.image("light", 'images/img_light_1.png');
    game.load.image("light_2", 'images/img_light_2.png');
    game.load.image("high_light", 'images/high_light.png');

    game.load.bitmapFont('bigWinFont', 'images/font/new/num.png', 'images/font/new/num.fnt');

    game.load.atlasJSONHash('clip_bg',
        'images/clip/bg.jpg',
        'images/clip/bg.json');
    game.load.atlasJSONHash('light_01',
        'images/clip/light_01.png',
        'images/clip/light_01.json');
    game.load.atlasJSONHash('light_02',
        'images/clip/light_02.png',
        'images/clip/light_02.json');
    game.load.atlasJSONHash('big',
        'images/clip/big.png',
        'images/clip/big.json');
}

var bgGrp,midGrp,frontGrp;
var frames = [];
var light_01,light_02,light_03,light_04,light_05,text_01;
var textAni,label;
var type = 0;

function create() {
    bgGrp = game.add.group();
    midGrp = game.add.group();
    frontGrp = game.add.group();

    bgGrp.create(0,0,"bg");
    var bg = bgGrp.create(0,0,"clip_bg");
    bg.alpha = 0.9;
    bg.scale.set(4);
    bg.animations.add("play", SetFrames("clip_bg_",15));
    bg.animations.play("play", 15, true);

    var high_light = bgGrp.create(0,0,"high_light");
    high_light.blendMode = PIXI.blendModes.ADD;
    high_light.alpha = 0.3;
    high_light.scale.set(2);

    light_01 = midGrp.create(660,460,"light_01");
    light_01.pivot.set(light_01.width/2, light_01.height);
    light_01.angle = -45;
    light_01.scale.set(2);

    light_02 = midGrp.create(1260,460,"light_01");
    light_02.pivot.set(light_02.width/2, light_02.height);
    light_02.angle = 45;
    light_02.scale.set(2);

    light_03 = midGrp.create(1310,740,"light_01");
    light_03.pivot.set(light_03.width/2, light_03.height);
    light_03.angle = 135;
    light_03.scale.set(2);

    light_04 = midGrp.create(610,740,"light_01");
    light_04.pivot.set(light_04.width/2, light_04.height);
    light_04.angle = -135;
    light_04.scale.set(2);

    light_01.animations.add("play", SetFrames("img_light_",30));
    light_01.animations.play("play", 15, true);
    light_02.animations.add("play", SetFrames("img_light_",30));
    light_02.animations.play("play", 15, true);
    light_03.animations.add("play", SetFrames("img_light_",30));
    light_03.animations.play("play", 15, true);
    light_04.animations.add("play", SetFrames("img_light_",30));
    light_04.animations.play("play", 15, true);


    text_01= frontGrp.create(960,244,"big");
    text_01.pivot.set(text_01.width/2, text_01.height/2);
    text_01.scale.set(1.5);
    text_01.animations.add("big", SetFrames("clip_big_",15));
    text_01.animations.add("super", SetFrames("clip_super_",15));
    text_01.animations.add("mega", SetFrames("clip_mega_",15));
    text_01.animations.play("big", 15, true);

    var text_02= frontGrp.create(1000,540,"big");
    text_02.pivot.set(text_02.width/2, text_02.height/2);
    text_02.scale.set(1.5);
    text_02.animations.add("win", SetFrames("clip_win_",15));
    text_02.animations.play("win", 15, true);

    light_05 = midGrp.create(960,1080,"light_02");
    light_05.pivot.set(light_05.width/2, light_05.height);
    light_05.scale.set(2.5);
    light_05.animations.add("play", SetFrames("clip_light_02_",15));

    var spotLight_01 = midGrp.create(-500,-300,"light");
    spotLight_01.pivot.set(spotLight_01.width/2, spotLight_01.height);
    spotLight_01.angle = 120;
    spotLight_01.scale.set(3);
    var spotLight_02 = midGrp.create(2420,-300,"light");
    spotLight_02.pivot.set(spotLight_02.width/2, spotLight_02.height);
    spotLight_02.angle = -120;
    spotLight_02.scale.set(3);
    var spotLight_03 = midGrp.create(-500,1380,"light");
    spotLight_03.pivot.set(spotLight_03.width/2, spotLight_03.height);
    spotLight_03.angle = 60;
    spotLight_03.scale.set(3);
    var spotLight_04 = midGrp.create(2420,1380,"light");
    spotLight_04.pivot.set(spotLight_04.width/2, spotLight_04.height);
    spotLight_04.angle = -60;
    spotLight_04.scale.set(3);
    var spotLight_05 = midGrp.create(0,0,"light_2");
    spotLight_05.scale.set(4);

    label = game.add.bitmapText(960, 700, 'bigWinFont', 8888, 40);
    label.anchor.x = 0.5

    textAni = new TimelineMax({
        repeat: -1,
        yoyo: false,
        paused:true
    });

    CustomEase.create("custom", "M0,0,C0,0,0.5,0.546,0.5,1,0.5,0.544,1,0,1,0");
    CustomEase.create("custom_2", "M0,0 C0,0 0.106,0.56 0.2,1 0.265,1.304 0.331,1.089 0.4,1 0.488,0.886 0.539,0.976 0.6,1 0.694,1.036 0.77,1 0.8,1 0.904,1 1,1 1,1");

    textAni.fromTo(text_01, 0.2, {alpha:0}, {alpha:1},0);
    textAni.fromTo(text_01.scale, 0.8,{x:8,y:5},{x:1.9,y:1.9,ease: "custom_2"},0.1);
    textAni.fromTo(text_02.scale, 0.3,{x:1.7,y:1.7},{x:1.4,y:1.4,ease: "custom"},0.3);
    textAni.fromTo([spotLight_01.scale,spotLight_02.scale,spotLight_03.scale,spotLight_04.scale],
        0.5,{y:3},{y:5,ease: "custom"},0);
    textAni.fromTo([spotLight_01,spotLight_02,spotLight_03,spotLight_04,spotLight_05],
        1,{alpha:0},{alpha:1,ease: "custom"},0);
    PlayTween();
}

function update()
{
    game.input.onDown.addOnce(PlayTween, this);
    label.text = Math.round(game.time.now);

}

function SetFrames(name, length) {

    frames.length = 0;
    for (i = 0; i <length; i++)
    {
        frames.push(name + (i+1) + ".png");
        // console.log(name + (i+1) + ".png");
    }
    // console.log(frames);
    return frames;
}

function PlayTween() {
    textAni.restart();
    textAni.play();
    light_05.animations.play("play", 15, false);
    switch(type)
    {
        case 0:
            text_01.animations.play("big", 15, true);
            break;
        case 1:
            text_01.animations.play("super", 15, true);
            break;
        case 2:
            text_01.animations.play("mega", 15, true);
            break;
    }
    type = (type+1)%3;

}
