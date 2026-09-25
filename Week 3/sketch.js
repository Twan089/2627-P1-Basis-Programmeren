

let TicTak = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],]
let button = ""
function setup() {
  createCanvas(800, 600);

}



function reset() {
  TicTak = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],]

  winner = 0;
  console.log(TicTak);
  winnerFlag = 400;
  winnerFlag2 = 400;
}


let PlayerStatus = "Player 1"
let winnerText
let winner = 0
let winnerFlag = 400
let winnerFlag2 = 400



function changeTurn() {
  if (PlayerStatus == "Player 1") {
    PlayerStatus = "Player 2"
    return
  }

  if (PlayerStatus == "Player 2") {
    PlayerStatus = "Player 1"
    return
  }
}



function mouseClicked() {

  console.log("mousePressed")


  if (winner == 0) {

    if (mouseX > 250 && mouseX < 350 && mouseY > 100 && mouseY < 200 && TicTak[0][0] == 0) {
      TicTak[0][0] = PlayerStatus;
      changeTurn();


    }

    else if (mouseX > 250 && mouseX < 350 && mouseY > 210 && mouseY < 310 && TicTak[1][0] == 0) {
      TicTak[1][0] = PlayerStatus;
      changeTurn();




    }
    else if (mouseX > 250 && mouseX < 350 && mouseY > 320 && mouseY < 420 && TicTak[2][0] == 0) {

      TicTak[2][0] = PlayerStatus;
      changeTurn();



    }


    else if (mouseX > 360 && mouseX < 460 && mouseY > 100 && mouseY < 200 && TicTak[0][1] == 0) {
      TicTak[0][1] = PlayerStatus;
      changeTurn();


    }

    else if (mouseX > 360 && mouseX < 460 && mouseY > 210 && mouseY < 310 && TicTak[1][1] == 0) {
      TicTak[1][1] = PlayerStatus;
      changeTurn();

    }

    else if (mouseX > 360 && mouseX < 460 && mouseY > 320 && mouseY < 420 && TicTak[2][1] == 0) {
      TicTak[2][1] = PlayerStatus;
      changeTurn();

    }

    else if (mouseX > 470 && mouseX < 570 && mouseY > 100 && mouseY < 200 && TicTak[0][2] == 0) {

      TicTak[0][2] = PlayerStatus;
      changeTurn();


    }

    else if (mouseX > 470 && mouseX < 570 && mouseY > 210 && mouseY < 310 && TicTak[1][2] == 0) {

      TicTak[1][2] = PlayerStatus;
      changeTurn();
    }

    else if (mouseX > 470 && mouseX < 570 && mouseY > 320 && mouseY < 420 && TicTak[2][2] == 0) {

      TicTak[2][2] = PlayerStatus;
      changeTurn();
    }
  }


  if (mouseX > 305 && mouseX < 510 && mouseY > 450 && mouseY < 520) {
    reset()
  }


}


