/*-------------------------------- Constants --------------------------------*/
const id = "";
const Reset = document.querySelector("#Reset");
/*---------------------------- Variables (state) ----------------------------*/
let C = 0;
let tie = 0;
let winner = 0;
let clicked;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function Put(event) {
  let clicked = event.target.id;
  if (event.target.innerText === "" && winner == 0) {
    tie++;

    if (C % 2 === 0) {
      document.querySelector("#message").innerHTML = "Player 2 turn";
      event.target.innerText = "X";
    } else {
      document.querySelector("#message").innerHTML = "Player 1 turn";
      event.target.innerText = "O";
    }
    C++;

    //--------------------------------------------------------------------------------- MOdules condition

    if (
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[1].innerText &&
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[2].innerText &&
      document.querySelectorAll(".sqr")[2].innertext !== ""
    ) {
      if (document.querySelectorAll(".sqr")[0].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[0].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //--------------------------------------------------------------------------------------- First rwo
    if (
      document.querySelectorAll(".sqr")[3].innerText ===
        document.querySelectorAll(".sqr")[4].innerText &&
      document.querySelectorAll(".sqr")[3].innerText ===
        document.querySelectorAll(".sqr")[5].innerText &&
      document.querySelectorAll(".sqr")[3].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[3].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[3].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //-----------------------------------------------------------------------------------------Second row

    if (
      document.querySelectorAll(".sqr")[6].innerText ===
        document.querySelectorAll(".sqr")[7].innerText &&
      document.querySelectorAll(".sqr")[6].innerText ===
        document.querySelectorAll(".sqr")[8].innerText &&
      !document.querySelectorAll(".sqr")[6].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[6].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[6].innertext === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //------------------------------------------------------------------------------------thirs row

    if (
      document.querySelectorAll(".sqr")[3].innerText ===
        document.querySelectorAll(".sqr")[4].innerText &&
      document.querySelectorAll(".sqr")[3].innerText ===
        document.querySelectorAll(".sqr")[5].innerText &&
      !document.querySelectorAll(".sqr")[3].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[3].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[3].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //------------------------------------------------------------------------------------------first colomn
    if (
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[3].innerText &&
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[6].innerText &&
      !document.querySelectorAll(".sqr")[0].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[0].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[0].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //---------------------------------------------------------------------------------------Second colomn

    if (
      document.querySelectorAll(".sqr")[1].innerText ===
        document.querySelectorAll(".sqr")[4].innerText &&
      document.querySelectorAll(".sqr")[1].innerText ===
        document.querySelectorAll(".sqr")[7].innerText &&
      !document.querySelectorAll(".sqr")[1].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[1].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[1].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //-------------------------------------------------------------------------------------------third colomn

    if (
      document.querySelectorAll(".sqr")[2].innerText ===
        document.querySelectorAll(".sqr")[5].innerText &&
      document.querySelectorAll(".sqr")[2].innerText ===
        document.querySelectorAll(".sqr")[8].innerText &&
      !document.querySelectorAll(".sqr")[2].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[2].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[2].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //----------------------------------------------------------------------------------------- lift diognal

    if (
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[4].innerText &&
      document.querySelectorAll(".sqr")[0].innerText ===
        document.querySelectorAll(".sqr")[8].innerText &&
      !document.querySelectorAll(".sqr")[0].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[0].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[0].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }
    //----------------------------------------------------------------------------------------------------right diognal

    if (
      document.querySelectorAll(".sqr")[2].innerText ===
        document.querySelectorAll(".sqr")[4].innerText &&
      document.querySelectorAll(".sqr")[2].innerText ===
        document.querySelectorAll(".sqr")[6].innerText &&
      !document.querySelectorAll(".sqr")[2].innerText !== ""
    ) {
      if (document.querySelectorAll(".sqr")[2].innerText === "X") {
        document.querySelector("#message").innerHTML = "Player 1 won";
        winner++;
      }

      if (document.querySelectorAll(".sqr")[2].innerText === "O") {
        document.querySelector("#message").innerHTML = "Player 2 won";
        winner++;
      }
    }

    //----------------------------------------------------------------------------------------tie conditoin
    if (tie === 9 && winner === 0) {
      document.querySelector("#message").innerHTML = "Tie";
    }
  }
}

function reset() {
  for (let index = 0; index < 9; index++) {
    document.querySelectorAll(".sqr")[index].innerText = "";
    C = 0;
    tie = 0;
    winner = 0;
    document.querySelector("#message").innerHTML = "Click to start play with X";
  }
}
/*----------------------------- Event Listeners -----------------------------*/
for (let index = 0; index < 9; index++) {
  document.querySelectorAll(".sqr")[index].addEventListener("click", Put);
}
Reset.addEventListener("click", reset);
