import playRound from "./playRound"

alert("Rock-Paper-Scissors Go!! Pick one in each round to win in Best of five!!")

roundNo = 1
win = 0
loss = 0
draw = 0
while(roundNo < 6)
{
    let roundResults = playRound(roundNo);
    if(roundResults[0])
    {
        roundNo++
        if(roundResults[1] == 'draw') draw++;
        else if(roundResults[1] == 'win') win++;
        else loss++;
    }
}

alert(`Your final score \n Win : ${win}\n Loss : ${loss}\n Draw : ${draw}`)

