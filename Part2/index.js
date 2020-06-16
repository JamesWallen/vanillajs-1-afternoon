let cardName = document.getElementById('cardName');
let cardColor = document.getElementById('cardColor');
let cardType = document.getElementById('cardType');

// console.log(card1, card2, card3, card4, cardName, cardColor);

function changeCard() {
    card = document.getElementById(cardName.value);
    color = cardColor.value;
    card.style = `color: ${color};`;
}

function reset() {
    resetCard = document.getElementById(cardName.value);
    resetCard.style = 'color: gray;';
    cardName.value = '';
    cardColor.value = '';
    cardType.value = '';
}