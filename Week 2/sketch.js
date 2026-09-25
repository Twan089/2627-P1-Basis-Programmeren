let leaves = 108
let leaves1 = 109
let maan = 800
let zon = 0
let cloud = 0
let cloud1 = 0

let xCar1 = -100;
let xCar = -200
let timer = 0
let statusStoplicht = "groen";
let YellowSpeed = 2
let RedSpeed = 4
let StopX = 425
let StopX1 = 405
let GreenSpeed = 6
let strip = 0



function keyPressed() {
  // code to run


  if (key == "Enter") {
    console.log("key is pressed");
    if (statusStoplicht == "groen") {
      statusStoplicht = "oranje";
      return;
    }

    if (statusStoplicht == "oranje") {
      statusStoplicht = "rood"
      return;
    }

    if (statusStoplicht == "rood") {
      statusStoplicht = "groen"
      return;
    }

  }




}

function setup() {
  createCanvas(800, 600);


}



function draw() {
  background("#fd984f");

  if (zon > 70 && zon < 730) {
    background("#98d5e2");
  }

  if (maan > 0 && maan < 70) {
    background("#344e55");
  }

  if (maan > 50 && maan < 750) {
    background("#1c2a2e");
  }


  //background

  fill("#2d692e")
  circle(-50, 500, 400)

  fill("#408b41")
  circle(-50, 500, 390)

  fill("#2d692e")
  circle(700, 500, 400)

  fill("#489f49")
  circle(700, 500, 390)
  fill("#2d692e")
  circle(780, 500, 200)
  fill("#348036")
  circle(780, 500, 190)






  fill("#7a838a")
  rect(0, 500, 800, 100)

  triangle(400, 150, 700, 475, 100, 475)
  triangle(200, 250, 400, 475, 25, 475)

  fill("white")
  rect(strip, 530, 60, 10)
  rect(strip + 90, 530, 60, 10)
  rect(strip + 180, 530, 60, 10)
  rect(strip + 270, 530, 60, 10)
  rect(strip + 360, 530, 60, 10)
  rect(strip + 450, 530, 60, 10)
  rect(strip + 540, 530, 60, 10)
  rect(strip + 630, 530, 60, 10)
  rect(strip + 720, 530, 60, 10)

  strokeWeight(0)
  fill("#50b552")
  rect(0, 475, 800, 25)
  rect(0, 580, 800, 25)



  fill("white")
  triangle(295, 260, 505, 260, 400, 140)

  fill("white")
  rect(550, 500, 20, 80)

  fill("brown")
  rect(100, 395, 25, 100)
  rect(200, 395, 25, 100)
  rect(300, 395, 25, 100)
  rect(400, 395, 25, 100)
  rect(500, 395, 25, 100)




  //zon
  fill(251, 255, 0, 100)
  circle(zon, 100, 90)
  fill("orange")
  circle(zon, 100, 70)
  fill("yellow")
  circle(zon, 100, 60)


  zon = zon + 1

  if (zon > 1400) {
    zon = -300
  }

  //maan
  fill(250, 250, 245, 100)
  circle(maan, 100, 80)
  fill(207, 207, 192)
  circle(maan, 100, 60)



  maan = maan + 1

  if (maan > 1400) {
    maan = -300
  }

  //clouds
  cloud1 = cloud1 - 2
  cloud = cloud - 1.4

  fill("#acaeaf")
  circle(cloud + 100, 160, 50)
  circle(cloud + 140, 150, 70)
  circle(cloud + 180, 160, 50)

  circle(cloud1 + 300, 120, 50)
  circle(cloud1 + 340, 110, 70)
  circle(cloud1 + 380, 120, 50)

  circle(cloud + 500, 140, 50)
  circle(cloud + 540, 130, 70)
  circle(cloud + 580, 140, 50)

  fill("#d9dadc")
  circle(cloud + 500, 140, 45)
  circle(cloud + 540, 130, 65)
  circle(cloud + 580, 140, 45)

  circle(cloud1 + 300, 120, 45)
  circle(cloud1 + 340, 110, 65)
  circle(cloud1 + 380, 120, 45)

  circle(cloud + 100, 160, 45)
  circle(cloud + 140, 150, 65)
  circle(cloud + 180, 160, 45)

  fill("#edeff1")
  circle(cloud + 500, 140, 40)
  circle(cloud + 540, 130, 60)
  circle(cloud + 580, 140, 40)

  circle(cloud1 + 300, 120, 40)
  circle(cloud1 + 340, 110, 60)
  circle(cloud1 + 380, 120, 40)

  circle(cloud + 100, 160, 40)
  circle(cloud + 140, 150, 60)
  circle(cloud + 180, 160, 40)

  if (cloud < -900 && cloud1 < -900) {
    cloud = 1000
    cloud1 = 600
  }

  //stop light

  strokeWeight(1)

  fill("#979897")
  rect(560, 430, 10, 60)
  rect(550, 350, 30, 100)



  fill("#37393a")
  circle(565, 370, 20)
  circle(565, 400, 20)
  circle(565, 430, 20)





  if (statusStoplicht == "rood") {
    fill("#f12222")
    circle(565, 370, 20)

  }
  if (statusStoplicht == "oranje") {
    fill("#fda204")
    circle(565, 400, 20)
  }


  if (statusStoplicht == "groen") {
    fill("#50b552")
    circle(565, 430, 20)

  }

  //car


  fill("red")
  rect(xCar1, 470, 100, 30)
  rect(xCar1, 450, 70, 50)
  fill("#4495a1")
  rect(xCar1 + 5, 452, 60, 20)
  fill("#37393a")
  circle(xCar1 + 20, 500, 30)
  circle(xCar1 + 80, 500, 30)
  fill("#b0b4b5")
  circle(xCar1 + 20, 500, 15)
  circle(xCar1 + 80, 500, 15)


  fill("green")
  rect(xCar, 530, 100, 30)
  fill("#37393a")
  circle(xCar + 20, 560, 30)
  circle(xCar + 80, 560, 30)
  fill("#b0b4b5")
  circle(xCar + 20, 560, 15)
  circle(xCar + 80, 560, 15)
  fill("#4495a1")
  rect(xCar + 5, 510, 60, 20)
  fill("#37393a")
  rect(xCar - 8, 530, 10, 20)

  //tree
  strokeWeight(0)
  fill("brown")
  rect(230, 500, 25, 95)
  fill("#357736")
  circle(leaves, 380, 70)
  circle(leaves + 100, 380, 70)
  circle(leaves + 200, 380, 70)
  circle(leaves + 300, 380, 70)
  circle(leaves + 400, 380, 70)
  circle(leaves + 130, 490, 70)

  fill("#408a42")
  circle(leaves1 + 9, 380, 65)
  circle(leaves1 + 109, 380, 65)
  circle(leaves1 + 209, 380, 65)
  circle(leaves1 + 309, 380, 65)
  circle(leaves1 + 409, 380, 65)
  circle(leaves1 + 139, 490, 65)

  fill("#45a047")
  circle(leaves - 15, 387, 50)
  circle(leaves + 90, 387, 50)
  circle(leaves + 185, 387, 50)
  circle(leaves + 285, 387, 50)
  circle(leaves + 385, 387, 50)
  circle(leaves + 115, 497, 50)

  fill("#3dad3f")
  circle(leaves1 + 14, 390, 40)
  circle(leaves1 + 114, 390, 40)
  circle(leaves1 + 214, 390, 40)
  circle(leaves1 + 314, 390, 40)
  circle(leaves1 + 414, 390, 40)
  circle(leaves1 + 145, 500, 40)


  leaves1 = leaves1 + 0.1
  leaves = leaves + 0.09

  if (leaves1 > 115) {
    leaves1 = 109
    return
  }

  if (leaves > 115) {
    leaves = 108
  }



  //timer
  timer = timer + 1
  textSize(20)
  fill("black")
  text("statusStoplicht" + statusStoplicht, 50, 80)

  text("Timer:" + timer, 50, 50)




  if (timer > 800) {
    timer = 0

  }


  if (xCar1 > 800) {
    xCar1 = -100

  }
  if (xCar > 800) {
    xCar = -200
  }

  //car stop

  if (statusStoplicht == "oranje" && xCar1 <= 425) {
    xCar1 = xCar1 + YellowSpeed
  }


  if (statusStoplicht == "rood") {
    if (xCar1 > StopX1 && xCar1 < 425) {

    }
    else {
      xCar1 = xCar1 + RedSpeed
    }
  }

  if (statusStoplicht == "groen" || xCar1 > 425) {
    xCar1 = xCar1 + GreenSpeed
  }

  if (statusStoplicht == "oranje" && xCar <= 500) {
    xCar = xCar + YellowSpeed
  }


  if (statusStoplicht == "rood") {
    if (xCar > StopX && xCar < 500) {

    }
    else {
      xCar = xCar + RedSpeed
    }
  }

  if (statusStoplicht == "groen" || xCar > 500) {
    xCar = xCar + GreenSpeed
  }

}

// if(statusStoplicht == "rood" && xCar1 > StopX && xCar1 < 500 ){
//   xCar1 = xCar1 - CarStop


