// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Counter from './components/Counter'
import MainLayout from './layout/MainLayout'
import TaskManager from './pages/TaskManagerPage/TaskManager'

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: 'counter',
        index: true,
        element: <Counter />
      },
      {
        path: 'task-manager',
        element: <TaskManager />
      },
    ]
  },
])


function App() {
  // const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  )
}

export default App
