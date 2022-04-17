flag = true;
point = 0;
die1S = "";

bet = document.getElementById("input-bet").value;
outputBet.innerHTML = inputBet;

bankBal = document.getElementById("bankBal").value;

function calculateScore(){

            document.getElementById("youW").style.display = "none";
            document.getElementById("youL").style.display = "none";
            document.getElementById("rA").style.display = "none";
            die1 = 1;
            die2=1;
            //die1 = Math.floor(Math.random() * 6) + 1;
            //die2 = Math.floor(Math.random() * 6) + 1;
            dieSum = die1 + die2;

            switch(die1){
                case 1:
                    document.getElementById("d1slot").src="dice1.png";
                    break
                case 2:
                    document.getElementById("d1slot").src="dice2.png";
                    break
                case 3:
                    document.getElementById("d1slot").src="dice3.png";
                    break
                case 4:
                    document.getElementById("d1slot").src="dice4.png";
                    break
                case 5:
                    document.getElementById("d1slot").src="dice5.png";
                    break
                case 6:
                    document.getElementById("d1slot").src="dice6.png";
                    break
            }

            switch(die2){
                case 1:
                    document.getElementById("d2slot").src="dice1.png";
                    break
                case 2:
                    document.getElementById("d2slot").src="dice2.png";
                    break
                case 3:
                    document.getElementById("d2slot").src="dice3.png";
                    break
                case 4:
                    document.getElementById("d2slot").src="dice4.png";
                    break
                case 5:
                    document.getElementById("d2slot").src="dice5.png";
                    break
                case 6:
                    document.getElementById("d2slot").src="dice6.png";
                    break
            }

            switch (dieSum)
                {
                    case 2:
                        if(point == 0)
                        {
                            
                            bankBal = bankBal - bet;
                            outputBet.innerHTML = bankBal;
                            document.getElementById("youL").style.display = "block";

                        }//end if
                        
                        break;
                    case 3:
                        if (point == 0)
                        {
                            bankBal = bankBal - bet;
                            document.getElementById("youL").style.display = "block";
                        }//end if
                        break;
                    case 4:
                        if (point == 0)
                        {
                            point = 4;
                        }//end if
                        if (point == 4)
                        {
                            pointWinReset();
                        }//win if

                        break;
                    case 5:
                        if (point == 0)
                        {
                            point = 5;
                        }//end if
                        if (point == 5)
                        {
                            pointWinReset();
                        }//win if
                        break;
                    case 6:
                        if (point == 0)
                        {
                            point = 6;
                        }//end if
                        if (point == 6)
                        {
                            pointWinReset();
                        }//win if
                        break;
                    case 7:
                        if(point == 0)
                        {
                            bankBal = bankBal + bet;
                            document.getElementById("youW").style.display = "block";
                        }//end if
                        else if (point != 0)
                        {
                            bankBal = bankBal - bet;
                            point = 0;
                            flag = false;
                        }// end else if
                            
                        break;
                    case 8:
                        if (point == 0)
                        {
                            point = 8;
                        }//end if
                        if (point == 8)
                        {
                            pointWinReset();
                        }//win if
                        break;
                    case 9:
                        if (point == 0)
                        {
                            point = 4;
                        }//end if
                        if (point == 9)
                        {
                            pointWinReset();
                        }//win if
                        break;
                    case 10:
                        if (point == 0)
                        {
                            point = 10;
                        }//end if
                        if (point == 10)
                        {
                            pointWinReset();
                        }//win if
                        break;
                    case 11:
                        if (point == 0)
                        {
                            bankBal = bankBal + bet;
                            document.getElementById("youW").style.display = "block";
                        }//end if
                        break;
                    case 12:
                        if (point == 0)
                        {
                            bankBal = bankBal - bet;
                            document.getElementById("youL").style.display = "none";
                        }//end if
                        break;

                }//end switch 
}//end calculateScore

function pointWinReset(){
    bankBal = bankBal + bet;
    point = 0;
}//end pWR