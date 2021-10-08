class Column{
    constructor(x , rows){
        this.x = x;
        this.cells = new Array(rows)
        for(let i = 0 ; i < this.cells.length ; i++){
            this.cells[i] = new Cell(this.x , i);
        }
    }
    showColumn(){
        for(let i = 0 ; i < this.cells.length ; i++){
            this.cells[i].show();
        }
    }

    hasMouse(){
        return(mouseX > this.x * w && mouseX < this.x * w + w)
    }

    turnCellsRed(){
        for(let i = 0 ; i < this.cells.length ; i++){
            this.cells[i].redd = true;
        }
    }
    turnCellsWhite(){
        for(let i = 0 ; i < this.cells.length ; i++){
            this.cells[i].redd = false;
        }
    }

    fillFromLast(P1){
        console.log("filled from last")
        //ckeck from last if the cells are filled or not. if not fill and break the loop//
        for(let i = this.cells.length - 1; i >= 0; i--){
            if(this.cells[i].clicked == true){
                continue;
            }
            this.cells[i].clicked = true;
            if(P1){
                this.cells[i].p1 = true;
            }else{
                this.cells[i].p2 = true;
            }
            break;
        }
    }

    filled(){
        let all = true
        for(let i = 0 ; i < this.cells.length ; i++){
            if(this.cells[i].clicked == false){
                all = false;
            }
        }
        return all;
    }
}