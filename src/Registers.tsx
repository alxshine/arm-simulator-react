import React from 'react'
import './Registers.css'

interface IProps {
  registers: Array<number>
}

const specialRegisterMap = new Map<number, string>()
specialRegisterMap.set(11, 'FP')
specialRegisterMap.set(13, 'SP')
specialRegisterMap.set(14, 'LR')
specialRegisterMap.set(15, 'PC')

export const Registers: React.FC<IProps> = ({ registers }) => {
  const rows = registers.map((value, index) => (
    <tr>
      <td className="registerName">
        R{index}
        {specialRegisterMap.has(index) ? ` (${specialRegisterMap.get(index)})` : ''}
      </td>
      <td className="registerValue">{value}</td>
    </tr>
  ))

  return (
    <div id="Registers">
      <table>{rows}</table>
    </div>
  )
}
