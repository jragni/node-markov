/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.makeChains(this.words);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const chains = {};
    let words = this.words;
    // For each word, get the word next to it 
    for(let i = 0; i < words.length; i++) {
      
      let nextWord = words[i+1]? words[i+1] : null;
      if(chains[words[i]]) { 
          chains[words[i]].push(nextWord)
      } else {
          chains[words[i]] = [nextWord];
      }
    }

    return chains
  }


  /** return random text from chains */

  getText(numWords = 100) {
    
    // get a random words from the list of words
    let idx1 = Math.floor( Math.random() * this.words.length );
    let randWordFromList = this.words[idx1];
    const wordsForSent = [randWordFromList];
    
    // Get the index of the last word in wordsForSent and pick a random word from it's
    // chain. If the word chain contains only null, break from the loop.
    while(numWords <= 100){
      let lastIdx = wordsForSent.length - 1;  // comment on what lastIdx is for and what it is doing
      
      // EDGE CASE: the word is the last word in the sentence.
      if(! this.chains[wordsForSent[lastIdx]]){
        break;
      }

      // access last word's chain and pick random word from it
      let currChain = this.chains[wordsForSent[lastIdx]];
      let idx3 = Math.floor( Math.random() * currChain.length );
      let currWord = currChain[idx3]
      // add word to words list if its not null
      if(currWord){
        wordsForSent.push(currWord);
      } else {
        break;
      }
    }

    return wordsForSent.join(' ');
  }
}

module.exports = { MarkovMachine:MarkovMachine};
