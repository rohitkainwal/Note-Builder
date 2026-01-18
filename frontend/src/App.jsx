import React from 'react'
import HomePage from './pages/HomePage'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/Routing'
import {Toaster} from "react-hot-toast"


const App = () => {
  return (
    <div className=' bg-zinc-100 dark:bg-zinc-800 min-h-screen'>
      
  <RouterProvider router={myRoutes}/>
 <Toaster/>
    </div>
  )
}

export default App