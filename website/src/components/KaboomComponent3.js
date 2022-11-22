
///  NPM INSTALL KABOOM FIRST
import kaboom from "kaboom"

export default function KaboomComponent() {
  const id= "KaboomComponent"

  const PLAYERNAME = "PLAYER";
  const PLAYERSPEED = 200;

  const kaboomfunc = () => {
    const k = kaboom({
      background: [134, 135, 247],
      width: 640,
      height: 480,
      scale: 1,
      //scene: "intro",
      

		})

     // add a kaboom on mouse click
     k.onClick(() => {
     k.addKaboom(k.mousePos());
     //k.burp();
       
     })


    
    
    ///  SCENES   /////////////////////////////////////////

    ///   INTRO SCENE
    k.scene("intro", () => {

      const title = k.add([
        k.text("INTRO SCREEN"),
        k.pos(0,0),
        
        
      ])
      
      const btn = k.add([
    		k.text("START"),
    		k.pos(50,50),
    		k.area({ cursor: "pointer", }),
    		k.scale(.5),
  	  ])
      
	    btn.onClick(() => {k.go("main")})   
      
    })
    
    ///   LEVEL 1 SCENE

    k.scene("level1", () => {

      /////// MAPS   ////////////////////////////////////////////
    const map1 = k.addLevel([
    "####################",
    "#                  #",
    "# @                #",
    "#                  #",
    "#                  #",
    "#                  #",
    "##### ###   # ##   #",
    "#                  #",
    "#                  #",
    "#                  #",
    "#                  #",
    "#                  #",
    "#                  #",
    "####################",
    ], 
    {
      // define the size of each block
      width: 32,
      height: 32,
      // define what each symbol means, by a function returning a component list (what will be passed to add())
      "#": () => [
          k.text("#"),
          k.area(),
          k.solid(),
          k.rotate(),
          k.color(50,50,50),
          "wall",
      ],
      
      "@": () => [
          k.text("@"),
          k.area(),
          k.solid(),
          k.rotate(),
          "portal",
          k.color(50,50,50),
      ],
      
      "$": () => [
          k.text("$"),
          k.area(),
          "gold",
          //k.pos(0, -9),
      ],
      
      "^": () => [
          k.text("^"),
          k.area(),
          "danger",
      ],
})


      
    })

    ///   DEATH SCENE
    k.scene("dead", () => {

      const title = k.add([
        k.text("DEATH SCREEN"),
        k.pos(0,0),
      ])
    
    })
    
    /////// MAPS   ////////////////////////////////////////////
    const map1 = k.addLevel([
    "####################",
    "#             $$   #",
    "# @                #",
    "#                  #",
    "#              $   #",
    "#                  #",
    "##### ###   # ##   #",
    "#                  #",
    "#                  #",
    "#    %             #",
    "#        %         #",
    "#                  #",
    "#                  #",
    "####################",
    ], 
    {
      // define the size of each block
      width: 32,
      height: 32,
      // define what each symbol means, by a function returning a component list (what will be passed to add())
      "#": () => [
          k.text("#"),
          k.rect(20,20),
          k.area(),
          //k.body(),
          k.solid(),
          k.outline(4),
          //k.area(20,20),
          "wall",
          
          k.rotate(),
          k.color(139,69,19),
          
      ],
      
      "@": () => [
          k.text("@"),
          k.area(),
          k.solid(),
          k.rotate(),
          "portal",
          k.color(128,0,128),
      ],
      
      "$": () => [
          k.text("$"),
          k.area(),
          k.solid(),
          "gold",
          //k.pos(0, -9),
      ],
      
      "%": () => [
          k.text("%"),
          k.area(),
          k.color(85,107,47),
          "tree",
      ],
})


    
    ///   TITLE
		//k.add([
			//k.text("KABOOM DEMO"),
			//k.pos(40, 20),
		//])

    ///   Score
    const score = k.add([
    k.text("0"),
    k.pos(400,20),
    "score",
    ])    

    ///  STATUS
    const status = k.add([
    k.text("status"),
    k.pos(450,400),
    "status",
    k.scale(.25),
    ])   
    
    ///   PLAYER
    //const PLAYERSPEED = 200
    const player = k.add([
      k.text("(p)"),
      //k.rect(10,10),
      k.pos(50,500),
      k.area({ width: 40, height: 40 }),
      //k.body(),
      //k.area(),
      "player",
      //k.scale(.25),
      //k.solid(),
      //k.rect(5,5),
      //k.outline(4),
      //k.move(k.vec2(50,0),100),    
    ])


    
    ///   Enemy
    const enemy = k.add([
      k.text("(e)"),
      k.pos(200,200),
      k.area({ width: 40, height: 40. }),
      "enemy",
      k.scale(.25),
      k.solid(),
      //k.follow(player),
      //k.rect(5, 5),
      //k.outline(4),
    ])   

    
    
  ///   ADD BUTTON FUNCTION   ////////////////////////////////////////
  function addButton(txt, p, f) {

  	const btn = k.add([
  		k.text(txt),
  		k.pos(p),
  		k.area({ cursor: "pointer", }),
  		k.scale(.5),
  	])

	  btn.onClick(f)

  }
    
  ///   BUTTONS
  addButton("Left", k.vec2(0, 400), () => 
    status.text = "MOVING LEFT",
    player.move(-PLAYERSPEED,0),
    
  )
  addButton("Right", k.vec2(200, 400), () =>
    player.move(-20,0),
    status.text = "MOVING RIGHT"         
  )
  addButton("UP", k.vec2(120,300), () => 
    status.text = "MOVING UP"         
  )
  addButton("Down", k.vec2(100, 500), () => 
    status.text = "MOVING DOWN"         
  )

  ///   PLAYER KEYBOARD MOVEMENT   //////////////////////////////////

  ///   RIGHT
  k.onKeyDown("right", () => {
   //player.flipX(false);
   player.move(PLAYERSPEED, 0);
  status.text="RIGHT KEY PRESSED"
   });   
  ///   LEFT
  k.onKeyDown("left", () => {
   //player.flipX(false);
   player.move(-PLAYERSPEED, 0);
  status.text="LEFT KEY PRESSED"
   });
   ///  UP
  k.onKeyDown("up", () => {
   //player.flipX(false);
   player.move(0, -PLAYERSPEED);
  status.text="UP KEY PRESSED"
   });
  ///   DOWN
  k.onKeyDown("down", () => {
   //player.flipX(false);
   player.move(0, PLAYERSPEED);
  status.text="DOWN KEY PRESSED"
   });

  ///   COLLISIONS   //////////////////////////////////////////
  ///  MOUSE CLICK COLLISION
    k.onClick("wall",(wall) => wall.destroy(),status.text="DESTROYING WALL")


    
    player.onCollide("enemy", (enemy) => {
      //k.destroy(player);
      //k.destroy(enemy);
      status.text= "HIT ENEMY";
      k.destroy();
      k.shake();
      //go("lose")
    })
    
    player.onCollide("wall", (wall) => {
      //k.destroy(player);
      //k.destroy(enemy);
      status.text= "HIT WALL";
      //k.destroy(wall)
      player.pos.x -= 1;
      //k.shake();
      //go("lose")
    })

    player.onCollide("gold", () => {
      //k.destroy(player);
      //k.destroy(enemy);
      status.text= "GOT GOLD";
      score.text +=1
      //player.move(10,20)
      //k.shake();
      //go("lose")
    })
    
  ///GAME LOOP
    k.onUpdate(() => {

      //enemy.follow(player)

      
      
    })
    
    
  }

  return(
    <div id={id} style={{height:"800px",width:"600px"}}>
      
      <p>{id}</p>
      <div>
        {kaboomfunc()}
      
      </div>
      

    
    
    </div>

    
  )



  
}