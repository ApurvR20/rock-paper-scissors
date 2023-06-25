const game = () =>{

    const choices = ['rock','paper','scissors']
    const roundLogic = (playerSelection,computerSelection) => {

        const ps = playerSelection.toLowerCase()
        const cs = computerSelection
        let result = ""

        console.log(`ps : ${ps} cs : ${cs}`);
    
        if(choices.includes(ps))
        {
            //Draw condition
            if(ps == cs)
            {
                result = ['Draw']
            }
            //Player Lose condition
            else if(
                ps == "rock" && cs == "paper" ||
                ps == "paper" && cs == "scissors" ||
                ps == "scissors" && cs == "rock")
                {
                    result = ["Lose", computerSelection, playerSelection]
                }
            //Player Win Con
            else{
                result = ["Win", playerSelection, computerSelection]
            }
        }
        else
        {
            result = ['error']
        }
        return result
    }
    
    const playRound = (round) =>{
        
        const getComputerChoice = () => choices[Math.floor(Math.random()*3)]
    
        playerSelection = prompt(`Round ${round}. Pick One. (Rock, Paper, Scissors)`)
    
        res = roundLogic(playerSelection, getComputerChoice())
    
        if(res[0] == 'error')
        {
            alert('Incorrect Input. Retry')
            return [false, res[0]]
        }
        else{
            if (res[0] == 'Draw') alert(res)
            else 
            {
                alert(`You ${res[0]}. ${res[1]} beats ${res[2]}.`)
            }
    
            return [true, res[0]]
        }
        
    }
    
    (() => {
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
                if(roundResults[1] == 'Draw') draw++;
                else if(roundResults[1] == 'Win') win++;
                else loss++;
            }
        }
        
        alert(`Your final score \n Win : ${win}\n Loss : ${loss}\n Draw : ${draw}`)
    })()

}

game()