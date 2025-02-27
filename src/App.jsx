import React from 'react'
import QRGenerator from './QRGenerator'

const App = () => {
  return (
    <div className='w-full h-screen  bg-gray-200'>
      <h1>QR Code Generator</h1>
      <QRGenerator />
    </div>
  )
}

export default App