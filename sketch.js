var tile1, tile2, tile3, tile4, tile5, tile6, tile7
var tilesGroup
var sprite
var edges
var tile
function setup() {
  createCanvas(500, 800);
 // tilesGroup = new Group()
  
  sprite = createSprite(250,50)
  sprite.addImage(tile1)
  sprite.scale= 0.2
  sprite.velocityY= 2
  

  edges= createEdgeSprites()
}

function preload()
{
  tile1 = loadImage("images/tile1.png")
  tile2 = loadImage("images/tile2.png")
  tile3 = loadImage("images/tile3.png")
  tile4 = loadImage("images/tile4.png")
  tile5 = loadImage("images/tile5.png")
  tile6 = loadImage("images/tile6.png")
  tile7 = loadImage("images/tile7.png")
}


function draw() {
  background(28, 27, 41);  
  
 
  if(sprite.isTouching(edges[3]))
  {
    sprite.velocityY=0
  }
  //createEdgeSprites()
 // randomTiles()
  drawSprites();
}


function randomTiles()
{
  if (frameCount % 80 === 0){
  tile = createSprite(250, 50)
  tile.velocityY = 2
  
  var randomT = Math.random(1,7)
   console.log(randomT)
  switch(randomT)
  {
    case 1: tile.addImage(tile1)
    break;
    case 2: tile.addImage(tile2)
    break;
    case 3: tile.addImage(tile3)
    break;
    case 4: tile.addImage(tile4)
    break;
    case 5: tile.addImage(tile5)
    break;
    case 6: tile.addImage(tile6)
    break;
    case 7: tile.addImage(tile7)
    break;
    default:
    break;
  }
  tilesGroup.add(tile)
  tile.scale= 0.2
  
  if(tile.isTouching(edges[3]))
  {
    tile.velocityY=0
  }
}
}