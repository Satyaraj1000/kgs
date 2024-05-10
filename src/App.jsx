import React from 'react'
import { Outlet } from "react-router-dom";
import {Header,Footer} from './components/index'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
