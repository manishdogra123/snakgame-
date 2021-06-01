//game constant & variable
let inputDir = {x:0,y:0};
const foodsound = new Audio("foodsound.mp3");
const gameoversound = new Audio("gameoversound.mp3");
const movesound = new Audio("movesoundd.mp3");


const musicsound = new Audio("gamesound.mp3");
let speed = 4;    //fpc
let lastPaintTime = 0;
let snakeArr =[
    {x: 13, y: 15} //snake head display with the randor
];
let food = {x: 8, y: 10} //food koi array nhi hai yeah ek object hai snake ka
let score = 0;

//game function
 function main(ctime){
     window.requestAnimationFrame(main);
    //  console.log(ctime);
     if((ctime - lastPaintTime)/1000 < 1/speed){
         return;
     }
     lastPaintTime = ctime;
     
     gameEngine();

 }
 function snakCollide(snake){
     //jub snak dhiwar or kudh se takrayega
     for (let i = 1; i < snakeArr.length; i++) {
         if(snake[i].x==snake[0].x && snake[i].y==snake[0].y){
             return true;
           }
        }
         //x or y 0 se chota or 18 se bada nhi hona chahiye
         if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
             return true;

         }
         return 
         
    }
 


function gameEngine(){
    //part 1: update the snake & array
    if(snakCollide(snakeArr)){ //ager snake die hota hai to 
        gameoversound.play(); //gameovermusic
        musicsound.pause(); //musicsound band
        inputDir = {x: 0,y: 0}; //or dir 0,0 ho jaye
        alert("Game Over!"); //alert game is over

        snakeArr = [{x: 13, y:15}]; //ager user again koi key presh karta hai to snake usi dir me ho jaye 
        musicsound.play(); //or music sound play ho jaye
        score = 0;
        document.setitem(score);

    }
     //if the snake eaten food ,increment the score and regenrate the food
     if(snakeArr[0].y == food.y && snakeArr[0].x == food.x){
         foodsound.play();
         score +=5;
         scorebox.innerHTML="score:" +score;
         snakeArr.unshift({x: snakeArr[0].x + inputDir.x,y: snakeArr[0].y + inputDir.y}); //unshift element add krega
         let a =2;
         let b=16;
         food ={x: Math.round(a+(b-a)* Math.random()) ,y: Math.round(a+(b-a)* Math.random())}
     }

    //moving the snake  
    for (let i = snakeArr.length -2; i>=0; i--){  //that means ulta array chlana hai
        snakeArr[i+1] = {...snakeArr[i]}; // destructuring lga ke new object brabar karna hoga
    }

    snakeArr[0].x += inputDir.x; //jub last index hoga usko add kiya
    snakeArr[0].y += inputDir.y;





    //part2:  display the snake and food

    // display the snake
    board.innerHTML = ""; //board ko khali ker liya iske under kuch na ho display jub krngye 

    snakeArr.forEach((e,index) =>{ 
        //snake arr ek foreach loop lega jo arrow function me element lega x,y or dusra index hai
        snakElement = document.createElement('div'); //nya element bnaya div naam ka 
        snakElement.style.gridRowStart = e.y; //div ke liye css add possition
        snakElement.style.gridColumnStart = e.x;
        if(index === 0){ //ager snake class 0 hai to head to b add kr do
            snakElement.classList.add('head');
        }
        else{

            snakElement.classList.add('snake'); //has maine food class ko add ker liya
        }

        board.appendChild(snakElement); //snake head ko add ker liye as se location or display

    })
    // display the food
        foodElement = document.createElement('div'); //nya element bnaya div naam ka 
        foodElement.style.gridRowStart = food.y; //div ke liye css add possition
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food'); //has maine food class ko add ker liya
        board.appendChild(foodElement); //snake food ko add ker liye as se location or display


     
}

 



//main logic start here...
window.requestAnimationFrame(main);  //eventlistener uska pehla event hoga dusra hoga arrow func.
window.addEventListener('keydown',e=>{  //any one keydown in keyboard function fire hoga
    inputDir = {x: 0, y: 1} //start the game has position
    movesound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x= 0;
            inputDir.y= 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x= -1;
            inputDir.y= 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x= 1;
            inputDir.y= 0;
            break; 
        default:
            break;    
    }

});






