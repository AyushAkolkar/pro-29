function setup(){
    ground1 = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170)
}
function draw(){
   ground1.display();
}