const roundLogic = (playerSelection,computerSelection) => {

    const ps = playerSelection.toLowerCase()
    const cs = computerSelection
    let result = ""

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

export default roundLogic
