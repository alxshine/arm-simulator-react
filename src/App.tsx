import React from 'react'
import './App.css'
import { MainCode } from './MainCode'
import { Console } from './Console'
import { Registers } from './Registers'
import { Cpu, Register } from './arm-simulator/Cpu'

const App: React.FC = () => {
  const cpu : Cpu = new Cpu()

  return (
    <div className="App">
      <div className="column">
        <MainCode />
        <Console />
      </div>

      <div className="column">
        <Registers registers={cpu.registers} />
      </div>
    </div>
  )
}

export default App
