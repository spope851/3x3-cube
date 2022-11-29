import { createContext, useEffect, useState } from 'react';
import colorPicker from './utils/colorPicker'
import './App.css';
import Cube from './components/cube';
import ColorPicker from './components/colorPicker';
import { SQUARES } from './constants/squares'
import { faceletString } from './utils/cubejsCompatibility';
import { validateColors } from './utils/validateColors';
import { moveToKey } from './utils/movesKey';

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
  const [solution, setSolution] = useState()
  const [solving, setSolving] = useState(false)

  useEffect(() => {
    colorPicker(showCp, setShowCp, setColorPickerColor)
    setDisabled(!validateColors(inputs))
  }, [showCp, colorPickerCube, colorPickerColor, inputs])

  const solve = async () => {
    setSolving(true)
    await fetch(`http://localhost/api/solveCube?facelets=${faceletString(inputs)}`)
      .then(res => res.json())
      .then(data => setSolution(data))
      .finally(() => setSolving(false))
  }

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
          id='color-picker-wrapper'
          style={{
            alignSelf: 'center',
            marginLeft: 100
          }}>
          {
            showCp
            ? <ColorPicker />
            : <button
                onClick={solve}
                disabled={disabled}
              >{solving ? '...solving' : 'solve'}</button>
          }
        </div>
      </div>
      <div
        className='solution-container'
        style={{
          padding: '50px 50px 0px'
        }}>
        {solution && (
          <>
            <h4>solution:</h4>
            <p>{solution.join(' ')}</p>
          </>
        )}
      </div>
      <div
        className='solution-container'
        style={{
          padding: '0px 50px 50px'
        }}>
        {solution && (
          <>
            <h4>steps:</h4>
            {solution.map((move, idx) => <p key={idx}>{idx + 1}. <strong>{move}: </strong>{moveToKey(move)}</p>)}
          </>
        )}
      </div>
    </ColorPickerContext.Provider>
  );
}

export default App;
