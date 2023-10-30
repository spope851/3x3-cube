import React from 'react'
import { CubeSolver as App, getFacelets } from './App'

const Cube: React.FC<{solve: () => Promise<string[]>}> = ({ solve }) => <App solve={solve}/>

export { Cube, getFacelets }

// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('react-cube-solver')!);
// root.render(
//   <React.StrictMode>
//     <App solve />
//   </React.StrictMode>
// );