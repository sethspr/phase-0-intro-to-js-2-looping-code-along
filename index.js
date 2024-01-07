// Code your solutions in this file
const cardNames = ["Guadalupe", "Ollie", "Aki"];
const messages = []

function writeCards(cardNames) {
   for (let i = 0; i < cardNames.length; i++) {
      messages.push(`Thank you, ${cardNames[i]}, for the wonderful surprise gift!`)
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
      console.log(number--)
    }
}