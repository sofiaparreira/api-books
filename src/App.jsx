import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className='app bg-gray-900 h-screen text-white'>
      <Nav/>
        <div className='w-100'>
          <Outlet />
        </div>
        
    </div>
  )
}

export default App
