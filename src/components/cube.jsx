import Face from './face';

const Cube = () => {

  return (
    <div style={{ paddingTop: 5 }}>
      <div className='top-bottom-row'>
        <h3 className='face'>top face</h3>
        <Face name='top' />
      </div>
      <div id='mid-row' style={{ display: 'flex' }}>
        <h3 className='face'>left face</h3>
        <Face name='left'/>
        <h3 className='face'>front face</h3>
        <Face name='front' />
        <h3 className='face'>right face</h3>
        <Face name='right' />
        <h3 className='face'>back face</h3>
        <Face name='back' />
      </div>
      <div className='top-bottom-row'>
        <h3 className='face'>bottom face</h3>
        <Face name='bottom' /> 
      </div>
    </div>
  );
}

export default Cube;
