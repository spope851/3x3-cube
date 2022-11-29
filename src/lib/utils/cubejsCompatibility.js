export const faceletString = (facelets) => {
    const colorToFacelet = (color) => {
        let r = 'U'
        switch (color) {
        case 'red':
            r = 'F'
            break;
        case 'green':
            r = 'L'
            break;
        case 'blue':
            r = 'R'
            break;
        case 'orange':
            r = 'B'
            break;
        case 'yellow':
            r = 'D'
            break;
        default:
            break;
        }
        return r;
    }

    return colorToFacelet(facelets['top-tl']) +
        colorToFacelet(facelets['top-tm']) +
        colorToFacelet(facelets['top-tr']) +
        colorToFacelet(facelets['top-ml']) +
        colorToFacelet(facelets['top-mm']) +
        colorToFacelet(facelets['top-mr']) +
        colorToFacelet(facelets['top-bl']) +
        colorToFacelet(facelets['top-bm']) +
        colorToFacelet(facelets['top-br']) +
        colorToFacelet(facelets['right-tl']) +
        colorToFacelet(facelets['right-tm']) +
        colorToFacelet(facelets['right-tr']) +
        colorToFacelet(facelets['right-ml']) +
        colorToFacelet(facelets['right-mm']) +
        colorToFacelet(facelets['right-mr']) +
        colorToFacelet(facelets['right-bl']) +
        colorToFacelet(facelets['right-bm']) +
        colorToFacelet(facelets['right-br']) +
        colorToFacelet(facelets['front-tl']) +
        colorToFacelet(facelets['front-tm']) +
        colorToFacelet(facelets['front-tr']) +
        colorToFacelet(facelets['front-ml']) +
        colorToFacelet(facelets['front-mm']) +
        colorToFacelet(facelets['front-mr']) +
        colorToFacelet(facelets['front-bl']) +
        colorToFacelet(facelets['front-bm']) +
        colorToFacelet(facelets['front-br']) +
        colorToFacelet(facelets['bottom-tl']) +
        colorToFacelet(facelets['bottom-tm']) +
        colorToFacelet(facelets['bottom-tr']) +
        colorToFacelet(facelets['bottom-ml']) +
        colorToFacelet(facelets['bottom-mm']) +
        colorToFacelet(facelets['bottom-mr']) +
        colorToFacelet(facelets['bottom-bl']) +
        colorToFacelet(facelets['bottom-bm']) +
        colorToFacelet(facelets['bottom-br']) +
        colorToFacelet(facelets['left-tl']) +
        colorToFacelet(facelets['left-tm']) +
        colorToFacelet(facelets['left-tr']) +
        colorToFacelet(facelets['left-ml']) +
        colorToFacelet(facelets['left-mm']) +
        colorToFacelet(facelets['left-mr']) +
        colorToFacelet(facelets['left-bl']) +
        colorToFacelet(facelets['left-bm']) +
        colorToFacelet(facelets['left-br']) +
        colorToFacelet(facelets['back-tl']) +
        colorToFacelet(facelets['back-tm']) +
        colorToFacelet(facelets['back-tr']) +
        colorToFacelet(facelets['back-ml']) +
        colorToFacelet(facelets['back-mm']) +
        colorToFacelet(facelets['back-mr']) +
        colorToFacelet(facelets['back-bl']) +
        colorToFacelet(facelets['back-bm']) +
        colorToFacelet(facelets['back-br'])
}
