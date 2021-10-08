var w = 100;
let grid;
var clickedd = false;
var evenn = false;

function setup(){
    createCanvas(600,500)
    cols = float(width / w);
    rows = float(height / w);
    grid = new Array(cols)
    for(let i = 0 ; i < grid.length; i ++){
        grid[i] = new Column(i , rows)
    }
}

function draw(){
    background(0);
    for(let i = 0; i < grid.length ; i ++){
        grid[i].showColumn();
    }

    for(let i = 0; i < grid.length ; i ++){
        if(grid[i].hasMouse()){
            if(grid[i].filled() == false){
                grid[i].turnCellsRed();
            }else{
                grid[i].turnCellsWhite();
            }
            if(clickedd){
                if(grid[i].filled() == false){
                    grid[i].fillFromLast(evenn)
                    evenn = !evenn;
                }
            
            }
        }else{
            grid[i].turnCellsWhite();
        }
    }
    clickedd = false;
}



function mouseClicked(){
    clickedd = true;
}