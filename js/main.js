var options = ['rock','paper','scissors','lizard','spock']

function showModal(){
    console.log('HOAL')
    toggleModal('modal');
}
function myGame(valor){
    // shows the #modal element
    let scorePlayer = document.getElementById('score-player');
    let scorePc = document.getElementById('score-bot');
    let aleatorio = getRandom();

    let scorePlayerNumber = parseInt(scorePlayer.textContent);
    let scorePcNumber = parseInt(scorePc.textContent);
    

    playerPc = options[aleatorio]
    switch(valor){
        case 'rock':
            if(playerPc==='scissors'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='rock'){
                console.log("Draw")
            }else{
                console.log("PC win")
                scorePcNumber += 1
            }
            break;
        case 'paper':
            if(playerPc==='rock'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='paper'){
                console.log("Draw")
            }else{
                console.log("PC win");
                scorePcNumber += 1;
            }
            break;
        case 'scissors':
            if(playerPc==='paper'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='scissors'){
                console.log("Draw")
            }else{
                console.log("PC win");
                scorePcNumber += 1;
            }
            break;
        case 'lizard':
            if(playerPc==='paper'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                console.log("Draw")
            }else{
                console.log("PC win");
                scorePcNumber += 1;
            }
            break;
        case 'spock':
            if(playerPc==='scissors'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='rock'){
                console.log("Player win");
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                console.log("Draw")
            }else{
                console.log("PC win");
                scorePcNumber += 1;
            }
            break;
    }
    scorePlayer.textContent = scorePlayerNumber;
    scorePc.textContent = scorePcNumber;
}

function getRandom() {
    return Math.floor(Math.random() * 5);
}
function getWin(value1,value2){

}