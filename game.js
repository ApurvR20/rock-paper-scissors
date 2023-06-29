    //add proper scoreboard
    
    const choices = ['rock','paper','scissors'];
    let pWin = 0;
    let cWin = 0;

    const body = document.querySelector('body');
    
    const scoreboard = document.createElement('div');
    scoreboard.textContent = `${pWin} : ${cWin}`;
    scoreboard.classList.add('scoreboard');

    const result = document.createElement('p');
    result.textContent = ' ';
    
    body.appendChild(scoreboard);
    
    const playRound = (playerSelection) =>{
        if(pWin == 5 || cWin == 5) return;
        
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

        scoreboard.textContent = `${pWin} : ${cWin} \n`;
        if(pWin == 5 || cWin == 5)
        {
            let str = "";
            if(pWin == 5) str = "Player";
            else str = "Computer";
            result.textContent = `${str} won!!`;
            scoreboard.appendChild(result);
            return;
        }
        
        console.log(`pWin = ${pWin} cWin = ${cWin}`);
    }

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => button.addEventListener('click',() => playRound(button.id)))    