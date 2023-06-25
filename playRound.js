import roundLogic from "./roundLogic"

const playRound = (round) =>{
    
    const choices = ["rock", "paper", "scissors"]
    const getComputerChoice = () => choices[Math.floor(Math.random()*3)]

    playerSelection = prompt(`Round ${round}. Pick One.`)

    res = roundLogic(playerSelection, getComputerChoice())

    if(res[0] == 'error')
    {
        alert('Incorrect Input. Retry')
        return [false, res[0]]
    }
    else{
        if (res[0] == 'Draw') alert(res)
        else alert(`You ${res[0]}. ${res[1]} beats ${res[2]}.`)

        return [true, res[0]]
    }
    
}

export default playRound
