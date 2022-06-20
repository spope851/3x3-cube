import { createContext, useEffect, useState } from 'react';
import colorPicker from './utils/colorPicker'
import './App.css';
import Cube from './components/cube';
import ColorPicker from './components/colorPicker';
import { SQUARES } from './constants/squares'
import { validateColors } from './utils/validateColors';

export const ColorPickerContext = createContext({
  setShowCp: () => undefined,
  colorPickerColor: undefined,
  setColorPickerColor: () => undefined,
  colorPickerCube: undefined,
  setColorPickerCube: () => undefined,
  setInputs: () => undefined,
  inputs: undefined,
})

function App() {
  const [showCp, setShowCp] = useState(false)
  const [colorPickerCube, setColorPickerCube] = useState()
  const [colorPickerColor, setColorPickerColor] = useState()
  const [inputs, setInputs] = useState(SQUARES)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    colorPicker(showCp, setShowCp, setColorPickerColor)
    setDisabled(!validateColors(inputs))
  }, [showCp, colorPickerCube, colorPickerColor, inputs])

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
                onClick={() => alert('YOO')}
                disabled={disabled}
              >solve</button>
          }
        </div>
      </div>
      <div
        style={{
          padding: 50
        }}>
        {JSON.stringify(inputs).replace(/"([^"]+)":/g, '$1:')}
      </div>
    </ColorPickerContext.Provider>
  );
}

export default App;
