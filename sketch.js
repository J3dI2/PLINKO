var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(width,height-15,wdith/2,15);

}

function draw() {
  background(255,255,255);  

  ground.display();

  for (var k = 0; k <=width; k = k +80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinkos(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinkos(j,175));
  }

  for (var j = 0; j< particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  drawSprites();
}

function spawnParticles() {
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
}