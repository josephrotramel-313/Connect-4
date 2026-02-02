const col1 = document.querySelector(".column1")
const col2 = document.querySelector(".column2")
const col3 = document.querySelector(".column3")
const col4 = document.querySelector(".column4")
const col5 = document.querySelector(".column5")
const col6 = document.querySelector(".column6")
const col7 = document.querySelector(".column7")
const span = document.querySelector(".playerTurnSpan")
const token = document.querySelector(".playerTurnToken")
let player1wins = 0
let player2wins = 0

let col1rot = 6
let col2rot = 6
let col3rot = 6
let col4rot = 6
let col5rot = 6
let col6rot = 6
let col7rot = 6
let playerRot = "red"


let board = [[0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0]]
          


document.querySelector(".btn").addEventListener('click', () => {
  document.querySelector(".winBanner").style.display = "none" 
  board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0]]
  for (let i = 1; i < 8; i++) {
    for (let j = 1; j < 7; j++) {
      document.querySelector(".l" + i + j).style.backgroundColor = "gray"
      
    }
  }
  col1rot = 6
  col2rot = 6
  col3rot = 6
  col4rot = 6
  col5rot = 6
  col6rot = 6
  col7rot = 6
  
  
})


document.querySelector(".column1").addEventListener('mouseover', () => {
  document.querySelector(".col1top").style.display = "block"
})

document.querySelector(".column1").addEventListener('mouseout', () => {
  document.querySelector(".col1top").style.display = "none"
})

document.querySelector(".column2").addEventListener('mouseover', () => {
  document.querySelector(".col2top").style.display = "block"
})

document.querySelector(".column2").addEventListener('mouseout', () => {
  document.querySelector(".col2top").style.display = "none"
})

document.querySelector(".column3").addEventListener('mouseover', () => {
  document.querySelector(".col3top").style.display = "block"
})

document.querySelector(".column3").addEventListener('mouseout', () => {
  document.querySelector(".col3top").style.display = "none"
})

document.querySelector(".column4").addEventListener('mouseover', () => {
  document.querySelector(".col4top").style.display = "block"
})

document.querySelector(".column4").addEventListener('mouseout', () => {
  document.querySelector(".col4top").style.display = "none"
})

document.querySelector(".column5").addEventListener('mouseover', () => {
 document.querySelector(".col5top").style.display = "block"
})

document.querySelector(".column5").addEventListener('mouseout', () => {
  document.querySelector(".col5top").style.display = "none"
})

document.querySelector(".column6").addEventListener('mouseover', () => {
  document.querySelector(".col6top").style.display = "block"
})

document.querySelector(".column6").addEventListener('mouseout', () => {
  document.querySelector(".col6top").style.display = "none"
})

document.querySelector(".column7").addEventListener('mouseover', () => {
  document.querySelector(".col7top").style.display = "block"
})

document.querySelector(".column7").addEventListener('mouseout', () => {
  document.querySelector(".col7top").style.display = "none"
})



            
function win(winner){
  setTimeout(function() {
  document.querySelector(".winBanner").style.display = "block" 
  document.querySelector(".winner").textContent = winner}, 100);
  
  if (winner == "RED WINS!"){
    player1wins++
    document.querySelector(".player1wins").textContent = player1wins
  } else if (winner = "YELLOW WINS!") {
    player2wins++
    document.querySelector(".player2wins").textContent = player2wins
  }
}


