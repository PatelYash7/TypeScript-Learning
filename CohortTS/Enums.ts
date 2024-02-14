enum Direction{
    UP,DOWN,LEFT,RIGHT
}

function doSOmething(keypressed:Direction){
    if(keypressed===Direction.UP){
        console.log("UP")
    }
}

doSOmething(Direction.UP)