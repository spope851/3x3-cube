# UI for app that solves 3x3x3 Rubik's Cube
## user may click any square to change it's color with the ```ColorPicker``` component
## each time a color is chosen, the squares are all validated by ```validateColors``` util to ensure the cube can be solved
## all squares' positions and colors are accessible in the global inputs object

### `solve` prop expects an async function that returns a promise resolving to the moves for solving the cube as a string
### import the `getFacelets` function to get a string of the cube's facelets in propper order for integration with [cubejs](https://www.npmjs.com/package/cubejs)
### [example of backend integration endpoint](https://github.com/spope851/meDotCom/blob/main/server/server.js)
### [example of instantiating the modules](https://github.com/spope851/meDotCom-react-projects/blob/main/src/index.js)

