const FACES = ['top', 'front', 'left', 'right', 'back', 'bottom']

const COLORS = ['white', 'red', 'blue', 'green', 'yellow', 'orange']

const EDGE_COLORS = [
    ['white', 'red'],
    ['white', 'blue'],
    ['white', 'green'],
    ['white', 'orange'],
    ['yellow', 'red'],
    ['yellow', 'blue'],
    ['yellow', 'green'],
    ['yellow', 'orange'],
    ['green', 'red'],
    ['orange', 'green'],
    ['blue', 'orange'],
    ['red', 'blue']
]

const CORNER_COLORS = [
    ['white', 'red', 'green'],
    ['white', 'green', 'orange'],
    ['white', 'orange', 'blue'],
    ['white', 'blue', 'red'],
    ['yellow', 'red', 'green'],
    ['yellow', 'green', 'orange'],
    ['yellow', 'orange', 'blue'],
    ['yellow', 'blue', 'red'],
]

export const validateColors = (inputs) => {
    const MIDDLES = FACES.map(face => inputs[`${face}-mm`])
    let validMiddles = true
    COLORS.forEach(color => {
        if (MIDDLES.filter(middle => middle === color).length !== 1) validMiddles = false
    })

    const EDGES = [
        [inputs['top-bm'], inputs['front-tm']],
        [inputs['top-mr'], inputs['right-tm']],
        [inputs['top-ml'], inputs['left-tm']],
        [inputs['top-tm'], inputs['back-tm']],
        [inputs['bottom-tm'], inputs['front-bm']],
        [inputs['bottom-mr'], inputs['right-bm']],
        [inputs['bottom-ml'], inputs['left-bm']],
        [inputs['bottom-bm'], inputs['back-bm']],
        [inputs['left-mr'], inputs['front-ml']],
        [inputs['back-mr'], inputs['left-ml']],
        [inputs['right-mr'], inputs['back-ml']],
        [inputs['front-mr'], inputs['right-ml']],
    ]
    let validEdges = true
    EDGE_COLORS.forEach(color => {
        const a = EDGES.filter(edge => edge.includes(color[0]) && edge.includes(color[1]))
        if (a.length !== 1) validEdges = false
    })
    
    const CORNERS = [
        [inputs['top-bl'], inputs['front-tl'], inputs['left-tr']],
        [inputs['top-tl'], inputs['left-tl'], inputs['back-tr']],
        [inputs['top-tr'], inputs['back-tl'], inputs['right-tr']],
        [inputs['top-br'], inputs['right-tl'], inputs['front-tr']],
        [inputs['bottom-tl'], inputs['front-bl'], inputs['left-br']],
        [inputs['bottom-bl'], inputs['left-bl'], inputs['back-br']],
        [inputs['bottom-br'], inputs['back-bl'], inputs['right-br']],
        [inputs['bottom-tr'], inputs['right-bl'], inputs['front-br']],
    ]
    let validCorners = true
    CORNER_COLORS.forEach(color => {
        const a = CORNERS.filter(corner => (
            corner.includes(color[0])
            && corner.includes(color[1])
            && corner.includes(color[2])
        ))
        if (a.length !== 1) validCorners = false
    })

    return validMiddles && validEdges && validCorners
}
