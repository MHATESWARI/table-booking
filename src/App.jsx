import React from 'react'
import Navbar from './Components/Navbar'
import SignUpPage from './Components/SignUpPage'
import  ForgetPassword from './Components/ForgetPassword'
import Card from './Components/Card'
import StickyNavbar from './Components/StickyNavbar'
const App = () => {
  return (
    <>
    {/* <ForgetPassword/> */}
   <Navbar/>
   <StickyNavbar/>
    <Card/>
  {/* <SignUpPage/> */}
  </>
  )

}

export default App
