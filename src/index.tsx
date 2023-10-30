import React from 'react'
import { CubeSolver as App, getFacelets } from './App'
import { ThemeProvider, createTheme } from '@mui/material'

const Cube: React.FC<{solve: () => Promise<string[]>}> = ({ solve }) => {
    return (
        <ThemeProvider theme={createTheme()}>
            <App solve={solve}/>
        </ThemeProvider>
    )
}

export { Cube, getFacelets }

// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('react-cube-solver')!);
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={createTheme()}>
//       <App solve />
//     </ThemeProvider>
//   </React.StrictMode>
// );