const result = document.querySelector('.score');
const userGusses = document.querySelector('.userGusses');
let gusses = 0;
document.addEventListener('DOMContentLoaded', () =>{
    const cardArr = [
        {
          name: 'ant',
          img: '../img/ant-man.jpeg',  
        },
        {
            name: 'ant',
            img: '../img/ant-man.jpeg',  
          },

          {
            name: 'bat',
            img: '../img/batman.png',  
          },
          {
            name: 'bat',
            img: '../img/batman.png',  
          },
          {
            name: 'pool',
            img: '../img/deadpool.jpeg',  
          },
          {
            name: 'pool',
            img: '../img/deadpool.jpeg',  
          },
          {
            name: 'hulk',
            img: '../img/hulk.jpeg',  
          },
          {
            name: 'hulk',
            img: '../img/hulk.jpeg',  
          },
          {
            name: 'iron',
            img: '../img/iron-man.jpg',  
          },
          {
            name: 'iron',
            img: '../img/iron-man.jpg',  
          },
          {
            name: 'nova',
            img: '../img/nova.jpeg',  
          },
          {
            name: 'nova',
            img: '../img/nova.jpeg',  
          },
          {
            name: 'skull',
            img: '../img/redskull.jpeg',  
          },
          {
            name: 'skull',
            img: '../img/redskull.jpeg',  
          },
          {
            name: 'robin',
            img: '../img/robin.jpeg',  
          },
          {
            name: 'robin',
            img: '../img/robin.jpeg',  
          },
          {
            name: 'rocket',
            img: '../img/rocket.jpeg',  
          },
          {
            name: 'rocket',
            img: '../img/rocket.jpeg',  
          },
          {
            name: 'spider',
            img: '../img/spiderman.jpeg',  
          },
          {
            name: 'spider',
            img: '../img/spiderman.jpeg',  
          },
          {
            name: 'super',
            img: '../img/superman.jpeg',  
          },
          {
            name: 'super',
            img: '../img/superman.jpeg',  
          },
          {
            name: 'thanos',
            img: '../img/thanos.jpeg',  
          },
          {
            name: 'thanos',
            img: '../img/thanos.jpeg',  
          },
    ] 

    cardArr.sort(() => 0.5 - Math.random());
    const containerCard = document.querySelector('.container-card');
    let chosenCard = [];
    let chosenCardId = [];
    let matchCards = [];

    function createBoard() {
        for(let i = 0; i < cardArr.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', '../img/back.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            containerCard.appendChild(card);
        }
    }

    createBoard();

    function flipCard() {
     let cardId = this.getAttribute('data-id');
     chosenCard.push(cardArr[cardId].name)
     chosenCardId.push(cardId);
     this.setAttribute('src', cardArr[cardId].img);
     if(chosenCard.length === 2) {
         setTimeout(checkIfMatch, 600)
     }
    }

    function checkIfMatch() {
        let cards = document.querySelectorAll('img');
        const cardNum1 = chosenCardId[0];
        const cardNum2 = chosenCardId[1];
        if(chosenCard[0] === chosenCard[1]){
            cards[cardNum1].setAttribute('src', '../img/clearcard.jpeg');
            cards[cardNum2].setAttribute('src', '../img/clearcard.jpeg');
            matchCards.push(chosenCard);
            gusses ++;
            userGusses.textContent = gusses;

        }
        else {
            cards[cardNum1].setAttribute('src', '../img/back.png');
            cards[cardNum2].setAttribute('src', '../img/back.png');
            gusses ++;
            userGusses.textContent = gusses;
        }

        chosenCard = [];
        chosenCardId = [];
        result.textContent = matchCards.length;
        if(matchCards.length === cardArr.length/2){
           alert('good job'); 
        }

    }


}) 


