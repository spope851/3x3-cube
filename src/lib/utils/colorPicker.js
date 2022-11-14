import getCursorPosition from "./getCursorPosition";

const colorPicker = (showCp, setShowCp, setColor) => {
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
      
        cp.addEventListener('mousedown', function(e) {
            console.log(getCursorPosition(cp, e, setShowCp));
            setColor(getCursorPosition(cp, e, setShowCp))
        })
      }
}

export default colorPicker
