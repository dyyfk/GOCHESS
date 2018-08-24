var canvas = document.querySelector('.chessBoard');

canvas.width = 670;
canvas.height = 670;
var c = canvas.getContext('2d');


drawChessBoard();
drawStar();
function drawChessBoard(){
    //draw the outline
        c.beginPath();
        c.moveTo(20,20);
        c.lineTo(20,650);

        c.lineTo(650,650);
        c.lineTo(650,20);
        c.lineTo(20,20);
    //draw the inline
    for(var i = 1; i<18; i++){
        c.moveTo(20+35*i,20);
        c.lineTo(20+35*i,650);
    }   
    for(var i = 1; i<18; i++){
        c.moveTo(20,20+35*i);
        c.lineTo(650,20+35*i);
    }
}


function Point(x,y){
    this.x = x;
    this.y = y;
}

function Chess(x,y){
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.draw = function(){
        c.clearRect(0,0,canvas.width,canvas.height);
        drawChessBoard();
        drawStar();
        c.beginPath();

        c.arc(this.x, this.y,this.radius,Math.PI*2,false);
        c.stroke();
        
        
    };
    this.update = function(mouse){
        for(var i =0;i<pointArr.length;i++){
            if(mouse.x - pointArr[i].x < 17.5 && mouse.x - pointArr[i].x > -17.5 &&
               mouse.y - pointArr[i].y < 17.5 && mouse.y - pointArr[i].y > -17.5){
                this.x = pointArr[i].x; 
                this.y = pointArr[i].y;
                
               }
        }
    }
}

var pointArr = [];
for(var i=0;i<19;i++){
    for(var j=0;j<19;j++){
        var point = new Point(20+35*i,20+35*j);
        pointArr.push(point);
    }
}
//draw the dot 
function drawStar(){
    
    c.fillRect(20+35*3-3,20+35*3-3,6,6); 
    c.fillRect(20+35*3-3,20+35*9-3,6,6);
    c.fillRect(20+35*3-3,20+35*15-3,6,6);
    c.fillRect(20+35*9-3,20+35*3-3,6,6);
    c.fillRect(20+35*9-3,20+35*9-3,6,6);
    c.fillRect(20+35*9-3,20+35*15-3,6,6);
    c.fillRect(20+35*15-3,20+35*3-3,6,6);
    c.fillRect(20+35*15-3,20+35*9-3,6,6);
    c.fillRect(20+35*15-3,20+35*15-3,6,6);
    
    c.stroke();
};

var mouse = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    var chess = new Chess();
    chess.update(mouse);
    chess.draw();

});



(function animate(){
   

    requestAnimationFrame(animate);
})();
