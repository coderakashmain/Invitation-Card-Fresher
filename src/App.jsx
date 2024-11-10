
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Page/Home/Home'
import Video from './Page/Video/Video'
import Invitation from './Page/Video/InvitationVideo/Invitation'
import Previous from './Page/Video/PreviousVideo/Previous'
import Images from './Page/Video/Images/Images'


function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      // element : <><Video/></>,
      element : <>  <Home/></>,
      
    },
    {
      path : 'video',
      element : <><Video/></>,
      children : [{
        path : '',
        element : <><Invitation/></>
      },
    {
      path : 'PYVideo',
      element : <><Previous/></>
    },
    {
      path : 'Images',
      element : <><Images/></>
    }]
    }
  ])

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
