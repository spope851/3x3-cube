import React, { useContext, useEffect, useState } from 'react'
import { ColorPickerContext } from '../CubeSolver';

const Square = ({ name }) => {
    const { 
        colorPickerColor,
        setColorPickerColor,
        inputs,
        setInputs,
        colorPickerCube,
        setColorPickerCube,
        setShowCp,
    } = useContext(ColorPickerContext)
    const [color, setColor] = useState(inputs[name])

    useEffect(() => {
        const cube = document.getElementById(`cube-${name}`);
        const cbx = cube.getContext('2d');
        if (colorPickerCube === name) {
            setColor(colorPickerColor)
            setColorPickerCube(undefined)
            setInputs({
                ...inputs,
                [name]: colorPickerColor,
            })
            setColorPickerColor(undefined)
        }
        cbx.fillStyle = color
        cbx.fillRect(0, 0, 50, 50);
        // eslint-disable-next-line
    }, [colorPickerColor, name, color])

    return (
        <canvas
            height={50}
            width={50}
            id={`cube-${name}`}
            style={{
                border: 'solid black',
                borderWidth: '3px'
            }}
            onClick={() => {
                setColorPickerCube(name)
                setShowCp(true)
            }}
        ></canvas>
    )
}

export default Square
