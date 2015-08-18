var playerX = true; // if false, player O
var started = false;
var allowMoves = true;
var startShowing = true;
var cellEmpty = [true, true, true, true, true, true, true, true, true];
var xCells = [false, false, false, false, false, false, false, false, false];
var oCells = [false, false, false, false, false, false, false, false, false];
var noMoves = false;

/* Cell Grid
  0 1 2
  3 4 5
  6 7 8
*/
function start()
{
  started = true;

  toggleStartButton();
  setTurn();
}

function placeMark(n, id)
{
  if (started && allowMoves)
  {
    if (cellEmpty[id])
    {
      cellEmpty[id] = false;
      if (playerX)
      {
        document.getElementById(n).innerHTML = "X";
        xCells[id] = true;
      }
      else
      {
        document.getElementById(n).innerHTML = "O";
        oCells[id] = true;
      }

      playerX = !playerX;
      setTurn();
    }
    else
    {
      alert("Error!\nPlease choose an empty cell.");
    }
  }

  update();
}

function update()
{
  if (!cellEmpty[0] && !cellEmpty[1] && !cellEmpty[2] && !cellEmpty[3] && !cellEmpty[4] && !cellEmpty[5] && !cellEmpty[6] && !cellEmpty[7] && !cellEmpty[8])
    noMoves = true;
  if (noMoves)
  {
    document.getElementById("restartButton").innerHTML = "New Game";
    document.getElementById("turn").innerHTML = "Tie!";
  }
  if (checkForWin('X'))
  {
    allowMoves = false;
    document.getElementById("turn").innerHTML = "X Wins!";
  }
  if (checkForWin('O'))
  {
    allowMoves = false;
    document.getElementById("turn").innerHTML = "O Wins!";
  }
}

function checkForWin(x)
{
  var a;
  for (y = 0; y <= 6; y += 3) // Check each row for 3 in a row
  {
    a = 0;
    for (z = y; z <= y + 2; z++) // Navigate the row
    {
      if (x === 'X')
      {
        if (xCells[z])
          a++;
      }
      else if (x === 'O')
      {
        if (oCells[z])
          a++;
      }
      if (a === 3)
      {
        console.log("3 in a row (horizontal) starting at cell "+y);
        return true;
      }
    }
  }

  for (y = 0; y <= 2; y++) // Check each column for 3 in a row
  {
    a = 0;
    for(z = y; z <= y + 6; z += 3) // Navigate the column
    {
      if (x === 'X')
      {
        if (xCells[z])
          a++;
      }
      else if (x === 'O')
      {
        if (oCells[z])
          a++;
      }
      if (a === 3)
      {
        console.log("3 in a row (vertical) starting at cell "+y);
        return true;
      }
    }
  }

  // Check for diagonal 3 in a row
  if (x === 'X')
  {
    if (xCells[0] && xCells[4] && xCells[8])
    {
      console.log("3 in a row (diagonal) starting at cell 0");
      return true;
    }
    else if (xCells[2] && xCells[4] && xCells[6])
    {
      console.log("3 in a row (diagonal) starting at cell 2");
      return true;
    }
  }
  else if (x === 'O')
  {
    if (oCells[0] && oCells[4] && oCells[8])
    {
      console.log("3 in a row (diagonal) starting at cell 0");
      return true;
    }
    else if (oCells[2] && oCells[4] && oCells[6])
    {
      console.log("3 in a row (diagonal) starting at cell 2");
      return true;
    }
  }
}

function toggleStartButton()
{
  if (startShowing)
    document.getElementById("startbutton").style.visibility = "hidden";
  else
    document.getElementById("startbutton").style.visibility = "visible";
  startShowing = !startShowing;
}

function setTurn()
{
  if (playerX)
  {
    document.getElementById("turn").innerHTML = "X's Turn";
  }
  else
    document.getElementById("turn").innerHTML = "O's Turn";
}
