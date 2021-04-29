// Generates sentences relating to Magic: the Gathering
const msgComponents = {
  verbs: [
    'are probably a fan of',
    'look like you enjoy',
    'look like you just tried',
    'are the type of player who hates',
    'should be cautious for this in the near future:'
  ],
  nouns: [
    'mono-white.',
    'playing against STACKS.',
    'casting Armageddon.',
    'resolving a Primal Surge.',
    'Grand Arbiter Augustin IV.',
    'Narset Extra Turns.',
    'pulling good cards.',
    'proxying basic lands.',
    'getting your spell countered.',
    `Dragon's Maze.`,
    `a cool Maze's End deck.`
  ],
  quotees: [
    `Mark Rosewater, probably`,
    `Zurgo Bellstriker`,
    `Ugin, the Spirit Dragon`,
    `Braids, Cabal Minion`,
    `Squee, the Immortal`,
    `The Professor`,
    `Rudy the Magic Guy`
  ]
};

const generateMessage = () => {
  const verbsList = msgComponents['verbs'];
  const nounsList = msgComponents['nouns'];
  const quoteesList = msgComponents['quotees'];

  return `"You ${verbsList[Math.floor(Math.random() * verbsList.length)]} ${nounsList[Math.floor(Math.random() * nounsList.length)]}" - ${quoteesList[Math.floor(Math.random() * quoteesList.length)]}`;
}

console.log(generateMessage());