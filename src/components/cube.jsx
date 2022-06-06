import React, { useContext, useEffect, useState } from 'react'
import { ColorPickerContext } from '../App';

const Cube = ({name}) => {
    const colorPicker = useContext(ColorPickerContext)
    const [color, setColor] = useState('white')

    useEffect(() => {
        const cube = document.getElementById(`cube-${name}`);
        const cbx = cube.getContext('2d');
        if (colorPicker.cube === name) {
            setColor(colorPicker.color)
            colorPicker.setCube(undefined)
            colorPicker.setInputs({
                ...colorPicker.inputs,
                [name]: colorPicker.color,
            })
            colorPicker.setColor(undefined)
        }
        console.log(color);
        cbx.fillStyle = color
        cbx.fillRect(0, 0, 50, 50);
    }, [colorPicker.color, name, color])

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
                colorPicker.setCube(name)
                colorPicker.setShowCp(true)
            }}
        ></canvas>
    )
}

export default Cube
