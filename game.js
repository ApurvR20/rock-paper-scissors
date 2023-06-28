
const game = () =>{

    const choices = ['rock','paper','scissors'];
    let pWin = 0;
    let cWin = 0;
    
    const playRound = (playerSelection) =>{
        
        const computerSelection = choices[Math.floor(Math.random()*3)]
        console.log(playerSelection + " " + computerSelection);
        //Draw con
        if(playerSelection == computerSelection)
        return 0;
        //Lose con
        else if( playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock")
            {
                cWin++;
            }
        //Win Con
        else{
            pWin++;
        }

        console.log(`pWin = ${pWin} cWin = ${cWin}`);
    }

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        const onClick = () => {
            playRound(button.id);
        }
        button.addEventListener('click',onClick);

    })

    /*
    -button click
    - event passes to logic, matches against computer choice, give result
    - keep score of each round till first to 5
    - declare winner */
    

}

game()