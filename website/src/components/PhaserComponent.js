
///  NPM INSTALL FIRST

import phaser from "phaser"

export default function PhaserComponent() {
  const id= "PhaserComponent"
const phaserfunc = () => {
  function preload() {
   
}

function create() {

}

function update() {

}

const config = {
    type: phaser.AUTO,
    width: 500,
    height: 400,
    backgroundColor: '1c2333',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
}
  
  return(
    <div id={id} style={{height:"800px",width:"600px"}}>
      <p>{id}</p>
      {phaserfunc()}

    
    
    </div>

    
  )



  
}