function draw() {



  background("#97e5e4");

  fill("#bc6c25")
  rect(140, 190, 15, 140)


  if (winner != 0) {
    if (winner == "Player 1") {
      fill("blue")

      if (winnerFlag > 195) {
        winnerFlag = winnerFlag - 3
      }
      // if(winnerFlag < 195){
      //   winnerFlag = winnerFlag + 3
      // }

      rect(80, winnerFlag, 60, 40)
    }

    else if (winner == "Player 2") {
      fill("red")
      if (winnerFlag2 > 195) {
        winnerFlag2 = winnerFlag2 - 3
      }
      rect(80, winnerFlag2, 60, 40)

    }


  }





  fill("#fffeae")
  circle(150, 670, 700)
  circle(500, 670, 900)

  fill("#f1f0a3")
  circle(160, 330, 30)
  circle(145, 330, 30)
  circle(130, 330, 30)

  let colors = ["#dda15e", "#3860ff", "#ef1b1b"]

  fill("#bc6c25")
  square(235, 88, 350, 20)




  let Yp = 100

  for (let y = 0; y < TicTak.length; y++) {
    let Xp = 250
    console.log("test")
    for (let x = 0; x < TicTak[y].length; x++) {
      strokeWeight(0)
      if (TicTak[y][x] == "Player 1") {
        fill(colors[1]);
      }
      else if (TicTak[y][x] == "Player 2") {
        fill(colors[2]);
      }
      else {
        fill(colors[0]);
      }

      rect(Xp, Yp, 100, 100, 10)

      Xp = Xp + 110
    }

    Yp = Yp + 110
  }

  strokeWeight(0)
  fill("#bc6c25")
  rect(300, 450, 220, 70, 40)
  fill("#dda15e")
  rect(305, 455, 210, 60, 40)
  textSize(50)
  fill("#bc6c25")
  text("RESET", 330, 500)


  //mouse



  fill("#bc6c25")
  rect(30, 20, 150, 50, 25)

  fill("#dda15e")
  rect(35, 25, 140, 40, 20)

  if (PlayerStatus == "Player 1") {
    fill("blue")
    strokeWeight(2)
    circle(55, 45, 30)

    textSize(25)
    text("Player 1", 75, 53)
  }

  if (PlayerStatus == "Player 2") {
    fill("red")
    strokeWeight(2)
    circle(55, 45, 30)

    textSize(25)
    text("Player 2", 75, 53)
  }



  strokeWeight(0)
  if (mouseX < 350 && mouseX > 250) {

    fill(110, 53, 17, 70)
    rect(250, 0, 100, 600)
  }

  else if (mouseX < 460 && mouseX > 360) {
    fill(110, 53, 17, 70)
    rect(360, 0, 100, 600)

  }

  else if (mouseX < 570 && mouseX > 470) {

    fill(110, 53, 17, 70)
    rect(470, 0, 100, 600)
  }



  if (mouseY < 200 && mouseY > 100) {

    fill(110, 53, 17, 70)
    rect(0, 100, 800, 100)
  }

  else if (mouseY < 310 && mouseY > 210) {

    fill(110, 53, 17, 70)
    rect(0, 210, 800, 100)
  }

  else if (mouseY < 420 && mouseY > 320) {

    fill(110, 53, 17, 70)
    rect(0, 320, 800, 100)

  }

  checkWinner();


  if (winner != 0) {
    textSize(80)
    fill("#614627")
    text("Winner:" + winner, 150, 300)


  }

  



  if (winner && button == null) {
    // button = createButton("reset")
    button.mouseClicked(reset)

  }







}

function checkWinner() {


  //horizontal
  if (TicTak[1][0] == TicTak[1][1] && TicTak[1][2] == TicTak[1][0] && TicTak[1][0] != 0) {
    winner = TicTak[1][0]
  }

  if (TicTak[0][0] == TicTak[0][1] && TicTak[0][2] == TicTak[0][0] && TicTak[0][0] != 0) {
    winner = TicTak[0][0]
  }

  if (TicTak[2][0] == TicTak[2][1] && TicTak[2][2] == TicTak[2][0] && TicTak[2][0] != 0) {
    winner = TicTak[2][0]
  }
  //vertical

  if (TicTak[0][0] == TicTak[1][0] && TicTak[2][0] == TicTak[0][0] && TicTak[0][0] != 0) {
    winner = TicTak[0][0]
  }

  if (TicTak[0][1] == TicTak[1][1] && TicTak[2][1] == TicTak[0][1] && TicTak[0][1] != 0) {
    winner = TicTak[0][1]
  }


  if (TicTak[0][2] == TicTak[1][2] && TicTak[2][2] == TicTak[0][2] && TicTak[0][2] != 0) {
    winner = TicTak[0][2]
  }

  //Sideways

  if (TicTak[0][0] == TicTak[1][1] && TicTak[2][2] == TicTak[0][0] && TicTak[0][0] != 0) {
    winner = TicTak[0][0]
  }


  if (TicTak[2][0] == TicTak[1][1] && TicTak[0][2] == TicTak[2][0] && TicTak[2][0] != 0) {
    winner = TicTak[2][0]
  }




}






