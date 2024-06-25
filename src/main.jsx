import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { loadInfo } from './Components/Github/Github.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />} >
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userId' element={<User />}/>
      <Route 
      loader={loadInfo}  // call the api or fatch the data from it before visit the page
       path='github'     // it is faster then useEffect hook. because useeffect hook mount when the page is load but loader calls the api even when we hover to the Link of page
       element={<Github />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes} />
  </React.StrictMode>,
)
