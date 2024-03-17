console.log("hello");
const choics = document.querySelectorAll(".choice");
const msg=document.querySelector(".move");
const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score");

let userScore=0;
let compScore=0;

const randomChoice = () => {
    const arr=["paper","rock","scissors"];
    return arr[Math.floor(Math.random()*3)];
}
const gameFun = (userChoice) =>{
    const compChoice = randomChoice();
    if(userChoice===compChoice)
    {
        msg.innerText="Game was Draw! Play again";
        msg.style.backgroundColor="rgb(11, 11, 49)";
    }
    else
    {
        if(userChoice === "paper")
        {
            if(compChoice == "rock")
            {
                userScore++;
                msg.innerText='You won! as player choice paper beats computer choice rock';
                msg.style.backgroundColor="green";
            }
            else
            {
                compScore++;
                msg.innerText="You lost! player choice paper losses to computer choice scissor";
                msg.style.backgroundColor="red";
            }   
        }
        else if(userChoice==="rock")
        {
            if(compChoice == "scissors")
            {
                userScore++;
                msg.innerText='You won! player choice rock beats computer choice scissors';
                msg.style.backgroundColor="green";
            }
            else
            {
                compScore++;
                msg.innerText="You lost! player choice rock looses to computer choice paper";
                msg.style.backgroundColor="red";
            }     
        }
        else if(userChoice==="scissors")
        {
            if(compChoice == "paper")
            {
                userScore++;
                msg.innerText='You won! player choice scissors beats computer choice paper';
                msg.style.backgroundColor="green";
            }
            else
            {
                compScore++;
                msg.innerText="You lost! player choice scissors looses to computer choice rock";
                msg.style.backgroundColor="red";
            }     
        }
        userScorePara.innerHTML=userScore;
        compScorePara.innerHTML=compScore;

    }

};

choics.forEach((chk) =>{
    chk.addEventListener("click",() => {
        // console.log("choice chicked");
        const userChoice=chk.getAttribute("id");
        console.log(userChoice);
        gameFun(userChoice);
    });

});


