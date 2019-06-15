import {TILE_TYPES} from "./TileTypes";
import {LETTER_SCORES} from "./LetterScores";

export default class BoardState {
    constructor() {
        this.board = Array(this.height).fill(0).map(x => Array(this.width).fill('A'))
    }

    get width() {
        return 15
    }

    get height() {
        return 15
    }

    letter(i, j) {
        //points is the point display of the letter, wildcards should have points: 0, for example
        console.log(this.board[j][i])
        return {'char': this.board[j][i], 'points': LETTER_SCORES[this.board[j][i].toLowerCase()]}
    }

    tileType(i, j) {
        //default: _
        //double letter: A
        //triple letter: B
        //double word: X
        //triple word: Y
        const board = [
            "Y__B___Y___B__Y",
            "_X___B___B___X_",
            "__X___A_A___X__",
            "A__X___A___X__A",
            "____X_____X____",
            "_B___B___B___B_",
            "__A___B_B___A__",
            "Y__A___X___A__Y",
            "__A___B_B___A__",
            "_B___B___B___B_",
            "____X_____X____",
            "A__X___A___X__A",
            "__X___A_A___X__",
            "_X___B___B___X_",
            "Y__B___Y___B__Y",
        ];
        return {
            '_': TILE_TYPES['STANDARD'],
            'A': TILE_TYPES['DOUBLE_LETTER_SCORE'],
            'B': TILE_TYPES['TRIPLE_LETTER_SCORE'],
            'X': TILE_TYPES['DOUBLE_WORD_SCORE'],
            'Y': TILE_TYPES['TRIPLE_WORD_SCORE'],
        }[board[i].charAt(j)]
    }
}
