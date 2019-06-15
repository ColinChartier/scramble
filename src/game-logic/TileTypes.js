const TILE_TYPES = {
    'TRIPLE_WORD_SCORE': {
        color: '#e34639',
        userFacing: 'TW',
        wordMultiplier: 3,
        letterMultiplier: 1,
    },
    'DOUBLE_WORD_SCORE': {
        color: '#ee8971',
        userFacing: 'DW',
        wordMultiplier: 2,
        letterMultiplier: 1,
    },
    'TRIPLE_LETTER_SCORE': {
        color: '#35608d',
        userFacing: 'TL',
        wordMultiplier: 1,
        letterMultiplier: 3,
    },
    'DOUBLE_LETTER_SCORE': {
        color: '#9bc0dd',
        userFacing: 'DL',
        wordMultiplier: 1,
        letterMultiplier: 2,
    },
    'STANDARD': {
        userFacing: '',
        color: 'beige',
        wordMultiplier: 1,
        letterMultiplier: 1,
    },
};

export { TILE_TYPES };
