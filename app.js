const cardsArray = [
    {
      name: 'batata',
      img: 'batata.png',
    },
    {
      name: 'abacaxi',
      img: 'abacaxi.png',
    },
    {
      name: 'brocolis',
      img: 'brocolis.png',
    },
    {
      name: 'cenoura',
      img: 'cenoura.png',
    },
    {
      name: 'couve',
      img: 'couve.png',
    },
    {
      name: 'pepino',
      img: 'pepino.png',
    },
    {
      name: 'pimentao',
      img: 'pimentao.png',
    },
    {
      name: 'tomate',
      img: 'tomate.png',
    },
  ];
  
  const game = document.querySelector('.board');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      const img = document.createElement('img');
      img.setAttribute('src', 'images/back.png');
      img.setAttribute('alt', 'card');
      card.appendChild(img);
      game.appendChild(card);
    }
  }
  
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.firstChild.setAttribute('src', 'images/' + cardsArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  
  function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].classList.add('match');
      cards[optionTwoId].classList.add('match');
      cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].firstChild.setAttribute('src', 'images/back.png');

};
  };