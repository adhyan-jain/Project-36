class Food {
    constructor(){

        this.foodStock = 20;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
        this.visiblity = 255;

        database = firebase.database();
    }

     updateFoodStock(food){
        this.foodStock = food;
        database.ref("/").update({Food: food});
    }

    updateLastFed(){

      fill("white");
      textSize(15);
    
        if(lastFed>=12){
    
         text("Last Fed : "+ lastFed%12 + " PM", 350,30);
        }
        
        else if(lastFed==0){

          text("Last Fed : 12 AM",350,30);
        }

        else{

           text("Last Fed : "+ lastFed + " AM", 350,30);
        }
    }

    display(x,y){

        x = 80;
        y = 100;

     imageMode(CENTER);
     
     this.Visiblity = this.Visiblity - 1;

        if(this.foodStock != 0){

            for(var i = 0; i < this.foodStock; i++){

               if(i % 10 === 0){
                  x = 80;
                  y += 50;
                }
            
               image(this.image, x, y, 50, 50);
               x += 30;
            }
        }
    }
}