import React from 'react'
import styled from '@emotion/styled'
import { Stack, Typography } from '@mui/material'
import Face from './face'

const H3 = styled(Typography)`
  display: block;
  text-align: center;
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
  }
`

const FactHeader = ({ label }) => 
<H3
  variant='h5'
  className='face'
>{label}</H3>

const TopBottomRow = styled('div')`
  margin-left: 0px;
  ${props => props.theme.breakpoints.up("md")} {
    margin-left: 192px;
  }
`

const MidRow = styled('div')`
  display: flex;
  ${props => props.theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`

const Cube = () => {

  return (
    <Stack gap={{sx: 0, md: "20px"}}>
      <TopBottomRow>
        <FactHeader label="top face" />
        <Face name='top' />
      </TopBottomRow>
      <MidRow>
        <FactHeader label="left face" />
        <Face name='left'/>
        <FactHeader label="front face" />
        <Face name='front' />
        <FactHeader label="right face" />
        <Face name='right' />
        <H3
          variant='h5'
          className='face'
        >back face</H3>
        <Face name='back' />
      </MidRow>
      <TopBottomRow>
        <FactHeader label="bottom face" />
        <Face name='bottom' /> 
      </TopBottomRow>
    </Stack>
  );
}

export default Cube;
