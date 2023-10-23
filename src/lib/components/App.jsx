import React, { createContext, useEffect, useState } from 'react';
import colorPicker from '../utils/colorPicker'
import Cube from './cube';
import ColorPicker from './colorPicker';
import { SQUARES } from '../constants/squares'
import { validateColors } from '../utils/validateColors';
import { faceletString } from '../utils/cubejsCompatibility';
import { moveToKey } from '../utils/movesKey';
import styled from '@emotion/styled';

export const ColorPickerContext = createContext({
  setShowCp: () => undefined,
  colorPickerColor: undefined,
  setColorPickerColor: () => undefined,
  colorPickerCube: undefined,
  setColorPickerCube: () => undefined,
  setInputs: () => undefined,
  inputs: undefined,
})

const AppWrapper = styled('div')`
  display: flex;
  ${props => props.theme.breakpoints.down("md")} {
    justify-content: space-between;
  }
`

const ColorPickerWrapper = styled('div')`
  align-self: center;
  margin-left: 100px;
  ${props => props.theme.breakpoints.down("md")} {
    justify-content: space-between;
  }
`

const SolutionContainer = styled('div')`
  ${props => props.theme.breakpoints.down("md")} {
    padding-left: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`

export let getFacelets

export const CubeSolver = ({ solve }) => {
  const [showCp, setShowCp] = useState(false)
  const [colorPickerCube, setColorPickerCube] = useState()
  const [colorPickerColor, setColorPickerColor] = useState()
  const [inputs, setInputs] = useState(SQUARES)
  const [disabled, setDisabled] = useState(false)
  const [solution, setSolution] = useState('')
  const [solving, setSolving] = useState(false)

  const solveCube = async () => {
    setSolving(true)
    await solve()
      .then(data => setSolution(data))
      .finally(() => setSolving(false))
  }

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
        <AppWrapper>
          <Cube />
          <ColorPickerWrapper>
            {
              showCp
              ? <ColorPicker />
              : <button
                  onClick={solveCube}
                  disabled={disabled}
                >{solving ? '...solving' : 'solve'}</button>
            }
          </ColorPickerWrapper>
        </AppWrapper>
        {solution && (
          <SolutionContainer
            style={{
              padding: '50px 50px 0px'
            }}>
              <>
                <h4>solution:</h4>
                <p>{solution.join(' ')}</p>
              </>
          </SolutionContainer>
        )}
        {solution && (
          <SolutionContainer
            style={{
              padding: '0px 50px 50px'
            }}>
              <>
                <h4>steps:</h4>
                {solution.map((move, idx) => <p key={idx}>{idx + 1}. <strong style={{ marginLeft: '10px' }}>{move}: </strong>{moveToKey(move)}</p>)}
              </>
          </SolutionContainer>
        )}
    </ColorPickerContext.Provider>
  );
}
