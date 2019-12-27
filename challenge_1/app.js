
const nodeList = document.querySelectorAll('.col');
console.log(nodeList)
var counter = 0;
var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var winner =''
var playerOneWins = 0
var playerTwoWins = 0

//////////// Check the winner //////////////////////

function checkWinner() {
  for(var i = 0 ; i < win.length ; i++) {
    if(win[i][0] === 'X' && win[i][1] === 'X' && win[i][2] === 'X'){
      playerOneWins++
      winner ='player one wins '+ playerOneWins +' time'
      console.log(winner)
    }
    if(win[i][0] === 'O' && win[i][1] === 'O' && win[i][2] === 'O'){
      playerTwoWins++
      winner ='player two wins '+ playerTwoWins +' time'
      console.log(winner)
    }

}
}

////////////////// game function //////////////////////

function game() {

    nodeList.forEach(element => element.addEventListener("click", function(event){
      if(event.target.innerText ==='' && counter % 2 === 0) {
        event.target.innerText='X'
        counter++
        for(var i = 0 ; i < win.length ; i++) {
          for(var j = 0 ; j < win[i].length; j++) {
            if(win[i][j] === parseInt(event.target.id)){
              win[i][j] = 'X'
            }
          }
        }
        checkWinner()
      }
      if(event.target.innerText ==='' && counter % 2 !== 0) {
        event.target.innerText='O'
        counter++
        for(var i = 0 ; i < win.length ; i++) {
          for(var j = 0 ; j < win[i].length; j++) {
            if(win[i][j] === parseInt(event.target.id)){
              win[i][j] = 'O'
            }
          }
        }
        checkWinner()
          }
         }))
   }


//////////////////// play again /////////////////////////////


   function playAgain() {
     counter = 0 ;
     win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
     nodeList.forEach(element => {
       element.innerText =''
      //  console.log(element.innerText)
      })
      console.log(win)
   }



////////////////////////// starting //////////////////////////

game()

