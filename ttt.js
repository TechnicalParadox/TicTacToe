var playerX = true; // if false, player O
var started = false;
var startShowing = true;

function start()
{
  started = true;

  toggleStartButton();

  if (playerX)
  {
    document.getElementById("turn").innerHTML = "X's Turn";
  }
  else
    document.getElementById("turn").innerHTML = "O's Turn";
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
