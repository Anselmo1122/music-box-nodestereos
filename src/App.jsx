import './App.css'
import BoxEnter from './components/BoxEnter'
import BoxLevels from './components/BoxLevels'
import InBox from './components/inboxes/InBox'

import { useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      {
        isOpen 
          ? ( <BoxLevels /> ) 
          : ( <BoxEnter open={ handleOpen } /> )
      }
    </div>
  )
}

export default App
