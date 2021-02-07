class block {
    constructor(x,y,width,height){
     
        var options={
            isStatic: false
          }
          this.width=width;
          this.height=height;
          
          this.body = Bodies.rectangle(x,y,this.width,this.height,options);
          this.visibility=255; 
          World.add(world, this.body)
    }
    display(){
       
        if(this.body.speed<5){
            var pos=this.body.position
            push(); 
            rectMode(CENTER);
            fill ("pink");
            
            rect(pos.x,pos.y,this.width,this.height);
            pop() ;  

           }
    
           else{
             World.remove(world,this.body)  
            this.visibility = 0.
           }


    }
}





