import { createContext, useEffect, useState } from 'react';
import './App.css';
import Face from './components/face';

export const ColorPickerContext = createContext({
  setShowCp: () => undefined,
  setCube: () => undefined,
  setColor: () => undefined,
  setInputs: () => undefined,
  color: undefined,
  inputs: undefined,
})

function App() {
  const [showCp, setShowCp] = useState(false)
  const [cube, setCube] = useState()
  const [color, setColor] = useState()
  const [inputs, setInputs] = useState()

  useEffect(() => {
    if (showCp) {
      const cp = document.getElementById(`color-picker`);
      const cpx = cp.getContext('2d');
      cpx.fillStyle = 'red'
      cpx.fillRect(0, 0, 50, 50);
      cpx.fillStyle = 'green'
      cpx.fillRect(50, 0, 50, 50);
      cpx.fillStyle = 'blue'
      cpx.fillRect(100, 0, 50, 50);
      cpx.fillStyle = 'orange'
      cpx.fillRect(0, 50, 50, 50);
      cpx.fillStyle = 'white'
      cpx.fillRect(50, 50, 50, 50);
      cpx.fillStyle = 'yellow'
      cpx.fillRect(100, 50, 50, 50);

      const getCursorPosition = (canvas, event) => {
          const rect = canvas.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          setShowCp(false)
          console.log(x,y);
          if (y > 55) {
            if (x > 55) {
              if (x > 110) {
                return  'yellow'
              }
              return 'white'
            }
            return 'orange'
          }
          if (x > 55) {
            if (x > 110) {
              return  'blue'
            }
            return 'green'
          }
          return 'red'
      }
    
      cp.addEventListener('mousedown', function(e) {
          console.log(getCursorPosition(cp, e));
          setColor(getCursorPosition(cp, e))
      })
    }
  }, [showCp, cube, color])

  return (
    <ColorPickerContext.Provider
      value={{
          setShowCp,
          color,
          cube,
          setCube,
          setColor,
          setInputs,
          inputs,
        }}>
      <div className="App">
        <div style={{ paddingTop: 5 }}>
          <div style={{ marginLeft: 192 }}>
            <Face name='top' />
          </div>
          <div style={{ display: 'flex' }}>
            <Face name='left'/>
            <Face name='front' />
            <Face name='right' />
            <Face name='back' />
          </div>
          <div style={{ marginLeft: 192 }}>
            <Face name='bottom' /> 
          </div>
        </div>
        {showCp ? <canvas
          id='color-picker'
          style={{
            marginLeft: 700,
            border: "solid 5px"
          }}
          width={150}
          height={100}
        ></canvas>
        : <button onClick={() => alert('YOO')}>solve</button>
        }
      </div>
      {JSON.stringify(inputs, null, 2)}
    </ColorPickerContext.Provider>
  );
}

export default App;
