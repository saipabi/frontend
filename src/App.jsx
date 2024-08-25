// import React from 'react'
import './App.css';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import { FaImage } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import Container from './Container';
import MainContent from './MainContent';



export const App = () => {

  
  return (
    <>    
    <Header/>
    <Content/>
    <div className='full'>
    <Image img ={<FaImage/>} title="Fully Responsive" description="This theme will look great on anydevice,
no matter the size!"/>

<Image img ={<FaLayerGroup/>} title="Bootstrap 5 Ready" description="Featuring the latest build 
of the new Bootstrap 5 framework!"/>

<Image img ={<FaOutdent/>} title="Easy to Use" description="Ready to use with your own content,
 or customize the source files!"/></div>

<Container/>
<MainContent/>

    </>

    
  )
}
export default App;