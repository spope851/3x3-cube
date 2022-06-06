import Cube from './cube';

const Face = ({ name }) => {

  return (
    <div style={{ border: 'solid', borderWidth: '3px 2px', margin: 10, width: 168 }}>
        <div style={{ marginBottom: '-4px', marginTop: '-1px' }}>
            <Cube name={`${name}-tl`}/>
            <Cube name={`${name}-tm`}/>
            <Cube name={`${name}-tr`}/>
        </div>
        <div style={{ marginBottom: '-4px' }}>
            <Cube name={`${name}-ml`}/>
            <Cube name={`${name}-mm`}/>
            <Cube name={`${name}-mr`}/>
        </div>
        <div style={{ marginBottom: '-4px' }}>
            <Cube name={`${name}-bl`}/>
            <Cube name={`${name}-bm`}/>
            <Cube name={`${name}-br`}/>
        </div>
    </div>
  );
}

export default Face;
