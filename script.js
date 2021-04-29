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
}

const generateMessage = () => {
  const verbs = msgComponents[verbs];
  const nouns = msgComponents[nouns];
  const quotees = msgComponents[quotees];

  return `"You ${verbs[Math.floor(Math.random() * verbs.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}" - ${quotees[Math.floor(Math.random() * quotees.length)]}`;
}