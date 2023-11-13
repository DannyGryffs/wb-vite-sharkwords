import {setupWord, isLetterInWord, reavealLetterInWord}

import setSharkImage from './src/sharkImage';

import getRandomWord from "./src/randomWord";

import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  // reveaLetterInWord(word[0]);
  let numWrong = 0;
  const word = getRandomWord();
  const handleGuess = (guessEvent)
  setupWord(document.querySelector('#word-container'), word);
  setSharkImage(document.querySelector('#shark-img') ,numWrong);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
