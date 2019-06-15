import {TILE_TYPES} from "./TileTypes";

export default class BoardState {
    get width() {
        return 15
    }

    get height() {
        return 15
    }

    letter(i, j) {
        //points is the point display of the letter, wildcards should have points: 0, for example
        return {'char': 'A', 'points': 1}
    }

    tileType(i, j) {
        return TILE_TYPES['STANDARD']
    }
}