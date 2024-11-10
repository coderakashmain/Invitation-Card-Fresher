
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import './App.css'
const Home = lazy(()=> import ('./Page/Home/Home'));
// import Home from './Page/Home/Home'
// import Video from './Page/Video/Video'
const Video = lazy(()=> import ('./Page/Video/Video'));
// import Invitation from './Page/Video/PreviousVideo/Previous'
const Invitation = lazy(()=> import ('./Page/Video/PreviousVideo/Previous'));
// import Previous from './Page/Video/InvitationVideo/Invitation'
const Previous = lazy(()=> import ('./Page/Video/InvitationVideo/Invitation'));
// import Images from './Page/Video/Images/Images'
const Images = lazy(()=> import ('./Page/Video/Images/Images'));

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      // element : <><Video/></>,
      element : <>  <Home/></>,
      
    },
    {
      path : 'video',
      element : <><Suspense fallback = {<div>Loading...</div>}> <Video/></Suspense></>,
      children : [{
        path : '',
        element : <><Previous/></>
      },
    {
      path : 'PYVideo',
      element : <><Invitation/></>
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
