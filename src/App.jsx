import { useState } from 'react'
import Navbar from './component/Navbar'
import Info from './component/Info'
import Cards  from './component/Cards'
import Header from './component/Header'
import Center from './component/Center'
import Footer from './component/Footer'
import Ads from './component/Ads'
import Last from './component/Last'

function App(){
return(
  <>
  <Navbar/>
  <Header/> 
  <Cards/>  
  <Info/>
  <Center/>
  <Footer/>
 <Ads/>
 <Last/>

  </>
)
}

export default App
