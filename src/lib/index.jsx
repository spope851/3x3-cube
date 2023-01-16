import React from 'react'
import { CubeSolver as App, getFacelets } from './components/App'
import { ThemeProvider, createTheme } from '@mui/material'

const Cube = ({ solve }) => {
    return (
        <ThemeProvider theme={createTheme()}>
            <App solve={solve}/>
        </ThemeProvider>
    )
}

export { Cube, getFacelets }
