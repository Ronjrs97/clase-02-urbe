// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col'>

      <header className='text-center py-8 bg-base-100 shadow-sm'>
        <h1 className='text-4xl font-bold mb-2'>URBE - React con Typescript</h1>
        <p className='text-lg'>Clase contador y task manager con Tailwind y Daisy</p>
      </header>
      <main className='container mx-auto px-4 py-8 flex-1'>
        <Counter counterValue={5}/>
      </main>
      <footer className='text-center py-6 bg-base-100 shadow-sm mt-8'>
        <p className='font-semibold'>Desarrollado con React 19 + TypeScript + Vite + Tailwind CSS + DaisyUI</p>
      </footer>
      
    </div>
  )
}

export default App
