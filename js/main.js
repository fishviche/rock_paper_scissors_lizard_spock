var options = ['rock','paper','scissors','lizard','spock']

// Modal
var modal = document.getElementById('defaultModal');
console.log(modal)
window.onclick = function(event) {
    if (event.target == modal) {
        toggleModal('defaultModal', false);

    }
}
function myGame(valor){
    // shows the #modal element
    let scorePlayer = document.getElementById('score-player');
    let scorePc = document.getElementById('score-bot');
    let showLoseWin = document.getElementById('showLoseWin')
    let showPcOption = document.getElementById('showPcOption')

    let aleatorio = getRandom();

    let scorePlayerNumber = parseInt(scorePlayer.textContent);
    let scorePcNumber = parseInt(scorePc.textContent);
    
    
    let playerPc = options[aleatorio]
    switch(valor){
        case 'rock':
            if(playerPc==='scissors'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose scissors";
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose lizard";
                scorePlayerNumber += 1;
            }else if(playerPc==='rock'){
                showLoseWin.textContent = "It's a draw";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.add('text-orange-300');
                showPcOption.textContent = "Computer choose rock";
            }else{
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-red-400');
                showLoseWin.textContent = "You Lost"
                showPcOption.textContent = "Computer choose "+playerPc;
                scorePcNumber += 1
            }
            break;
        case 'paper':
            if(playerPc==='rock'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose rock";
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='paper'){
                showLoseWin.textContent = "It's a draw";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.add('text-orange-300');
                showPcOption.textContent = "Computer choose paper";
            }else{
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-red-400');
                showLoseWin.textContent = "You Lost"
                showPcOption.textContent = "Computer choose "+playerPc;
                scorePcNumber += 1;
            }
            break;
        case 'scissors':
            if(playerPc==='paper'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='scissors'){
                showLoseWin.textContent = "It's a draw";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.add('text-orange-300');
                showPcOption.textContent = "Computer choose " + playerPc;
            }else{
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-red-400');
                showLoseWin.textContent = "You Lost"
                showPcOption.textContent = "Computer choose "+playerPc;
                scorePcNumber += 1;
            }
            break;
        case 'lizard':
            if(playerPc==='paper'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='lizard'){
                showLoseWin.textContent = "It's a draw";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.add('text-orange-300');
                showPcOption.textContent = "Computer choose " + playerPc;
            }else{
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-red-400');
                showLoseWin.textContent = "You Lost";
                showPcOption.textContent = "Computer choose "+playerPc;
                scorePcNumber += 1;
            }
            break;
        case 'spock':
            if(playerPc==='scissors'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='rock'){
                showLoseWin.textContent = "You Win";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-lime-500');
                showPcOption.textContent = "Computer choose " + playerPc;
                scorePlayerNumber += 1;
            }else if(playerPc==='spock'){
                showLoseWin.textContent = "It's a draw";
                showLoseWin.classList.remove('text-red-400');
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.add('text-orange-300');
                showPcOption.textContent = "Computer choose " + playerPc;
            }else{
                showLoseWin.classList.remove('text-lime-500');
                showLoseWin.classList.remove('text-orange-300');
                showLoseWin.classList.add('text-red-400');
                showLoseWin.textContent = "You Lost";
                showPcOption.textContent = "Computer choose "+playerPc;
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