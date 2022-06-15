import Face from './face';

const Cube = () => {

  return (
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
  );
}

export default Cube;
