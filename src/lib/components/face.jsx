import React from 'react';
import Square from './square';

const Face = ({ name }) => {

  return (
    <div style={{ border: 'solid', borderWidth: '3px 2px', margin: 10, marginTop:0, marginBottom: 0, width: 168 }}>
        <div style={{ marginBottom: '-4px', marginTop: '-1px' }}>
            <Square name={`${name}-tl`}/>
            <Square name={`${name}-tm`}/>
            <Square name={`${name}-tr`}/>
        </div>
        <div style={{ marginBottom: '-4px' }}>
            <Square name={`${name}-ml`}/>
            <Square name={`${name}-mm`}/>
            <Square name={`${name}-mr`}/>
        </div>
        <div style={{ marginBottom: '-4px' }}>
            <Square name={`${name}-bl`}/>
            <Square name={`${name}-bm`}/>
            <Square name={`${name}-br`}/>
        </div>
    </div>
  );
}

export default Face;
