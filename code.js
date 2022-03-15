var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["750cbb8d-3133-4b34-9d58-41c68ceae0e9","c8140ab7-fb53-4125-8343-dfdf79d9f21b","7c71acd3-b61a-45e9-b72a-2ff3b510c229","54811fbc-84a8-4fdf-91aa-86d317aab064","de26ab44-346c-4217-846b-4cc8090ae8f1","81c1c7b4-f1ea-4945-9d31-25735ad081ed","048f9405-1a13-4966-a401-26733fdd36a0","b315a1cc-e59e-445f-8832-40d49567e70d"],"propsByKey":{"750cbb8d-3133-4b34-9d58-41c68ceae0e9":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"c8140ab7-fb53-4125-8343-dfdf79d9f21b":{"name":"ship_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png","frameSize":{"x":291,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T_hk5BFBexob16gBEUk.HrOnP8dsGLQu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":291,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T_hk5BFBexob16gBEUk.HrOnP8dsGLQu/category_vehicles/ship05.png"},"7c71acd3-b61a-45e9-b72a-2ff3b510c229":{"name":"ship_3","sourceUrl":"assets/api/v1/animation-library/gamelab/2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG/category_vehicles/ship02.png","frameSize":{"x":400,"y":244},"frameCount":1,"looping":true,"frameDelay":2,"version":"2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":244},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG/category_vehicles/ship02.png"},"54811fbc-84a8-4fdf-91aa-86d317aab064":{"name":"ship_2","sourceUrl":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png","frameSize":{"x":400,"y":248},"frameCount":1,"looping":true,"frameDelay":2,"version":"h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":248},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png"},"de26ab44-346c-4217-846b-4cc8090ae8f1":{"name":"as_1","sourceUrl":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png","frameSize":{"x":328,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/C07UkVmsjiLCWoQ9U_vl1e7INpeSMmE_/category_icons/astronaut.png"},"81c1c7b4-f1ea-4945-9d31-25735ad081ed":{"name":"ufo_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"048f9405-1a13-4966-a401-26733fdd36a0":{"name":"ship_4","sourceUrl":"assets/api/v1/animation-library/gamelab/m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ/category_vehicles/ship06.png","frameSize":{"x":400,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m_d8tB7JfEulJYa_1KbBeGMobwpU3.oJ/category_vehicles/ship06.png"},"b315a1cc-e59e-445f-8832-40d49567e70d":{"name":"ship_5","sourceUrl":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png","frameSize":{"x":400,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"qCW7Tixx88sOCasiy96wH5apD47R5g5e","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "play";
var space = createSprite(200,200);
space.setAnimation("space_1");
var as1 = createSprite(200,345,200,345);
as1.shapeColor="red"
var ship1 = createSprite(150,170,10,10);
ship1.shapeColor="red"
var ship2 = createSprite(130,250,10,10);
ship2.shapeColor="red"
var ship3 = createSprite(200,50,10,10);
ship3.shapeColor="red"
var ship4 = createSprite(100, 105, 10, 10);
ship4.shapeColor = "red";
var ship5 = createSprite(185,300 , 10, 10);
ship5.shapeColor = "red";

var ufo = createSprite(200,5,200,20);
ufo.setAnimation("ufo_1");
ufo.scale = 0.2;

var goal =0;
var death = 0

as1.setAnimation("as_1");
(as1.scale=0.1),9;
ship1.setAnimation("ship_1");
ship1.scale=0.1;
ship2.setAnimation("ship_2");
ship2.scale=0.1;
ship3.setAnimation("ship_3");
ship3.scale=0.1;
ship4.setAnimation("ship_4");
ship4.scale = 0.1;
ship5.setAnimation("ship_5");
ship5.scale = 0.1;

ship1.setVelocity(-10,0);
ship2.setVelocity(10,0);
ship3.setVelocity(-10,0);
ship4.setVelocity(10, 0);
ship5.setVelocity(-10, 0);


function draw() {
  createEdgeSprites();
  ship1.bounceOff(edges);
  ship2.bounceOff(edges);
  ship3.bounceOff(edges);
  ship4.bounceOff(edges);
  ship5.bounceOff(edges);
  as1.bounceOff(edges);
  if(keyDown(UP_ARROW)){
  as1.y=as1.y-3
}
  if(keyDown(DOWN_ARROW)){
  as1.y=as1.y+3
}
  if(keyDown(LEFT_ARROW)){
  as1.x=as1.x-3
}
  if(keyDown(RIGHT_ARROW)){
  as1.x=as1.x+3
}
  if(as1.isTouching(ufo)){
  playSound("assets/category_bell/bells_win_high.mp3")
  as1.x=100;
  as1.y=200;
  goal=goal+1
}
  if(as1.isTouching(ship1)|| as1.isTouching(ship2)|| as1.isTouching(ship3)|| as1.isTouching(ship4) || (as1.isTouching(ship5) )){
  playSound("assets/category_explosion/melodic_loss_6.mp3");
  as1.x=200;
  as1.y=345;
  
}
  textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}


  
  
  
  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
