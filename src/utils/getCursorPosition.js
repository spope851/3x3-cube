
const getCursorPosition = (canvas, event, setShowCp) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setShowCp(false)
    
    // console.log(x,y);

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

export default getCursorPosition