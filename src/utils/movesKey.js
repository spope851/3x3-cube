const MOVES = {
    "U": "turn the TOP face CLOCKWISE",
    "U'": "turn the TOP face COUNTER-CLOCKWISE",
    "U2": "turn the TOP face TWICE",
    "R": "turn the RIGHT face CLOCKWISE",
    "R'": "turn the RIGHT face COUNTER-CLOCKWISE",
    "R2": "turn the RIGHT face TWICE",
    "L": "turn the LEFT face CLOCKWISE",
    "L'": "turn the LEFT face COUNTER-CLOCKWISE",
    "L2": "turn the LEFT face TWICE",
    "F": "turn the FRONT face CLOCKWISE",
    "F'": "turn the FRONT face COUNTER-CLOCKWISE",
    "F2": "turn the FRONT face TWICE",
    "B": "turn the BACK face CLOCKWISE",
    "B'": "turn the BACK face COUNTER-CLOCKWISE",
    "B2": "turn the BACK face TWICE",
    "D": "turn the BOTTOM face CLOCKWISE",
    "D'": "turn the BOTTOM face COUNTER-CLOCKWISE",
    "D2": "turn the BOTTOM face TWICE",
}

export const moveToKey = (move) => MOVES[move]
