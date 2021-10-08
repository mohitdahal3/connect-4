
class Cell{
    constructor(x , y){
        this.x = x;
        this.y = y;
        this.p1 = false;
        this.p2 = false;
        this.clicked = false;
        this.redd = false;
    }
    show(){
        stroke(255);
        
        if(this.redd){
            fill(51);
        }else{
            fill(0);
        }
        rect(this.x*w, this.y*w, w, w);

        if(this.clicked){
            if(this.p1){
                noStroke();
                fill(0 , 255, 0);
                ellipse(this.x*w + w/2, this.y*w + w/2, w/1.5, w/1.5);
            }else if(this.p2){
                noStroke();
                fill(0 , 0, 255);
                ellipse(this.x*w + w/2, this.y*w + w/2, w/1.5, w/1.5);
            }
        }
    }

}
