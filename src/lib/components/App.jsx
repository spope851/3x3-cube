import React, { createContext, useEffect, useState } from 'react';
import colorPicker from '../utils/colorPicker'
import Cube from './cube';
import ColorPicker from './colorPicker';
import { SQUARES } from '../constants/squares'
import { validateColors } from '../utils/validateColors';
import { faceletString } from '../utils/cubejsCompatibility';

export const ColorPickerContext = createContext({
  setShowCp: () => undefined,
  colorPickerColor: undefined,
  setColorPickerColor: () => undefined,
  colorPickerCube: undefined,
  setColorPickerCube: () => undefined,
  setInputs: () => undefined,
  inputs: undefined,
})

export let getFacelets

const CubeSolver = ({ solve }) => {
  const [showCp, setShowCp] = useState(false)
  const [colorPickerCube, setColorPickerCube] = useState()
  const [colorPickerColor, setColorPickerColor] = useState()
  const [inputs, setInputs] = useState(SQUARES)
  const [disabled, setDisabled] = useState(false)
  const [solving, setSolving] = useState(false)
  const [solution, setSolution] = useState('')

  const solveCube = async () => {
    setSolving(true)
    await solve().then(data => setSolution(data)).finally(() => setSolving(false))
  }

  useEffect(() => {
    solveCube()
  }, [])

  useEffect(() => {
    colorPicker(showCp, setShowCp, setColorPickerColor)
    setDisabled(!validateColors(inputs))
  }, [showCp, colorPickerCube, colorPickerColor, inputs])

  getFacelets = () => faceletString(inputs)

  return (
    <ColorPickerContext.Provider
      value={{
          setShowCp,
          colorPickerColor,
          setColorPickerColor,
          colorPickerCube,
          setColorPickerCube,
          inputs,
          setInputs,
        }}>
      <div
        className="App"
        style={{
          display: 'flex',
        }}>
        <Cube />
        <div
          style={{
            alignSelf: 'center',
            marginLeft: 100
          }}>
          {
            showCp
            ? <ColorPicker />
            : <button
                onClick={solveCube}
                disabled={disabled}
              >solve</button>
          }
        </div>
      </div>
      <div
        style={{
          padding: 50
        }}
      >
        {solving ? '...solving' : solution}
      </div>
    </ColorPickerContext.Provider>
  );
}

export default CubeSolver;