function check(){
  function checkH(){
    let run1 = 0; let run2 = 0
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (run1 == 4){
          win("RED WINS!")
          return
        } else if (run2 == 4){
          win("YELLOW WINS!")
          return
        } else if (board[i][j] == 0){
          run1 = 0
          run2 = 0
        } else if (board[i][j] == 1){
          run1+=1
          run2=0
          continue
        } else if (board[i][j] == 2){
          run1=0
          run2+=1
          continue
        }}}

    if (run1 == 4){
     win("RED WINS!")
    }
    if (run2 == 4){
      return win("YELLOW WINS!")
    }
  }
  function checkV(){
    let run1 = 0; let run2 = 0
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (run1 == 4){
          return win("RED WINS!")
        } 
        if (run2 == 4){
          return win("YELLOW WINS!")
        } 
        else if (board[j][i] == 0){
          run1 = 0
          run2 = 0
        } 
        else if (board[j][i] == 1){
          run1+=1
          run2=0
          continue
        } 
        else if (board[j][i] == 2){
          run1=0
          run2+=1
          continue
        }}}
    if (run2 == 4){
      return win("YELLOW WINS!") }
    else if (run1 == 4){
      return win("RED WINS!")
    } 
  }
  function checkd1(){
    let run1 = 0; run2 = 0
    numsi = [2,1,0,0,0,0]; numsj = [0,0,0,1,2,3]; numsk = [3,4,5,5,4,3]
    for (let i = 0, j = 0; i <= 5; i++, j++) {
      if (run1 == 4){
        return win("RED WINS!")
      }
      else if (run2 == 4){
        return win("YELLOW WINS!")
      }
      else if (board[numsi[i]][numsj[j]] == 1){
        run1++
        run2 = 0
      }
      else if (board[numsi[i]][numsj[j]] == 2){
        run2++
        run1 = 0
      }
      else if (board[numsi[i]][numsj[j]] == 0) {
        run1 = 0
        run2 = 0
        }
      for (let k = 0; k <= numsk[i] - 1; k++){
        if (run1 == 4){
          return win("RED WINS!")
        }
        else if (run2 == 4){
          return win("YELLOW WINS!")
        }
        else if (board[numsi[i]+k+1][numsj[j]+k+1] == 1){
        run1++
        run2 = 0
        }
        else if (board[numsi[i]+k+1][numsj[j]+k+1] == 2){
          run2++
          run1 = 0
        }
        else if(board[numsi[i]+k+1][numsj[j]+k+1] == 0){
          run1 = 0
          run2 = 0
        }}}
    if (run1 == 4){
      return win("RED WINS!")
    }
    else if (run2 == 4){
      return win("YELLOW WINS!")
    }
  }
  function checkd2(){
    let run1 = 0; run2 = 0
    numsi = [2,1,0,0,0,0]
    numsj = [6,6,6,5,4,3]
    numsk = [3,4,5,5,4,3]
    for (let i = 0, j = 0; i <= 5; i++, j++) {
      if (run1 == 4){
        return win("RED WINS!")
      }
      else if (run2 == 4){
       return win("YELLOW WINS!")
      }
      else if (board[numsi[i]][numsj[j]] == 1){
        run1++
        run2 = 0
      }
      else if (board[numsi[i]][numsj[j]] == 2){
        run2++
        run1 = 0
      }
      else if (board[numsi[i]][numsj[j]] == 0) {
        run1 = 0
        run2 = 0
        }
      for (let k = 0; k <= numsk[i] - 1; k++){
        if (run1 == 4){
          return win("RED WINS!")
        }
        else if (run2 == 4){
          return win("YELLOW WINS!")
        }
        else if (board[numsi[i]+k+1][numsj[j]-k-1] == 1){
          run1++
        run2 = 0
        }
        else if (board[numsi[i]+k+1][numsj[j]-k-1] == 2){
          run2++
          run1 = 0
        }
        else if(board[numsi[i]+k+1][numsj[j]-k-1] == 0){
          run1 = 0
          run2 = 0
        }
  }}
    if (run1 == 4){
      return win("RED WINS!")
    }
    else if (run2 == 4){
      return win("YELLOW WINS!")
    }
  }
  
  checkH()
  checkV()
  checkd1()
  checkd2()
      
}






function place(n1,n2){
  document.querySelector(".l" + n1 + n2).style.backgroundColor = playerRot
}
function playerSwitch(){
  if (playerRot === "red") { 
    playerRot = "yellow"
    span.textContent = "Player 2" 
    span.style.color = "yellow"
    token.style.backgroundColor = "yellow"
  }
  else if (playerRot === "yellow") {
    playerRot = "red"
    span.textContent = "Player 1"
    token.style.backgroundColor = "red"
    span.style.color = "red"
  }
}

col1.addEventListener('click', () => {
  playerRot === "red" ? board[col1rot - 1][0] = 1 : board[col1rot - 1][0] = 2
  place(1,col1rot)
  playerSwitch()
  col1rot -= 1
  check()
})

col2.addEventListener('click', () => {
  playerRot === "red" ? board[col2rot - 1][1] = 1 : board[col2rot - 1][1] = 2
  place(2,col2rot)
  playerSwitch()
  col2rot-=1
  check()
})

col3.addEventListener('click', () => {
  playerRot === "red" ? board[col3rot - 1][2] = 1 : board[col3rot - 1][2] = 2
  place(3,col3rot)
  playerSwitch()
  col3rot-=1
  check()
})

col4.addEventListener('click', () => {
  playerRot === "red" ? board[col4rot - 1][3] = 1 : board[col4rot - 1][3] = 2
  place(4,col4rot)
  playerSwitch()
  col4rot-=1
  check()
})

col5.addEventListener('click', () => {
  playerRot === "red" ? board[col5rot - 1][4] = 1 : board[col5rot - 1][4] = 2
  place(5,col5rot)
  playerSwitch()
  col5rot-=1
  check()
})

col6.addEventListener('click', () => {
  playerRot === "red" ? board[col6rot - 1][5] = 1 : board[col6rot - 1][5] = 2
  place(6,col6rot)
  playerSwitch()
  col6rot-=1
  check()
})

col7.addEventListener('click', () => {
  playerRot === "red" ? board[col7rot - 1][6] = 1 : board[col7rot - 1][6] = 2
  place(7,col7rot)
  playerSwitch()
  col7rot-=1
  check()
})