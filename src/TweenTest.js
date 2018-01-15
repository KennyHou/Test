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

    // var spotLight_01 = midGrp.create(-500,-300,"light");
    // spotLight_01.pivot.set(spotLight_01.width/2, spotLight_01.height);
    // spotLight_01.angle = 120;
    // spotLight_01.scale.set(3);
    // // spotLight_01.tint = 0xff0000
    //
    // var spotLight_02 = midGrp.create(2420,-300,"light");
    // spotLight_02.pivot.set(spotLight_02.width/2, spotLight_02.height);
    // spotLight_02.angle = -120;
    // spotLight_02.scale.set(3);
    // var spotLight_03 = midGrp.create(-500,1380,"light");
    // spotLight_03.pivot.set(spotLight_03.width/2, spotLight_03.height);
    // spotLight_03.angle = 60;
    // spotLight_03.scale.set(3);
    // var spotLight_04 = midGrp.create(2420,1380,"light");
    // spotLight_04.pivot.set(spotLight_04.width/2, spotLight_04.height);
    // spotLight_04.angle = -60;
    // spotLight_04.scale.set(3);
    // var spotLight_05 = midGrp.create(0,0,"light_2");
    // spotLight_05.scale.set(4);
    //
    // game.add.tween(spotLight_02).to( { tint:0xff0000 }, 2000,
    //     Phaser.Easing.Linear.None, true, 0, 1000, true);

    textAni = new TimelineMax({
        repeat: -1,
        yoyo: false,
        paused:true
    });

    CustomEase.create("custom", "M0,0,C0,0,0.5,0.546,0.5,1,0.5,0.544,1,0,1,0");
    CustomEase.create("custom_2", "M0,0 C0,0 0.106,0.56 0.2,1 0.265,1.304 0.331,1.089 0.4,1 0.488,0.886 0.539,0.976 0.6,1 0.694,1.036 0.77,1 0.8,1 0.904,1 1,1 1,1");

    // textAni.to([spotLight_01], 1,{tint:0xff0000},0);

    // textAni.fromTo([spotLight_01.scale,spotLight_02.scale,spotLight_03.scale,spotLight_04.scale],
    //     0.5,{y:3},{y:5,ease: "custom"},0);
    // textAni.fromTo([spotLight_01,spotLight_02,spotLight_03,spotLight_04,spotLight_05],
    //     1,{alpha:0},{alpha:1,ease: "custom"},0);
    PlayTween();
}

function update()
{
    game.input.onDown.addOnce(PlayTween, this);

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

}
