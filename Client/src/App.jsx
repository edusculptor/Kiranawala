import React from 'react'
import Home from './Pages/Home'
// import BuyingCard from './Components/BuyingCard'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'

const path = createBrowserRouter([{
path:"/",
element:<Home/>
}]
)

function App() {
  return (
   <>
 <RouterProvider router={path}/>
   </>
  )
}

export default App