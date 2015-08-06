var playerX = true; // if false, player O
var started = false;
var startShowing = true;

function start()
{
  started = true;

  toggleStartButton();
  setTurn();
}

function placeMark(x)
{
  if (started)
  {
    if (playerX)
      document.getElementById(x).innerHTML = "X";
    else
      document.getElementById(x).innerHTML = "O";

    playerX = !playerX;
    setTurn();
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
